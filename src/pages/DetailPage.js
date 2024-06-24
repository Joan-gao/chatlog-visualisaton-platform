import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import {
  Card,
  Col,
  Row,
  Typography,
  Button,
  Timeline,
  Table,
} from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import Paragraph from 'antd/lib/typography/Paragraph';
import previewImage from '../assets/images/previewImg.jpg';
import cctv from '../assets/images/cctv.PNG';
import cctv2 from '../assets/images/cctv2.PNG';

import mapview from '../assets/gif/mapview.gif';

const columns = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Officer Name',
    dataIndex: 'officer_name',
    key: 'officer_name',
  },
  {
    title: 'Summary',
    dataIndex: 'message',
    key: 'message',
    render: (text) => (
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {text}
      </div>
    ),
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
];

const columns2 = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Source',
    dataIndex: 'entityName',
    key: 'entityName',
    width: '20%',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: '20%',
  },
  {
    title: 'Event Description',
    dataIndex: 'description',
    key: 'description',
    width: '60%',
    render: (text) => (
      <div
        style={{
          textAlign: 'center',
          whiteSpace: 'normal',
          wordBreak: 'break-word',
        }}
      >
        {text}
      </div>
    ),
  },
];

const data2 = [
  {
    key: '1',
    time: '2023-08-20 10:00',
    entityName: 'Officer David Wilson',
    location: 'Perth CBD',
    description: 'Discovered drug trafficking activity near Perth CBD.',
  },
  {
    key: '2',
    time: '2023-08-20 14:15',
    entityName: 'CCTV Footage',
    location: 'Joondalup',
    description: 'Captured an image of a suspicious person.',
  },
  {
    key: '3',
    time: '2023-08-20 19:30',
    entityName: 'Registered Address',
    location: 'Mount Lawley',
    description: "Suspect's registered address identified.",
  },
  {
    key: '4',
    time: '2023-08-21 21:45',
    entityName: 'Anonymous Report',
    location: 'Joondalup',
    description: 'Anonymous report of someone dealing drugs nearby.',
  },
];

const data = [
  {
    key: 1,
    time: '20/8/2023 06:45:00',
    officer_name: 'Officer John Roberts',
    message: 'Started surveillance on drug trafficking suspect.',
    image: 'N/A',
  },
  {
    key: 2,
    time: '20/8/2023 07:35:00',
    officer_name: 'Officer Emily Clark',
    message: 'Observed suspect meeting accomplice, possible illegal exchange.',
    image: (
      <div>
        <img
          src={cctv} // Update with your image path
          alt="Suspicious person"
          style={{ width: '100px', marginTop: '10px' }}
        />
      </div>
    ),
  },
  {
    key: 3,
    time: '20/8/2023 08:25:00',
    officer_name: 'Officer David Wilson',
    message: 'ANPR hit on suspected stolen vehicle.',
    image: 'N/A',
  },
  {
    key: 4,
    time: '20/8/2023 09:15:00',
    officer_name: 'Officer Laura Jones',
    message: 'Suspects entered premises with suspicious activity.',
    image: (
      <div>
        <img
          src={cctv2} // Update with your image path
          alt="Suspicious person"
          style={{ width: '100px', marginTop: '10px' }}
        />
      </div>
    ),
  },
  {
    key: 5,
    time: '20/8/2023 10:05:00',
    officer_name: 'Officer John Roberts',
    message: 'Obtained CCTV of suspects with large bags.',
    image: 'N/A',
  },
  {
    key: 6,
    time: '20/8/2023 10:55:00',
    officer_name: 'Officer Emily Clark',
    message: "Telco data confirmed suspect's location.",
    image: 'N/A',
  },
  {
    key: 7,
    time: '20/8/2023 11:45:00',
    officer_name: 'Officer David Wilson',
    message: 'Suspect posting on marketplace, possible stolen goods.',
    image: 'N/A',
  },
  {
    key: 8,
    time: '20/8/2023 12:35:00',
    officer_name: 'Officer Laura Jones',
    message: "Monitoring suspect's online marketplace activity.",
    image: 'N/A',
  },
  {
    key: 9,
    time: '20/8/2023 13:25:00',
    officer_name: 'Officer John Roberts',
    message: 'Linked online listings to recent thefts, planning surveillance.',
  },
  {
    key: 10,
    time: '21/8/2023 07:10:00',
    officer_name: 'Officer Emily Clark',
    message: 'Resumed surveillance on suspects leaving location.',
  },
  {
    key: 11,
    time: '21/8/2023 08:00:00',
    officer_name: 'Officer David Wilson',
    message: 'Followed suspect to new location, noted multiple entries.',
  },
  {
    key: 12,
    time: '21/8/2023 08:50:00',
    officer_name: 'Officer Laura Jones',
    message: 'Covert surveillance suggests drug trafficking.',
  },
  {
    key: 13,
    time: '21/8/2023 09:40:00',
    officer_name: 'Officer John Roberts',
    message: 'Requested narcotics unit assistance for raid.',
  },
  {
    key: 14,
    time: '21/8/2023 10:30:00',
    officer_name: 'Officer Emily Clark',
    message: 'Raid executed, arrests made.',
  },
  {
    key: 15,
    time: '21/8/2023 11:20:00',
    officer_name: 'Officer David Wilson',
    message: 'Arrests and seizure of drugs and stolen property.',
  },
  {
    key: 16,
    time: '21/8/2023 12:10:00',
    officer_name: 'Officer Laura Jones',
    message: 'Preparation of case files for prosecution.',
  },
  {
    key: 17,
    time: '21/8/2023 13:00:00',
    officer_name: 'Officer John Roberts',
    message: 'Interviewed suspects for investigation.',
  },
  {
    key: 18,
    time: '21/8/2023 13:50:00',
    officer_name: 'Officer Emily Clark',
    message: 'Liaising with forensics for evidence analysis.',
  },
  {
    key: 19,
    time: '22/8/2023 07:00:00',
    officer_name: 'Officer David Wilson',
    message: 'Followed up on marketplace leads, found stolen items.',
  },
  {
    key: 20,
    time: '22/8/2023 07:50:00',
    officer_name: 'Officer Laura Jones',
    message: 'Recovered stolen property from dealers.',
  },
];

