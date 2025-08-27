import { useState } from "react";
import supabase from "./supabaseClient";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    const { error } = await supabase
      .from("signups")
      .insert([{
        email,
        source: "newsletter",
        marketing_opt_in: marketingConsent,
      }]);

    if (error) {
      console.error("Supabase insert error:", error);
      setStatus(error.message.includes("duplicate")
        ? "You’re already on the list."
        : "Error saving email.");
      return;
    }

    setStatus("✅ You’ll be notified as soon as RavBot is live!");
    setEmail("");
    setMarketingConsent(false);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Be the First to Know</h1>
      <p style={{ marginBottom: "1.5rem", color: "#ccc" }}>
        The instant <strong>RavBot</strong> is up and ready, you’ll be notified. Sign up below:
      </p>

      <form onSubmit={handleSubmit}>
        {/* Dark blue container box */}
        <div style={{
          background: "#0a1a3a",
          borderRadius: "8px",
          padding: "1rem",
          marginBottom: "1rem",
          textAlign: "left"
        }}>
          {/* Email input */}
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "95%",
              padding: "0.75rem",
              borderRadius: "6px",
              border: "1px solid #333",
              backgroundColor: "#000",
              color: "#fff",
              marginBottom: "1rem"
            }}
          />

          {/* Checkbox inside the same box */}
          <label style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#fff" }}>
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              style={{ marginTop: "4px" }}
            />
            <span>
              Yes, give me VIP access to RavGrowth insights,<br /><br />
              early tools, and offers before the public gets them.
            </span>
          </label>
        </div>  {/* ✅ closing the dark blue box */}

        {/* Submit button */}
        <button
          type="submit"
          style={{
            marginTop: "0.5rem",
            background: "#0ff",
            color: "#000",
            fontWeight: "700",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.2s"
          }}
          onMouseOver={(e) => (e.target.style.background = "#00cccc")}
          onMouseOut={(e) => (e.target.style.background = "#0ff")}
        >
          Sign Up
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "1rem", color: "#0f0" }}>{status}</p>
      )}
    </div>
  );
}
