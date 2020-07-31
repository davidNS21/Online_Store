import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import '../assets/css/SideBar.scss';

export default function SideBar(){

    return(
        <Menu className="sidebar">
            <Link to="/">Destacado</Link>
            <Link to="/">Categoria 1</Link>
            <Link to="/">Categoria 2</Link>
            <Link to="/">Categoria 3</Link>
            <Link to="/">Categoria 4</Link>
            <Link to="/">Categoria 5</Link>
        </Menu>
    );
}

