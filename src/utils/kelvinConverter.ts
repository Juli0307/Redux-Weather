export const kelvinConverter = (kelvin: number) => {
  if (!kelvin) return 0;
  return (kelvin - 273).toFixed(0);
};
