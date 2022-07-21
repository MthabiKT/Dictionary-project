import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span className="synonym-list">
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym}, </span>;
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
