import test from "node:test";
import assert from "node:assert/strict";
import {
  emptyBooking,
  londonToday,
  validateBooking,
  validCalendarDate,
} from "../src/lib/validation";
import { services } from "../src/content/site";
const now = new Date("2026-09-17T12:00:00Z");
const valid = {
  ...emptyBooking,
  name: "Sample Person",
  email: "sample@example.com",
  vehicle: "Sample hatchback",
  service: "interior",
};
test("required fields reject whitespace while international names are accepted", () => {
  assert.deepEqual(Object.keys(validateBooking(emptyBooking, now)), [
    "name",
    "vehicle",
    "email",
    "service",
  ]);
  assert.ok(validateBooking({ ...valid, name: "  " }, now).name);
  assert.deepEqual(validateBooking({ ...valid, name: "李 明" }, now), {});
  assert.ok(
    validateBooking({ ...valid, vehicle: "a".repeat(101) }, now).vehicle,
  );
});
test("only active contact channel is validated", () => {
  assert.deepEqual(validateBooking({ ...valid, phone: "invalid" }, now), {});
  assert.deepEqual(
    validateBooking(
      {
        ...valid,
        method: "phone",
        email: "invalid",
        phone: "+44 (7700) 900-123",
      },
      now,
    ),
    {},
  );
  for (const phone of [
    "123456",
    "1234567890123456",
    "123-ABC-1234",
    "++123456789",
  ])
    assert.ok(validateBooking({ ...valid, method: "phone", phone }, now).phone);
  for (const email of [
    "invalid",
    "a b@example.com",
    "a@-example.com",
    "a".repeat(255) + "@example.com",
  ])
    assert.ok(validateBooking({ ...valid, email }, now).email);
});
test("London calendar handles midnight, BST and winter time", () => {
  assert.equal(londonToday(new Date("2026-09-17T23:30:00Z")), "2026-09-18");
  assert.equal(londonToday(new Date("2026-12-17T23:30:00Z")), "2026-12-17");
  assert.equal(londonToday(new Date("2026-03-29T23:30:00Z")), "2026-03-30");
  assert.equal(validCalendarDate("2026-02-30"), false);
  assert.equal(validCalendarDate("2028-02-29"), true);
  assert.ok(validateBooking({ ...valid, date: "2026-09-16" }, now).date);
  assert.deepEqual(validateBooking({ ...valid, date: "2026-09-17" }, now), {});
  assert.ok(validateBooking({ ...valid, date: "2026-02-30" }, now).date);
});
test("service allowlist and free text boundaries", () => {
  for (const service of [...services.map((item) => item.id), "unsure"])
    assert.deepEqual(validateBooking({ ...valid, service }, now), {});
  assert.ok(validateBooking({ ...valid, service: "forged" }, now).service);
  assert.ok(validateBooking({ ...valid, notes: "a".repeat(1001) }, now).notes);
  assert.deepEqual(
    validateBooking({ ...valid, notes: "<script>alert(1)</script>" }, now),
    {},
  );
});
