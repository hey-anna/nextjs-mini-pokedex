"use client";

import { usePokemonListQuery } from "@/hooks/usePokemon/usePokemonListQuery";
import type { PokemonListResult } from "@/types/pokemon";

export default function PokemonListSection() {
  const { data, isLoading, isError } = usePokemonListQuery();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <ul>
      {data.results.map((pokemon: PokemonListResult) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
