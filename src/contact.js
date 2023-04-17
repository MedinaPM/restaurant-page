import { buildHeader, buildFooter, addNewElement, addNewClass, addNewInnerText } from './home';

const navActiveSwitch = () => {
  const clickHome = document.querySelector(".button-home");
  const clickMenu = document.querySelector(".button-menu");
  const clickContact = document.querySelector(".button-contact");

  clickHome.classList.remove("active");
  clickMenu.classList.remove("active");
  clickContact.classList.add("active");
};

const contactClick = () => {
  buildHeader();

  // build main section
  addNewElement("#content", "main");
  addNewClass("main", "main");
  addNewElement(".main", "div");
  addNewClass(".main > div", "contact");
  // add address
  addNewElement(".contact", "h3");
  addNewClass(".contact > h3", "address");
  addNewInnerText(".address", "Address");
  addNewElement(".contact", "p");
  const address = "122 Marine Parade Dr, Toronto, ON M8V 0E7";
  addNewInnerText(".contact > p", address);
  // add phone
  addNewElement(".contact", "h3");
  addNewClass(".contact > h3:last-child", "phone");
  addNewInnerText(".phone", "Phone");
  addNewElement(".contact", "p");
  const phone = "647 987 65 43";
  addNewInnerText(".contact > p:last-child", phone);
  // add email
  addNewElement(".contact", "h3");
  addNewClass(".contact > h3:last-child", "email");
  addNewInnerText(".email", "Email");
  addNewElement(".contact", "p");
  const email = "chef@mamanostra.com";
  addNewInnerText(".contact > p:last-child", email);

  buildFooter();

  navActiveSwitch();
};

export default contactClick;