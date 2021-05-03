import EventCard from '../components/EventCard';

const data = [
  { title: 'Title 1', description: 'desc1' },
  { title: 'Title 2', description: 'desc1' },
  { title: 'Title 3', description: 'desc1' },
  { title: 'Title 4', description: 'desc1' },
  { title: 'Title 3', description: 'desc1' },
  { title: 'Title 4', description: 'desc1' },
];

export default function Main() {
  return (
    <div>
      <h1>Main</h1>
      <div>八宝坑胡同35号</div>
      <div>
        <button>今天</button>
        <button>星期一</button>
        <button>星期二</button>
        <button>星期三</button>
        <button>星期三</button>·
      </div>

      <div>
        {data.map((card) => (
          <EventCard card={card} />
        ))}
      </div>

      <button>创建</button>
      <div>
        <button>活动</button>
        <button>我的</button>
      </div>
    </div>
  );
}
