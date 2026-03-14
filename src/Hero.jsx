export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container" style={{ width: '100%' }}>
        <div className="reveal">
          <p className="hero-eyebrow">
            informatics graduate — yogyakarta, indonesia
          </p>
        </div>

        <h1 className="hero-name reveal reveal-delay-1">
          Azrial<br />
          <span className="highlight">Ahmad</span><br />
          Haidar
        </h1>

        <div className="hero-bottom reveal reveal-delay-2">
          <p className="hero-role">
            Exploring the intersection of <strong>data</strong>, <strong>AI</strong>,
            and <strong>web</strong> — building things that make sense of complexity.
            Also happens to make photos.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary" onClick={e => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View work →
            </a>
            <a
              href="https://github.com/azrialahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <span className="scroll-indicator" aria-hidden="true">scroll</span>
    </section>
  )
}
