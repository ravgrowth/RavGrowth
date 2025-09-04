import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About – Rav Growth</title>
        <meta
          name="description"
          content="Learn more about Rav Growth's mission to build the world’s financial operating system."
        />
      </Helmet>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '16px',
          lineHeight: '1.6'
        }}
      >
        <h1>About Rav Growth</h1>
        <p>
          Rav Growth is building the world’s financial operating system.{' '}
          <br />Our mission is simple: give everyone the same financial edge as
          billion-dollar companies.
        </p>
        <p>
          RavBot, our flagship AI assistant, scans your accounts, finds hidden
          leaks, and executes wealth-building moves automatically.
        </p>
        <p>
          No more financial confusion. No more “where did my money go?” Just
          clear actions, automated growth, and peace of mind.
        </p>
        <p>
          Long term, Rav Growth is building the rails for global money movement —
          the infrastructure banks and individuals will run on.
        </p>
        <h2>Our Core Values</h2>
        <ul
          style={{
            textAlign: 'left',
            paddingLeft: '20px'
          }}
        >
          <li>Automation First – If it takes more than 5 minutes, systematize it.</li>
          <li>Momentum &gt; Perfection – Action compounds faster than planning.</li>
          <li>Transparency – Clear numbers. Real gains. No smoke and mirrors.</li>
          <li>Global Vision – From an 18-year-old in Detroit to a $50B+ company.</li>
        </ul>
        <p>
          <Link to="/signup">Sign Up →</Link>
        </p>
      </div>
    </>
  )
}

