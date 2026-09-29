import { format } from "date-fns";

export function formatEventDate(iso: string): string {
  return format(new Date(iso), "EEE d MMM yyyy, HH:mm");
}
