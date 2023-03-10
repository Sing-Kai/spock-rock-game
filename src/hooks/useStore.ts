import { create } from 'zustand'

export interface GameState {
  player: number
  computer: number
  result: string
  gameResult: (r: string) => void
  playerWins: (by: number) => void
  computerWins: (by: number) => void
  reset: () => void
}

const useStore = create<GameState>()((set) => ({
  player: 0,
  computer: 0,
  result: 'start',
  gameResult: (r) => set(() => ({ result: r })),
  playerWins: (by) => set((state) => ({ player: state.player + by })),
  computerWins: (by) => set((state) => ({ computer: state.computer + by })),
  reset: (() => set(()=> ({player: 0, computer: 0})))
}))

export default useStore;