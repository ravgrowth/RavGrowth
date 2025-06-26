import SignupForm from './SignupForm'

const logo = '/logo.png'

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
      }}
    >
      <img src={logo} alt="RavBot Logo" style={{ height: '200px', marginBottom: '16px' }} />
      <h1 style={{ fontSize: '2rem', color: 'var(--color-text)' }}>RavGrowth</h1>

      <h1
        style={{
          fontSize: '3rem',
          color: 'var(--color-purple-1)',
          marginBottom: '16px',
        }}
      >
        Your Money. Smarter. Automatically.
      </h1>

      <p
        style={{
          fontSize: '1.25rem',
          maxWidth: '600px',
          color: 'var(--color-text)',
        }}
      >
        RavBot finds wasted money and moves it to better places. 
        <br />
        You just click “yes.” Then profit.
      </p>

      <div style={{ marginTop: '32px' }}>
        <SignupForm />
      </div>

      <div style={{ marginTop: '48px', maxWidth: '800px', textAlign: 'left' }}>
        <h2 style={{ color: 'white', fontSize: '1.5rem' }}>How RavBot Works</h2>

        <div style={{ marginTop: '24px' }}>
          <h3 style={{ color: '#9B5DE5' }}>1. Connect Your Accounts</h3>
          <p>Link your bank, credit cards, and crypto. Secure + easy.</p>

          <h3 style={{ color: '#9B5DE5' }}>2. We Find Wasted Money</h3>
          <p>RavBot finds bad interest, unused funds, and hidden fees.</p>

          <h3 style={{ color: '#9B5DE5' }}>3. You Click “Yes”</h3>
          <p>RavBot moves your money to better spots. That’s it.</p>
        </div>
      </div>

      <div style={{ marginTop: '48px' }}>
        <h2 style={{ color: 'white' }}>Latest Blog Posts</h2>
        <a href="/blog" style={{ color: '#3A86FF' }}>Go to blog →</a>
      </div>
    </div>
  )
}
