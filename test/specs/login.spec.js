import { user as newUser}  from "../data/register.data";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

describe('VERIFY SUCCESSFUL LOGIN', () => {
  it('should register new user and verify success notification',  () => {
    RegisterPage.open();
    RegisterPage.registerNewUser(newUser);
    RegisterPage.successMsg.waitForDisplayed();
  });

  it('should verify user has been created successfully via login',  ()=> {
    LoginPage.open();
    LoginPage.loginAs(newUser);
    LoginPage.successMsg.waitForDisplayed();
  });
})