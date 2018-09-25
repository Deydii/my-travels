import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <div>
    <h1>{destination}</h1>
    <h2>{country}</h2>
    <figure>
      <img src={photo} alt={destination} />
      <figcaption>
        {distance}
      </figcaption>
    </figure>
 </div>
);

export default Travel;