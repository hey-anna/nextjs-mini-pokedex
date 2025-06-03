import type { PokemonListResult } from "@/types/pokemon";
import Image from "next/image";

interface Props {
  pokemon: PokemonListResult;
}

export default function PokemonCard({ pokemon }: Props) {
  const id = pokemon.url.split("/").filter(Boolean).pop(); // URL에서 ID 추출
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <li className="p-4 border rounded shadow hover:scale-105 transition bg-white text-center">
      <Image src={imageUrl} alt={pokemon.name} width={80} height={80} className="mx-auto" />
      <p className="mt-2 text-sm capitalize font-medium">{pokemon.name}</p>
    </li>
  );
}
