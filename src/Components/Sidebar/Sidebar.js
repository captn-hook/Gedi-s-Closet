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

export function Sidebar(pages) {
    //returns a sidebar element
    console.log('Sidebar()');
    const sidebar = document.createElement('div');
    sidebar.id = 'sidenav';
    sidebar.className = 'sidenav';
    sidebar.innerHTML = `
    <a href="javascript:void(0)" class="closebtn" id="closeNav">&times;</a>
    ${pages.map(page => `<a href="${page}.html">${page}</a>`).join('')}
    `;
    return sidebar;
}

export function SidebarButton() {
    //returns a sidebar button element
    console.log('SidebarButton()');
    const sidebarButton = document.createElement('span');    
    sidebarButton.id = 'menuBT';
    sidebarButton.className = 'menuBT';
    sidebarButton.innerHTML = `Menu`;
    return sidebarButton;
}

// export function openNav() {
//     //opens the sidebar
//     console.log('openNav()');
// }

// export function closeNav() {
//     //closes the sidebar
//     console.log('closeNav()');
// }

export function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
export function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
