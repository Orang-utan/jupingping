import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import styled from 'styled-components';

const data = [
  {
    title: 'Title 1',
    description: 'desc1',
    creatorName: 'YIDA',
    price: 60,
    time: '12:00',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
    distance: 300,
    gameType: true,
  },
  {
    title: 'Title 2',
    description: 'desc1',
    creatorName: 'YIDA',
    price: 60,
    time: '12:00',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
    distance: 200,
    gameType: false,
  },
  {
    title: 'Title 3',
    description: 'desc1',
    creatorName: 'YIDA',
    price: 60,
    time: '12:00',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
    distance: 400,
    gameType: false,
  },
  {
    title: 'Title 4',
    description: 'desc1',
    price: 60,
    time: '12:00',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
    distance: 300,
    gameType: true,
  },
  {
    title: 'Title 1',
    description: 'desc1',
    price: 60,
    time: '12:00',
    address: '八宝坑35号',
    currentPart: 4,
    maxPart: 6,
    distance: 300,
    gameType: false,
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

  justify-content: space-between;
`;

const Button = styled.button`
  flex-grow: 1;
  padding: 10px;
  margin: 5px;
`;

const LocationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  border: 1px solid grey;
`;

const CalendarButton = styled.button`
  width: 60px;
  height: 30px;

  border-radius: 5px;
  background-color: white;
  border-color: white;
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
      <LocationBar style={{position: 'relative'}}>
        <button style={{width: '100%', height: '100%', backgroundColor: 'transparent', borderColor: 'transparent', position: 'absolute', transform: 'translate(-30%, 0%)'}}>
          <img src='imgs/location.png' style={{width: '10px', height: '10px'}} />
          <span>{position}</span>
        </button>
      </LocationBar>

      <Header>
        <ActionButton href='/create'>创建</ActionButton>
      </Header>
      <ButtonBar>
        <CalendarButton>今天</CalendarButton>
        <CalendarButton>星期一</CalendarButton>
        <CalendarButton>星期二</CalendarButton>
        <CalendarButton>星期三</CalendarButton>
        <CalendarButton>星期四</CalendarButton>
      </ButtonBar>

      <div>
        {data.map((card) => (
          <EventCard card={card} />
        ))}
      </div>
    </Container>
  );
}
