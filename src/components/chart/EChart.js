/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactApexChart from 'react-apexcharts';
import { Row, Col, Typography } from 'antd';
import eChart from './configs/eChart';

function EChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Active Chat Logs</Title>
        <Paragraph className="lastweek" style={{ lineHeight: '1.5em' }}>
          <div>
            than last week <span className="bnb2">-7%</span>
          </div>
          <div>
            than last month{' '}
            <span style={{ color: 'red', fontWeight: 700 }}>+10%</span>
          </div>
        </Paragraph>
      </div>
    </>
  );
}

export default EChart;
