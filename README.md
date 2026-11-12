# DEVFORGE — seven interactive portfolio projects

A responsive EN/DE portfolio and seven browser demonstrations:

1. **CSV Data Cleaner** — CSV import, cleanup, deduplication, download. Python standard-library CLI reference: `clean.py`.
2. **Invoice Studio** — itemized calculations, VAT and print-to-PDF (JavaScript). Demo only; not legally validated invoicing software.
3. **TaskFlow Board** — responsive HTML/CSS/JavaScript task management with local storage.
4. **Energy Cost Planner** — compare electricity tariffs and efficiency scenarios. C CLI reference: `main.c`.
5. **Privacy Request Tracker** — local request log and CSV export. C# .NET 8 CLI reference: `Program.cs` and `PrivacyTracker.csproj`. Not a GDPR compliance system.

## Run
Open `index.html` or publish the repository root using GitHub Pages. Browser demos are implemented in JavaScript, HTML and CSS; native Python/C/C# programs are separate reference implementations, not running on GitHub Pages.

Python: `python clean.py input.csv output.csv`
C: `cc -std=c11 -Wall -Wextra main.c -o energy && ./energy`
C#: `dotnet run --project PrivacyTracker.csproj` (requires .NET 8 SDK)

## Important
No claim of client commissions, production readiness, legal compliance, or live server integration. Privacy demo data stays in localStorage; do not enter personal data. Check Impressum/Datenschutzerklärung before commercial use.

## 6. Brand DNA Studio — Creative coding

`brand-dna-studio.html` is an offline-first generative brand-mark explorer built with vanilla JavaScript and SVG. Change visual direction, brand name, palette, complexity and random seed. Export SVG or 1000px PNG. Generated marks are concepts, not trademark-cleared logos.

## Game development demo

**NEON DRIFT: Signal Runner** (`neon-drift.html`) is an original playable HTML Canvas arcade game. Keyboard and mobile input, procedural hazards, collectible signals, increasing difficulty, pause/restart, and local best score. No server or external assets required.


## Visual refresh
Midnight Teal palette, seven illustrative sample previews, bilingual example captions. Example metrics are illustrative, not actual measurements or customer data. Demo HTML pages are at repository root to match the published GitHub Pages paths.
