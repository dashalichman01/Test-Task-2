class Page{
    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async openUrl(url){
    await this.page.goto(url);
  }

  async getElement(element){
    return this.page.locator(element);
  }

  async getElements(element){
    return this.page.$$(element);
  }

  async setValue(element, value){
    await (await this.getElement(element)).fill(value);
  }

  async clickElement(element){
    await (await this.getElement(element)).click();
  }

}

export default { Page }