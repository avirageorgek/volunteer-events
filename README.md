# Volunteer Events – Take-home exercise

Thanks for your interest in joining our Technology team.

This repository contains a small Next.js application used by a (fictional) charity, the Brightwell Trust, to list upcoming volunteering events. Volunteers use it to find a slot near them and register their interest.

The project was handed over to us recently and **it does not run cleanly as it stands**. Part of the exercise is getting it into a working state.

**Suggested time: 3–4 hours.** Please don't spend much longer than that. We would rather see a smaller amount of work done well, with good notes, than everything done in a rush.

---

## Stack

- Next.js (App Router) with TypeScript
- React
- Vitest for tests

## Getting started

```bash
nvm use
npm install
cp .env.example .env.local
npm run dev
```

Other scripts:

```bash
npm test        # run the tests
npm run build   # production build
```

---

## The task

### Part 1 – Get it working

Get the project to a point where all of these work without errors or warnings:

- `npm run dev`, with the page showing the correct charity name and upcoming events
- `npm test`
- `npm run build`

Please fix problems at the source rather than working around them (for example, don't delete a failing test or turn off type checking). Record each issue you found and how you fixed it in `NOTES.md`.

### Part 2 – Help volunteers find an event

Volunteers have told us the list is hard to use. Please add:

1. A **location filter** (e.g. "All locations", "Colchester", "London"…), built from the locations in the data rather than hard-coded.
2. A **search box** that filters events by title.
3. Clear handling when **no events match** the filters.
4. Events with no spaces left should be **clearly marked as full**.

### Part 3 – Register interest

Add the ability for a volunteer to register interest in an event.

- Add an API endpoint: `POST /api/events/{id}/register`
- The request body contains a `name` and an `email`.
- The endpoint should:
  - validate the input,
  - return an appropriate response if the event doesn't exist or is already full,
  - increase the number of spaces taken on success.
- Add a simple form on the page so a volunteer can use this endpoint, with sensible feedback for success and errors.

Storing registrations in memory is fine. There is no need for a database.

---

## What we're looking for

We're interested in how you approach the problem as much as the end result:

- Code that is clean, readable and consistent with the existing project
- Sensible tests for the logic you add
- Good handling of loading, error and edge cases
- Accessibility and a reasonable user experience on mobile and desktop

You're welcome to go beyond the brief with anything you think adds value, such as extra tests, styling or tooling. Tell us what you chose and why.

## Submitting

1. Push your work to a Git repository and send us the link.
2. Include a `NOTES.md` covering:
   - the issues you fixed in Part 1,
   - any decisions or trade-offs you made,
   - what you would do next with more time,
   - roughly how long you spent.

We'll talk through your submission together in the next interview.
