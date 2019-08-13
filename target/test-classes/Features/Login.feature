Feature: Gmail Login

Scenario Outline: Gmail Homepage Login

Given User is on landing page
When when user login in gmail with <username> and <password>
Then Homepage is appear
When user click on compose mail "receivermailid" with attachment and emoji
Then mail is suuccessfully sent 

Examples:
|username                   |password     |
|xyz                        |abc   |
