/**
 * Flash-prevention theme bootstrap (ADR-003).
 * Runs inline in <head> before first paint: resolves the stored
 * preference (or system preference) and sets the .dark class on
 * <html>. This is the single intentionally-blocking inline script
 * in the project; it must stay tiny and dependency-free.
 */
const script = `(function(){try{var s=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme: dark)").matches;if(s==="dark"||(!s&&m)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
