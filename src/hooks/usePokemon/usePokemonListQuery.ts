import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/services/pokemon";

export const usePokemonListQuery = (limit = 20, offset = 0) => {
  return useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => getPokemonList(limit, offset),
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });
};
