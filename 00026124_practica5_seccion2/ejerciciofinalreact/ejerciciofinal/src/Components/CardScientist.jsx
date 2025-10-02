// src/Components/CardScientist.jsx

import '../Styles/CardScientist.css';

export default function CardScientist({ name, image, profession, awards, discoveries }) {
  return (
    <div className="card-scientist">
      <div className="card-content">
        <img src={image} alt={name} className="card-image" />
        <div>
          <h2 className="scientist-name">{name}</h2>
          <p><strong>Profesión:</strong> {profession}</p>
          <p><strong>Premios:</strong></p>
          <ul className="card-info">
            {awards.map((award, idx) => (
              <li key={idx}>{award}</li>
            ))}
          </ul>
          <p><strong>Descubrimientos:</strong></p>
          <ul className="card-info">
            {discoveries.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
