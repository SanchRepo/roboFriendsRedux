import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary"
import './App.css';

import {setSearchField} from '../actions'


const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeSearch: (event) => dispatch(setSearchField(event.target.value))
	}

}


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: []
			//searchfield : ''
		}

	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}))

	}

	// onChangeSearch = (event) => {
	// 	this.setState({searchfield: event.target.value})

	// 	}

	

	render() {
		//const {robots, searchfield} = this.state;
		const {robots} = this.state;
		const {searchField, onChangeSearch} = this.props;
		const filteredBots = robots.filter(robot => {
			return robot.name.toLowerCase()
			.includes(searchField.toLowerCase())



		})

		if (!robots.length) {
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