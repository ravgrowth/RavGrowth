import SignupForm from './SignupForm';

const logo = '/logo.png';

export default function Home() {
  return (
    <div style={{
      padding: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      textAlign: 'center',
    }}>
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: 'clamp(16px, 4vw, 32px)',
          fontSize: '1rem',
          lineHeight: 1.6,
          textAlign: 'center',
        }}
      >
        <img src={logo} alt="RavBot Logo" className="logo-image" />

          <h1 className="hero-heading">
            RavBot
          </h1>

          <h2 className="hero-subheading">
            Your Money. Smarter. <br /> Automatically.
          </h2>

          <p className="hero-paragraph">
            RavBot finds wasted money and moves it to better places. <br />
            You just click “yes.” Then profit. <br/>
          </p>


        <div style={{ marginTop: '48px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
