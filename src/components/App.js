import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import HiddenHogContainer from './HiddenHogContainer'
import uuid from 'uuid'

class App extends Component {
  constructor() {
    hogs.forEach(hog => hog.hidden = false)
    hogs.forEach(hog => hog.id = uuid.v4())
    super()
    this.state = {
      hogs: hogs,
      greased: false,
      showHidden: false
    }
  }

  toggleHideHog = (name) => {
    let newHogs = this.state.hogs.map(hog => hog.name === name? {...hog, hidden: !hog.hidden} : hog)
    this.setState({
      hogs: newHogs
    })
  }

  toggleShowHidden = () => {
    this.setState({
      showHidden: !this.state.showHidden
    })
  }

  sortHogs = value => {
    if(value !== '') {
    let newHogs = this.state.hogs.sort((a,b) => a[value] > b[value] ? 1 : -1)
    this.setState({
      hogs: newHogs
    })
    }
  }
  hogFilter = () => {
    if(this.state.greased){
      return this.state.hogs.filter(hog => hog.greased) 
    } 
    return this.state.hogs
  }

  toggleGreased = () => {
    this.setState({
      greased: !this.state.greased
    })
  }

  render() {
    
    return (
      <div className="App">
          < Nav sortHogs={this.sortHogs} toggleGreased={this.toggleGreased} greased={this.state.greased} hidden={this.state.showHidden} toggleShowHidden={this.toggleShowHidden}/>
          {this.state.showHidden ? <HiddenHogContainer hogs={this.hogFilter()} unHideHog={this.toggleHideHog}/> : null}
          < HogContainer hogs={this.hogFilter()} hideHog={this.toggleHideHog}/>

      </div>
    )
  }
}

export default App;
