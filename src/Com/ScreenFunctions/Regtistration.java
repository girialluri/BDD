package Com.ScreenFunctions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Regtistration {
	
	
@FindBy(how=How.XPATH,using="//*[@href='/register']")
public static WebElement lnk_Register;


   
	public static boolean ClickRegistrationLink(){
	boolean status= true;
		try{
			lnk_Register.click();			
		}
		catch(Exception e){
			System.out.println();
		}
		return status;
	}
}
