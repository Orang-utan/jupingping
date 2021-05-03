import styled from 'styled-components';

const Container = styled.div`
  background-color: #fffff;
  border: black;
  margin: 15px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.26);
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const Right = styled.div`
  display:flex;
  flex-grow: 0;
`;

export default function EventCard_User({ card: {title, fee}}){
  return(
    <Container>
      <Left>
        <div>
        <img src="imgs/logo.png"/>
        <span>狼人杀</span>
        <span style={{marginLeft: "10px"}}>{title}</span>
        <span style={{marginLeft: "20px"}}>￥{fee}/人</span>
      </div>

      <div>
        <span>星期一</span>
        <span style={{marginLeft: "10px"}}>5月4日</span>
        <span style={{marginLeft: "10px"}}>12:00</span>
      </div>
      </Left>
      <Right>
        <span style={{fontSize: "14px"}}>已拼成</span>
      </Right>
    </Container>
  )
}