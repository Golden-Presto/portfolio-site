import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Vibe Commerce – Full-Stack Cart App"
          description="Built a modular e-commerce cart system using React (frontend) and Express + MongoDB (backend). Features include quantity control, state syncing, REST APIs, and clean UI."
          techs={['react', 'nodedotjs', 'express', 'mongodb']}
          repo="https://github.com/yourusername/vibe-commerce"
        />

        <ProjectCard
          title="YelpCamp – Full-Stack Campground App"
          description="Developed a full-stack app with user authentication, campground listings, and reviews. Focused on clean UI and robust validation."
          techs={['nodedotjs', 'express', 'mongodb', 'ejs']}
          repo="https://github.com/yourusername/yelpcamp"
        />

        <ProjectCard
          title="React Calendar Component"
          description="Designed a reusable calendar component using React, with clean UI and basic interactivity. Focused on modular structure and recruiter-friendly presentation."
          techs={['react', 'javascript', 'css']}
          repo="https://github.com/yourusername/react-calendar-component"
        />
        <ProjectCard
          title="ToDo List – React DnD"
          description="Built a drag-and-drop ToDo list using React and react-dnd. Focused on modular component logic and interactive UX."
          techs={['react', 'javascript', 'css']}
          repo="https://github.com/Golden-Presto/ToDo-List"
        />
      </div>
    </section>
  );
}

export default Projects;  