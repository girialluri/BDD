package Com.GenericFunctions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class GenericFunctions {
	
	public static WebDriver driver;
    
	public static boolean LaunchBrowser(String browser, String url){
		boolean status= true;
		try{
			switch (browser){
			
			case "firefox":{
				driver=new FirefoxDriver();
				driver.get(url);
				driver.manage().timeouts().implicitlyWait(35,TimeUnit.SECONDS);
				break;
			}
			
			case "chrome":{
				System.setProperty("WebDriver.chrome.driver", "chromedriver");
				driver=new ChromeDriver();
				driver.get(url);
				driver.manage().timeouts().implicitlyWait(35,TimeUnit.SECONDS);
				break;
			}
			default:				
				throw new Exception("given wrong Browser input"+browser);						
			}
		
		
		}
		catch(Exception e){
			status= false;
			System.out.println(e.getMessage());
		}
		return status;
		
	}
	
}
