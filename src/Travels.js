import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination: "Anse Bertrand",
        country: "Guadeloupe",
        photo: "https://lestablesdegwada.com/100819092429_34.jpg?v=bfv8gc4r5wdj5nk",
        distance: "6 750 km",
    },
    {
        destination: "Montreal",
        country: "Canada",
        photo: "https://www.connections.be/~/media/images/connections/vliegtickets/noord-amerika/montreal/montreal.jpg",
        distance: "5 628 km",
    },
    {
        destination: "Lisbonne",
        country: "Portugal",
        photo: "https://madeinmarseille.net/actualites-marseille/2016/10/tramway-lisbonne-tourisme-visite.jpg",
        distance: "1 470 km",
    },
    {
        destination: "Londres",
        country: "Angleterre",
        photo: "https://www.nacel.fr/medias/_cache/produits/36/imagePrincipale/1920_1440/cours-decouverte-londres-beckenham.jpg",
        distance: "469,60 km",
    },
    {
        destination: "Cancun",
        country: "Mexique",
        photo: "http://www.gannett-cdn.com/media/2018/06/15/USATODAY/USATODAY/636646787345137558-GettyImages-908388868.jpg?width=1080&quality=50",
        distance: "9 184 km"
    },
]

const Travels = () => (
    <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
    ))}
  </div>
);

export default Travels;

