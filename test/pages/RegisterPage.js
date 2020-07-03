import BasePage from "./BasePage";

class RegisterPage extends BasePage {
  get header() { return $('h1') }
  get paragraph() { return $('p') }
  get firstNameField() { return $('[name="firstName"]') }
  get lastNameField() { return $('[name="lastName"]') }
  get phoneField() { return $('[name="phone"]') }
  get emailField() { return $('[name="email"]') }
  get passwordField() { return $('[name="password"]') }
  get submitBtn() { return $('button[type="submit"]') }

  open() {
    super.open('/user/register');
  }

  submitForm(){
      this.submitBtn.waitForClickable();
      this.submitBtn.click();
  }

  registerNewUser(user){
    this.open();
    this.firstNameField.setValue(user.firstName);
    this.lastNameField.setValue(user.lastName);
    this.phoneField.setValue(user.phone);
    this.emailField.setValue(user.email);
    this.passwordField.setValue(user.password);
    this.submitForm();
  }
}

export default new RegisterPage();