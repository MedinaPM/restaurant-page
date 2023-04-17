import icon from './icon.png'

const navActiveSwitch = () => {
  const clickHome = document.querySelector(".button-home");
  const clickMenu = document.querySelector(".button-menu");
  const clickContact = document.querySelector(".button-contact");

  clickHome.classList.add("active");
  clickMenu.classList.remove("active");
  clickContact.classList.remove("active");
};

const clearContent = () => {
  const list = document.getElementById("content");

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
};

const addNewElement = (target, element) => {
  const container = document.querySelector(target);
  const content = document.createElement(element);
  container.appendChild(content);
};

const addNewClass = (target, newClass) => {
  const container = document.querySelector(target);
  container.classList.add(newClass);
};

const addNewInnerText = (target, newText) => {
  const container = document.querySelector(target);
  container.textContent = newText;
};

const addNewImage = (target, srcImage) => {
  const container = document.querySelector(target);
  const content = new Image();
  content.src = srcImage;
  container.appendChild(content);
}

const buildHeader = () => {
  addNewElement("#content", "header");
  addNewClass("header", "header");
  addNewElement(".header", "h1");
  addNewClass(".header > h1", "restaurant-name");
  addNewInnerText(".restaurant-name", "Mama Nostra");
  addNewElement(".header", "nav");
  addNewElement("nav", "button");
  addNewClass("nav > button:last-child", "button-home");
  addNewInnerText(".button-home", "Home");
  addNewElement("nav", "button");
  addNewClass("nav > button:last-child", "button-menu");
  addNewInnerText(".button-menu", "Menu");
  addNewElement("nav", "button");
  addNewClass("nav > button:last-child", "button-contact");
  addNewInnerText(".button-contact", "Contact");
}

const buildFooter = () => {
  addNewElement("#content", "footer");
  addNewClass("footer", "footer");
  addNewElement(".footer", "p");
  const copyright = "Copyright © 2023 Mama Nostra";
  addNewInnerText(".footer > p", copyright);
}

const homeClick = () => {
  buildHeader();

  // build main section
  addNewElement("#content", "main");
  addNewClass("main", "main");
  // add headline
  addNewElement(".main", "h2");
  const headline = "Best food in the world!";
  addNewInnerText(".main > h2", headline);
  // add image
  addNewImage(".main", icon);
  // add call to action
  addNewElement(".main", "p");
  const callToAction = "Come visit now!";
  addNewInnerText(".main > p:last-child", callToAction);

  buildFooter();

  navActiveSwitch();
};

export {
  navActiveSwitch,
  clearContent,
  addNewElement,
  addNewClass,
  addNewInnerText,
  addNewImage,
  buildHeader,
  buildFooter,
  homeClick
};