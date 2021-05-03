import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import styled from 'styled-components';

const data = [
  {
    title: 'Title 1',
    description: 'desc1',
    price: 60,
    time: '12:00 PM',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
  },
  {
    title: 'Title 2',
    description: 'desc1',
    price: 60,
    time: '12:00 PM',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
  },
  {
    title: 'Title 3',
    description: 'desc1',
    price: 60,
    time: '12:00 PM',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
  },
  {
    title: 'Title 4',
    description: 'desc1',
    price: 60,
    time: '12:00 PM',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
  },
  {
    title: 'Title 1',
    description: 'desc1',
    price: 60,
    time: '12:00 PM',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
  },
];

const Container = styled.div`
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
`;

const ActionButton = styled.a`
  padding: 10px 40px;
  border-radius: 15px;
  background-color: #3498db;
  color: white;
`;

const ButtonBar = styled.div`
  margin: 10px;
  display: flex;
`;

const Button = styled.button`
  flex-grow: 1;
  padding: 10px;
  margin: 5px;
`;

export default function Main() {
  document.title = '局拼拼 ｜ 主页';
  const [position, setPosition] = useState('Loading...');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const crd = position.coords;
        setPosition(
          `Lat : ${crd.latitude.toFixed(2)}; Long: ${crd.longitude.toFixed(2)}`
        );
      },
      function (error) {
        console.error('Error Code = ' + error.code + ' - ' + error.message);
      }
    );
  }, []);

  return (
    <Container>
      <h1>局拼拼</h1>

      <Header>
        <div>{position}</div>
        <ActionButton href='/create'>创建</ActionButton>
      </Header>
      <ButtonBar>
        <Button>今天</Button>
        <Button>星期一</Button>
        <Button>星期二</Button>
        <Button>星期三</Button>
        <Button>星期三</Button>
      </ButtonBar>

      <div>
        {data.map((card) => (
          <EventCard card={card} />
        ))}
      </div>
    </Container>
  );
}
