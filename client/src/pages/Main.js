import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import styled from 'styled-components';

const data = [
  {
    title: '《蛊魂铃》',
    description: '6人剧，速来救场！',
    creatorName: 'YIDA',
    price: 60,
    time: '12:00',
    address: '八宝坑35号',
    currentPart: 3,
    maxPart: 6,
    distance: 300,
    gameType: true,
    creatorGender: true,
  },
  {
    title: '狼人杀',
    description: '高手场，高手速入！',
    creatorName: 'John',
    price: 20,
    time: '09:30',
    address: '八宝坑29号',
    currentPart: 5,
    maxPart: 6,
    distance: 200,
    gameType: false,
    creatorGender: true,
  },
  {
    title: '狼人杀局',
    description: '有萌妹子哟，miumiu~',
    creatorName: 'Linda',
    price: 100,
    time: '13:50',
    address: '翠荫路29号3栋',
    currentPart: 10,
    maxPart: 12,
    distance: 400,
    gameType: false,
    creatorGender: false,
  },
  {
    title: '《何似在人间》',
    description: '城市之光，我是Q~',
    price: 240,
    time: '08:45',
    address: '泰安路3号5A',
    currentPart: 2,
    maxPart: 6,
    distance: 300,
    gameType: true,
    creatorGender: true,
    creatorName: 'Bobby'
  },
  {
    title: '狼人杀',
    description: '高颜值场，入局爆照~',
    price: 25,
    time: '16:30',
    address: '后海大道5号6A',
    currentPart: 7,
    maxPart: 8,
    distance: 300,
    gameType: false,
    creatorGender: false,
    creatorName: 'Lisa',
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
  background-color: #eff0fe;
  border-color: transparent;
  border-radius: 5px;

  width: 60px;
  height: 30px;

  font-size: 11px
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

      <ButtonBar>
        <CalendarButton style={{width: '60px'}}>今天</CalendarButton>
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
