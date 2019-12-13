import React, { Component } from 'react'


export default class Pig extends Component {
  constructor(props){
    super(props)

  
    this.state = {
      active: false
    }
  }

  formatName = name => {
    return name.toLowerCase().split(' ').join('_')
  }

  toggleActive = event => {
    this.setState({
      active: !this.state.active
    })
  }

  isActive = () => {
    if(this.state.active) {
      return (
      <ul>
        <li>Specialty: {this.props.hog.specialty}</li>
        <li>Greased? {this.props.hog.greased? 'Yes' : 'No'}</li>
        <li>Weight: {this.props.hog.weight}</li>
        <li>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</li>
      </ul>)
    } else {
      return <h1>{this.props.hog.name}</h1>
    }
  }

  makeBacon = () => {

  }

  
  render() {
    return(
      <div className="pigTile">
          <img src={require(`../hog-imgs/${this.formatName(this.props.hog.name)}.jpg`)}/>
        <div className="hogInfo">{this.isActive()}</div>
        <button onClick={this.toggleActive} className="showMore">{this.state.active? "Show Less" : "Show More"}</button>
        <button onClick={() => this.props.hideHog(this.props.hog.name)}>Hide Hog</button>
       </div>
    )
  }
}