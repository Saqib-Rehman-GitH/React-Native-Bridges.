/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import BridgedPicker from "./AppFolder/Screens/BridgedPicker";
import Splash from "./AppFolder/Splash";

Navigation.registerComponent('Splash', () => Splash)
Navigation.registerComponent('BridgedPicker', () => BridgedPicker)

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root : {
            stack :{
                id : 'AppStack',
                children:[
                    {
                        component:{
                            name:'Splash',
                            options:{
                                topBar:{
                                    visible:false
                                },
                            }
                        }
                    }
                ]
            }
        }
    })
})
