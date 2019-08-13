Feature: Gmail Login

Scenario Outline: Gmail Homepage Login and compose mail with link






Given User is on landing page
When when user login in gmail with <username> and <password>
Then Homepage is appear
When user click on compose mail "receivermailid" with link
Then mail is suuccessfully sent 

Examples:
|username                   |password     |
|abc                        |xyz    |
