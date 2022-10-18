/**
 * Describe Awsconnect here.
 *
 * The exported method is the entry point for your code when the function is invoked. 
 *
 * Following parameters are pre-configured and provided to your function on execution: 
 * @param event: represents the data associated with the occurrence of an event, and  
 *                 supporting metadata about the source of that occurrence.
 * @param context: represents the connection to Functions and your Salesforce org.
 * @param logger: logging handler used to capture application logs and trace specifically
 *                 to a given execution of a function.
 */
 import axios from "axios";
 

export default async function (event, context, logger) {

    const payload = event.data || {};

    // default values
    if (payload == {} || !payload.CustomerPhoneNumber || !payload.AgentPhoneNumber) {
      var customerNum = "+6591234567";
      var agentNum = "+6598765432";
    }
    else{
      var customerNum = payload.CustomerPhoneNumber;
      var agentNum = payload.AgentPhoneNumber;
    }

    logger.info("calling function");
    //   var axios = require("axios");
    var data = JSON.stringify({
      CustomerPhoneNumber: customerNum,
      AgentPhoneNumber: agentNum
    });
  
    var config = {
      method: "post",
      url: "https://9erbzpjw41.execute-api.ap-southeast-1.amazonaws.com/prod",
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("message sent");
        logger.info("message sent");
      })
      .catch(function (error) {
        console.log(error);
        logger.info(error);
      });
}
