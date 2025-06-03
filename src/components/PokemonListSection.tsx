"use client";

import { usePokemonListQuery } from "@/hooks/usePokemon/usePokemonListQuery";
import type { PokemonListResult } from "@/types/pokemon";
import PokemonCard from "@/components/PokemonCard";

export default function PokemonListSection() {
  const { data, isLoading, isError } = usePokemonListQuery();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    // <ul>
    //   {data.results.map((pokemon: PokemonListResult) => (
    //     <li key={pokemon.name}>{pokemon.name}</li>
    //   ))}
    // </ul>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 py-8">
      {data.results.map((pokemon: PokemonListResult) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
}
