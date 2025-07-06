import SignupForm from './SignupForm';

export default function Home() {
  return (
    <div style={{
      padding: '32px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: '#000',
      color: '#fff',
    }}>
      
      {/* Hero Image */}
      <img
        src="/hero.webp"
        alt="RavBot visual"
        style={{
          width: '100%',
          maxWidth: '300px',
          height: 'auto',
          marginBottom: '32px',
          borderRadius: '12px',
        }}
      />

      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px' }}>
        RavBot
      </h1>

      <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '32px' }}>
        Throw money at it, and it makes you more.
      </p>

      <p style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
        Most users find $200–$1,000/month in dead money we revive and use for growth.
      </p>
      <a
        href="/app"
        style={{
          backgroundColor: '#007aff',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '8px',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          marginBottom: '40px',
          display: 'inline-block',
        }}
      >
        Get Started Now
      </a>

      <p style={{ marginBottom: '12px', fontSize: '1rem', color: '#ccc' }}>
        Not ready yet? Get our best money tricks 1x/week — from someone who actually built the tool:
      </p>

      <div style={{ width: '100%', maxWidth: '400px' }}>
        <SignupForm />
      </div>



      {/* How It Works Section */}
    <section id="how-it-works" style={{
      marginTop: '80px',
      padding: '32px 16px',
      maxWidth: '900px',
      width: '100%',
      textAlign: 'center',
      borderRadius: '12px',
      background: 'linear-gradient(145deg, #0a0a0a, #101010)',
      boxShadow: '0 0 24px rgba(0, 0, 0, 0.6)',
    }}>
      <h2 className="hero-heading" style={{ marginBottom: '32px' }}>
        How RavBot Works
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        {/* Step 1 */}
        <div style={{
          padding: '24px',
          background: 'linear-gradient(to right, #111, #1b1b1b)',
          border: '1px solid #333',
          borderRadius: '10px',
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#66d9ef' }}>1. You Sign Up</h3>
          <p className="hero-paragraph">
            Connect your accounts securely using Plaid, and tell RavBot your goals. "I want more money, less stress" — done.
          </p>
        </div>

        {/* Step 2 */}
        <div style={{
          padding: '24px',
          background: 'linear-gradient(to right, #111, #1b1b1b)',
          border: '1px solid #333',
          borderRadius: '10px',
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#a6e22e' }}>2. RavBot Analyzes</h3>
        <p className="hero-paragraph">
            It reads your income, spending, debt, and more — then figures out exactly what’s hurting or helping your money right now. <br></br>All using a very clever combination of AI and hard code.
          </p>
            <div style={{
              backgroundColor: "#0b0b0b",
              border: "1px solid #222",
              borderRadius: "6px",
              padding: "1rem",
              fontFamily: "monospace",
              fontSize: "0.85rem",
              lineHeight: "1.4",
              marginTop: "1rem",
              whiteSpace: "pre",
              textAlign: "left",
              color: "#ccc",
              maxWidth: "700px",
              marginInline: "auto"
            }}>
              <span style={{ color: "#66d9ef" }}>if</span> (<span style={{ color: "#a6e22e" }}>user.creditCardInterest</span> &gt; <span style={{ color: "#ae81ff" }}>0</span>) {'{'}{'\n'}
              &nbsp;&nbsp;<span style={{ color: "#f92672" }}>suggest</span>(<span style={{ color: "#e6db74" }}>"Lower-interest card"</span>);{'\n'}
              {'}'}{'\n\n'}
              <span style={{ color: "#66d9ef" }}>if</span> (<span style={{ color: "#a6e22e" }}>user.subscriptions.lastUsed</span> &gt; <span style={{ color: "#ae81ff" }}>365</span>) {'{'}{'\n'}
              &nbsp;&nbsp;<span style={{ color: "#f92672" }}>suggest</span>(<span style={{ color: "#e6db74" }}>"Cancel unused subscription"</span>);{'\n'}
              {'}'}{'\n\n'}
              <span style={{ color: "#66d9ef" }}>if</span> (<span style={{ color: "#a6e22e" }}>user.savingsRate</span> &lt; <span style={{ color: "#ae81ff" }}>0.1</span>) {'{'}{'\n'}
              &nbsp;&nbsp;<span style={{ color: "#f92672" }}>suggest</span>(<span style={{ color: "#e6db74" }}>"Automate savings"</span>);{'\n'}
              {'}'}
            </div>


        </div>

        {/* Step 3 */}
        <div style={{
          padding: '24px',
          background: 'linear-gradient(to right, #111, #1b1b1b)',
          border: '1px solid #333',
          borderRadius: '10px',
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#fd971f' }}>3. RavBot Acts (with your permission)</h3>
          <p className="hero-paragraph">
            You get clear options. RavBot handles the hard parts. Cancel subs. Move money. Fix accounts. Auto-invest. It's action, not advice.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '32px', color: '#ccc', textAlign: 'left' }}>
        <p className="hero-paragraph">➤ Found a dead subscription? RavBot asks to cancel it.</p>
        <p className="hero-paragraph">➤ Getting trash returns on investments? RavBot shows better ones — and can move money if allowed.</p>
        <p className="hero-paragraph">➤ Sitting on too much cash? RavBot routes it to a smarter place — automatically.</p>
      </div>

    </section>
    </div>
  );
}
