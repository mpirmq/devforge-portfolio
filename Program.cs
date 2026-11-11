using System.Text.Json;

record PrivacyRequest(string Reference, string Type, DateOnly Received, string Status);
var file = "requests.json";
List<PrivacyRequest> requests = File.Exists(file)
    ? JsonSerializer.Deserialize<List<PrivacyRequest>>(File.ReadAllText(file)) ?? new()
    : new();
while (true)
{
    Console.WriteLine("\n1 Add request | 2 List | 3 Export CSV | 0 Exit");
    switch (Console.ReadLine())
    {
        case "1":
            Console.Write("Reference: "); var reference = Console.ReadLine()?.Trim() ?? "";
            Console.Write("Type (Access/Erasure/Rectification/Portability/Objection): ");
            var type = Console.ReadLine()?.Trim() ?? "";
            if (reference.Length == 0 || type.Length == 0) { Console.WriteLine("Both fields required."); break; }
            requests.Add(new(reference, type, DateOnly.FromDateTime(DateTime.Today), "Open"));
            File.WriteAllText(file, JsonSerializer.Serialize(requests, new JsonSerializerOptions { WriteIndented = true }));
            Console.WriteLine("Saved locally."); break;
        case "2":
            foreach (var item in requests) Console.WriteLine($"{item.Reference} | {item.Type} | {item.Received} | {item.Status}");
            break;
        case "3":
            static string Csv(string s) => "\"" + s.Replace("\"", "\"\"") + "\"";
            var lines = new[] { "Reference,Type,Received,Status" }.Concat(requests.Select(x => string.Join(",", new[] { x.Reference, x.Type, x.Received.ToString("yyyy-MM-dd"), x.Status }.Select(Csv))));
            File.WriteAllLines("requests.csv", lines); Console.WriteLine("Exported requests.csv"); break;
        case "0": return;
        default: Console.WriteLine("Unknown command"); break;
    }
}
