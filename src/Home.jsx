import SignupForm from './SignupForm'

const logo = '/logo.png'

export default function Home() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: 'clamp(16px, 4vw, 32px)',
        margin: '0 auto',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
        }}
      >
       <img
          src={logo}
          alt="RavBot Logo"
          style={{
            width: 'clamp(150px, 40vw, 300px)',
            display: 'block',
            margin: '0 auto 24px',
          }}
        />


        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 2.75rem)',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          RavBot is being built as you read this...
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
            color: 'var(--color-purple-1)',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Your Money. Smarter.<br />Automatically.
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          RavBot finds wasted money and moves it to better places.<br />
          You just click “yes.” Then profit.
        </p>

       <div
        style={{
          marginTop: '48px',
          textAlign: 'center',
          padding: 'clamp(24px, 4vw, 32px)',
          fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
          lineHeight: 1.6,
        }}
      >
        <p style={{ marginBottom: '16px', fontSize: 'clamp(1.1rem, 4vw, 1.8rem)' }}>
          Be first to know about new features <br/> and Rav Growth developments.
        </p>

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

      <div
        style={{
          marginTop: '64px',
          padding: 'clamp(24px, 6vw, 48px)',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '12px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 6vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '32px',
          }}
        >
          How RavBot Works
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <div style={{ lineHeight: 1.6 }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9B5DE5' }}>1.</div>
            <h3 style={{ margin: '8px 0', fontSize: '1.5rem' }}>Connect Your Accounts</h3>
            <p style={{ fontSize: '1.2rem' }}>Bank, credit, crypto - securely linked in seconds.</p>
          </div>

          <div style={{ lineHeight: 1.6 }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9B5DE5' }}>2.</div>
            <h3 style={{ margin: '8px 0', fontSize: '1.5rem' }}>We Find Wasted Money</h3>
            <p style={{ fontSize: '1.2rem' }}>Bad APY, hidden fees, idle cash? RavBot sees it all.</p>
          </div>

          <div style={{ lineHeight: 1.6 }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9B5DE5' }}>3.</div>
            <h3 style={{ margin: '8px 0', fontSize: '1.5rem' }}>{'You Click "Yes"'}</h3>
            <p style={{ fontSize: '1.2rem' }}>RavBot moves your money. You grow automatically.</p>
           </div>
        </div>
      </div>
    </div>
  </div>
  )
}
