// Write your code here
import './index.css'

const ProjectTimelineCard = props => {
  const {card} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = card

  const navigateLink = () => {
    window.location.href = {projectUrl}
  }

  return (
    <li className="card">
      <img src={imageUrl} alt={projectTitle} className="img" />
      <h1 className="head">{projectTitle}</h1>
      <p className="description">{description}</p>
      <p className="duration">{duration}</p>
      <button type="button" onClick={navigateLink}>
        Visit
      </button>
    </li>
  )
}

export default ProjectTimelineCard
