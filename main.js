/*         <li class="navbar-email">platzi@example.com</li>
 */

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(event){

    desktopMenu.classList.toggle('inactive');//desactiva 
}