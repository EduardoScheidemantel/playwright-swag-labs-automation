Feature: Login functionality

  Scenario: Successful login
    Given the user is on the login page
    When they enter valid credentials
    Then they should be redirected to the products page

  Scenario Outline: Unsuccessful login attemps
    Given the user is on the login page
    When they login with username "<username>" and password "<password>"
    Then they should see the error message "<error_msg>"
    
    Examples:
      | username      | password       | error_msg                                                                 |
      | invalid_user  | secret_sauce   | Epic sadface: Username and password do not match any user in this service |
      | standard_user | wrong_pass     | Epic sadface: Username and password do not match any user in this service |
      |               | secret_sauce   | Epic sadface: Username is required                                        |     
      | standard_user |                | Epic sadface: Password is required                                        |