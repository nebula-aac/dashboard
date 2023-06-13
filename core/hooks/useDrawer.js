import { useContext } from "react";
import { DrawerContext } from "../contexts/contexts";

export default function useDrawer() {
    const context = useContext(DrawerContext)
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerContext.Provider');
    }
    return context;
}