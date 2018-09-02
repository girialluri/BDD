package Com.TestCases;


import java.util.List;

import org.openqa.selenium.support.PageFactory;

import Com.GenericFunctions.GenericFunctions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

public class Tc_02_MultipleData extends GenericFunctions {
	
	@Given("^^a precondition has value (.*) and something with (.*)$")
	public static void LaunchApplication(String browser, String url){
		
		boolean status= LaunchBrowser(browser, url);
		System.out.println("browser:"+browser+" URL is "+url);
		
	}

}
