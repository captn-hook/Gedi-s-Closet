//land on home.html
export const pages = [
    'home',
    'about',
    'donate',
    'inventory',
    'staff',
    'volunteer',
    'events',
]

import {
    Sidebar, SidebarButton, openNav, closeNav
} from './Components/Sidebar/Sidebar.js';

function App() {
    console.log('App()');
    //create sidebar under the body tag
    const sb = Sidebar(pages);
    //get the close button closeNav in sb children
    const closeBT = sb.children[0];
    if (closeBT) {
        closeBT.addEventListener('click', closeNav);
    }
    const menuBT = SidebarButton();
    menuBT.addEventListener('click', openNav);
    document.getElementById('main').prepend(menuBT);
    document.body.prepend(sb);
}

App();