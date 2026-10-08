export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="nav-inner">
          <a className="brand" href="#home">Marian Jade Gorenzo</a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-content">
          <img
            src="/profile.png"
            alt="Marian Jade Gorenzo"
            className="profile-picture"
          />
          <div className="hero-text">
            <p className="eyebrow">PROGRAMMER PROFILE</p>
            <h1>Marian Jade Gorenzo</h1>
            <p className="bio">
              Just a programmer trying to turn coffee into code and bugs into features.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="section section-alt">
        <div className="container">
          <p className="section-label">01</p>
          <h2>Education</h2>
          <div className="info-card">
            <p className="card-title">College</p>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>Nueva Vizcaya State University</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">02</p>
          <h2>Projects</h2>
          <div className="empty-card">
            <p>No projects added yet.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container">
          <p className="section-label">03</p>
          <h2>Contact</h2>
          <div className="contact-grid">
            <div className="info-card">
              <p className="card-title">Email</p>
              <p>marianjade3127@gmail.com</p>
            </div>
            <div className="info-card">
              <p className="card-title">GitHub</p>
              <p>marianjade</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-content">
          <p className="section-label">04</p>
          <h2>About</h2>
          <p>
            I am an Information Technology student interested in programming,
            technology, networking, system development, and learning new
            technologies. This profile showcases my education and future projects.
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 Marian Jade Gorenzo</p>
      </footer>
    </main>
  );
}
