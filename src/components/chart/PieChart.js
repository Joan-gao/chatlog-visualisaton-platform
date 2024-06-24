import React from 'react';
import ReactApexChart from 'react-apexcharts';
import pieChartConfig from './configs/pieChartConfig';
import { Typography } from 'antd';

const PieChart = () => {
    const { Title, Paragraph } = Typography;
  return (
    <>
      <div id="pie-chart">
        <ReactApexChart
          className="pie-chart"
          options={pieChartConfig.options}
          series={pieChartConfig.series}
          type="pie"
          height={232}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Crime Categories Percentage</Title>
        <Paragraph className="lastweek" style={{ lineHeight: '1.5em' }}>
          <div>
            Least Frequent: <span className="bnb2">Cyber Crime</span>
          </div>
          <div>
            Most Frequent:{' '}
            <span style={{ color: 'red', fontWeight: 700 }}>
              Property Crime
            </span>
          </div>
        </Paragraph>
      </div>
    </>
  );
};

export default PieChart;
