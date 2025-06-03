"use client";

import { usePokemonListQuery } from "@/hooks/usePokemon/usePokemonListQuery";
// import type { PokemonListResult } from "@/types/pokemon";
import PokemonList from "@/components/PokemonList";

export default function PokemonListSection() {
  const { data, isLoading, isError } = usePokemonListQuery(20, 0);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">📘 포켓몬 도감</h1>
      {data && <PokemonList pokemons={data.results} />}
    </main>
  );
}
