import React from 'react';

const AllListings = (props) => {
    return (
        <div className="container">
        <h1>All listings</h1>
          {props.listings &&
           props.listings.map(listing => {
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

  export default AllListings
