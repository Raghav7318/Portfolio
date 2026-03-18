import { motion } from "framer-motion";
import { useState } from "react";
import RippleButton from "../ui/RippleButton";
import SectionHeader from "../ui/SectionHeader";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const next = {};

    if (!values.name.trim()) {
      next.name = "Name is required.";
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (values.message.trim().length < 12) {
      next.message = "Message must be at least 12 characters.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(false);
    setSubmitError("");

    if (!validate()) {
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Failed to save message.");
      }

      setSubmitted(true);
      setValues(initialValues);
    } catch (error) {
      setSubmitError(error.message || "Unable to submit the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Contact"
        title="Let's work together on something amazing"
        description="Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm always interested in collaborating on exciting projects and learning new technologies."
      />

      <motion.form
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-lg sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1 block text-slate-200">Name</span>
            <input
              name="name"
              value={values.name}
              onChange={onChange}
              className="w-full rounded-xl border border-white/20 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none ring-cyan-300 transition focus:ring"
              placeholder="Your name"
            />
            {errors.name ? (
              <span className="mt-1 block text-xs text-pink-300">
                {errors.name}
              </span>
            ) : null}
          </label>

          <label className="block text-sm">
            <span className="mb-1 block text-slate-200">Email</span>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              className="w-full rounded-xl border border-white/20 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none ring-cyan-300 transition focus:ring"
              placeholder="you@example.com"
            />
            {errors.email ? (
              <span className="mt-1 block text-xs text-pink-300">
                {errors.email}
              </span>
            ) : null}
          </label>
        </div>

        <label className="block text-sm">
          <span className="mb-1 block text-slate-200">Message</span>
          <textarea
            name="message"
            value={values.message}
            onChange={onChange}
            rows={5}
            className="w-full rounded-xl border border-white/20 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none ring-cyan-300 transition focus:ring"
            placeholder="Tell me about your project"
          />
          {errors.message ? (
            <span className="mt-1 block text-xs text-pink-300">
              {errors.message}
            </span>
          ) : null}
        </label>

        <div className="flex items-center gap-4">
          <RippleButton type="submit" disabled={submitting}>
            {submitting ? "Saving..." : "Send Message"}
          </RippleButton>
          {submitted ? (
            <p className="text-sm text-cyan-200">
              Message saved to project folder.
            </p>
          ) : null}
          {submitError ? (
            <p className="text-sm text-pink-300">{submitError}</p>
          ) : null}
        </div>
      </motion.form>
    </section>
  );
}

export default ContactSection;
