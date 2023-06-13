import { useMemo, useState } from "react";
import createEmotionCache from "../utils/createEmotionCache";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppThemeContext } from "../contexts/contexts";
import { CacheProvider } from "@emotion/react";
import { getDesignTokens } from "@/styles/theme";

const clientSideEmotionCache = createEmotionCache()

export default function AppThemeProvider({ emotionCache = clientSideEmotionCache, children }) {
    const [mode, setMode] = useState('light')

    const toggleTheme = () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
    }

    const setTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

    return (
        <AppThemeContext.Provider value={{ mode, toggleTheme }}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={setTheme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </AppThemeContext.Provider>
    )
}