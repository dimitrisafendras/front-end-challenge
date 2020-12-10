const fade = (hex, opacity) => {
  const newHex = hex.replace('#', '');
  const r = parseInt(newHex.substring(0, 2), 16);
  const g = parseInt(newHex.substring(2, 4), 16);
  const b = parseInt(newHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity || 1})`;
};

export const color = {
  fade,
};
