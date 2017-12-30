import React, { Component } from 'react';
import axios from 'axios'

export default class AllListings extends Component {
  constructor() {
    super();
    this.state = { listings: [], search: '' };
  }

  componentDidMount() {
    axios
      .get('/api/listings')
      .then(response => response.data)
      .then(listings => this.setState({ listings }))
      .then(console.log('done!'));
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 10)
    });
  }

  render() {

    const filterdListings = this.state.listings.filter(listing => {
        return listing.title
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
    });

    return (
      <div className="container">
        <h1>All listings</h1>
        <div>
          <input
            className="search"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          <hr />
        </div>
        {filterdListings &&
          filterdListings.map(listing => {
            return (
              <div key={listing.id}>
                <h2>{listing.title}</h2>
                <h3>{listing.description}</h3>
                <img src={listing.picture} />
              </div>
            );
          })}
      </div>
    );
  }
}
