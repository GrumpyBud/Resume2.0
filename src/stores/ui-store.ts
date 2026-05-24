import { create } from "zustand";

type UiState = {
  activeTrack: string;
  mobileNavOpen: boolean;
  setActiveTrack: (track: string) => void;
  setMobileNavOpen: (open: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  activeTrack: "robotics",
  mobileNavOpen: false,
  setActiveTrack: (track) => set({ activeTrack: track }),
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
}));
