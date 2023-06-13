import useDrawer from "@/core/hooks/useDrawer";
import { ChevronLeft, ChevronRight, Inbox } from "@mui/icons-material";
import { Divider, Drawer, IconButton, List, ListItemButton, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Fragment } from "react";

function Menu() {
    return (
        <Fragment>
            <List disablePadding>
                {["Dashboard", "Lifecycle", "Configuration", "Performance", "Conformance", "Extensions"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Fragment>
    )
}

export default function Navigator(props) {
    const { isDrawerOpen, handleDrawerToggler } = useDrawer()
    const theme = useTheme()

    const isPermenant = useMediaQuery(theme.breakpoints.up('drawer'))
    return (
        <Drawer
            sx={{
                display: { xs: "none", sm: "block" }
            }}
            variant={isPermenant ? 'permanent' : 'persistent'}
            anchor="left"
            open={isPermenant ? true : isDrawerOpen}
            onClose={handleDrawerToggler}
            {...props}
        >
            <Toolbar />
            <Divider />
            <Menu />
            {!isPermenant && (
                <div>
                    <IconButton onClick={handleDrawerToggler}>
                        {isDrawerOpen ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </div>
            )}
        </Drawer>
    )

}