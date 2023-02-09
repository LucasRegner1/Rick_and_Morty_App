import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <button>
        <Link to="/home">Back Home</Link>
      </button>
      <h1>{character?.name}</h1>
      <h2>{character?.status}</h2>
      <h3>{character?.species}</h3>
      <h3>{character?.gender}</h3>
      <h3>{character?.origin?.name}</h3>
      <img src={character?.image} alt={character.name} />
    </div>
  );
};

export default Detail;
