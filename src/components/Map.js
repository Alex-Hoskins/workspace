import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import styled from 'styled-components';

const MapComponent = (props) =>{
    return(
        <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      />
    )
}

export default MapComponent;