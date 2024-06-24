import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Typography, Button } from 'antd';
const { Title } = Typography;

const cardsData = [
  {
    title: 'Operation Jiraff',
    id: '1',
    name: 'Drug Trafficking and Thefts in Perth',
    date: '2023-08-20',
    category: 'Organized Crime',
  },
  {
    title: 'Operation Eagle',
    id: '2',
    name: 'Assault Investigation at Eagles vs North Melbourne Game',
    date: '2024-06-08',
    category: 'Violent Crime',
  },
  {
    title: 'Operation Leopard',
    id: '3',
    name: 'Unlicensed Firearms Investigation',
    date: '2024-01-15',
    category: 'Drug-related Crime',
  },
  {
    title: 'Operation Fullmoon',
    id: '4',
    name: 'Sovereign State Group Illegal Activities Probe',
    date: '2021-06-15',
    category: 'Public Order Crime',
  },
  {
    title: 'Operation Tracker',
    id: '5',
    name: 'Jewelry Store Robbery Attempt',
    date: '2024-06-15',
    category: 'Property Crime',
  },
  {
    title: 'Operation Radar',
    id: '6',
    name: 'Drug Deal Undercover and Surveillance Operations',
    date: '2023-10-05',
    category: 'Drug-related Crime',
  },
  {
    title: 'Operation Night Owl',
    id: '7',
    name: 'Bar Fight and Viper Gang Takedown',
    date: '2024-06-15',
    category: 'Violent Crime',
  },
  {
    title: 'Operation Mulberry',
    id: '8',
    name: 'Homicide Investigation on Main Street',
    date: '2024-01-01',
    category: 'Violent Crime',
  },
  {
    title: 'Operation Landrover',
    id: '9',
    name: 'Domestic Violence and Child Endangerment Case',
    date: '2024-06-15',
    category: 'Domestic Crime',
  },
  {
    title: 'Operation Groundfloor',
    id: '10',
    name: 'Drug Shipment Surveillance and Bust',
    date: '2024-04-11',
    category: 'Drug-related Crime',
  },
  {
    title: 'Operation Cobalt',
    id: '11',
    name: 'Bank Robbery Hostage Situation',
    date: '2024-06-10',
    category: 'Violent Crime',
  },
  {
    title: 'Operation Coral fish',
    id: '12',
    name: 'Domestic Violence Intervention and Prosecution',
    date: '2023-06-30',
    category: 'Domestic Crime',
  },
  {
    title: 'Operation Alpaca',
    id: '13',
    name: 'Gang Surveillance and Drug Shipment Takedown',
    date: '2024-05-15',
    category: 'Organized Crime',
  },
  {
    title: 'Operation Jackpot',
    id: '14',
    name: 'Firearms Trafficking and Theft Investigation',
    date: '2023-09-05',
    category: 'Property Crime',
  },
  {
    title: 'Operation Jungle',
    id: '15',
    name: 'Burglary and Theft Ring Dismantling',
    date: '2014-06-10',
    category: 'Property Crime',
  },
  {
    title: 'Operation Poodle',
    id: '16',
    name: "Child Victims' Theft Case Resolution",
    date: '2024-06-15',
    category: 'Property Crime',
  },
  {
    title: 'Operation Landscape',
    id: '17',
    name: 'Money Laundering Ring Exposure',
    date: '2024-06-01',
    category: 'White-collar Crime',
  },
  {
    title: 'Operation Iron Shield',
    id: '18',
    name: 'Missing Child Search and Rescue',
    date: '2024-01-20',
    category: 'Public Order Crime',
  },
  {
    title: 'Operation Fargo',
    id: '19',
    name: 'Drug and Firearms Trafficking Takedown',
    date: '2024-06-10',
    category: 'Organized Crime',
  },
  {
    title: 'Operation Eclipse',
    id: '20',
    name: 'Burglary Series Investigation',
    date: '2024-05-21',
    category: 'Property Crime',
  }
];

const CardPage = () => {
  const history = useHistory();
  const [visibleCards, setVisibleCards] = useState(8);

  const handleCardClick = (id) => {
    history.push(`/detail/${id}`);
  };

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 8);
  };

  return (
    <>
      <div style={{ padding: '24px' }}>
        <Row gutter={[24, 24]}>
          {cardsData.slice(0, visibleCards).map((card) => (
            <Col key={card.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                bordered={false}
                style={{
                  width: '250px',
                  height: '220px',
                }}
                onClick={() => handleCardClick(card.id)}
              >
                <Title level={4}>{card.title}</Title>
                <p>
                  <strong>Case Category:</strong> {card.category}
                </p>
                <p>
                  <strong>Date:</strong> {card.date}
                </p>
                <p>
                  <strong>Case Summary:</strong> {card.name}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {visibleCards < cardsData.length && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px', // Adjust this value to bring the button closer
            marginBottom: '24px', // Optional, to add space below the button if needed
          }}
        >
          <Button type="primary" onClick={loadMoreCards}>
            Load More...
          </Button>
        </div>
      )}
    </>
  );
};

export default CardPage;
