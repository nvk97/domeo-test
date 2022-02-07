export default (str) => {
  if (typeof str !== "string") return "Не строка";
  if (!str) return str;
  const words = str.split(" ");
  const twoFirstWords = words.slice(0, 2);
  return twoFirstWords.join(" ");
};
