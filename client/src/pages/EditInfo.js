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

let userGender = true;

export default function EditInfo(){
let avatarPath = '';
if(userGender == true){
  avatarPath = 'imgs/avatar_male.png';
}
else{
  avatarPath = 'imgs/avatar_female.png';
}

    return(
        <div>
          <div style={{width: '100%', height: '50px', border: 'solid 0.5px #f0f0f0'}}>
            <button style={{width: '30px', height: '30px', marginTop: '10px', marginLeft: '15px', backgroundColor: 'transparent', borderColor: 'transparent'}}>
              <img src='imgs/return.png' style={{height: '100%'}}></img>
            </button>  
          </div>
          <UserInfoContainer>
            <img src={avatarPath} style={{width: '70px', height: '70px', margin: '10px'}}/>
          </UserInfoContainer>
          <UserInfoContainer style={{marginTop: '15px'}}>
            <img src='src/pages/编辑.png' alt='' />
            <button
              style={{ border: 'transparent', backgroundColor: '#eff0fe', width: '55px', height: '21px', borderRadius: '10.5px' }}
            >
              <span style={{fontSize: '10px'}}>修改头像</span>
            </button>
          </UserInfoContainer>

          <DetailInfoContainer>
            <span style={{fontSize: '11px', flexGrow: '1'}}>昵称</span>
            <input placeHolder='Eason' style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: '#ADB0B2', border: 'transparent', backgroundColor: 'transparent'}}></input>
          </DetailInfoContainer>
          <DetailInfoContainer>
            <span style={{fontSize: '11px', flexGrow: '1'}}>手机号</span>
            <text style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: '#ADB0B2', border: 'transparent', backgroundColor: 'transparent'}}>17611283721</text>
          </DetailInfoContainer>
          <DetailInfoContainer>
            <span style={{fontSize: '11px', flexGrow: '1'}}>性别</span>
            <text style={{textAlign: 'right', flexGrow: '4', height: '20px', fontSize: '11px', color: '#ADB0B2', border: 'transparent', backgroundColor: 'transparent'}}>男</text>
          </DetailInfoContainer>
        </div>
    );
}