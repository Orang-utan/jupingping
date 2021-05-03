import styled from 'styled-components';

const Container = styled.div`
  background-color: #ecf0f1;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: inset;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex-grow: 3;
`;

const Right = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function EventCard({
  card: { title, description, price, time, address, currentPart, maxPart },
}) {
  return (
    <Container>
      <Left>
        <span>
          <strong>{title}</strong> | ${price} / 人
        </span>
        <p>{description}</p>
        <span>
          <strong>{time}</strong> | {address}
        </span>
      </Left>
      <Right>
        <h1>
          {currentPart}/{maxPart}
        </h1>
        <button>加入游戏</button>
      </Right>
    </Container>
  );
}
