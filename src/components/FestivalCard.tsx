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
    <div className="flex gap-5 m-2 py-8 items-start">
      <img src={logo} alt={name} width={200} />
      <div className="flex flex-col justify-start items-start ">
        <p className="font-bold text-xl">{name}</p>
        <p className="font-semibold">{description}</p>
        <p className="font-semibold">Lieu : {location}</p>
        <p className="font-semibold">Prix : {price} €</p>
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="mr-1" />
          Prevu
        </label>

        <p className="font-semibold"> </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className=" inline-block rounded-lg py-2 font-bold text-white transition"
        >
          Voir le site officiel
        </a>
      </div>
    </div>
  );
};

export default FestivalCard;