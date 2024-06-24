// import React from 'react';
// import { Scene } from '@antv/l7';
// import { BaiduMap } from '@antv/l7-maps';
// import { Typography } from 'antd';

// function MapView() {
//   const { Title, Paragraph } = Typography;

//   React.useEffect(() => {
//     new Scene({
//       id: 'map',
//       map: new BaiduMap({
//         center: [115.857048, -31.953512],
//         zoom: 10.056,
//         style: 'c17b1c2b528429a7b04bbc8d3eb8bae9',
//         logoVisible: false,
//         container: { language: 'en' },
//       }),
//     });
//   }, []);

//   return (
//     <div>
//       <div className="map-container">
//         <Title level={5}>Crime Location MapView</Title>
//         <Paragraph>
//           This map is centered at Perth [107.054293, 35.246265] with zoom level 4.056.
//         </Paragraph>
//       </div>
//       <div id="map" style={{ height: '500px' }}></div>
//     </div>
//   );
// }

// export default MapView;

import React, { useEffect, useRef } from 'react';
import { Scene, PointLayer } from '@antv/l7';
import { BaiduMap } from '@antv/l7-maps';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const pointList = [
  {
    id: 1,
    name: '点位1',
    lat: -31.9522,
    lng: 115.8589,
  },
  {
    id: 2,
    name: '点位2',
    lat: -31.9822,
    lng: 115.8889,
  },
  {
    id: 3,
    name: '点位3',
    lat: -32.0022,
    lng: 115.9089,
  },
  {
    id: 4,
    name: '点位4',
    lat: -31.9722,
    lng: 115.8789,
  },
  {
    id: 5,
    name: '点位5',
    lat: -31.9422,
    lng: 115.8489,
  },
  {
    id: 6,
    name: '点位6',
    lat: -32.0122,
    lng: 115.9189,
  },
  {
    id: 7,
    name: '点位7',
    lat: -31.9622,
    lng: 115.8689,
  },
  {
    id: 8,
    name: '点位8',
    lat: -31.9922,
    lng: 115.8989,
  },
  {
    id: 9,
    name: '点位9',
    lat: -31.9322,
    lng: 115.8389,
  },
  {
    id: 10,
    name: '点位10',
    lat: -32.0022,
    lng: 115.8989,
  },
];

const MapView = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new BaiduMap({
        center: [115.857048, -31.953512],
        zoom: 10.056,
        style: 'c17b1c2b528429a7b04bbc8d3eb8bae9',
        logoVisible: false,
      }),
    });

    scene.on('loaded', () => {
      const pointLayer = new PointLayer({})
        .source(pointList, {
          parser: {
            type: 'json',
            x: 'lng',
            y: 'lat',
          },
          cluster: false,
        })
        .shape('circle')
        .scale('point_count', {
          type: 'quantile',
        })
        .size('point_count', [3, 5, 7, 9, 11])
        .active(true)
        .color('red')
        .style({
          opacity: 0.5,
          strokeWidth: 1,
        });

      scene.addLayer(pointLayer);
    });

    mapRef.current = scene;

    return () => {
      scene.destroy();
    };
  }, []);

  return (
    <div>
      <div className="map-container">
        <Title level={4}>Crime Location MapView</Title>
        <Paragraph className="lastweek" style={{ lineHeight: '1.5em' }}>
          <div>
            Least Dangerous: <span className="bnb2">Joondalup</span>
          </div>
          <div>
            Most Dangerous:{' '}
            <span style={{ color: 'red', fontWeight: 700 }}>
              Northbridge
            </span>
          </div>
        </Paragraph>
      </div>
      <div id="map" style={{ height: '500px' }} />
    </div>
  );
};

export default MapView;
