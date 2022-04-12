import "./NavBar.scss";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Badge } from "@mui/material";

export const NavBar = (): JSX.Element => {
  return (
    <div className=" navigation navigation__wrapper">
      <div className="langSearch langSearch__wrapper">
        <div className="language">en</div>
        <div className="searchForm searchForm__wrapper">
          <input
            className="searchForm-input"
            type="text"
            placeholder="Search"
          />
          <SearchIcon style={{ color: "gray" }} />
        </div>
      </div>
      <h1 className="logo">bobo.</h1>
      <div className="rightBar rightBar__wrapper">
        <div className="login">register</div>
        <div className="signin">sign in</div>
        <Badge badgeContent={1} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </div>
    </div>
  );
};
