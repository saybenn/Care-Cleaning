import React, { useState } from "react";

const ContactForm = () => {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const PHONE_REGEX =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

  const handleValidation = () => {
    const tempErrors = {};
    let isValid = true;

    if (!name) {
      tempErrors.name = true;
      isValid = false;
    }
    if (!phone || !PHONE_REGEX.test(phone)) {
      tempErrors.phone = true;
      isValid = false;
    }
    if (!email) {
      tempErrors.email = true;
      isValid = false;
    }
    if (!service) {
      tempErrors.service = true;
      isValid = false;
    }
    if (!message) {
      tempErrors.message = true;
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!handleValidation()) return;

    setButtonText("Sending...");

    await fetch("/api/database", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, service }),
    });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, service }),
    });

    const { error } = await res.json();

    if (error) {
      setShowFailureMessage(true);
      setShowSuccessMessage(false);
    } else {
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
    }

    setButtonText("Send");
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-16  px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-10">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[var(--color-accent)] mb-2">
          Get In Touch
        </h2>
        <div className="h-1 w-1/2 mx-auto bg-[var(--color-secondary)] mb-10 rounded" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 [--tw-ring-color:var(--color-secondary)]"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">Name is required.</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 [--tw-ring-color:var(--color-secondary)]"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  Please enter a valid phone number.
                </p>
              )}
            </div>
          </div>

          {/* Email & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 [--tw-ring-color:var(--color-secondary)]"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">Email is required.</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 [--tw-ring-color:var(--color-secondary)]"
              >
                <option value="">Select a service</option>
                <option value="One-Time Cleaning">One-Time Cleaning</option>
                <option value="Regular Cleaning">Regular Cleaning</option>
                <option value="Commercial Cleaning">Commercial Cleaning</option>
              </select>
              {errors.service && (
                <p className="text-sm text-red-500 mt-1">
                  Please select a service.
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 [--tw-ring-color:var(--color-secondary)]"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">Message is required.</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-[var(--color-accent)] text-white font-semibold py-3 rounded-md hover:bg-[var(--color-secondary)] transition-all"
            >
              {buttonText}
            </button>
          </div>

          {/* Feedback */}
          {showSuccessMessage && (
            <p className="text-center text-green-600 mt-4">
              Thank you! Your message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-center text-red-600 mt-4">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-sm text-center text-gray-500 mt-4">
            We&apos;ll never share your personal information with anyone else.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
