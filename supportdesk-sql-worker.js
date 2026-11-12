'use strict';
importScripts('sql-wasm.js');
const ready=initSqlJs({locateFile:file=>file});
self.onmessage=async({data})=>{
 let db,stmt;
 try{
  const SQL=await ready; db=new SQL.Database();
  db.run('CREATE TABLE tickets(id INTEGER PRIMARY KEY,title TEXT,description TEXT,category TEXT,priority TEXT,status TEXT,created TEXT,updated TEXT,resolved TEXT); CREATE TABLE events(id INTEGER PRIMARY KEY,ticket_id INTEGER,kind TEXT,body TEXT,created TEXT);');
  const ticketInsert=db.prepare('INSERT INTO tickets VALUES(?,?,?,?,?,?,?,?,?)');
  for(const t of data.tickets)ticketInsert.run(['id','title','description','category','priority','status','created','updated','resolved'].map(k=>t[k]??null));
  ticketInsert.free();
  const eventInsert=db.prepare('INSERT INTO events VALUES(?,?,?,?,?)');
  data.events.forEach((e,i)=>eventInsert.run([i+1,e.ticket_id,e.kind,e.body,e.created]));eventInsert.free();
  db.run('PRAGMA query_only=ON');
  const query=String(data.query).trim();
  if(!/^(SELECT|WITH)\b/i.test(query))throw Error('Use a SELECT or WITH query. This snapshot is read-only.');
  stmt=db.prepare(query);
  const columns=stmt.getColumnNames(),rows=[];
  while(rows.length<200&&stmt.step())rows.push(stmt.get());
  const truncated=rows.length===200&&stmt.step();
  self.postMessage({columns,rows,truncated});
 }catch(e){self.postMessage({error:e.message});}
 finally{if(stmt)stmt.free();if(db)db.close();}
};
