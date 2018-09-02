package Com.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Features", 
		glue={"Com.TestCases"},
		monochrome=true,
		plugin={"html:test/Summary.html","json:summary.json"},
		tags={"@multipleSetData"}
		
)


public class Runner {
	
	
}
