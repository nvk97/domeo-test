export default (str) => {
  if (typeof str !== "string") return "Не строка";
  if (!str) return str;
  const res = str.substring(0, 50) + "...";
  return res;
};
