import RegisterPage from '../pages/RegisterPage';
import { text, user } from '../data/register.data';

describe('USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('should verify header text', () => {
    expect(RegisterPage.header.getText()).eq(text.header);
  });

  it('should verify description text in paragraph is correct', () => {
    expect(RegisterPage.paragraph.getText()).eq(text.paragraph);
  });

  it('should populate fields and submit form', () => {
    RegisterPage.firstNameField.setValue(user.firstName);
    RegisterPage.lastNameField.setValue(user.lastName);
    RegisterPage.phoneField.setValue(user.phone);
    RegisterPage.emailField.setValue(user.email);
    RegisterPage.passwordField.setValue(user.password);
    RegisterPage.submitForm();
    RegisterPage.successMsg.waitForDisplayed();
  });
});
