"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { services } from "@/content/site";
import { Arrow, Check } from "./icons";
export function BookingForm() {
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const vehicleRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const select = (event: Event) => {
      setService((event as CustomEvent<string>).detail);
      setSaved(false);
    };
    window.addEventListener("select-service", select);
    return () => window.removeEventListener("select-service", select);
  }, []);
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!vehicle.trim()) {
      setError("Tell us the make and model of your car.");
      vehicleRef.current?.focus();
      return;
    }
    if (!service) {
      setError("Choose a treatment, or ask for guidance.");
      document.getElementById("service")?.focus();
      return;
    }
    const selected = services.find((item) => item.id === service);
    const text = [
      "MARLOW AUTO DETAIL",
      "YOUR DETAIL BRIEF",
      "",
      `Vehicle: ${vehicle.trim()}`,
      `Treatment: ${selected?.name ?? "Not sure — advise me"}`,
      selected ? `Starting price: £${selected.price}` : "",
      selected ? `Estimated duration: ${selected.duration}` : "",
      "",
      selected?.includes.join("\n") ?? "",
      "",
      `Notes: ${notes.trim() || "None"}`,
      "",
      "Save this brief for your conversation with the studio. Pricing, scope and appointment time require confirmation.",
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "marlow-detail-brief.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setError("");
    setSaved(true);
  }
  return (
    <form className="detail-form" onSubmit={submit} noValidate>
      <fieldset>
        <legend>What are you driving?</legend>
        <div className="form-field">
          <label htmlFor="vehicle">Vehicle make & model</label>
          <input
            id="vehicle"
            ref={vehicleRef}
            value={vehicle}
            onChange={(e) => {
              setVehicle(e.target.value);
              setSaved(false);
              setError("");
            }}
            placeholder="e.g. BMW M4"
            maxLength={100}
            required
            aria-describedby={error ? "brief-error" : undefined}
            aria-invalid={!!error && !vehicle.trim()}
          />
        </div>
        <div className="form-field">
          <label htmlFor="service">Your treatment</label>
          <select
            id="service"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              setSaved(false);
              setError("");
            }}
            required
          >
            <option value="">Choose your treatment</option>
            {services.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} — from £{item.price}
              </option>
            ))}
            <option value="unsure">Not sure — advise me</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="notes">
            Anything we should know? <span>(optional)</span>
          </label>
          <textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
              setSaved(false);
            }}
            placeholder="Your car’s condition, your priorities, the little things…"
            maxLength={1000}
          />
        </div>
      </fieldset>
      <p className="field-error" id="brief-error" role="alert">
        {error}
      </p>
      <div className="form-submit">
        <p>
          Your brief saves as a text file. Appointment times and treatment scope
          are agreed with the studio.
        </p>
        <button className="button" type="submit">
          Save my detail brief
          <Arrow />
        </button>
      </div>
      <p className="brief-status" role="status">
        {saved && (
          <>
            <Check />
            Your detail brief is ready. Check your downloads.
          </>
        )}
      </p>
      <noscript>
        <p>Enable JavaScript to save your detail brief.</p>
      </noscript>
    </form>
  );
}
