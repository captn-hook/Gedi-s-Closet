import {
    pages
} from '../../Pages.js';

/*
//sidebar
<div id="sidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="services.html">Services</a>
    <a href="clients.html">Clients</a>
    <a href="contact.html">Contact</a>
</div>
//sidebar button
<span id="menuBT" class="menuBT">Menu</span>
*/

export default function Sidebar() {
    //returns a sidebar element
    console.log('Sidebar()');
    const sidebar = document.createElement('div');
    sidebar.id = 'sidenav';
    sidebar.className = 'sidenav';
    sidebar.innerHTML = `
        <a href="javascript:void(0)" class="closebtn" id="closeNav">&times;</a>
        ${pages.map(page => `<a href="${page}.html">${page}</a>`).join('')}
    `;

    const closeBT = sidebar.children[0];
    closeBT.addEventListener('click', closeNav);

    const menuBT = SidebarButton();
    menuBT.addEventListener('click', openNav);

    document.getElementById('main').prepend(menuBT);
    document.body.prepend(sidebar);

    return sidebar;
}

function SidebarButton() {
    //returns a sidebar button element
    console.log('SidebarButton()');
    const sidebarButton = document.createElement('span');
    sidebarButton.id = 'menuBT';
    sidebarButton.className = 'menuBT';
    sidebarButton.innerHTML = `Menu`;
    return sidebarButton;
}


function openNav() {
    document.getElementById("menuBT").style.display = "none";
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("menuBT").style.display = "block";
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
