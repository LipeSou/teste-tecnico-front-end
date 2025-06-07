import { create } from "zustand";

import type { Property } from "@/types/properties";

type State = {
  properties: Property[];
  isLoading: boolean;
  error: string | null;
  setProperties: (properties: Property[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useProperties = create<State>((set) => ({
  properties: [],
  isLoading: false,
  error: null,
  setProperties: (properties) => set({ properties }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
