// from: https://github.com/MetaMask/jazzicon/blob/master/index.js

type HSL = { h: number; s: number; l: number };

export const colorRotate = (hex: string, degrees: number) => {
  let hsl = hexToHSL(hex);
  let hue = hsl.h;
  hue = (hue + degrees) % 360;
  hue = hue < 0 ? 360 + hue : hue;
  hsl.h = hue;
  return HSLToHex(hsl);
};

export const hexToHSL = (hex: string): HSL => {
  // Convert hex to RGB first
  const rStr = "0x" + hex[1] + hex[2];
  const gStr = "0x" + hex[3] + hex[4];
  const bStr = "0x" + hex[5] + hex[6];
  // Then to HSL
  const r = parseInt(rStr) / 255;
  const g = parseInt(gStr) / 255;
  const b = parseInt(bStr) / 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
};

export const HSLToHex = (hsl: HSL): string => {
  let { h, s, l } = hsl;
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  let rStr = Math.round((r + m) * 255).toString(16);
  let gStr = Math.round((g + m) * 255).toString(16);
  let bStr = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (rStr.length == 1) rStr = "0" + rStr;
  if (gStr.length == 1) gStr = "0" + gStr;
  if (bStr.length == 1) bStr = "0" + bStr;

  return "#" + rStr + gStr + bStr;
};
