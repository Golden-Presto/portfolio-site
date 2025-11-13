import TechIcon from './TechIcon';
import '../styles/project-card.css'
import * as simpleIcons from 'simple-icons';

function ProjectCard({ title, description, techs = [], repo }) {

  function getIconBySlug(slug) {
    return Object.values(simpleIcons).find(icon => icon.slug === slug);
  }

  return (
    <div className='project-card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Tech:</strong>{' '}
        {techs.map((slug, index) => {
          const icon = getIconBySlug(slug);
          return icon ? (
            <span key={slug}>
              <TechIcon icon={icon} />
              {icon.title}
              {index < techs.length - 1 ? ', ' : ''}
            </span>
          ) : (
            <span key={slug}>{slug}</span>
          );
        })}
      </p>
      <p>
        <a href={repo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default ProjectCard;