import piggy from '../porco.png'
import React from 'react'

export default class Nav extends React.Component {
	constructor(props){
		super(props)
		console.log(this.props.greased)
	}
	render () {
		return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div className="ui menu" style={{width: 1200 + 'px'}}>
  			{/* <a className="item active"> */}
				<select onChange={event => this.props.sortHogs(event.target.value)} className="item">
					<option value="">Sort By</option>
					<option value="weight">Weight</option>
					<option value="name">Name</option>
				</select>
				{/* </a> */}
		<a onClick={this.props.toggleGreased} className={this.props.greased? "item active" : "item"}>{this.props.greased ? 'Show All' : 'Only Greased'}</a>
  			<div className="right menu">
    			<a className={this.props.hidden? "item active" : "item"} onClick={this.props.toggleShowHidden}>Hidden Hogs</a>
  			</div>
			</div>
		</div>
		)
	}
}

