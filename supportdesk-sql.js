'use strict';
(()=>{
const examples={
 list:'SELECT id, title, priority, status\nFROM tickets\nORDER BY id;',
 open:"SELECT id, title, priority\nFROM tickets\nWHERE status <> 'Resolved'\nORDER BY id;",
 status:'SELECT status, COUNT(*) AS ticket_count\nFROM tickets\nGROUP BY status\nORDER BY ticket_count DESC;',
 priority:'SELECT priority, COUNT(*) AS ticket_count\nFROM tickets\nGROUP BY priority\nORDER BY ticket_count DESC;',
 history:'SELECT t.id, t.title, e.kind, e.body, e.created\nFROM tickets AS t\nJOIN events AS e ON e.ticket_id = t.id\nORDER BY e.id DESC\nLIMIT 20;'
};
const query=document.querySelector('#sql-query'),run=document.querySelector('#sql-run'),status=document.querySelector('#sql-status'),output=document.querySelector('#sql-result');
document.querySelector('#sql-example').onchange=e=>{query.value=examples[e.target.value];};
run.onclick=()=>{
 output.replaceChildren();run.disabled=true;status.textContent='Running SQLite query…';
 let worker,timer;
 const finish=()=>{clearTimeout(timer);if(worker)worker.terminate();run.disabled=false;};
 try{
 worker=new Worker('supportdesk-sql-worker.js');
 timer=setTimeout(()=>{finish();status.textContent='Query stopped after 3 seconds. Try a simpler query.';},3000);
 worker.onerror=()=>{finish();status.textContent='SQLite could not load. Reload the page and try again.';};
 worker.onmessage=({data})=>{
  finish();if(data.error){status.textContent='SQL error: '+data.error;return;}
  const table=document.createElement('table'),thead=document.createElement('thead'),head=document.createElement('tr');
  for(const name of data.columns){const th=document.createElement('th');th.scope='col';th.textContent=name;head.append(th);}thead.append(head);table.append(thead);
  const tbody=document.createElement('tbody');for(const values of data.rows){const tr=document.createElement('tr');for(const value of values){const td=document.createElement('td');td.textContent=value===null?'NULL':String(value);tr.append(td);}tbody.append(tr);}table.append(tbody);output.append(table);
  status.textContent=data.rows.length+' row(s)'+(data.truncated?' · first 200 shown':'')+' · current demo snapshot';
 };
 worker.postMessage({query:query.value,tickets:structuredClone(demoDB.tickets),events:structuredClone(demoDB.events)});
 }catch(e){finish();status.textContent='SQL error: '+e.message;}
};
})();
