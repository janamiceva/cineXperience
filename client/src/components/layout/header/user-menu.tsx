import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../auth/firebase-config";
import { useNavigate } from "react-router-dom";

function UserMenu() {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const navigate = useNavigate()

    const userEmail = String(auth.currentUser?.email).toUpperCase();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOutUser = () => {
        signOut(auth);
        navigate('/signIn');
    }

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ backgroundColor: 'transparent', border: '1px solid' }} alt={userEmail} src="/" />
                </IconButton>
            </Tooltip>
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
                <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={() => navigate('/myReservations')} sx={{ textAlign: "center", color: 'black' }}>My Reservations</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={() => navigate('/savedMovies')} sx={{ textAlign: "center", color: 'black' }}>Saved Movies</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={logOutUser} sx={{ textAlign: "center", color: 'black' }}>Logout</Button>
                </MenuItem>
            </Menu >
        </>
    )
}

export default UserMenu