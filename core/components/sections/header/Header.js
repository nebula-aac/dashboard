import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu, Settings } from "@mui/icons-material";
import Link from "next/link";
import useDrawer from "@/core/hooks/useDrawer";

export default function Header(props) {
    const { title, isBeta } = props;
    const { handlerDrawerToggler } = useDrawer()

    return (
        <AppBar {...props}>
            <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    color="inherit"
                    edge="start"
                    onClick={handlerDrawerToggler}
                    // sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
                    {title}{isBeta ? <sup>BETA</sup> : ""}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box data-test="settings-button" sx={{ display: { xs: "none", md: "flex" } }}>
                    <Link href="/settings">
                        <IconButton>
                            <Settings />
                        </IconButton>
                    </Link>
                </Box>
            </Toolbar>
            {props.children}
        </AppBar>
    )
}