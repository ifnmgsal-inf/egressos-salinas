export function formatDate(
  date,
  lang = "pt-BR",
  options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }
) {
  try {
    date = String(date).trim();
    if (date.includes("/")) {
      date = date.split("/").reverse().join("-");
    }
    const x = new Intl.DateTimeFormat(lang, options).format(date);
    return x;
  } catch (err) {
    try {
      const dateTime = new Date(date).getTime();
      return new Intl.DateTimeFormat(lang, options).format(dateTime);
    } catch (err2) {
      return null;
    }
  }
}
