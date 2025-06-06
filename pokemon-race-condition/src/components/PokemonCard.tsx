import * as React from "react";
import { cn } from "@/lib/utils";

export default function PokemonCard({ data }: { data: any }) {
  if (!data) return null;

  // Function to generate a background color based on pokemon type
  const getTypeColor = (type: string): string => {
    const typeColors: Record<string, string> = {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD",
    };

    return typeColors[type.toLowerCase()] || "#CCCCCC";
  };

  const mainType = data.types?.[0]?.type?.name || "normal";
  const backgroundColor = getTypeColor(mainType);

  return (
    <div 
      className={cn(
        "w-[280px] m-5 rounded-2xl overflow-hidden shadow-lg cursor-pointer",
        "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      )}
      style={{
        background: `linear-gradient(145deg, ${backgroundColor} 0%, #ffffff 100%)`,
      }}
    >
      <div className="flex justify-between items-center p-2.5 text-white">
        <h6 className="m-0 text-sm">No. {data.id}</h6>
        <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs capitalize">
          {mainType}
        </span>
      </div>

      <figure className="m-0 p-2.5 bg-white/70 rounded-full w-[180px] h-[180px] flex items-center justify-center mx-auto">
        <img
          className="w-[150px] h-[150px] drop-shadow-lg scale-125"
          src={data?.sprites?.front_default}
          alt={data.name}
        />
      </figure>

      <figcaption className="bg-white/90 p-4 text-center">
        <h4 className="m-0 mb-2.5 text-xl capitalize font-semibold text-gray-800">
          {data.name}
        </h4>
        
        <div className="flex justify-center gap-2.5">
          {data.types && data.types.map((typeInfo: any, idx: number) => (
            <span 
              key={idx} 
              className="text-white px-2.5 py-0.5 rounded-full text-xs capitalize"
              style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
            >
              {typeInfo.type.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-4 text-sm text-gray-600">
          <div>
            <div>Height</div>
            <div className="font-bold">{data.height / 10}m</div>
          </div>
          <div>
            <div>Weight</div>
            <div className="font-bold">{data.weight / 10}kg</div>
          </div>
        </div>
      </figcaption>
    </div>
  );
}
