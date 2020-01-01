package Automation.CucumberAutomation;

import java.io.IOException;
import java.util.Properties;
import java.io.FileInputStream;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	public static WebDriver driver;
	public static Properties prop;

	public static WebDriver getDriver() throws IOException
	{
		prop=new Properties();
		
		FileInputStream fis=new FileInputStream("C:\\Prajna\\Udemy\\Testing\\CucumberAutomation\\src\\main\\java\\Automation\\CucumberAutomation\\global.properties");
		
	prop.load(fis);

	
		
		System.setProperty("webdriver.chrome.driver", "C:\\Prajna\\chromedriver.exe");
   	 driver=new ChromeDriver();
   	 
  	driver.get(prop.getProperty("url"));
   	 return driver;
		
	}
	
}
