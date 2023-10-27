import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVADGK81ODxrKzJ7kf19FwJnc9rCmdlw4",
    authDomain: "gns-cf.firebaseapp.com",
    projectId: "gns-cf",
    storageBucket: "gns-cf.appspot.com",
    messagingSenderId: "527514455753",
    appId: "1:527514455753:web:89d83b70bf35ed012f4718",
    measurementId: "G-99HPRM2DX5"
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);




export const requestPermission =() => {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {

      if (permission === 'granted') {
        console.log('Notification permission granted.');
        return getToken(messaging, {vapidKey: "BN6aaUtlBZWl3oStjwEInofm-yiISIIqZxmyLcapJniABLOrNMicGLzC-BYGSj1_7e_IkOzlQbUaVFvMjZwQjvk"})

        .then(currentToken => {
            if (currentToken) {
                console.log('Client Token', currentToken);
                
            } else {
                console.log('Failed to generate token.');
                
            }
        })
        .catch(err => {
            console.log('An error occurred while retrieving token.', err);
            
        }) 
        
      } else {
        console.log('User Permission Denied!');
        
      }

    })
   

}

// requestPermission()

export const onMessageListener = () => new Promise((resolve) => {
    onMessage(messaging, payload => {
        // if(!payload){
        //    reject()
        // } 
        resolve(payload);
        console.log('message recieved=======>>>>', payload);
        
    })
})
