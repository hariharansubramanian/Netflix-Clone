import {create} from 'zustand'

export interface MuteBillboardInterface {
    isMuted: boolean;
    muteBillboard: () => void;
    unmuteBillboard: () => void;
}

const useMuteBillboard = create<MuteBillboardInterface>((set) => ({
    isMuted: false,
    muteBillboard: () => set({isMuted: true}),
    unmuteBillboard: () => set({isMuted: false})
}))

export default useMuteBillboard