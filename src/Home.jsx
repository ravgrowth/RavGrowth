import SignupForm from './SignupForm'

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px',
        fontFamily: 'system-ui, sans-serif',
        color: 'var(--color-text)',
        textAlign: 'center',
      }}
    >
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
          color: 'var(--color-purple-2)',
        }}
      >
        RavBot finds wasted money and moves it to better places. You just click “yes.” Then profit.
      </p>

      <div style={{ marginTop: '32px' }}>
        <SignupForm />
      </div>

      <div
        style={{
          marginTop: '40px',
          fontSize: '0.9rem',
          color: 'var(--color-purple-3)',
        }}
      >
        Built for builders. Designed for autopilot wealth.
      </div>
    </div>
  )
}
