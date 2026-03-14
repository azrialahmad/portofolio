export default function About() {
  const skills = [
    {
      category: 'Data & AI',
      items: ['Python', 'Pandas', 'YOLOv11', 'Scikit-learn', 'SQL'],
    },
    {
      category: 'Web Development',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Node.js'],
    },
    {
      category: 'Tools & Other',
      items: ['Git', 'GitHub', 'Figma', 'Linux', 'OpenCV'],
    },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Text column */}
          <div>
            <p className="section-label reveal">About</p>
            <h2 className="about-heading reveal reveal-delay-1">
              Curious by nature,<br />precise by practice.
            </h2>
            <div className="about-body reveal reveal-delay-2">
              <p>
                I'm a fresh Informatics graduate from Indonesia who finds himself equally at
                home writing a data pipeline, training a detection model, or building a web
                interface. I don't pick one lane — I follow the problem wherever it leads.
              </p>
              <p>
                When I'm not in front of a terminal, I'm out with a camera looking for
                candid moments in the street, or setting up portraits for cosplay
                photography. I believe the same attention to detail that makes a good
                photograph makes good software.
              </p>
              <p>
                Currently open to roles in <strong>Data Engineering</strong>,{' '}
                <strong>Machine Learning</strong>, <strong>QA</strong>, or{' '}
                <strong>Full-Stack Development</strong>.
              </p>
            </div>
          </div>

          {/* Skill card */}
          <div className="reveal reveal-delay-3">
            <div className="skill-card">
              <p className="skill-card-title">Technical Toolkit</p>
              {skills.map(({ category, items }) => (
                <div className="skill-group" key={category}>
                  <p className="skill-group-name">{category}</p>
                  <div className="skill-list">
                    {items.map(item => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
