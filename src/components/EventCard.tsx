import type { VolunteerEvent } from "@/lib/types";
import { spacesLeft } from "@/lib/events";
import { formatEventDate } from "@/lib/format";

export function EventCard({ event }: { event: VolunteerEvent }) {
  const left = spacesLeft(event);
  return (
    <div className="card">
      <h3>{event.title}</h3>
      <p>{event.location}</p>
      <p>{formatEventDate(event.startsAt)}</p>
      <p>{left === 0 ? "Full" : `${left} spaces left`}</p>
    </div>
  );
}
