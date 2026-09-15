const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator("//input[@name='username']");
    this.password = page.locator("//input[@name='password']");
    this.submitButton = page.locator("//button[text()=' Login ']");
    //this.dashbordHeading = page.locator("//h6[text()='Dashboard']");

     this.dashboardHeading = page.getByRole('heading', {
            name: 'Dashboard'})


    this.pinText = page.getByText("PIM", { exact: true });
    this.empNameField = page.locator("//label[text()='Employee Name']/ancestor::div[contains(@class,'oxd-input-group')]//input");
       this.firstSuggestion = page.locator(
            "(//div[@role='listbox']//div[@role='option'])[1]"
        );
    this.empIdField = page.locator("//label[text()='Employee Id']/ancestor::div[contains(@class,'oxd-input-group')]//input");
    
    this.empStatusDropdown = page.locator("//label[text()='Employment Status']//ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//i");
     // Employment Status dropdown
        /*this.empStatusDropdown = page.locator(
            '(//div[contains(@class,"oxd-select-text")])[1]'
        );*/

        // All dropdown options
        this.dropdownOptions = page.locator(
            '.oxd-select-dropdown div[role="option"]'
        );

        // Include dropdown
        this.includeDropdown = page.locator("//label[text()='Include']//ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//i");

        // First option
        this.firstIncludeOption = page.locator("//div[@role='listbox']//div[@role='option']").first();
        this.jobTitleDropdown = page.locator("//label[text()='Job Title']//ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//i");
        this.subUnitDropdown = page.locator("//label[text()='Sub Unit']//ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//i");

       this.subUnit = page.locator("//label[text()='Sub Unit']//ancestor::div[@class='oxd-input-group oxd-input-field-bottom-space']//div[@class='oxd-select-text-input']");
       this.search = page.locator("//button[text()=' Search ']");
       this.noRecordsMsg = page.locator("//div[@aria-live='assertive']");
    }
    
  
  
  
  

  async goto() {
    return await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitButton.click();
   
  }

  async getDashboardText() {
     return await this.dashboardHeading.textContent();

  }

  async pimClick(){
     return await this.pinText.click();

  }

  async pimPage(empName, empid){
    await this.empNameField.click();
    
    await this.empNameField.fill(empName);
   
       
        await expect(this.firstSuggestion).toBeVisible({ timeout: 10000 });

          await this.firstSuggestion.click();
     await this.empIdField.fill(empid);
     await this.empStatusDropdown.click();
     await this.dropdownOptions.nth(1).click();
     await this.includeDropdown.click();
        await this.firstIncludeOption.click();
        await this.jobTitleDropdown.click();
        await this.page.getByRole('listbox').getByText('Account Assistant').click();
        await this.subUnit.click();
        await this.page.getByRole('listbox').getByText('Administration').click();
        await this.search.click();
        await expect(this.noRecordsMsg).toContainText("No Records Found");
       
        

  }

}

module.exports = LoginPage;