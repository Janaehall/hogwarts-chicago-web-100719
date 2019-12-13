import React, {Component} from 'react'
import Hog from './Hog'

export default class HogContainer extends Component {

  createHogs = () => {
    let shownHogs = this.props.hogs.filter(hog => !hog.hidden)
    return shownHogs.map(hogObj => {
      return <Hog hideHog={this.props.hideHog} hog={hogObj} key={hogObj.id} />
    })
  }
  render () {
    return (
      <div className="shownHogsContainer">
        {this.createHogs()}
      </div>
    )
  }
}