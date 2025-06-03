import type { PokemonListResult } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: PokemonListResult[];
}

export default function PokemonList({ pokemons }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name} className="border p-4 rounded">
          {pokemon.name}
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
}
