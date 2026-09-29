import { EventCard } from "@/components/EventCard";
import { getAllEvents, getUpcomingEvents } from "@/lib/events";

export default function HomePage() {
  const events = getUpcomingEvents(getAllEvents());
  const charityName = process.env.NEXT_PUBLIC_CHARITY_NAME ?? "Our charity";

  return (
    <main>
      <h1>{charityName} volunteer events</h1>
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </main>
  );
}
