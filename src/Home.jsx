import SignupForm from './SignupForm'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0A0A23',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px',
      fontFamily: 'system-ui, sans-serif',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#9B5DE5', marginBottom: '16px' }}>
        Your Money. Smarter. Automatically.
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', color: '#6A4C93' }}>
        RavBot finds wasted money and moves it to better places. You just click “yes.” Then profit.
      </p>

      <div style={{ marginTop: '32px' }}>
        <SignupForm />
      </div>

      <div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#888' }}>
        Built for builders. Designed for autopilot wealth.
      </div>
    </div>
  );
}
