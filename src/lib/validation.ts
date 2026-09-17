import { formCopy, services } from "@/content/site";
export interface BookingValues {
  name: string;
  method: "email" | "phone";
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  notes: string;
}
export type FormErrors = Partial<Record<keyof BookingValues, string>>;
export const emptyBooking: BookingValues = {
  name: "",
  method: "email",
  email: "",
  phone: "",
  vehicle: "",
  service: "",
  date: "",
  notes: "",
};
export function londonToday(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  return ["year", "month", "day"]
    .map((type) => parts.find((part) => part.type === type)!.value)
    .join("-");
}
export function validCalendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number(value.slice(0, 4)) < 1)
    return false;
  const date = new Date(`${value}T12:00:00Z`);
  return (
    !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value
  );
}
export function validateBooking(
  values: BookingValues,
  now = new Date(),
): FormErrors {
  const errors: FormErrors = {};
  for (const key of ["name", "vehicle"] as const) {
    if (!values[key].trim()) errors[key] = formCopy.missing;
    else if (values[key].trim().length > 100)
      errors[key] = formCopy.lengthError;
  }
  if (values.method === "email") {
    const email = values.email.trim();
    if (!email) errors.email = formCopy.missing;
    else if (
      email.length > 254 ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/.test(
        email,
      )
    )
      errors.email = formCopy.emailError;
  } else if (values.method === "phone") {
    const phone = values.phone.trim();
    const digits = phone.replace(/\D/g, "");
    if (!phone) errors.phone = formCopy.missing;
    else if (
      !/^\+?[\d\s()-]+$/.test(phone) ||
      digits.length < 7 ||
      digits.length > 15
    )
      errors.phone = formCopy.phoneError;
  } else errors.method = formCopy.missing;
  if (
    !services.some((service) => service.id === values.service) &&
    values.service !== "unsure"
  )
    errors.service = formCopy.serviceError;
  if (values.date && !validCalendarDate(values.date))
    errors.date = formCopy.dateError;
  else if (values.date && values.date < londonToday(now))
    errors.date = formCopy.pastDate;
  if (values.notes.length > 1000) errors.notes = formCopy.notesError;
  return errors;
}
