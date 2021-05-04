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

export default function EditInfo(){
    let avatarPath = 'imgs/avatar_male.png';

    return(
      <div>
        <UserInfoContainer style={{marginTop: '80px'}}>
          <img src={avatarPath} style={{width: '120px', height: '120px'}}/>
        </UserInfoContainer>

        <DetailInfoContainer style={{marginTop: '40px'}}>
          <span style={{fontSize: '11px', flexGrow: '1'}}>手机号</span>
          <input style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: '#ADB0B2', border: 'transparent', backgroundColor: 'transparent'}}></input>
        </DetailInfoContainer>
        <DetailInfoContainer>
        <span style={{fontSize: '11px', flexGrow: '1'}}>密码</span>
        <input type='password' style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: '#ADB0B2', border: 'transparent', backgroundColor: 'transparent'}}></input>
        </DetailInfoContainer>

        <UserInfoContainer style={{marginTop: '50px'}}>
        <button style={{width: '160px', height: '40px', fontSize: '18px', backgroundColor: 'white', borderRadius: '5px', border: 'solid 2px black'}}>登录</button>
        </UserInfoContainer>
      </div>
    );
}