import '../assets/styles/input.css';
import { Col, Row, Input, Button, Typography } from 'antd';
import Graph3DPage from './Graph3DPage';

const { Search } = Input;
const { Title } = Typography;

const buttonStyle = {
  flex: 1,
  maxWidth: '80%',
  textAlign: 'center',
  fontSize: '13px',
  padding: '20px',
  margin: '0 8px',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  border: '1px solid #d9d9d9',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 'normal',
};

const SmartDatabase = () => {
  return (
    <>
      <div
        className="layout-content"
        style={{
          padding: '24px',
          backgroundColor: '#FAFAFA',
          marginLeft: '0',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Row gutter={[24, 24]} style={{ marginBottom: '8px' }}>
        </Row>
        <Row
          gutter={[24, 24]}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '8px',
          }}
        >
          <Search
            style={{ width: '60%' }}
            placeholder="Explore the information you want to know..."
            enterButton="Search"
            size="large"
          />
        </Row>
        <Row
          gutter={[24, 24]}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <Button style={buttonStyle}>
            Example 1: Explore a single chat log: Operation Giraff
          </Button>
          <Button style={buttonStyle}>
            Example 2: Explore correlations between different chat logs:
            Operation Giraff & Operation Jelly
          </Button>
          <Button style={buttonStyle}>
            Example 3: Explore interactions between entities: Analyze
            correlations among all locations, persons, and events
          </Button>
        </Row>
      </div>

      <Row
        gutter={[24, 34]}
        style={{
          height: '550px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: 'black',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            marginLeft: '0',
          }}
        >
          <Graph3DPage />
        </div>
      </Row>
    </>
  );
};

export default SmartDatabase;
