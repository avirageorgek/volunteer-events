import { NextResponse } from "next/server";
import { getAllEvents, getUpcomingEvents } from "@/lib/events";

export function GET() {
  return NextResponse.json({ events: getUpcomingEvents(getAllEvents()) });
}
