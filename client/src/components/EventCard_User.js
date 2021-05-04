import styled from 'styled-components';

const Container = styled.div`
  background-color: #fffff;
  border: black;
  margin: 10px;
  padding: 15px;
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
  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;

export default function EventCard_User({ card: { gameType, creatorName, startTime, participants, maxParticipants, title, description, price, location, distance, creatorGender } }) {
  let iconPath;
  if(gameType){
    iconPath = 'imgs/scriptIcon.png';
  }
  else{
    iconPath = 'imgs/werewolfIcon.png';
  }

  let status;
  if(participants.length >= maxParticipants){
    status = '已拼成';
  }
  else{
    status = '拼车中';
  }

  let avatarPath;
  if(creatorGender){
    avatarPath = 'imgs/avatar_male.png';
  }
  else{
    avatarPath = 'imgs/avatar_female.png'
  }

  //const month = startTime.getMonth();
  
  return (
    <Container>
      <Left>
        <div style={{position: 'relative'}}>
          <img src={iconPath} style={{width: "28px", height: "28px"}}/>
          <span style={{ marginLeft: '10px', fontSize: '18px', position: 'absolute', top: '50%', transform: 'translate(0%, -55%)', letterSpacing: '-1.5px', fontFamily: 'arial'}}>
            <pre>{title}  ￥{price}/人</pre>
          </span>
        </div>

        <div style={{marginTop: '10px'}}>
          <span style={{marginTop: '10px', fontSize: '18px'}}>星期二</span>
          <span style={{ marginLeft: '10px', fontSize: '18px' }}>5月4日</span>
          <span style={{ marginLeft: '10px', fontSize: '18px' }}>{startTime}</span>
        </div>

        <div style={{marginTop: '15px', fontSize: '18px'}}>
          <span>{location}</span>
          <span style={{marginLeft: '20px', color: 'grey'}}>{distance}m</span>
        </div>

        <div style={{marginTop: '25px', position: 'relative'}}>
          <img src={avatarPath} style={{width: '28px', height: '28px'}}/>
          <span style={{fontSize: '14px', marginLeft: '15px', position: 'absolute', top: '50%', transform: 'translate(0%, -65%)'}}>{creatorName}</span>
          <img src='imgs/tel.png'  style={{width: "20px", height: '20px', marginLeft: '120px', position: 'absolute', top: '50%', transform: 'translate(0%, -65%)'}}/>
        </div>
      </Left>
      <Right>
        <div style={{ fontSize: '14px', flexGrow: '1', textAlign: 'right', transform: 'translate(-8%, 0%)'}}>{status}</div>

        <div style={{fontSize: '36px', flexGrow: '3', textAlign: 'right', transform: 'translate(-8%, 0%)'}}>{participants.length}/{maxParticipants}</div>

        <div style={{marginTop: '60px'}}><button style={{
          height: '25px', 
          width: '60px', 
          borderRadius: '12.5px',
          border: '1.5px solid #000000',
          backgroundColor: '#ffffff'
        }}>跳车</button></div>
      </Right>
    </Container>
  );
}
