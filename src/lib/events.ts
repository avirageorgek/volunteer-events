import rawEvents from "@/data/events.json";
import type { VolunteerEvent } from "@/lib/types";

const events: VolunteerEvent[] = rawEvents;

export function getAllEvents(): VolunteerEvent[] {
  return events;
}

/** Events that start at or after `now`, soonest first. */
export function getUpcomingEvents(
  list: VolunteerEvent[],
  now: Date = new Date(),
): VolunteerEvent[] {
  return list
    .filter((event) => new Date(event.startsAt).getTime() <= now.getTime())
    .sort(
      (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime(),
    );
}

export function spacesLeft(event: VolunteerEvent): number {
  return Math.max(event.spacesTotal - event.spacesTaken, 0);
}
