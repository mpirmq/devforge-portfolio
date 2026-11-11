"""Remove duplicate CSV records and trim whitespace, using only the standard library."""
import csv
import argparse
from pathlib import Path

def clean(source: Path, target: Path) -> int:
    with source.open(newline="", encoding="utf-8-sig") as stream:
        reader = csv.reader(stream)
        rows = [[cell.strip() for cell in row] for row in reader]
    if not rows:
        raise ValueError("Input CSV is empty")
    seen = set()
    result = [rows[0]]
    for row in rows[1:]:
        key = tuple(row)
        if key not in seen:
            seen.add(key)
            result.append(row)
    with target.open("w", newline="", encoding="utf-8") as stream:
        csv.writer(stream).writerows(result)
    return len(rows) - len(result)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Trim CSV cells and remove duplicate data rows")
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    print(f"Removed {clean(args.input, args.output)} duplicate rows")
