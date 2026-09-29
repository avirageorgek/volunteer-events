export interface VolunteerEvent {
  id: string;
  title: string;
  location: string;
  /** ISO 8601 date-time in UTC */
  startsAt: string;
  spacesTotal: number;
  spacesTaken: number;
}
