import {View, Text, StyleSheet,Pressable} from 'react-native'
import { useCallback,useMemo } from 'react';




function Controls({status,handleStartStop, handleLapReset, appStateVisible}){



    const checkAppState = useMemo(()=> {
        return ()=> (appStateVisible==='active'?true:false)
    },[appStateVisible])


     /* -1 => Stopped |  0 => paused | 1=> playing */
    return (
        <View style={styles.TouchableRow}>

            <Pressable
                disabled={checkAppState()}
                style={(status===1)?styles.lapresetStyle: styles.lapresetStyle}
                onPress={handleLapReset}
                >
                <View style = {styles.buttonDeco}>
                 <Text style={styles.buttonText}>
                    {(status===1||status ===-1)?'LAP':'RESET'}
                </Text> 
                </View>   
            </Pressable>

            <Pressable
                disabled={checkAppState()}
                style = {(status===-1||status ===0)?styles.StartStyle:styles.StopStyle}
                onPress={handleStartStop}
                >
               <View style = {styles.buttonDeco}>
                <Text style={styles.buttonText}>
                    {(status===-1||status ===0)?'START':'STOP'} 
                </Text>
                </View> 
            </Pressable>
        </View>
    )
}


const similarButtonSpecs = {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
        height: 70,
        width: 70,
}

const styles = StyleSheet.create({

    TouchableRow : {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400,
        borderBottomWidth: 20,
    },

    StartStyle : {
        backgroundColor:'#829460', //'#77D970', //'#135425', (green) //
        ...similarButtonSpecs,
    },
    //make this into one button that is styled one large green circle then black then green again with text 
    StopStyle : { 
        backgroundColor: 'red',
        ...similarButtonSpecs, 
    }, 
    lapresetStyle: {
        backgroundColor: 'pink',//'grey', 
        ...similarButtonSpecs, 
    },

    buttonText : {
        fontSize:18, 
        color: '#1A2867',//'black', 
        fontWeight: '600',

    },

    buttonDeco : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: 80,
        width: 80,
        borderColor: 'gold',
        borderWidth: 1.5,
    }, 

})

export default Controls;



