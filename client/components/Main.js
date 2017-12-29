import React, { Component } from 'react';
import axios from 'axios'
import AllListings from './AllListings'


export default class Main extends Component {
  constructor(props) {
    super(props);
		this.state = {
			listings: []
		}
  }
componentDidMount(){
	axios.get('/api/listings')
	.then(response => response.data)
	.then(listings => this.setState({listings}))
	.then(console.log('done!'))
}

  render() {
    return (
			<div>
			<AllListings listings={this.state.listings} />
			</div>
    );
  }
}
