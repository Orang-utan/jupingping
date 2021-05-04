import styled from 'styled-components';
import { Formik, Form } from 'formik';
import FormField from '../components/FormField';

const Container = styled.div`
  padding: 10px;
`;

export default function Create() {
  return (
    <Container>
      <div>
      <img src='imgs/mapSample.png' style={{width: '100%'}}/>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', padding: '20px'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <img src='imgs/script_activate.png' style={{width: '40px', heigh: '40px'}}/>
          <div style={{fontSize: '11px', margin: '5px'}}>剧本杀</div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '40px'}}>
          <img src='imgs/werewolf_deactivate.png' style={{width: '40px', heigh: '40px'}}/>
          <div style={{fontSize: '11px', margin: '5px'}}>狼人杀</div>
        </div>
      </div>
      
      <div style={{margin: '10px'}}>
      <div style={{color: "#ADB0B2", fontSize: '11px'}}>活动标题</div>
      <input placeholder='请输入活动标题~' style={{width: '100%', height: '24px', borderColor: 'transparent', backgroundColor:'#F9F9F9', borderRadius: '5px', marginTop: '5px', padding: '5px'}}></input>
      </div>

      <div style={{margin: '10px'}}>
        <div style={{color: "#ADB0B2", fontSize: '11px'}}>活动描述</div>
        <input placeholder='请简要介绍活动~' style={{width: '100%', height: '24px', borderColor: 'transparent', backgroundColor:'#F9F9F9', borderRadius: '5px', marginTop: '5px', padding: '5px'}}></input>
      </div>

      <div style={{margin: '10px'}}>
        <div style={{color: "#ADB0B2", fontSize: '11px'}}>活动地点</div>
        <input placeholder='八宝坑胡同一25号楼 >' style={{width: '100%', height: '24px', borderColor: 'transparent', backgroundColor:'transparent', borderRadius: '5px', marginTop: '5px', padding: '5px'}}></input>
      </div>

      <div style={{flexDirection: 'row', display: 'flex', margin: '10px'}}>
        <div style={{flexGrow: '1'}}>
          <div style={{flexGrow: '1'}}>
            <span style={{fontSize: '11px', color: '#ADB0B2'}}>活动开始时间</span>
            <input type='time' style={{marginLeft: '10px', borderColor: 'transparent', fontSize: '11px'}}></input>
          </div>
          <div style={{flexGrow: '1'}}>
            <span style={{fontSize: '11px', color: '#ADB0B2'}}>总人数</span>
            <input type='number' min='2' max='30' placeholder='请设置' style={{marginLeft: '10px', borderColor: 'transparent', fontSize: '11px'}}></input>
          </div>
        </div>
        <div style={{flexGrow: '1'}}>
          <div style={{flexGrow: '1', marginLeft: '10px'}}>
            <span style={{fontSize: '11px', color: '#ADB0B2'}}>最晚匹配时间</span>
            <input type='time' style={{marginLeft: '10px', borderColor: 'transparent', fontSize: '11px'}}></input>
          </div>
          <div style={{flexGrow: '1', marginLeft: '10px'}}>
            <span style={{fontSize: '11px', color: '#ADB0B2'}}>费用</span>
            <input type='number' min='2' max='30' placeholder='请设置' style={{marginLeft: '10px', borderColor: 'transparent', fontSize: '11px'}}></input>
          </div>
        </div>
      </div>

      <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '50px'}}>
       <button style={{height: '39px', width: '120px', borderRadius: '19.5px', borderColor: 'transparent', backgroundColor: '#9CF543', color: '#ffffff', fontSize: '16px'}}>确认发起活动</button>
      </div>
      <div style={{marginTop: '1000px'}}></div>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
        {({ errors, isSubmitting }) => (
          <Form>
            <FormField name='title' type='title' label='标题' errors={errors} 
            />
            <FormField
              name='description'
              type='description'
              label='描述'
              errors={errors}
            />
            <FormField
              name='maxParticipants'
              type='maxParticipants'
              label='最多人数'
              errors={errors}
            />
            <FormField name='price' type='price' label='价格' errors={errors} />
            <FormField
              name='location'
              type='location'
              label='地点'
              errors={errors}
            />
            <FormField
              name='startTime'
              type='startTime'
              label='开始时间'
              errors={errors}
            />
            <FormField
              name='expiredTime'
              type='expiredTime'
              label='过期时间'
              errors={errors}
            />
            <button
              type='submit'
              className='button is-link'
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
