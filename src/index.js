import './style.css';
import './icon.png';
import { homeClick, clearContent } from './home';
import menuClick from './menu';
import contactClick from './contact';

const addListeners = () => {
  const clickHome = document.querySelector(".button-home");
  const clickMenu = document.querySelector(".button-menu");
  const clickContact = document.querySelector(".button-contact");
  
  clickHome.addEventListener("click", () => {
    clearContent();
    homeClick();
    addListeners();
  });
  
  clickMenu.addEventListener("click", () => {
    clearContent();
    menuClick();
    addListeners();
  });
  
  clickContact.addEventListener("click", () => {
    clearContent();
    contactClick();
    addListeners();
  });
};

homeClick();
addListeners();