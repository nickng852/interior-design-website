import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: 53.44689,
            lng: -2.31144,
          }}
        >
          <Marker />
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAP_API,
})(MapContainer);
