import styled from 'styled-components';

const Container = styled.div`
  background-color: #ecf0f1;
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: inset;
`;

export default function EventCard({ card: { title, description } }) {
  return (
    <Container>
      <h1>{title}</h1>
      <span>$80 / 人</span>
      <p>{description}</p>
    </Container>
  );
}
