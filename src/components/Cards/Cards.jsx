import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((c, i) => (
        <Card
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          onClose
          key={i}
        />
      ))}
    </div>
  );
}
