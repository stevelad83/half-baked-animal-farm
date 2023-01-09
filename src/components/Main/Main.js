import React from 'react';
import './Main.css';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.type} name={animal.name} image={animal.image} sound={animal.says} />
      ))}
    </main>
  );
}
