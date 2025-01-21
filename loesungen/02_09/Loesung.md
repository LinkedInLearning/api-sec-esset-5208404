# Http Security Header

### Http Strict Transport Security (HSTS)
Schützt vor:
- Man-in-the-Middle-Angriffen (MITM): Erzwingt die Verwendung von HTTPS und verhindert, dass Verbindungen auf unsicheres HTTP zurückfallen.
- SSL-Stripping-Angriffen: Blockiert Angreifer, die versuchen, Benutzer von HTTPS zu HTTP umzuleiten.

### Content-Disposition
Schützt vor:
- Drive-by-Download-Angriffen: Erzwingt das richtige Verhalten bei Dateidownloads, z. B. durch Setzen des Headers auf attachment; filename=..., damit Dateien nicht direkt im Browser ausgeführt werden.
  
### Referrer-Policy
Schützt vor:
- Informationslecks: Begrenzung der Informationen, die im Referer-Header an externe Seiten gesendet werden, z. B. URLs mit sensiblen Daten wie Session-IDs oder Tokens.

### Content-Security-Policy
Schützt vor:
- Cross-Site Scripting (XSS): Einschränkung, welche Skripte, Styles oder Ressourcen geladen werden dürfen, um die Ausführung von schädlichem Code zu verhindern.
- Code-Injection-Angriffen: Blockiert das Laden von unerwünschten Inline-Skripten, externen Skripten oder Stylesheets.
- Clickjacking: Indem es verhindert, dass Inhalte unbeabsichtigt in einem iFrame geladen werden
