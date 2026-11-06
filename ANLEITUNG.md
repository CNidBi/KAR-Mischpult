# KAR-Mischpult als App: so kommt es auf die iPads

Der Ordner `kar-mischpult-app` ist eine fertige Web-App (Startseite + Einstiegsversion + Vollversion).
Sie braucht keine Anmeldung, läuft nach dem ersten Öffnen auch ohne WLAN und speichert Eingaben nur auf dem Gerät.

## 1. Einmal ins Netz stellen (Du, ca. 5 Minuten, kostenlos)
1. Öffne am Rechner https://app.netlify.com/drop und melde Dich kostenlos an.
2. Ziehe den ganzen Ordner `kar-mischpult-app` (entpackt) auf die Fläche.
3. Du bekommst eine Adresse wie `https://xyz.netlify.app`. Unter „Site configuration → Change site name“ kannst Du sie z. B. in `kar-mischpult-nid.netlify.app` ändern.

Alternative: GitHub Pages (Repository anlegen, Ordnerinhalt hochladen, unter Settings → Pages aktivieren).

## 2. An die SuS verteilen
- Adresse als Link oder QR-Code über IServ teilen (das bestehende QR-Blatt kann einfach die neue Adresse bekommen).
- Auf dem iPad in Safari öffnen → Teilen → „Zum Home-Bildschirm“ → Hinzufügen. Die Startseite zeigt diese Schritte selbst an.
- Tipp: Wenn die Schul-iPads zentral verwaltet werden, kann die IT das Symbol als „Web-Clip“ auf alle Geräte schieben.

## 3. Später etwas ändern
Neue Dateien einfach wieder auf dieselbe Netlify-Site ziehen (Deploys → Drag and drop).
In `sw.js` die Zeile `const VERSION = 'kar-app-v1'` hochzählen, damit die iPads das Update sicher übernehmen.
