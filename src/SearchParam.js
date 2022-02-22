import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./Results";

console.log("hello");
const ANIMAL = ["dog", "bird", "cat", "turtle"];
// const BREED = ["bulldog", "warewolf", "Gurd dog", "huski"];
const SearchParam = () => {
  //   const location = "Newyork";
  const [location, setLoaction] = useState("Seattle, WA");

  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, SetPets] = useState([]);
  const [breeds] = useBreedList(animal);

  // console.log(breeds);
  // useEffect(() => {
  //   requestPets();
  // }, [animal]); // We can use [animal] To make request every time when we change animal
  const disp = () => {
    requestPets();
  };
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);

    SetPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLoaction(e.target.value)}
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animals
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMAL.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button onClick={disp}>Submit</button>
      </form>
      <Results pets={pets} />;
    </div>
  );
};

export default SearchParam;
