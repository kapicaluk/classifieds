import React, { Component } from 'react';
import axios from 'axios'


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
			<h1>All listings</h1>
			{this.state.listings && this.state.listings.map((listing,idx) => {
				return (
					<div key="idx"
				<h1>{listing.title}</h1>
				<h3>{listing.description}</h3>
				</div>)
			})}
      </div>
    );
  }
}
