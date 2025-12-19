import React from 'react';
import logoDefqon from "../assets/logoDefqon.png";

interface FestivalCardProps {
  logo: string;
  name: string;
  description: string;
  location: string;
  price: number;
  url: string;
}

const FestivalCard: React.FC<FestivalCardProps> = ({
  logo,
  name,
  description,
  location,
  price,
  url,
}) => {
  return (
    <div className="flex gap-5 m-8 py-8 items-start">
      <img src={logo} alt={name} width={200} />
      <div className="ml-5 flex flex-col justify-start items-start">
        <p className="font-bold text-xl">{name}</p>
        <p className="font-semibold">{description}</p>
        <p className="font-semibold">Lieu : {location}</p>
        <p className="font-semibold">Prix : {price} €</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className=" inline-block rounded-lg py-2 font-bold text-white hover:bg-orange-700 transition"
        >
          Voir le site officiel
        </a>
      </div>
    </div>
  );
};

export default FestivalCard;