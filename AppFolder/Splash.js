import React from 'react'
import {View,Text,Image,StyleSheet, FlatList, SafeAreaView} from 'react-native'
import Ripple from 'react-native-material-ripple'
import { AppScreens, pushScreen } from './General/routes'


const Splash = () => {

    const todos = [
        "Bridge Picker",
    ]

    

    const Cell = ({item,index}) => {
        const onPressCell = ( index ) => {
            switch(index){
                case 0:
                    pushScreen(AppScreens.BridgedPicker)
                    break
            }
        }
        return(
            <Ripple style={[styles.cellContainer]} onPress={()=>onPressCell(index)}>
                <Text style={[styles.cellText]}>{item}</Text>
            </Ripple>
        )
    }

    return(
        <View style={[styles.mainView]}>
            <SafeAreaView />
            <Text style={[styles.header]}>Todos</Text>
            <FlatList 
                style={[styles.flatlist]}
                data={todos}
                renderItem={Cell}
                keyExtractor={(_,index)=>String(index)}
            />
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

export default Splash;