function Resume() {
  return (
    <section id="resume" style={{ padding: '2rem' }}>
      <h2>Resume</h2>
      <p>
        I’m actively seeking full-time development roles in UI, MERN stack, or backend engineering.
        My resume outlines my technical skills, work experience, and project highlights.
      </p>
      <p>
        <a
          href="/portfolio-site/resume.pdf"
          download
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--accent)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          Download Resume
        </a>   
      </p>
    </section>
  );
}

export default Resume;