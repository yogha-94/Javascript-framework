const{test,expect}=require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');
const dataDriven = require('../testData/testData.json');

dataDriven.forEach((data) => {

    test('Login using username ${data.username} and password ${data.password}', async ({page}) =>{

        let login = new LoginPage{page};

        await login.goto();

         await login.login(data.username,data.password);

                    console.log("Login Test completed for username;" + data.username + " and password " + data.password);

    });
});