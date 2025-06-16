import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to RavGrowth</h1>
        <p>Automate your finances. Build real wealth. RavBot is your daily AI assistant.</p>
        <a href="https://app.ravgrowth.com" target="_blank" rel="noopener">
          <button style={{ padding: '1rem 2rem', fontSize: '18px', marginTop: '1rem' }}>
            🚀 Launch RavBot
          </button>
        </a>
      </div>
    </Layout>
  )
}
export default Home
