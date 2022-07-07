import logo from './logo.svg';
import styles from './App.css';
import Tariff from './components/Tariff.jsx';

const tariffs = [
  {
    name: 'Безлимитный 300',
    price: 300,
    color: '#2cc1d5',
    colorName: '#229cab',
    speed: 10,
    details: 'Объем включенного трафика не ограничен'
  }, {
    name: 'Безлимитный 450',
    price: 450,
    color: '#24ae8d',
    colorName: '#1f8972',
    speed: 50,
    details: 'Объем включенного трафика не ограничен'
  },{
    name: 'Безлимитный 550',
    price: 550,
    color: '#f46a5f',
    colorName: '#c4554e',
    speed: 100,
    details: 'Объем включенного трафика не ограничен',
    isSelected: true
  },{
    name: 'Безлимитный 1000',
    price: 1000,
    color: '#333a44',
    colorName: '#282f37',
    speed: 200,
    details: 'Объем включенного трафика не ограничен'
  }
]

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        {tariffs.map(el => <Tariff tariff={el} />)}
      </div>
      </div>
  );
}

export default App;
