
import {View, Text, StyleSheet,} from 'react-native'; 

/*
*Time function takes time as props from its parent Component 
*-props can carry all these funcs if params gets too long  
*--{toMinutes, toMilliSeconds, toSeconds, toTimeStamp, time}
*/
function Time ({time,toTimeStamp,width, height,}) {

    const screenWidth = width;
    const screenHeight = height * 0.5;

    
    return (
        <View style={[styles.clockface, {width: screenWidth, height: screenHeight}]}>
            <View style={styles.clockFrame}>
                <Text style={styles.clockDigits}>
                    {toTimeStamp(time)}
                </Text> 
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({

    clockDigits:{
        fontSize:110,//112
        fontWeight:'200',
        color:'#F9F6EE',
       
        //create a feature that changes the timers color 
    },
    clockface : {
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'black'
        },
    clockFrame:{
        width:"95%",
        //hold clock timer 
    },
})
export default Time; 

