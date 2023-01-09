import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`${props.name}.svg`} />
      <h2>{props.name}</h2>
      <p>{props.says}</p>
    </div>
  );
}
