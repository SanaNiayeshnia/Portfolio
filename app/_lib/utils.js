import moment from "moment-jalaali";

export function formatDate(date, format = "jYYYY/jMM/jDD") {
  return moment(date).format(format);
}
