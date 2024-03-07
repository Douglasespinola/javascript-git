import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.event = events;
    }
    this.activeClass = "active";
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
