import axios from "axios";
import type { PokemonListResponse } from "@/types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

// 포켓몬 목록 불러오기
export const getPokemonList = async (limit = 20, offset = 0) => {
  const res = await axios.get(`${BASE_URL}/pokemon`, {
    params: { limit, offset },
  });
  return res.data;
};

// 포켓몬 상세 정보
export const getPokemonDetail = async (nameOrId: string) => {
  const res = await axios.get<PokemonListResponse>(`${BASE_URL}/pokemon/${nameOrId}`);
  return res.data;
};
