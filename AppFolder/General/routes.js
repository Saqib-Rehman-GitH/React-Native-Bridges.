import { Navigation } from "react-native-navigation"

export const AppScreens = Object.freeze({
    BridgedPicker:'BridgedPicker'
})


export const pushScreen = (screen) => {
    Navigation.push('AppStack', {
        component : { 
            name : screen ,
            options : {
                topBar : {
                    visible : true
                },
                animations : {
                    push: {
                        content: {
                            translationX: {
                                from: require('react-native').Dimensions.get('window').width,
                                to: 0,
                                duration: 250
                            }
                        }
                    },
                    pop: {
                        content: {
                            translationX: {
                                from: 0,
                                to: -require('react-native').Dimensions.get('window').width,
                                duration: 250
                            }
                        }
                    }
                }
            }
        }
    } )
}