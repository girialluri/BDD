Feature: This feature is designed to validate multiple set of data

@multipleSetData
Scenario Outline: scenario description

	Given a precondition has value <Browser> and something with <url>
		Then check <param_3> is the output
		
		Examples:
		| Browser |url                        |
		| Chrome |http://demo.nopcommerce.com/|
		| firefox |http://demo.nopcommerce.com/|
		