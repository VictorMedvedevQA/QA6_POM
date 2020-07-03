export default class BasePage {
  get successMsg() { return $('.notification-success') }
  get failMsg() { return $('.notification-error') }
  get loginLink() { return $('[qa="login-link"]') }
  get registerLink() { return $('[qa="register-link"]') }

  open(path){
    browser.url(path)
  }

}
