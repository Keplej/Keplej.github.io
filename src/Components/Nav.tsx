import {Drawer, List, ListItemButton, ListItemText} from "@mui/material";

const drawerWidth = 240;


function Nav() {
    // Smooth scroll to specific section
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
        window.history.pushState(null, "", `#${id}`);
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            <List sx={{
                width: drawerWidth,
                textAlign:'center',
                '& .MuiListItemText-primary': {
                    textAlign: 'center',
                }
            }}>
                <ListItemButton onClick={() => handleScrollTo('home')}>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton onClick={() => handleScrollTo('about')}>
                    <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton onClick={() => handleScrollTo('projects')}>
                    <ListItemText primary="Projects" />
                </ListItemButton>
                <ListItemButton onClick={() => handleScrollTo('contact')}>
                    <ListItemText primary="Contact" />
                </ListItemButton>
            </List>
        </Drawer>
    )
}

export default Nav;