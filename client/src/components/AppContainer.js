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
  background-color: rgba(255,255,255,1);
  border: #979797 1px solid;
`;

const ChildrenContainer = styled.div`
  margin-bottom: 120px;
`;

const Button = styled.a`
  flex-direction: column;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function AppContainer({ children }) {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
      <TabContainer>
        <Button href='/'>
          <img src='imgs/Games_clicked.png' style={{width: '30px', height: '30px'}}/>
          <div style={{fontSize: '10px'}}>活动</div>
        </Button>
        <Button href='/create'>
          <img src='imgs/Create.png' style={{width: '40px', height: '40px'}}/>
        </Button>
        <Button href='/user'>
          <img src='imgs/User_clicked.png' style={{width: '30px', height: '30px'}}/>
          <div style={{fontSize: '10px'}}>我的</div>
        </Button>
      </TabContainer>
    </Container>
  );
}
