import { buildHeader, buildFooter, addNewElement, addNewClass, addNewInnerText, addNewImage } from './home';
import burger from './burger.png'
import pizza from './pizza.png'
import margarita from './margarita.png'
import coffee from './coffee.png'
import cake from './cake.png'
import iceCream from './icecream.png'

const navActiveSwitch = () => {
  const clickHome = document.querySelector(".button-home");
  const clickMenu = document.querySelector(".button-menu");
  const clickContact = document.querySelector(".button-contact");

  clickHome.classList.remove("active");
  clickMenu.classList.add("active");
  clickContact.classList.remove("active");
};

const menuClick = () => {
  buildHeader();

  // build main section
  addNewElement("#content", "main");
  addNewClass("main", "main");
  addNewElement(".main", "h2");
  addNewInnerText(".main > h2", "Our most popular");
  addNewElement(".main", "div");
  addNewClass(".main > div", "menu");
  // add menu item
  addNewElement(".menu", "div");
  addNewClass(".menu > div:last-child", "menu-item");
  addNewImage(".menu > div:last-child", burger);
  addNewElement(".menu > div:last-child", "h3");
  addNewInnerText(".menu-item:last-child > h3", "Cheeseburger");
  addNewElement(".menu > div:last-child", "p");
  const burgerIngredients = "Home made meat, veggies, cheese, and bacon";
  addNewInnerText(".menu-item:last-child > p", burgerIngredients);
  // add menu item
  addNewElement(".menu", "div");
  addNewClass(".menu > div:last-child", "menu-item");
  addNewImage(".menu > div:last-child", pizza);
  addNewElement(".menu > div:last-child", "h3");
  addNewInnerText(".menu-item:last-child > h3", "Peperoni");
  addNewElement(".menu > div:last-child", "p");
  const pizzaIngredients = "Mozzarella cheese, and pepperoni";
  addNewInnerText(".menu-item:last-child > p", pizzaIngredients);
  // add menu item
  addNewElement(".menu", "div");
  addNewClass(".menu > div:last-child", "menu-item");
  addNewImage(".menu > div:last-child", margarita);
  addNewElement(".menu > div:last-child", "h3");
  addNewInnerText(".menu-item:last-child > h3", "Margarita");
  addNewElement(".menu > div:last-child", "p");
  const margaritaIngredients = "Tequila, lime juice, and triple sec";
  addNewInnerText(".menu-item:last-child > p", margaritaIngredients);
  // add menu item
  addNewElement(".menu", "div");
  addNewClass(".menu > div:last-child", "menu-item");
  addNewImage(".menu > div:last-child", coffee);
  addNewElement(".menu > div:last-child", "h3");
  addNewInnerText(".menu-item:last-child > h3", "Cappuccino");
  addNewElement(".menu > div:last-child", "p");
  const cappuccinoIngredients = "Colombian blend, and almond milk";
  addNewInnerText(".menu-item:last-child > p", cappuccinoIngredients);
  // add menu item
  addNewElement(".menu", "div");
  addNewClass(".menu > div:last-child", "menu-item");
  addNewImage(".menu > div:last-child", cake);
  addNewElement(".menu > div:last-child", "h3");
  addNewInnerText(".menu-item:last-child > h3", "Cheesecake");
  addNewElement(".menu > div:last-child", "p");
  const cakeIngredients = "No sugar delicious strawberry cheesecake";
  addNewInnerText(".menu-item:last-child > p", cakeIngredients);
  // add menu item
  addNewElement(".menu", "div");
  addNewClass(".menu > div:last-child", "menu-item");
  addNewImage(".menu > div:last-child", iceCream);
  addNewElement(".menu > div:last-child", "h3");
  addNewInnerText(".menu-item:last-child > h3", "Vanilla ice cream");
  addNewElement(".menu > div:last-child", "p");
  const iceCreamIngredients = "Vanilla, chocolate syrup, and cheery";
  addNewInnerText(".menu-item:last-child > p", iceCreamIngredients);

  buildFooter();

  navActiveSwitch();
};

export default menuClick;