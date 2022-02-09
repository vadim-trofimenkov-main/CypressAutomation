Feature: End to end Ecommerce validation
    application regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page  
    When I add items to cart
    And Validate the total prices 
    Then Select the country, submit and verify Thank you
    
    @Smoke
    Scenario: Filling the form to shop 
    Given I open Ecommerce page  
    When I fill the form details 
    |name|gender|password|email         |ifyouLoveIceCreams|employmentStatus|date      |ProductName|
    |Alex|Male  |qwer12  |alex@test.test|false             |Student         |2010-06-11|iphone X   |  
    |Greg|Male  |qwerty1 |greg@test.test|true              |Student         |2010-04-04|Nokia Edge | 

    Then Validate the form behavior 
    And Select the shop page