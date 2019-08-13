Feature: Gmail Login

Scenario Outline: Gmail Homepage Login and delete compose mail.






Given User is on landing page
When when user login in gmail with <username> and <password>
Then Homepage is appear
When user click on compose with mail id "receivermailid" with link and delete
Then mail is deleted 

Examples:
|username                   |password     |
|abc                        |xyz  |
