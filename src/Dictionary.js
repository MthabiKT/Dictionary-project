import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [result, setResult] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${result}`);
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
    </div>
  );
}
