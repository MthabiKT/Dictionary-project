import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [result, setResult] = useState("");
  let [outcome, setOutcome] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setOutcome(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${result}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setResult(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={outcome} />
    </div>
  );
}
