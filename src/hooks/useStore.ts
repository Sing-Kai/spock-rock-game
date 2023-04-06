import { create } from 'zustand'
import Progress from 'src/data/enums'
export interface GameState {
  player: number
  computer: number
  gameState: string
  progress: Progress
  updateGameState: (s: string) => void
  updateProgress: (s: Progress) => void
  playerWins: (by: number) => void
  computerWins: (by: number) => void
  reset: () => void
}


const useStore = create<GameState>()((set) => ({
  player: 0,
  computer: 0,
  gameState: 'menu',
  progress: Progress.Ready,
  updateProgress: (s) => set(() => ({ progress: s })),
  updateGameState: (s) => set(() => ({ gameState: s })),
  playerWins: (by) => set((state) => ({ player: state.player + by })),
  computerWins: (by) => set((state) => ({ computer: state.computer + by })),
  reset: (() => set(()=> ({player: 0, computer: 0})))
}))

export default useStore;