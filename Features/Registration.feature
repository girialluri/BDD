Feature: AS an end user I need to verify the following functionalities. 
Dev Team should develop the registration feature in three sections. 
QA team must validate three sections headers and their respective fields
Development team should write the Bussiness logic to register multiple users with different sets of data
QA team must validate each and every input field


Scenario: this scenario is designed to validate section Headers 
     Given As a user I want to Launch "firefox" Browser and maxmize and give the url
     |http://demo.nopcommerce.com|
     |http://nopcommerce.com|
     
  
     When the browser is lanuch click on register link 
     Then verify resister page is launched successfully
