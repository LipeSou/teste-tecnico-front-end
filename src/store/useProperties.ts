import { create } from "zustand";

import type { Property } from "@/types/properties";

type State = {
  properties: Property[];
  isLoading: boolean;
  error: string | null;
  selectedCity: string | null;
  setProperties: (data: Property[]) => void;
  setLoading: (state: boolean) => void;
  setError: (msg: string | null) => void;
  setSelectedCity: (city: string | null) => void;
};

export const useProperties = create<State>((set) => ({
  properties: [],
  isLoading: true,
  error: null,
  selectedCity: null,
  setProperties: (data) => set({ properties: data }),
  setLoading: (state) => set({ isLoading: state }),
  setError: (msg) => set({ error: msg }),
  setSelectedCity: (city) => set({ selectedCity: city }),
}));
