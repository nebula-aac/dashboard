import { Roboto } from 'next/font/google';
import { createTheme } from "@mui/material";
import { black, charcoal, colorText, keppel, white, error, warning, success, info, neutral } from "./colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: black,
            white: white
        },
        primary: {
            main: charcoal.main,
            dark: charcoal.dark,
            light: charcoal.light
        },
        secondary: {
            main: keppel.main,
            dark: keppel.dark,
            light: keppel.light,
            contrastText: white,
        },
        error: {
            main: error.main
        },
        warning: {
            main: warning.main,
            contrastText: white,
        },
        success: {
            main: success.main,
        },
        info: {
            main: info.main,
        }
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        common: {
            black: black,
            white: white,
        },
        primary: {
            main: keppel.main,
            dark: keppel.dark,
            light: keppel.light,
            contrastText: white,
        },
        secondary: {
            main: charcoal.main,
            dark: charcoal.dark,
            light: charcoal.light,
            contrastText: white,
        },
        text: {
            primary: colorText.primary,
            secondary: colorText.secondary,
            disabled: colorText.disabled
        },
        background: {
            default: neutral.main,
            paper: neutral.main
        },
        error: {
            main: error.accent,
        },
        warning: {
            main: warning.accent,
            contrastText: white,
        },
        success: {
            main: success.accent,
        },
        info: {
            main: info.accent,
        }
    }
});

const drawerWidth = 240;

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: charcoal.main,
            dark: charcoal.dark,
            light: charcoal.light,
            ...(mode === "dark" && {
                main: keppel.main,
                dark: keppel.dark,
                light: keppel.light,
                contrastText: white,
            }),
        },
        secondary: {
            main: keppel.main,
            dark: keppel.dark,
            light: keppel.light,
            contrastText: white,
        },
        ...(mode === "dark" && {
            background: {
                default: neutral.main,
                paper: neutral.main
            },
        }),
        text: {
            ...(mode === 'dark' && {
                primary: colorText.primary,
                secondary: colorText.secondary,
                disabled: colorText.disabled
            })
        },
        error: {
            ...(mode === 'light')
                ? {
                    main: error.main
                }
                : {
                    main: error.accent,
                }
        },
        warning: {
            ...(mode === 'light')
                ? {
                    main: warning.main,
                    contrastText: white,
                }
                : {
                    main: warning.accent,
                    contrastText: white,
                }
        },
        success: {
            ...(mode === 'light')
                ? {
                    main: success.main,
                }
                : {
                    main: success.accent,
                }
        },
        info: {
            ...(mode === 'light')
                ? {
                    main: info.main,
                }
                : {
                    main: info.accent,
                }
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    position: "fixed",
                    elevation: 2,
                    color: "primary",
                    // background: "#396679",
                    width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        background: "#263238",
                        color: "#FFFFFF"
                    },
                }
            }
        }
    }
})