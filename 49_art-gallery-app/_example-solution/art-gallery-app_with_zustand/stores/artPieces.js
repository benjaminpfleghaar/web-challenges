import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useArtPieceStore = create(
  persist(
    (set) => ({
      pieces: [],
      isFavorite: [],
      comments: [],
      setData: (data) => set((state) => ({ pieces: data })),
      setFavorite: (slug) =>
        set((state) => ({
          isFavorite: state.isFavorite.includes(slug)
            ? state.isFavorite.filter((item) => item !== slug)
            : [...state.isFavorite, slug],
        })),
      setComment: (comment) =>
        set((state) => ({
          comments: [...state.comments, comment],
        })),
    }),
    {
      name: "artpieces-storage",
    }
  )
);
