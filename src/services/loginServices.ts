import {reaction, observable,} from 'mobx';
import { GoogleSignin, GoogleSigninButton, statusCodes  } from 'react-native-google-signin';
import autobind from 'autobind-decorator';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

@autobind
class loginServices {
    _googleSignIn = async () =>{
        try {
            GoogleSignin.configure();
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(`userInfo`, userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log('cancelled');
            
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('In Progress');
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log('Play services not available');
          } else {
            console.log('error',error.code);
            // some other error happened
          }
        }
      }
   _facebookSignIn = async () =>{
    await LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
   }   
      
}
export default loginServices;