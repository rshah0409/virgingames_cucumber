package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//input[@id='field-username']")
    WebElement userName;

    @FindBy(xpath = "//input[@id='field-password']")
    WebElement passWord;

    @FindBy(xpath = "//span[text()='Login']")
    WebElement loginButton;

    @FindBy(xpath = "//div[@data-qa='login-form__error-message']")
    WebElement errorMessage;

    public void enterUserName(String usrName){
        sendTextToElement( userName,usrName );
        log.info("Entering username : " + usrName + " to username field : " + userName.toString());

    }
    public void enterPassword(String psWord){

        sendTextToElement( passWord,psWord );
        log.info("Entering Password : " + psWord + " to password field : " + passWord.toString());
    }
    public void clickOnLoginButton(){
        clickOnElement( loginButton );
        log.info("Clicking on login button : " + loginButton.toString());


    }
    public String getErrorMessage(){

        log.info("Getting error message text" + errorMessage.toString());
        return getTextFromElement( errorMessage );
    }


}
