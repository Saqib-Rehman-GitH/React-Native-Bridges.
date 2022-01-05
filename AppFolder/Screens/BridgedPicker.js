import React from 'react'
import {View,Text,Image,StyleSheet, FlatList, SafeAreaView,Platform, NativeModules} from 'react-native'
import Ripple from 'react-native-material-ripple'


const BridgedPicker = () => {

    let isIOS = Platform.OS == "ios"
    const todos = [
        "Bridge Picker",
    ]

    const Cell = ({item,index}) => {
        return(
            <Ripple style={[styles.cellContainer]}>
                <Text style={[styles.cellText]}>{item}</Text>
            </Ripple>
        )
    }

    const callAlertFromNative = () => {
        // isIOS && NativeModules.Picker.ShowMessage("hello",3)
        console.log("NativeModules = " , NativeModules)
    }

    return(
        <View style={[styles.mainView]}>
            <SafeAreaView />
            <Text style={[styles.header]}>Bridged Picker</Text>
            <Ripple onPress={callAlertFromNative}>
                <Text>Call Native Alert</Text>
            </Ripple>
            {/* <FlatList 
                style={[styles.flatlist]}
                data={todos}
                renderItem={Cell}
                keyExtractor={(_,index)=>String(index)}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainView : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    header : {
        color:'grey',
        fontSize:23,
        fontWeight:'bold'
    },
    flatlist :{
        flex:1,
        marginTop:20,
        width:'100%',
    
    },
    cellContainer :{
        width:'80%',
        height:45,
        backgroundColor:'lightblue',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    cellText : {

    }
})

export default BridgedPicker;