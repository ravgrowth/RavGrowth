import SignupForm from './SignupForm'

export default function Home() {
  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Welcome to RavGrowth!</h1>
      <p>Your wealth-building autopilot.</p>

      <SignupForm />

    </div>
  );
}
