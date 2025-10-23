import moment from "moment-jalaali";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date, format = "jYYYY/jMM/jDD") {
  return moment(date).format(format);
}
