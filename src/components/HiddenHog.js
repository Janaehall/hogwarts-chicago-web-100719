import React, { Component } from 'react'


export default class Pig extends Component {
  constructor(props){
    super(props)

  
    this.state = {
      active: false,
      imgUrl: '',
      baconized: false
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

  componentDidMount = () => {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=gaHS5XhmfJvnMMq0HwJ3yPlXQIUVllKx&tag=sausage,%20bacon&rating=G')
    .then(resp => resp.json())
    .then(image => {
      this.setState({
        imgUrl: image.data.images.fixed_height_small.url
      })
    })
  }

  toggleBaconized = () => {
    this.setState({
      baconized: !this.state.baconized
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
    console.log(this.state.imgUrl)
    return(
      <div className="pigTile">
          <img className="pigImg" onClick={this.toggleBaconized} src={this.state.baconized? this.state.imgUrl : require(`../hog-imgs/${this.formatName(this.props.hog.name)}.jpg`)}/>
        <div className="hogInfo">{this.isActive()}</div>
        <button onClick={this.toggleActive} className="showMore">{this.state.active? "Show Less" : "Show More"}</button>
        <button onClick={() => this.props.unHideHog(this.props.hog.name)}>Set this Piggy Free!</button>
       </div>
    )
  }
}