const DetailPage = () => {
  const { id } = useParams();
  const { Title, Text } = Typography;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const [reverse, setReverse] = useState(false);

const timelineList = [
    {
      title: 'Started surveillance on drug trafficking suspect',
      time: '20 AUG 06:45 AM',
      color: 'green',
    },
    {
      title: ' Observed suspect meeting accomplice, possible illegal exchange.',
      time: '20 AUG 07:35 AM',
      color: 'blue',
    },
    {
      title: 'ANPR hit on suspected stolen vehicle',
      time: '20 AUG 08:25 AM',
      color: 'blue',
    },
    {
      title: 'Suspects entered premises with suspicious activity.',
      time: '20 AUG 09:15 AM',
      color: 'blue',
    },
    {
      title: 'Suzy Jackson Missing Person Case - Last Known Movements Traced',
      time: '20 AUG 10:45 AM',
      color: 'gray',
    },
];

  const [isPlaying, setIsPlaying] = useState(false);
  const gifRef = useRef(null);

  const handlePlayGif = () => {
    setIsPlaying(true);
    // 设定一个定时器，根据 GIF 的播放时间来设置
    setTimeout(() => {
      setIsPlaying(false);
    }, 16000); // 假设 GIF 播放时间为 5 秒
  };

  return (
    <>
      <div className="layout-content">
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '5px',
                }}
              >
                <Title level={5} style={{ margin: 0 }}>
                  Simulate Route Generation
                </Title>
              </div>
              {!isPlaying && (
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={{
                      width: '100%',
                      height: '80%',
                      borderRadius: '15px',
                    }}
                    onClick={handlePlayGif}
                  />
                </div>
              )}
              {isPlaying && (
                <img
                  ref={gifRef}
                  src={mapview}
                  alt="Map GIF"
                  style={{
                    width: '100%',
                    height: '80%',
                    borderRadius: '15px',
                  }}
                />
              )}
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Title level={5} style={{ margin: 0, textAlign: 'center' }}>
                Entity Relationship (time, person, location, Event)
              </Title>
              <Table columns={columns2} dataSource={data2} pagination={false} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className="mb-24">
            <Card bordered={false} className="criclebox cardbody h-full">
              <Title level={5} style={{ margin: 0, textAlign: 'center' }}>
                Chat Log Summary
              </Title>
              <div>
                <div style={{ marginBottom: 16 }}>
                  <Button
                    type="primary"
                    onClick={start}
                    disabled={!hasSelected}
                    loading={loading}
                  >
                    Filter
                  </Button>
                  <span style={{ marginLeft: 8 }}>
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ''}
                  </span>
                </div>
                <Table
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 4 }}
                />
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>Single Chat Log History</Title>
                <Paragraph
                  className="lastweek"
                  style={{ marginBottom: 24 }}
                ></Paragraph>

                <Timeline
                  pending="Load More..."
                  className="timelinelist"
                  reverse={reverse}
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.title}</Title>
                      <Text>{t.time}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
                <Button
                  type="primary"
                  className="width-100"
                  onClick={() => setReverse(!reverse)}
                >
                  {<MenuUnfoldOutlined />} Reverse
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DetailPage;
