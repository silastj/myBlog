import React from "react";
import { Link } from "gatsby";
import * as style from './styles.module.css'


const Header = () => (
  <ul className={style.header}>
  <li>
    <Link
      to="/about"
      activeStyle={{ color: 'red' }}
    >About
    </Link>
  </li>
  <li>
    <Link
      to="/"
      activeStyle={{ color: 'red' }}
    >Home
    </Link>
  </li>
</ul>
)

export default Header