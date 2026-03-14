const PROJECTS = [
  {
    index: '01',
    name: 'osu-aim-assistant',
    description:
      'An AI-powered aim assist tool for OSU using YOLOv11 for real-time target detection and high-performance screen capture. Explores the boundary between computer vision and game interaction.',
    tags: ['Python', 'YOLOv11', 'OpenCV', 'ONNX', 'Computer Vision'],
    href: 'https://github.com/azrialahmad/osu-aim-assistant',
  },
  {
    index: '02',
    name: 'virtual-photography-analysis',
    description:
      'A data analysis project that explores a dataset of 90+ top-rated virtual photos from gaming to uncover the key visual and compositional characteristics behind a successful gaming photograph.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
    href: 'https://github.com/azrialahmad/virtual-photography-analysis',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label reveal">Projects</p>
            <h2 className="section-heading reveal reveal-delay-1">
              Selected work
            </h2>
          </div>
          <a
            href="https://github.com/azrialahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost reveal reveal-delay-2"
          >
            All on GitHub ↗
          </a>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article className="project-card reveal" key={project.index} style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="project-index" aria-hidden="true">{project.index}</p>
              <div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc" style={{ marginTop: '12px' }}>{project.description}</p>
              </div>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
