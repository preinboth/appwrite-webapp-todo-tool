## Das `utils`-Verzeichnis

**Bedeutung:**
Das `utils`-Verzeichnis (kurz für „utilities“) ist für kleine, praktische Hilfsfunktionen gedacht, die in vielen Teilen des Projekts gebraucht werden, aber zu speziell oder zu einfach sind, um als eigene Bibliothek zu gelten.

**Typische Inhalte:**

- **Hilfsfunktionen:** Z. B. Datumsformatierung, String-Operationen, Array-Manipulationen, Zufallswert-Generatoren.
- **Projektweite Helfer:** Funktionen zur lokalen Speicherung, Event-Handling, einfache Validierungen.
- **Konstanten und Konfigurationen:** Zentrale Definitionen, die von mehreren Modulen genutzt werden.

**Zweck und Vorteile:**

- **Schnelle Wiederverwendung:** Kleine Helfer, die überall im Projekt benötigt werden, ohne Code-Duplikation.
- **Konzentration auf das Wesentliche:** Reduziert die Komplexität in Komponenten und Features, da Hilfslogik ausgelagert wird.
- **Einfache Wartung:** Änderungen an einer Hilfsfunktion sind zentral und wirken sich überall aus, wo sie genutzt wird
