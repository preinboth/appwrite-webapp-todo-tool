## Das `libs`-Verzeichnis

**Bedeutung:**
Das `libs`-Verzeichnis (kurz für „libraries“) enthält in der Regel größere, gut strukturierte und wiederverwendbare Code-Bausteine. Diese können sowohl selbst entwickelte Bibliotheken als auch lokal eingebundene, externe Bibliotheken sein.

**Typische Inhalte:**

- **Eigene Mini-Bibliotheken:** Z. B. eine eigene Datenverarbeitungs-Library, ein Validierungsmodul oder ein komplexer Algorithmus.
- **Drittanbieter-Bibliotheken:** Lokale Kopien von Bibliotheken, die nicht über den Paketmanager installiert werden, oder Wrapper um externe Bibliotheken.
- **Komplexe, modulare Funktionen:** Funktionen oder Klassen, die für sich genommen unabhängig und in verschiedenen Projekten nutzbar wären.

**Zweck und Vorteile:**

- **Wiederverwendbarkeit:** Code aus `libs` kann oft projektübergreifend genutzt oder sogar als eigenständiges npm-Paket veröffentlicht werden.
- **Strukturierung:** Trennung von umfangreichen Funktionalitäten, die nicht direkt zu den Kernkomponenten oder -features gehören.
- **Wartbarkeit:** Verbesserte Übersichtlichkeit, da größere Logik-Bausteine klar abgegrenzt sind
