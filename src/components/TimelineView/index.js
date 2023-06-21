// Write your code here

import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderList = () => {
    const {timelineItemsList} = this.props
    const courseFilteredList = timelineItemsList.filter(
      each => each.categoryId === 'COURSE',
    )
    return courseFilteredList
  }

  courseRenderList = () => {
    const list = this.renderList()

    return (
      <ul className="list">
        {list.map(each => (
          <CourseTimelineCard card={each} key={each.id} />
        ))}
      </ul>
    )
  }

  getProjectList = () => {
    const {timelineItemsList} = this.props
    const projectFilteredList = timelineItemsList.filter(
      each => each.categoryId === 'PROJECT',
    )
    return projectFilteredList
  }

  projectRenderList = () => {
    const projectList = this.getProjectList()

    return (
      <ul className="list">
        {projectList.map(each => (
          <ProjectTimelineCard card={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
        <h1 className="ccbp">CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono mode="VERTICAL">
            <div className="list">{this.courseRenderList()}</div>
            <div className="list">{this.projectRenderList()}</div>
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
