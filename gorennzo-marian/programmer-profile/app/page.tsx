const navItems = [
  { label: "Home", id: "home" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="nav-logo">&lt;/&gt;</div>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="terminal-text">&gt; hello_world.exe</p>

          <h1>Marian Jade Gorenzo</h1>

          <p className="username">@Jidjeyd</p>

          <p className="bio">
            Turning coffee into code and bugs into features.
          </p>
        </div>

        <div className="profile-card">
          <div className="profile-image">
            <span>&lt;/&gt;</span>
            <small>PROFILE</small>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <p className="section-label">// education</p>
        <h2>Education</h2>

        <div className="education-card">
          <h3>3rd Year BSIT</h3>
          <p>Major in Network Design and Management</p>
          <p>Nueva Vizcaya State University (NVSU)</p>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">// projects</p>
        <h2>Projects</h2>

        <div className="empty-card">
          <span>&lt;/&gt;</span>
          <h3>No projects added yet.</h3>
          <p>Projects will be added here in the future.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <p className="section-label">// contact</p>
        <h2>Contact</h2>

        <div className="contact-card">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:marianjade3127@gmail.com">
              marianjade3127@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/marianjade"
              target="_blank"
              rel="noreferrer"
            >
              github.com/marianjade
            </a>
          </p>
        </div>
      </section>

      <footer>
        © 2026 Marian Jade serves you right
      </footer>
    </main>
  );
}
