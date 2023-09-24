import {View, StyleSheet,} from 'react-native'; 
import TimerComponent from './TimerComponent';

/*
*Time function takes time as props from its parent Component 
*-props can carry all these funcs if params gets too long  
*--{toMinutes, toMilliSeconds, toSeconds, toTimeStamp, time}
*/
function Time ({time,width, height, toTimeStamp}) {

    const screenWidth = width;
    const screenHeight = height * 0.5;
    
    return (
      
        <View style = {[styles.clockface, {width: screenWidth, height: screenHeight}]}>
        <TimerComponent 
        toTimeStamp={toTimeStamp}
        time={time}
        width={width}/> 
        </View> 
    )
}


const styles = StyleSheet.create({

    clockface : { 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
        },
   

})
export default Time; 


