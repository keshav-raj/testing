import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const url = "https://catfact.ninja/fact";
function App() {
  const [factLists, setFactLists] = useState([]);

  useEffect(() => {
    const fetchFacts = async () => {
      for (let i = 0; i < 10; i++) {
        const apiResponse = await axios.get(url);
        setFactLists((prevState) => {
          return [...prevState, apiResponse?.data];
        });
      }
    };
    fetchFacts();
  }, []);

  return (
    <div className="">
      {factLists.map((facts, index) => {
        return (
          <p key={`facts ${index}`} className="fact">
            {" "}
            {facts.fact}
          </p>
        );
      })}
    </div>
  );
}

export default App;
