import styled from 'styled-components';

const Container = styled.div``;

const TabContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ChildrenContainer = styled.div`
  margin-bottom: 120px;
`;

const Button = styled.a`
  flex-grow: 1;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f1;
  margin: 15px;
  border-radius: 15px;
`;

export default function AppContainer({ children }) {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
      <TabContainer>
        <Button href='/'>活动</Button>
        <Button href='/user'>我的</Button>
      </TabContainer>
    </Container>
  );
}
