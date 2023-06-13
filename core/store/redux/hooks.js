import { useAtomValue } from "jotai";
import { atomWithStorage, selectAtom } from "jotai/utils";

const stateAtom = atomWithStorage("state", {
    user: {}    
})

export const useSelector = (selector) => useAtomValue(selectAtom(stateAtom, selector))