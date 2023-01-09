export default function Animal(props) {
  return (
    <div className="animal">
      <img src={`${props.name}.svg`} />
      <h2>{props.name}</h2>
      <p>{props.says}</p>
    </div>
  );
}
