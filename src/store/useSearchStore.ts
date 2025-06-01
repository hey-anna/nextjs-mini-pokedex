import { create } from "zustand";

interface SearchState {
  keyword: string;
  setKeyword: (value: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  keyword: "",
  setKeyword: (value) => set({ keyword: value }),
}));

export default useSearchStore;
