"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logout from "@/utils/auth/logout";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/authContext";
import Link from "next/link";

interface UserAvatarProps {
  username: string;
}
const UserAvatar: React.FC<UserAvatarProps> = ({ username }) => {
  const router = useRouter();
  const { setUsername } = useAuthContext();

  const settings = [
    {
      name: "Account",
      href: "/",
    },
    {
      name: "My Courses",
      href: "/",
    },
    {
      name: "Logout",
      href: "#",
    },
  ];
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    const logoutResult = await logout();
    if (typeof logoutResult === "string") {
      console.log(logoutResult);
      return;
    }
    router.push("/");
    setUsername(null);
    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: "secondary.main" }} alt={username}>
            {username.toUpperCase()[0]}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.name}
            onClick={
              setting.name === "Logout" ? handleLogout : handleCloseUserMenu
            }
          >
            <Link href={setting.href}>
              <Typography textAlign="center">{setting.name}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserAvatar;
