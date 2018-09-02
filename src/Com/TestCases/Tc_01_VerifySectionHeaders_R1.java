package Com.TestCases;


import java.util.List;

import org.openqa.selenium.support.PageFactory;

import Com.GenericFunctions.GenericFunctions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

public class Tc_01_VerifySectionHeaders_R1 extends GenericFunctions{
	
	@Given("^As a user I want to Launch \"([^\"]*)\" Browser and maxmize and give the url$")

public static void LaunchApplication(String browser, DataTable testdata){
		
		String url=null;
		List <List<String>> data = testdata.raw();
					
		 url= data.get(0).get(0);
		
		
	Com.ScreenFunctions.Regtistration reg= PageFactory.initElements(driver,Com.ScreenFunctions.Regtistration.class);
	
	boolean status= LaunchBrowser(browser, url);
	System.out.println("URL is "+url);
	if (status){		
		
		System.out.println("application launced successfully");	
	}
	else{
		System.out.println("application not launched successfully");
	}
		}
	


@Given ("^the browser is lanuch click on register link$")
public void ClickRegistration(){
	Com.ScreenFunctions.Regtistration reg= PageFactory.initElements(driver,Com.ScreenFunctions.Regtistration.class);
	reg.ClickRegistrationLink();
}
}
