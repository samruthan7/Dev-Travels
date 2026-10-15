"use client";

import { useState, type FormEvent } from "react";
import { enquirySchema } from "@/lib/validation/enquiry";
import { Button } from "@/components/ui/Button";

type Option = { slug: string; title: string };
type Values = {
  name: string;
  phone: string;
  email: string;
  service: string;
  travelDate: string;
  travellers: string;
  message: string;
  website: string;
};
type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/40";

export function EnquiryForm({
  services,
  defaultService = "",
}: {
  services: Option[];
  defaultService?: string;
}) {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    travelDate: "",
    travellers: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Values, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-white/10 bg-white/4 p-8">
        <h2 className="font-display text-2xl font-semibold">Thank you</h2>
        <p className="mt-3 text-mist">
          Your enquiry has been received. We will contact you shortly.
        </p>
      </div>
    );
  }

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-sm text-red-400">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Values) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" name="name" autoComplete="name" className={field}
          value={values.name} onChange={(e) => set("name", e.target.value)} {...aria("name")} />
        {err("name")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field}
            value={values.phone} onChange={(e) => set("phone", e.target.value)} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email (optional)</label>
          <input id="email" name="email" type="email" autoComplete="email" className={field}
            value={values.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
          {err("email")}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium">Service</label>
        <select id="service" name="service" className={field}
          value={values.service} onChange={(e) => set("service", e.target.value)} {...aria("service")}>
          <option value="" className="text-slate-900">Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug} className="text-slate-900">{s.title}</option>
          ))}
        </select>
        {err("service")}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="travelDate" className="text-sm font-medium">Travel date (optional)</label>
          <input id="travelDate" name="travelDate" type="date" className={field}
            value={values.travelDate} onChange={(e) => set("travelDate", e.target.value)} />
        </div>
        <div>
          <label htmlFor="travellers" className="text-sm font-medium">Travellers (optional)</label>
          <input id="travellers" name="travellers" inputMode="numeric" className={field}
            value={values.travellers} onChange={(e) => set("travellers", e.target.value)} {...aria("travellers")} />
          {err("travellers")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">Message (optional)</label>
        <textarea id="message" name="message" rows={4} className={field}
          value={values.message} onChange={(e) => set("message", e.target.value)} {...aria("message")} />
        {err("message")}
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off"
          value={values.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">
          We could not send your enquiry right now. Please call or WhatsApp us instead.
        </p>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </Button>
    </form>
  );
}