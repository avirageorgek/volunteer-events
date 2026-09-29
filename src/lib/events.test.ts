import { describe, expect, it } from "vitest";
import { getUpcomingEvents, spacesLeft } from "@/lib/events";
import type { VolunteerEvent } from "@/lib/types";

const make = (id: string, startsAt: string): VolunteerEvent => ({
  id,
  title: id,
  location: "Colchester",
  startsAt,
  spacesTotal: 10,
  spacesTaken: 0,
});

describe("getUpcomingEvents", () => {
  const now = new Date("2026-10-01T00:00:00Z");

  it("drops events that have already happened", () => {
    const result = getUpcomingEvents(
      [make("past", "2026-09-01T10:00:00Z"), make("future", "2026-10-05T10:00:00Z")],
      now,
    );
    expect(result.map((e) => e.id)).toEqual(["future"]);
  });

  it("sorts soonest first", () => {
    const result = getUpcomingEvents(
      [make("later", "2026-12-01T10:00:00Z"), make("sooner", "2026-10-05T10:00:00Z")],
      now,
    );
    expect(result.map((e) => e.id)).toEqual(["sooner", "later"]);
  });
});

describe("spacesLeft", () => {
  it("never goes below zero", () => {
    expect(spacesLeft({ ...make("full", "2026-10-05T10:00:00Z"), spacesTaken: 12 })).toBe(0);
  });
});
