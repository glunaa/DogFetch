import { useState, useEffect } from "react";
import axios from "axios";

function Dog() {
  const [breed, setBreed] = useState(""); // Store user input
  const [dog, setDog] = useState(""); // Store search result

  const changeBreed = (e) => {
    setBreed(e.target.value);
  }
  
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
        searchDog();
    }
  }
  const searchDog = async () => {
    try {
      const formattedBreed = encodeURIComponent(breed).toLowerCase(); // Format user input
      const response = await axios.get(`https://dog.ceo/api/breed/${formattedBreed}/images/random`);
      setDog(response.data.message);
      setBreed(""); // Clear the input field after searching
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    // Remove this line to avoid infinite calls on component mount
    // searchDog();
  }, []);

  return (
    <div className="frame">
      <h1>Dog Fetch</h1>
      <h4>Search for your favorite dog breed!</h4>
      <input
        value={breed}
        onChange={changeBreed}
        onKeyUp={handleKeyPress}
        type="text"
        placeholder="Enter a breed"
      />
      <button className="search"onClick={searchDog}>Search</button>
      <img src={dog} alt="Dog" />
    </div>
  );
}

export default Dog;
