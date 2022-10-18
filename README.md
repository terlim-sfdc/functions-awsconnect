# Salesforce DX Project

This is a sample Salesforce DX Project, with Salesforce Functions.

The Salesforce Functions basically does a simple API call to Amazon Connect, which makes a phone call to connect between an agent and a customer.

Refer to 'functions/awsconnect' for the Javascript function.

Refer to 'force-app/main/default/classes/AWSConnectService.cls' for the APEX code which invokes the Javascript function, using myFunction.invoke(), and passing in the customer and agent phone numbers as variables.