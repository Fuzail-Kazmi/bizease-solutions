"use client";

import { useState, useRef } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = Partial<FormState>;

const serviceOptions = [
  "IT Consulting",
  "Digital Marketing",
  "Business Strategy",
  "Software Development",
  "HR & Operations",
  "Financial Advisory",
  "Other",
];

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 20)
    errors.message = "Please write at least 20 characters.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  };

  const inputBase =
    "w-full px-4! py-3.5! rounded-xl bg-[var(--color-green-mid)]/10 border text-[var(--color-green-darkest)] font-body text-sm placeholder:text-[var(--color-green-darkest)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 transition-all duration-200";
  const inputNormal = `${inputBase} border-[var(--color-green-dark)]/20 focus:border-[var(--color-gold)]/40`;
  const inputError = `${inputBase} border-red-400/60 focus:border-red-400/80 bg-red-50/20`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16! text-center gap-6">
        <div className="w-20 h-20 hex-clip bg-[var(--color-green-dark)] flex items-center justify-center animate-bounce-gentle">
          <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display font-700 text-2xl text-[var(--color-green-darkest)]">
          Message Sent!
        </h3>
        <p className="font-body text-[var(--color-green-darkest)]/60 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2! px-6! py-3! font-display font-600 text-sm bg-[var(--color-gold)] text-[var(--color-green-darkest)] rounded-xl hover:bg-[var(--color-gold-light)] transition-all duration-200"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Contact form"
    >
      {/* Row 1 */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="font-display font-500 text-sm text-[var(--color-green-darkest)]/80">
            Full Name <span className="text-[var(--color-gold)]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={errors.name ? inputError : inputNormal}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-400 text-xs font-body" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="font-display font-500 text-sm text-[var(--color-green-darkest)]/80">
            Email Address <span className="text-[var(--color-gold)]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={errors.email ? inputError : inputNormal}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-400 text-xs font-body" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-company" className="font-display font-500 text-sm text-[var(--color-green-darkest)]/80">
            Company <span className="text-[var(--color-green-darkest)]/30 text-xs font-normal">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className={inputNormal}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-service" className="font-display font-500 text-sm text-[var(--color-green-darkest)]/80">
            Service Interested In
          </label>
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputNormal} cursor-pointer appearance-none`}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="font-display font-500 text-sm text-[var(--color-green-darkest)]/80">
          Message <span className="text-[var(--color-gold)]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or requirements…"
          className={`${errors.message ? inputError : inputNormal} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-400 text-xs font-body" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        id="contact-submit"
        type="submit"
        disabled={status === "loading"}
        className="w-full py-2! px-4! font-display font-700 text-base bg-[var(--color-green-dark)] text-[var(--color-beige)] rounded-xl hover:bg-[var(--color-green-mid)] hover:shadow-xl hover:shadow-[var(--color-green-dark)]/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
        aria-live="polite"
      >
        {status === "loading" ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
