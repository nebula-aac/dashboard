import Header from "./header/Header";
import Navigator from "./navigator/Navigator";
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import DrawerProvider from "@/core/providers/DrawerProvider";

export default function AppWrapper(props) {
    return (
        <DrawerProvider>
            <Header />
            <Navigator variant={"permanent"} open={true} />
            <Main>
                <Toolbar />
                {props.children}
            </Main>
        </DrawerProvider>
    )
}

function Main(props) {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            {...props}
        >
            {props.children}
        </Box>
    );
}