import React from 'react';
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBar from "../components/SearchBar";

import ErrorBoundary from "../components/ErrorBoundary"
import './App.css';

import {setSearchField, requestRobots} from '../actions'


const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.reduceRobots.robots,
		isPending: state.reduceRobots.isPending,
		error: state.reduceRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeSearch: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}

}


class App extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: []
	// 		//searchfield : ''
	// 	}

	// }

	componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())
	// 		.then(users => this.setState({robots:users}))
		this.props.onRequestRobots();
	}


	// onChangeSearch = (event) => {
	// 	this.setState({searchfield: event.target.value})

	// 	}

	

	render() {
		//const {robots, searchfield} = this.state;
		//const {robots} = this.state;
		const {searchField, onChangeSearch, robots, isPending} = this.props;
		const filteredBots = robots.filter(robot => {
			return robot.name.toLowerCase()
			.includes(searchField.toLowerCase())



		})

		if (isPending) {
			return <h1 className="tc">Loading...</h1>;
		} else {

			return (
				<React.Fragment>
					<div className="tc">
						<div>
							<h1 className="f1">RoboFriends</h1>
							<SearchBar searchChange={onChangeSearch}/>
						</div>
						<Scroll>
							<ErrorBoundary>
								<CardList robots = {filteredBots}/>
							</ErrorBoundary>
						</Scroll>
					</div>
				</React.Fragment>

			)
		}



	}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);