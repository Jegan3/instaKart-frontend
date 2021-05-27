/*eslint-disable*/
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const GoogleMap = ({ google, lat, lng }) => (
  <Map
    google={google}
    zoom={2}
    style={mapStyles}
    initialCenter={{ lat: 51.506, lng: -0.169 }}
  >
    <Marker position={{ lat, lng }} />
  </Map>
);

export default GoogleApiWrapper({ apiKey: 'AIzaSyCJ9u9ilIkdLTVC8HexJ9c4-lUfngimTZE' })(GoogleMap);
