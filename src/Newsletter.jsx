// ./src/newsletter.jsx
// purpose: a page you go to and its clearly "sign up to get emails"

import { useState } from "react";
import supabase from "./supabaseClient";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    const { error } = await supabase
      .from("signups")
      .insert([{ email, source: "newsletter", ua: navigator.userAgent }]);

    if (error) {
      console.error("Supabase insert error:", error);
      setStatus(error.message.includes("duplicate")
        ? "You’re already on the list."
        : "Error saving email.");
      return;
    }

    setStatus("✅ You’re signed up!");
    setEmail("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Join the RavGrowth Newsletter</h1>
      <p>Get wealth-building tactics and updates straight to your inbox.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "0.5rem", width: "100%" }}
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          Subscribe
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "1rem", color: "#0f0" }}>{status}</p>
      )}
    </div>
  );
}
