import styled from 'styled-components';

const UserInfoContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailInfoContainer = styled.div`
  display: flex;
  padding: 5px;
  margin: 25px;
`;

export default function Register(){
  let avatarPath = 'imgs/avatar_male.png';  
  
  return(
      <div>
        <UserInfoContainer style={{marginTop: '80px'}}>
          <img src={avatarPath} style={{width: '120px', height: '120px'}}/>
        </UserInfoContainer>

        <DetailInfoContainer style={{marginTop: '40px'}}>
          <span style={{fontSize: '11px', flexGrow: '1'}}>昵称</span>
          <input style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: 'grey', border: 'transparent', backgroundColor: 'transparent'}}></input>
        </DetailInfoContainer>
        <DetailInfoContainer>
          <span style={{fontSize: '11px', flexGrow: '1'}}>手机号</span>
          <input style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: 'grey', border: 'transparent', backgroundColor: 'transparent'}}></input>
        </DetailInfoContainer>
        <DetailInfoContainer>
          <span style={{fontSize: '11px', flexGrow: '1'}}>密码</span>
          <input type='password' style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: 'grey', border: 'transparent', backgroundColor: 'transparent'}}></input>
        </DetailInfoContainer>
        <DetailInfoContainer>
          <span style={{fontSize: '11px', flexGrow: '1'}}>性别</span>
          <select name='gender' style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
            <option value='male'>男</option>
            <option value='femaile'>女</option>
          </select>
        </DetailInfoContainer>

        <UserInfoContainer style={{marginTop: '50px'}}>
         <button style={{width: '160px', height: '40px', fontSize: '18px', backgroundColor: 'white', borderRadius: '5px', border: 'solid 2px black'}}>注册</button>
        </UserInfoContainer>
      </div>
    );
}