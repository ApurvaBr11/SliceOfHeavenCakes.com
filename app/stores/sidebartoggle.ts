// src/stores/theme-store.ts
import {create} from 'zustand';

interface ThemeState {
    mode: boolean,
    changeMode: () => void
}

const usesidebartoggle = create<ThemeState>()((set) => ({
    mode: false,
    changeMode: () => set((state) => ({
        mode: state.mode === false ? true : false
    })),
}))

export default usesidebartoggle;
