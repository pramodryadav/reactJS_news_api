import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context';

const pages = [{ title: 'Favourites', path: "/fav" }];
const settings = ['Logout'];

function ResponsiveAppBar() {
    const { setIsLoggedIn } = React.useContext(userContext)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const profileData = JSON.parse(localStorage.getItem("userData"));

    console.log("profileData", profileData);

    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const logout = () => {
        localStorage.removeItem("userData");
        setIsLoggedIn(false);
        navigate("/")
        setAnchorElUser(null);
    }

    return (
        <AppBar position="fixed">

            <Toolbar >
                <img src="daily_news.png" width="45px" height="auto" alt="" />

                <Link className="linkStyle" to="/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            ml: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Daily News
                    </Typography>
                </Link>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                <Link style={{ textDecoration: 'none' }} to={page.path}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Daily News
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (

                        <Button
                            key={page.title}
                            onClick={() => navigate(page.path)}

                            sx={{ my: 2, color: 'white', display: 'block', fontSize: 18 }}
                        >
                            {page.title}
                        </Button>

                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Box display="flex" columnGap={2} >
                       
                        <Tooltip title={profileData?.given_name}>

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            
                                <Avatar alt={profileData?.given_name} src="" />
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={logout}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>

        </AppBar>
    );
}
export default ResponsiveAppBar;
