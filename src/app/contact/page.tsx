"use client";

import { useState } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import Button from "@/components/ui/Button";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!EMAIL_REGEX.test(form.email)) next.email = "Please enter a valid email address";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    else if (form.message.trim().length < 20)
      next.message = "Message must be at least 20 characters";
    return next;
  };

  const handleSubmit = () => {
    if (form.honeypot) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitted(true);
    setForm({ fullName: "", email: "", subject: "", message: "", honeypot: "" });
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-xl px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-4 font-display text-text-primary">Contact</h1>
        <p className="mb-8 text-text-secondary">
          Fill out the form below for questions, suggestions, or feedback.
        </p>

        {submitted && (
          <div className="contact-success mb-6 rounded-lg px-4 py-3 text-sm" role="status">
            Your message was received. We will reply within 1–2 business days ✓
          </div>
        )}

        <div className="info-card space-y-5 p-6 md:p-8">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.honeypot}
              onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-text-primary">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="calculator-input !bg-card-warm !text-text-primary !border-border focus:!border-secondary"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-error" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-text-primary">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="calculator-input !bg-card-warm !text-text-primary !border-border focus:!border-secondary"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-text-primary">
              Subject *
            </label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="calculator-input !bg-card-warm !text-text-primary !border-border focus:!border-secondary"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-error" role="alert">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-text-primary">
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="calculator-input min-h-[120px] resize-y !bg-card-warm !text-text-primary !border-border focus:!border-secondary"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-error" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <Button variant="gold" fullWidth onClick={handleSubmit}>
            Send
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
}
