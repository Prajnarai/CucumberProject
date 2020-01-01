package stepDefinations;

import Automation.CucumberAutomation.Base;
import cucumber.api.java.After;

public class Hooks extends Base{
	
	@After("@SmokeTest")
	public void Aftervaldiation()
	{
		driver.close();
	}
	@After("@RegressionTest")
	public void AfterSeleniumTest()
	{
		driver.close();
	}
		

}
