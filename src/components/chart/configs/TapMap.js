import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

// 你的 Google Maps API 密钥
const apiKey = 'AIzaSyAhBoJLhWK2RH3x1LaDkkJIX3r7mnw-OFw';

const TagMap = () => (
  <APIProvider apiKey={apiKey}>
    <Map
      zoom={12}
      center={{ lat: -31.9505, lng: 115.8605 }} // 初始地图中心点坐标
      defaultUI={true}
    >
      <Marker position={{ lat: -31.944, lng: 115.857 }} />
      <Marker position={{ lat: -31.938, lng: 115.836 }} />
      <Marker position={{ lat: -31.952, lng: 115.859 }} />
      <Marker position={{ lat: -31.963, lng: 115.878 }} />
      <Marker position={{ lat: -31.948, lng: 115.858 }} />
      <Marker position={{ lat: -31.962, lng: 115.857 }} />
      <Marker position={{ lat: -31.955, lng: 115.851 }} />
      <Marker position={{ lat: -31.954, lng: 115.851 }} />
      <Marker position={{ lat: -31.772, lng: 115.766 }} />
      <Marker position={{ lat: -31.949, lng: 115.855 }} />
      <Marker position={{ lat: -31.948, lng: 115.808 }} />
      <Marker position={{ lat: -31.925, lng: 115.77 }} />
      <Marker position={{ lat: -31.956, lng: 115.866 }} />
      <Marker position={{ lat: -31.957, lng: 115.861 }} />
      <Marker position={{ lat: -32.287, lng: 115.727 }} />
      <Marker position={{ lat: -32.526, lng: 115.721 }} />
      <Marker position={{ lat: -32.239, lng: 115.791 }} />
      <Marker position={{ lat: -31.958, lng: 115.851 }} />
      <Marker position={{ lat: -31.948, lng: 115.855 }} />
      <Marker position={{ lat: -31.678, lng: 116.203 }} />
      <Marker position={{ lat: -31.956, lng: 115.871 }} />
    </Map>
  </APIProvider>
);

export default TagMap;
