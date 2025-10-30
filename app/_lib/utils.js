import moment from "moment-jalaali";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date, format = "jYYYY/jMM/jDD") {
  return moment(date)
    .format(format)
    .replace("aa", "a")
    .replace("Amordad", "Mordad");
}

export function getGmailRedirectUrl() {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: process.env.NEXT_PUBLIC_MY_GMAIL,
    su: "Let's collaborate 🤝",
  });
  const url = `https://mail.google.com/mail/?${params.toString()}`;
  return url;
}
