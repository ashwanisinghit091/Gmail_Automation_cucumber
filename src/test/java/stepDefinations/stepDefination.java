package stepDefinations;


import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import Gmail_Pages.Inbox_page;
import Gmail_Pages.Sent_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_pac.ClickScreenshot;
import helper_pac.Hold;
import helper_pac.Upload;

public class stepDefination  {
	public  WebDriver Driver;
	public Properties pr;
	public  Inbox_page ip;
	
	@Given("^User is on landing page$")
	public void User_is_on_landing_page() throws Throwable {
		


		 System.setProperty("webdriver.chrome.driver", "E:\\chromedriver.exe");
		 Driver =new ChromeDriver();
		
		  pr=new Properties();
			FileInputStream fs=new FileInputStream("D:\\workspace11\\Gmail_Automation_cucumber\\src\\test\\java\\Credentials.properties");
			pr.load(fs);
			Driver.get(pr.getProperty("URL"));
			Driver.manage().window().maximize();

			Driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
		
		
	}





@Then("^Homepage is appear$")
public void Homepage_is_appear() throws Throwable {
	
	Thread.sleep(4000);

	System.out.println(Driver.getCurrentUrl());

	Assert.assertEquals(Driver.getCurrentUrl(),"https://mail.google.com/mail/u/0/#inbox");
	
}

@When("^when user login in gmail with (.+) and (.+)$")
public void when_user_login_in_gmail_with_and(String username, String password) throws Throwable {
Driver.findElement(By.id("identifierId")).sendKeys(username);//put username for login
	
	Driver.findElement(By.id("identifierId")).sendKeys(Keys.ENTER);
	Driver.findElement(By.name("password")).sendKeys(password);//put password for login
	Driver.findElement(By.name("password")).sendKeys(Keys.ENTER); 
}











@When("^user click on compose mail \"([^\"]*)\" with attachment and emoji$")
public void user_click_on_compose_mail_something_with_attachment_and_emoji(String receiverusername1) throws Throwable {
	 ip=new Inbox_page( Driver);
		ip.compose().click();
	//Thread.sleep(4000);
		
		Hold.waitt(Driver, By.name("to"));
		
		
		
		
		ip.receivermailid().sendKeys(pr.getProperty("receiverusername1"));
		ip.subject().sendKeys("Automated mail");
		ip.message().sendKeys("Do Not Reply as it is automated generated mail");
		//.sleep(4000);
		Hold.waitt(Driver, By.xpath("//tr[@class='btC']"));
		WebElement emoji=ip.emoji1();
		//Thread.sleep(4000);
		Hold.waitt(Driver, By.xpath("//div[@class='bAK']/div[3]/div"));
		ip.emoji2(emoji).click();
		


	WebElement w1=ip.emoji3();
	int size=	ip.emoji0(w1).size();
		
		for(int i=0;i<size;i++){
			
			String emojitype=ip.emoji0(w1).get(i).getAttribute("title");
			
					
			
			if(emojitype.equalsIgnoreCase("Show nature emoticons")) {
				//w1.findElements(By.xpath("//div[@class='a8E']/button")).get(i).click();
				
				ip.emoji0(w1).get(i).click();
			}
		}
		int size2=ip.emoji4(w1).size();
	for(int j=0;j<size2;j++) {
	String emojiname=ip.emoji4(w1).get(j).getAttribute("aria-label");
	if(emojiname.equalsIgnoreCase("monkey")) {
		ip.emoji4(w1).get(j).click();
	ip.emoji5(w1).click();
	}
	}

	ip.emoji6(emoji).click();
	ClickScreenshot.page_screenshot(Driver);

	Upload.uploadFileWithRobot("D:\\error.png");
	//Thread.sleep(3000);
	Hold.waitt(Driver, By.xpath("//div[@class='dC']/div[@role='button'][1]"));
	
ip.sent(emoji).click();
}



@Then("^mail is suuccessfully sent$")
public void mail_is_suuccessfully_sent() throws Throwable {
	int size1=ip.option1().size();


	for(int k=0;k<size1;k++) {
	String Option=	ip.option2().get(k).getAttribute("title");
		
	if(Option.equalsIgnoreCase("Sent")) {
	ip.option2().get(k).click();
		}}



		//Thread.sleep(4000);
		Hold.waitt(Driver, By.xpath("//div[2]/div/div[@class='Cp']/div/table/tbody"));
		
		
		
		Sent_Page sp=new Sent_Page(Driver);
		System.out.println(sp);
		//WebElement we2=ip.option3();
		for(int l=0;l<sp.requiredsentmail().size();l++) {
		String Subject=sp.requiredsentmail().get(l).getText();
		System.out.println(Subject);
		if(Subject.equalsIgnoreCase("Automated Mail")) {
			sp.requiredsentmail().get(l).click();	
		}
		}
}

@When("^user click on compose mail \"([^\"]*)\" with link$")
public void user_click_on_compose_mail_something_with_link(String receiverusername1) throws Throwable {

	 ip=new Inbox_page( Driver);
		ip.compose().click();
	//Thread.sleep(4000);
		
		helper_pac.Hold.waitt(Driver, By.name("to"));
		
		
		
		
		ip.receivermailid().sendKeys(pr.getProperty("receiverusername1"));
		ip.subject().sendKeys("Automated mail");
	
	
	
	
	WebElement emoji=Driver.findElement(By.xpath("//tr[@class='btC']"));
	helper_pac.Hold.waitt(Driver, By.xpath("//div[@class='bAK']/div"));
	int size=emoji.findElements(By.xpath("//div[@class='bAK']/div")).size();
	for(int i=0;i<size;i++) {
	String text=emoji.findElements(By.xpath("//div[@class='bAK']/div")).get(i).getAttribute("command");
	if(text.equalsIgnoreCase("+link")) {
		
		emoji.findElements(By.xpath("//div[@class='bAK']/div")).get(i).click();
		
}

}
WebElement we1=	Driver.findElement(By.xpath("//div[@class='Kj-JD LW-JD']"))	;
we1.findElement(By.xpath("//input[@id='linkdialog-text']")).sendKeys("Happy Bday");

we1.findElement(By.xpath("//input[@id='linkdialog-onweb-tab-input']")).sendKeys("www.fb.com");
we1.findElement(By.xpath("//button[@name='ok']")).click();

emoji.findElement(By.xpath("//div[@class='dC']/div[@role='button'][1]")).click();
	
}

@When("^user click on compose with mail id \"([^\"]*)\" with link and delete$")
public void user_click_on_compose_with_mail_id_something_with_link_and_delete(String strArg1) throws Throwable {

	 ip=new Inbox_page( Driver);
		ip.compose().click();
	//Thread.sleep(4000);
		
		helper_pac.Hold.waitt(Driver, By.name("to"));
		
		
		
		
		ip.receivermailid().sendKeys(pr.getProperty("receiverusername1"));
		ip.subject().sendKeys("mail");
	
	
	
	
	WebElement emoji=Driver.findElement(By.xpath("//tr[@class='btC']"));
	helper_pac.Hold.waitt(Driver, By.xpath("//div[@class='bAK']/div"));
	int size=emoji.findElements(By.xpath("//div[@class='bAK']/div")).size();
	for(int i=0;i<size;i++) {
	String text=emoji.findElements(By.xpath("//div[@class='bAK']/div")).get(i).getAttribute("command");
	if(text.equalsIgnoreCase("+link")) {
		
		emoji.findElements(By.xpath("//div[@class='bAK']/div")).get(i).click();
		
}

}
WebElement we1=	Driver.findElement(By.xpath("//div[@class='Kj-JD LW-JD']"))	;
we1.findElement(By.xpath("//input[@id='linkdialog-text']")).sendKeys("Happy Bday");

we1.findElement(By.xpath("//input[@id='linkdialog-onweb-tab-input']")).sendKeys("www.fb.com");
we1.findElement(By.xpath("//button[@name='ok']")).click();
Thread.sleep(2000);
emoji.findElement(By.xpath("//div[@class='og T-I-J3']")).click();
//emoji.findElement(By.xpath("//div[@class='dC']/div[@role='button'][1]")).click();
	
}



@Then("^mail is deleted$")
public void mail_is_deleted() throws Throwable {
	if(Driver.findElement(By.xpath("//div[@class='vh']/span[@class='aT']/span[@class='bAq']")).getText().equalsIgnoreCase("Draft discarded."))
	{
		System.out.println("Message is deleted");
	}
}
}