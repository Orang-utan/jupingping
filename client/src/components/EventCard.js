import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: inset;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px silver;
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
  card: { title, gameType, creatorName, description, price, time, address, currentPart, maxPart, distance, creatorGender},
}) {
  let iconPath;
  if(gameType){
    iconPath = 'imgs/scriptIcon.png';
  }
  else{
    iconPath = 'imgs/werewolfIcon.png';
  }

  let avatarPath;
  if(creatorGender){
    avatarPath = 'imgs/avatar_male.png';
  }
  else{
    avatarPath = 'imgs/avatar_female.png'
  }

  return (
    <Container>
      <Left>
        <div style={{position: 'relative'}}>
          <img src={iconPath} style={{width: '25px', height: '25px'}}/>
          <span style={{position: 'absolute', marginLeft: '10px', fontSize: '24px', transform: 'translate(0%, -15%)'}}><strong>{title}</strong></span>
          <span style={{position: 'absolute', marginLeft: '200px', fontSize: '18px'}}>￥{price}/人</span>
        </div>

        <div style={{marginTop: '10px'}}>
          <span style={{fontSize: '18px'}}>{description}</span>
        </div>
        
        <div>
          <span style={{fontSize: '18px'}}><pre>{time}   {address}</pre></span>
        </div>

        <div style={{marginTop: '25px', position: 'relative'}}>
          <img src={avatarPath} style={{width: '28px', height: '28px'}}/>
          <span style={{fontSize: '14px', position: 'absolute', marginLeft: '10px', transform: 'translate(0%, 20%)'}}>{creatorName}</span>
      </div>


      </Left>
      <Right style={{position: 'relatice'}}>
        <div style={{fontSize: '36px', textAlign: 'right' , position: 'absolute', transform: 'translate(-10%, -120%)', textAlign: 'right'}}>
          {currentPart}/{maxPart}
        </div>
        <div style={{color: '#6D7278', flexGrow: '2', position: 'absolute', transform: 'translate(0%, 120%)'}}>
          {distance}m
        </div>
        <button style={{backgroundColor: 'transparent', border: '1.5px black solid', borderRadius: '12.5px', width: '60px', height: '25px', flexGrow: '1', position: 'absolute', transform: 'translate(0%, 250%)'}}>上车</button>
      </Right>
    </Container>
  );
}
