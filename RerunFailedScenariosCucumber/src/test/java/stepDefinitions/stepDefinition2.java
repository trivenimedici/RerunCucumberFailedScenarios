package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

//import cucumber.api.java.ContinueNextStepsFor;

public class stepDefinition2 {
    @Given("^user navigated to the application$")
    public void user_navigated_to_the_application () throws Throwable {
        System.setProperty("webdriver.firefox.marionette", "C:\\Users\\tmedici\\Downloads\\geckodriver-v0.21.0-win32\\geckodriver.exe");
        WebDriver driver = new FirefoxDriver();
        driver.get("http://google.com");
        String url = driver.getCurrentUrl();
        System.out.println(url);
    }

    @When("^entered email id$")
    public void entered_email_id() throws InterruptedException {
        Thread.sleep(5000);
        System.out.println("entered email id");


    }

    @Then("^click next$")
    public void click_next() throws Throwable {
        Thread.sleep(5000);
        System.out.println("clicked next");
    }

    // @ContinueNextStepsFor({AssertionError.class, NullPointerException.class})
     // @ContinueNextStepsFor(AssertionError.class)
    @Then("^entered username$")
    public void entered_username() throws InterruptedException {
        Thread.sleep(5000);
       // throw new AssertionError("assert exception");
        System.out.println("entered username");
    }

    @Then("^entered password$")
    public void entered_password() throws InterruptedException {
        Thread.sleep(5000);
        System.out.println("entered password");
    }
}
