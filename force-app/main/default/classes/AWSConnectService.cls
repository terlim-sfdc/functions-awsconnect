public class AWSConnectService {
  public static void connectAWS() {
     // invoke the function
     System.debug('calling connectAWS');
 
     functions.Function myFunction = functions.Function.get(
       'singlife.awsconnect'
     );
     functions.FunctionInvocation invocation = myFunction.invoke(
       '{"CustomerPhoneNumber":"+6598765432", "AgentPhoneNumber":"+6591234567"}',
       new MyCallback()
     );
   }
 
   public class MyCallback implements functions.FunctionCallback {
     public void handleResponse(functions.FunctionInvocation result) {
       System.debug('calling callback');
       String jsonResponse = result.getResponse();
       System.debug('Got response ' + jsonResponse);
     }
   }
 }