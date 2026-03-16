"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  // Africa first
  "Nigeria",
  "Ghana",
  "South Africa",
  "Kenya",
  "Senegal",
  "Côte d'Ivoire",
  "Tanzania",
  "Ethiopia",
  "Cameroon",
  "Zambia",
  "Other West Africa",
  "Other Africa",
  // Europe
  "Poland",
  "Germany",
  "Czech Republic",
  "Romania",
  "Latvia",
  "Lithuania",
  "Estonia",
  "United Kingdom",
  "France",
  "Netherlands",
  "Other Europe",
  // Other
  "Other",
];

const projectTypes = [
  "New residential development",
  "Commercial / hotel",
  "Hospital / public facility",
  "District heating network",
  "Industrial",
  "Geothermal installation",
  "Infrastructure / municipal",
];

const pipeTypes = [
  "Pre-insulated PEX pipelines",
  "Geothermal pipes",
  "Brass fittings",
  "Installation accessories",
  "Mixed / full system",
];

/* ─── Step indicator ─────────────────────────────────────────────────────── */
function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              step < current
                ? "bg-emerald-500 text-white"
                : step === current
                ? "bg-hydra-blue text-white shadow-lg shadow-hydra-blue/30"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {step < current ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              step
            )}
          </div>
          {step < total && (
            <div
              className={`flex-1 h-0.5 rounded-full transition-all duration-500 ${
                step < current ? "bg-emerald-500" : "bg-slate-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Input / Select styling helper ─────────────────────────────────────── */
const inputClass =
  "w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-hydra-blue focus:border-transparent transition-all placeholder:text-slate-400";

const labelClass = "block text-sm font-semibold text-slate-700 mb-1.5";

/* ─── Main component ─────────────────────────────────────────────────────── */
export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "Nigeria",
    project_type: projectTypes[0],
    pipe_type: pipeTypes[0],
    diameter_range: "",
    quantity_m: "",
    deadline: "",
    contact_preference: "email",
    project_description: "",
  });

  function update(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() {
    setStep((s) => Math.min(s + 1, 3));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          project_type: formData.project_type,
          pipe_type: formData.pipe_type,
          diameter_range: formData.diameter_range || undefined,
          quantity_m: formData.quantity_m || undefined,
          deadline: formData.deadline || undefined,
          project_description: formData.project_description || undefined,
          contact_preference: formData.contact_preference,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to submit. Please try again."
      );
    }
  }

  /* ── Success screen ── */
  if (status === "success") {
    return (
      <div className="text-center py-12 px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5"
        >
          <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
            Quote Request Received!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-3">
            Thank you, <strong>{formData.name}</strong>. Hydra will review your project
            requirements and respond to <strong>{formData.email}</strong> within 24–48 hours with
            factory-direct pricing and next steps.
          </p>
          <p className="text-xs text-slate-400 max-w-sm mx-auto mb-8">
            For urgent inquiries, reach us on WhatsApp: +234 800 000 0000
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setStep(1);
              setFormData({
                name: "",
                email: "",
                company: "",
                country: "Nigeria",
                project_type: projectTypes[0],
                pipe_type: pipeTypes[0],
                diameter_range: "",
                quantity_m: "",
                deadline: "",
                contact_preference: "email",
                project_description: "",
              });
            }}
            className="bg-hydra-blue hover:bg-hydra-blue-dark text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <StepIndicator current={step} total={3} />

      <AnimatePresence mode="wait">
        {/* ── Step 1: Your Details ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-6">
              <h3 className="font-display font-bold text-slate-900 mb-1">
                Step 1: Your Details
              </h3>
              <p className="text-sm text-slate-500">
                Tell us who you are and where you&apos;re based.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Emeka Okonkwo"
                />
              </div>
              <div>
                <label className={labelClass}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className={labelClass}>
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. BuildRight Nigeria Ltd"
                />
              </div>
              <div>
                <label className={labelClass}>
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.country}
                  onChange={(e) => update("country", e.target.value)}
                  className={inputClass}
                >
                  <optgroup label="Africa">
                    {countries.slice(0, 12).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Europe">
                    {countries.slice(12, 23).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Other">
                    {countries.slice(23).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Preferred Contact Method</label>
                <div className="flex gap-3">
                  {["email", "phone", "whatsapp"].map((pref) => (
                    <label
                      key={pref}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all ${
                        formData.contact_preference === pref
                          ? "border-hydra-blue bg-hydra-blue/5 text-hydra-blue"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="contact_preference"
                        value={pref}
                        checked={formData.contact_preference === pref}
                        onChange={() => update("contact_preference", pref)}
                        className="sr-only"
                      />
                      {pref === "email" && "📧"}
                      {pref === "phone" && "📞"}
                      {pref === "whatsapp" && "💬"}
                      <span className="capitalize">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (!formData.name || !formData.email || !formData.company) return;
                  nextStep();
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-hydra-blue hover:bg-hydra-blue-dark text-white font-semibold text-sm transition-all duration-200"
              >
                Next: Project Info →
              </button>
            </div>
          </motion.div>
        )}

        {/* ── Step 2: Project Info ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-6">
              <h3 className="font-display font-bold text-slate-900 mb-1">
                Step 2: Project Details
              </h3>
              <p className="text-sm text-slate-500">
                Help us understand your project requirements.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.project_type}
                  onChange={(e) => update("project_type", e.target.value)}
                  className={inputClass}
                >
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  Product Needed <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.pipe_type}
                  onChange={(e) => update("pipe_type", e.target.value)}
                  className={inputClass}
                >
                  {pipeTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Diameter Range</label>
                <input
                  type="text"
                  value={formData.diameter_range}
                  onChange={(e) => update("diameter_range", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 32mm, 40–63mm"
                />
              </div>
              <div>
                <label className={labelClass}>Estimated Quantity (metres)</label>
                <input
                  type="text"
                  value={formData.quantity_m}
                  onChange={(e) => update("quantity_m", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 500m, 2km"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Delivery Deadline</label>
                <input
                  type="text"
                  value={formData.deadline}
                  onChange={(e) => update("deadline", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Q3 2026, within 8 weeks"
                />
              </div>
            </div>

            <div className="mt-7 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-sm transition-colors"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-hydra-blue hover:bg-hydra-blue-dark text-white font-semibold text-sm transition-all duration-200"
              >
                Next: Description →
              </button>
            </div>
          </motion.div>
        )}

        {/* ── Step 3: Description & Submit ── */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-6">
              <h3 className="font-display font-bold text-slate-900 mb-1">
                Step 3: Project Description
              </h3>
              <p className="text-sm text-slate-500">
                Any additional details help us price your project accurately.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className={labelClass}>
                  Project Description
                </label>
                <textarea
                  rows={5}
                  value={formData.project_description}
                  onChange={(e) => update("project_description", e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="Describe your project — building type, location, pipe configuration, special requirements, or any other relevant context..."
                />
              </div>

              <div>
                <label className={labelClass}>Project Drawings (optional)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-hydra-blue transition-colors cursor-pointer">
                  <input
                    type="file"
                    name="drawings"
                    accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-hydra-blue/10 file:text-hydra-blue file:font-medium file:text-sm hover:file:bg-hydra-blue/20 cursor-pointer"
                  />
                  <p className="text-xs text-slate-400 mt-2">
                    PDF, DWG, DXF, PNG, JPG · Max 10MB
                  </p>
                </div>
              </div>

              {/* Summary box */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm">
                <div className="font-semibold text-slate-900 mb-2 text-xs uppercase tracking-wide text-hydra-blue">
                  Summary
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-700">
                  <span className="font-medium text-slate-900">Contact:</span>
                  <span>{formData.name} · {formData.company}</span>
                  <span className="font-medium text-slate-900">Country:</span>
                  <span>{formData.country}</span>
                  <span className="font-medium text-slate-900">Project:</span>
                  <span>{formData.project_type}</span>
                  <span className="font-medium text-slate-900">Product:</span>
                  <span>{formData.pipe_type}</span>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {errorMessage}
              </div>
            )}

            <div className="mt-7 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-sm transition-colors"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-hydra-gold hover:bg-hydra-gold-light disabled:opacity-50 disabled:cursor-not-allowed text-hydra-navy font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Quote Request
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
