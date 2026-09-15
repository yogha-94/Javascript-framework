const{test,expect}=require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');



test('Orange HRM Login test', async ({page})=>{

    const login = new LoginPage(page);

    await login.goto();
    await login.login("Admin","admin123");
  let dashboardtext = await login.getDashboardText();

  if(await dashboardtext === 'Dashboard'){

    console.log("the Text after login: "+ dashboardtext);
  }
  else{

    console.log("Login is not sucessfull");
  }

   await login.pimClick();
   

  await login.pimPage("h","7812");
});
