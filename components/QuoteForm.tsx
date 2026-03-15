"use client";

import { useState } from "react";

const countries = [
  "Poland",
  "Germany",
  "Czech Republic",
  "Romania",
  "Latvia",
  "Lithuania",
  "Estonia",
  "United Kingdom",
  "Other",
];

const projectTypes = [
  "New residential development",
  "Commercial / hotel",
  "Hospital / public facility",
  "District heating network",
  "Industrial",
  "Geothermal installation",
];

const pipeTypes = [
  "Pre-insulated PEX pipelines",
  "Geothermal pipes",
  "Brass fittings",
  "Accessories",
  "Mixed / full system",
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          country: formData.get("country"),
          project_type: formData.get("project_type"),
          pipe_type: formData.get("pipe_type"),
          diameter_range: formData.get("diameter_range") || undefined,
          quantity_m: formData.get("quantity_m") || undefined,
          deadline: formData.get("deadline") || undefined,
          project_description: formData.get("project_description") || undefined,
          contact_preference: formData.get("contact_preference") || "email",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mx-auto mb-4 text-2xl text-emerald-600">
          ✓
        </div>
        <h3 className="font-display text-lg font-medium text-slate-900 dark:text-white mb-2">
          Quote request received!
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">
          Hydra will review your project details and get back to you within 24–48 hours with pricing and next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="bg-hydra-blue hover:bg-hydra-blue-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            placeholder="e.g. Jan Kowalski"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Company name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            placeholder="e.g. ABC Construction sp. z o.o."
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Country *
          </label>
          <select
            id="country"
            name="country"
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="project_type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Project type *
          </label>
          <select
            id="project_type"
            name="project_type"
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
          >
            {projectTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pipe_type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Product needed *
          </label>
          <select
            id="pipe_type"
            name="pipe_type"
            required
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
          >
            {pipeTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="diameter_range" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Diameter range
          </label>
          <input
            id="diameter_range"
            name="diameter_range"
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            placeholder="e.g. 32mm, 40–63mm"
          />
        </div>
        <div>
          <label htmlFor="quantity_m" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Estimated quantity (meters)
          </label>
          <input
            id="quantity_m"
            name="quantity_m"
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            placeholder="e.g. 500m"
          />
        </div>
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Deadline
          </label>
          <input
            id="deadline"
            name="deadline"
            type="text"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            placeholder="e.g. Q2 2025"
          />
        </div>
        <div>
          <label htmlFor="contact_preference" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Preferred contact
          </label>
          <select
            id="contact_preference"
            name="contact_preference"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="project_description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Project description
        </label>
        <textarea
          id="project_description"
          name="project_description"
          rows={4}
          className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm resize-none"
          placeholder="Briefly describe your project and any specific requirements (pipe diameter, configuration, deadline, etc.)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Project drawings (optional)
        </label>
        <input
          type="file"
          name="drawings"
          accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
          className="w-full text-sm text-slate-600 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-100 dark:file:bg-slate-800 file:text-slate-700 dark:file:text-slate-300"
        />
        <p className="text-xs text-slate-500 mt-1">PDF, DWG, DXF, PNG, JPG. Max 10MB.</p>
      </div>

      {errorMessage && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 rounded-lg bg-hydra-blue hover:bg-hydra-blue-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
      >
        {status === "loading" ? "Submitting…" : "Submit Quote Request"}
      </button>
    </form>
  );
}
