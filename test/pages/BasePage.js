export default class BasePage {
  get header() { return $('h1') }
  get paragraph() { return $('p') }
  get successMsg() { return $('.notification-success') }
  get failMsg() { return $('.notification-error') }
  get loginLink() { return $('[qa="login-link"]') }
  get registerLink() { return $('[qa="register-link"]') }

  open(path){
    browser.url(path)
  }

}
