import React, {Component} from 'react'
import HiddenHog from './HiddenHog'

export default class HiddenHogContainer extends Component {

  createHogs = () => {
    let filteredHogs = this.props.hogs.filter(hog => hog.hidden)

    if (filteredHogs.length === 0) {
      return "No Hidden Hogs"
    } else {
      return filteredHogs.map(hogObj => {
        return  <HiddenHog unHideHog={this.props.unHideHog} hog={hogObj} key={hogObj.id}/>
     })
    }
  }

  render(){
    return (
      <div className="hiddenHogs">
        <h1 className="hiddenHogsHeader">Hidden Hogs:</h1>
        <div className="hiddenHogsContent">
          {this.createHogs()}
        </div>
      </div>
    )
  }
}