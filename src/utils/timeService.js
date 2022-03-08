export const convertISOtoHuman = (time, lang) => {
  const date = new Date(time);
  return date.toLocaleDateString(lang);
};
