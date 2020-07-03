export default class BasePage {
  get successMsg() { return $('.notification-success')}

  open(path){
    browser.url(path)
  }

}
