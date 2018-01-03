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
    <div className="all-listings">
    <div className="search-container">
    <input
    className="search-input"
    placeholder="Enter your search term..."
    type="search"
    value=""
    name="search"
    id="search"
    value={this.state.search}
    onChange={this.updateSearch.bind(this)}
    />
    </div>
    <div>
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
     </div>
    );
  }
}
