import { DrawerContext } from "../contexts/contexts";
import { useState } from "react";

export default function DrawerProvider(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleDrawerToggler = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <DrawerContext.Provider value={{ isDrawerOpen, handleDrawerToggler }} {...props}>
            {props.children}
        </DrawerContext.Provider>
    )
}