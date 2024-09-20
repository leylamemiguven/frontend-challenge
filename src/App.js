import './App.css';
import { useState } from 'react';

import sunglassesImg from './assets/sunglasses.png';
import shoesImg from './assets/shoes.png';
import kimonoImg from './assets/komono.png';
import dressImg from './assets/dress.png';

function App() {

  const glasses = { name: 'Glasses', src: sunglassesImg };
  const shoes = { name: 'Shoes', src: shoesImg };
  const kimono = { name: 'Kimono', src: kimonoImg };
  const dress = { name: 'Dress', src: dressImg };

  const [closetItems, setClosetItems] = useState([glasses, shoes, kimono]);
  const [suitcaseItems, setSuitcaseItems] = useState([dress]);

  const moveItem = (item) => {
    if (closetItems.includes(item)) {
      setSuitcaseItems((prev) => [...prev, item]);
      setClosetItems((prev) => prev.filter((i) => i !== item));
    } else if (suitcaseItems.includes(item)) {
      setClosetItems((prev) => [...prev, item]);
      setSuitcaseItems((prev) => prev.filter((i) => i !== item));
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="section">
          <h3>Closet</h3>
          <div className="closet-container">
          {closetItems.map((item) => (
            <div key={item.name} className="item">
              <img src={item.src} alt={item.name} className="item-image" />
              <button onClick={() => moveItem(item)} className="move-btn">
                Move →
              </button>
            </div>
          ))}
          </div>
        </div>
        <div className="section">
          <h3>Suitcase</h3>
          <div className="suitcase-container">
          {suitcaseItems.map((item) => (
            <div key={item.name} className="item">
              <img src={item.src} alt={item.name} className="item-image" />
              <button onClick={() => moveItem(item)} className="move-btn">
                Move ←
              </button>
            </div>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
