# DEVFORGE - Mahomed Pirmahomedov

Personal software development portfolio in English and German. DEVFORGE is a personal brand, not a registered company. These projects are personal demonstrations, not client references.

## Eight browser demos

1. **SupportDesk** (`supportdesk-demo.html`): create and update tickets, record notes and status history, filter the queue, export CSV and run real SQLite queries against a read-only snapshot. Examples include SELECT, GROUP BY and JOIN. SQL runs in a Web Worker, with a 3-second timeout and a 200-row output cap. Ticket data stays in this browser's local storage; SQL snapshots are temporary. Browser network diagnostics are explicitly simulated.
2. **CSV Data Cleaner** (`data-cleaner.html`): CSV import, whitespace cleanup, deduplication and export. Python CLI reference: `clean.py`.
3. **Invoice Studio** (`invoice-studio.html`): item calculations, VAT and browser print-to-PDF. Personal demo, not legally validated invoicing software.
4. **TaskFlow Board** (`task-board.html`): task statuses, priorities and local persistence.
5. **Energy Cost Planner** (`energy-planner.html`): tariff and energy-cost scenarios. C CLI reference: `main.c`.
6. **Privacy Request Tracker** (`privacy-requests.html`): request log and CSV export. C# reference: `Program.cs` and `PrivacyTracker.csproj`. Not a GDPR compliance system.
7. **Brand DNA Studio** (`brand-dna-studio.html`): generative SVG designs and SVG/PNG export. Concepts are not trademark-cleared logos.
8. **NEON DRIFT** (`neon-drift.html`): Canvas arcade game with keyboard/touch input and local best scores.

## Local SupportDesk application

`DEVFORGE_SupportDesk.zip` contains the Python standard-library application, SQLite database implementation, UI, README and tests. Requires Python 3.10+. Extract the ZIP, run `python app.py` or `start.bat` and open `http://127.0.0.1:8765`.

The local application provides restricted DNS, TCP-443 and HTTPS diagnostics. The public browser demo instead simulates these checks. Browser SQL Analytics is a separate web feature and is not bundled in the local ZIP.

## Run the portfolio

Publish the repository root with GitHub Pages or serve it with a local HTTP server. SQLite WebAssembly and Web Workers require HTTP(S), rather than opening the demo as a `file://` URL.

Browser SQL uses vendored sql.js 1.13.0 (`sql-wasm.js`, `sql-wasm.wasm`); see `sqljs-LICENSE.txt` for licensing. No runtime CDN is required for SQL.

Native reference programs run separately from GitHub Pages:

- Python: `python clean.py input.csv output.csv`
- C: `cc -std=c11 -Wall -Wextra main.c -o energy` then `./energy`
- C#: `dotnet run --project PrivacyTracker.csproj` (.NET 8 SDK)

## Scope and data

Use fictional demo data only. No employer data or private source code is included. These projects make no claim of production multi-user readiness, legal compliance or commercial deployment. Illustrative previews are examples, not measured client outcomes.
