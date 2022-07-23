import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      className="images img-fluid"
                      src={photo.src.tiny}
                      alt={photo.alt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
