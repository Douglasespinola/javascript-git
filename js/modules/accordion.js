export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // INICIAR FUNÇÃO
  init() {
    if (this.accordionList.length) {
      // Ativar primero item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }

  // if (accordionList.length) {
  //   accordionList[0].classList.add(this.activeClass);
  //   accordionList[0].nextElementSibling.classList.add(this.activeClass);
  // }
}
