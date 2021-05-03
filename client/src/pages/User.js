import EventCard from '../components/EventCard_User';
import styled from 'styled-components';
import React from 'react';

const data = [
  { title: 'Title 1', fee: 80 },
  { title: 'Title 2', fee: 60 },
  { title: 'Title 3', fee: 20 },
  { title: 'Title 4', fee: 800 },
  { title: 'Title 5', fee: 400 },
];

const userName = 'Bobby';

const UserInfoContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditInfoContainer = styled.div`
  background-color: #eff0fe;
  height: 30px;
  width: 120px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigateBarContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #979797;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function User() {
  return (
    <div>
      <image src='src/pages/1.png'></image>

      <UserInfoContainer>
        <svg height='100' width='100'>
          <circle
            cx='50'
            cy='50'
            r='40'
            stroke='grey'
            stroke-width='1'
            fill='silver'
          />
        </svg>
      </UserInfoContainer>
      <UserInfoContainer>
        <h1>{userName}</h1>
      </UserInfoContainer>
      <UserInfoContainer>
        <EditInfoContainer>
          <img src='src/pages/编辑.png' alt='' />
          <button
            style={{ border: 'transparent', backgroundColor: 'transparent' }}
          >
            编辑资料
          </button>
        </EditInfoContainer>
      </UserInfoContainer>
      <UserInfoContainer>
        <h3>我的活动</h3>
      </UserInfoContainer>

      <div>
        {data.map((card) => (
          <EventCard card={card} />
        ))}
      </div>

      <NavigateBarContainer>
        <button>活动</button>
        <button>我的</button>
      </NavigateBarContainer>
    </div>
  );
}
