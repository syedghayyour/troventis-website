/**
 * Signal token contrast verification (Signal §8.1, DoD).
 * Computes WCAG 2.x contrast ratios for every meaningful token pair
 * and fails (exit 1) if any pair drops below its required threshold.
 * Run: pnpm verify:contrast — also wired into CI.
 */

const light = {
  surface: "#ffffff",
  surfaceRaised: "#f6f8fa",
  ink: "#111a2b",
  inkMuted: "#4a5568",
  navy: "#12263f",
  signal: "#047b57",
  signalHover: "#03664a",
  signalTint: "#e8f5f0",
  danger: "#b42318",
  warning: "#b54708",
  onNavy: "#ffffff",
};

const dark = {
  surface: "#0b1420",
  surfaceRaised: "#111e30",
  ink: "#e6ebf2",
  inkMuted: "#94a3b8",
  navy: "#1b3557",
  signal: "#2dd48f",
  signalTint: "#0e2a22",
  danger: "#f97066",
  warning: "#fdb022",
  onNavy: "#e6ebf2",
};

/** @type {[string, string, string, number][]} [mode, fg, bg, min] */
const pairs = [
  ["light", light.ink, light.surface, 4.5],
  ["light", light.ink, light.surfaceRaised, 4.5],
  ["light", light.inkMuted, light.surface, 4.5],
  ["light", light.inkMuted, light.surfaceRaised, 4.5],
  ["light", light.signal, light.surface, 4.5],
  ["light", light.signal, light.surfaceRaised, 4.5],
  ["light", light.signalHover, light.surface, 4.5],
  ["light", light.signal, light.signalTint, 4.5],
  ["light", light.danger, light.surface, 4.5],
  ["light", light.warning, light.surface, 4.5],
  ["light", light.onNavy, light.navy, 4.5],
  ["dark", dark.ink, dark.surface, 4.5],
  ["dark", dark.ink, dark.surfaceRaised, 4.5],
  ["dark", dark.inkMuted, dark.surface, 4.5],
  ["dark", dark.inkMuted, dark.surfaceRaised, 4.5],
  ["dark", dark.signal, dark.surface, 4.5],
  ["dark", dark.signal, dark.surfaceRaised, 4.5],
  ["dark", dark.signal, dark.signalTint, 4.5],
  ["dark", dark.danger, dark.surface, 4.5],
  ["dark", dark.warning, dark.surface, 4.5],
  ["dark", dark.onNavy, dark.navy, 4.5],
];

function srgbChannel(v) {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function luminance(hex) {
  const n = hex.replace("#", "");
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return 0.2126 * srgbChannel(r) + 0.7152 * srgbChannel(g) + 0.0722 * srgbChannel(b);
}

function ratio(fg, bg) {
  const l1 = luminance(fg);
  const l2 = luminance(bg);
  const [hi, lo] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

let failures = 0;
for (const [mode, fg, bg, min] of pairs) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  const line = `${ok ? "PASS" : "FAIL"}  [${mode}] ${fg} on ${bg}  ${r.toFixed(2)}:1 (min ${min}:1)`;
  console.log(line);
  if (!ok) failures += 1;
}

if (failures > 0) {
  console.error(`\n${failures} contrast pair(s) below threshold.`);
  process.exit(1);
}
console.log(`\nAll ${pairs.length} token pairs meet WCAG AA.`);
