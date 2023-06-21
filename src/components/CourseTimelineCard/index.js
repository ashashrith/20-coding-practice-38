// Write your code here
import './index.css'

const CourseTimelineCard = props => {
  const {card} = props
  const {courseTitle, description, duration, tagsList} = card

  return (
    <li className="item">
      <h1 className="title">{courseTitle}</h1>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>
      <ul className="mini-list">
        {tagsList.map(each => (
          <li className="i">{each.name}</li>
        ))}
      </ul>
    </li>
  )
}

export default CourseTimelineCard
