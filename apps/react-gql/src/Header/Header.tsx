import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React GraphQL
        </Typography>

        <Link to="/" style={{ color: "white" }}>
          <HomeIcon />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
