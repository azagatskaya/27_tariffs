import logo from './logo.svg';
import styles from './App.css';
import Tariff from './components/Tariff.jsx';
import React from 'react';

const tariffs = [
  {
    id: 0,
    name: 'Безлимитный 300',
    price: 300,
    color: '#2cc1d5',
    colorName: '#229cab',
    speed: 10,
    details: 'Объем включенного трафика не ограничен',
  }, {
    id: 1,
    name: 'Безлимитный 450',
    price: 450,
    color: '#24ae8d',
    colorName: '#1f8972',
    speed: 50,
    details: 'Объем включенного трафика не ограничен',
  }, {
    id: 2,
    name: 'Безлимитный 550',
    price: 550,
    color: '#f46a5f',
    colorName: '#c4554e',
    speed: 100,
    details: 'Объем включенного трафика не ограничен',
  }, {
    id: 3,
    name: 'Безлимитный 1000',
    price: 1000,
    color: '#333a44',
    colorName: '#282f37',
    speed: 200,
    details: 'Объем включенного трафика не ограничен',
  }
]

function App() {
  const [selectedId, setSelectedId] = React.useState(2);
  const handleTariffSelect = (id) => {
    console.log(id);
    setSelectedId(id);
  }
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        {tariffs.map(el =>
          <Tariff {...el} handleTariffSelect={(id) => handleTariffSelect(id)} isSelected={selectedId === el.id ? true : false} />
          )}
      </div>
      </div>
  );
}

export default App;
