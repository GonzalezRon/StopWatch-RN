import { useState,useEffect, useRef ,useCallback,useMemo} from 'react';
import { View,StyleSheet, AppState,useWindowDimensions } from 'react-native';
import Time from './Components/Time';
import Controls from './Components/Controls';
import Laps from './Components/Laps';


function Stopclock(){


    const appState = useRef(AppState.currentState) 
    const [appStateVisible, setAppStateVisible] = useState(appState.current)   
    const [time ,setTime] = useState(0);
    /* -1 => Stopped |  0 => paused | 1=> playing */
    const [status, setStatus] = useState(-1); 
    //const [laps, setLaps] = useState([]) // const [laps, setLaps] = useState([toTimeStamp(time)]) 
    //to get current time as initial time, initialize useState within array
    const {width,height} = useWindowDimensions(); 
    const [lapTime, setLapTime] = useState(0)
    const lapsList = useRef([])
    
  

    // console.log("test :"+test.current)


    //const screenWidth = width;
   // const screenHeight = height * 0.5;


    useEffect(()=>{
        const subs = AppState.addEventListener('change', (nextAppState) => {
            // if (appState.current.match(/inactive|background/) && nextAppState === 'active'){
            //     console.log("apps in foreground")   
            // }
            appState.current = nextAppState
            setAppStateVisible(appState.current)
            //console.log('AppState#1: '+appState.current)
            //** CATCH THIS BUG -- INACTIVE UNABLE TO clearInterval  -- use console.log() */
            if ((appState.current === 'background'||appState.current === 'inactive') && status === 1){
                clearInterval(timerID)
                timerID = setInterval(()=> {
                    setTime((t)=> t + 10)
                    setLapTime((t)=> t + 10)
                }, 10)       
            }       
        })

        let timerID; 
        if (status===1){ //time is playing 
            timerID = setInterval(()=>{
                setTime((t)=>t + 10) 
                setLapTime((t)=> t + 10)
            },10) // useEffect: runs every 10 miliseconds and the function adds ten miliseconds to time + previous time  
        }
        else{ 
            if (status===-1) //STOPPED STOPWATCH
            reset();
            clearInterval(timerID)
        } 
        return ()=> {
            subs.remove();
            clearInterval(timerID)
            
        }
    },[status]) 



    const handleLapReset=()=>{
        if (status=== 1){   
            handleLapStamp()
        }else{
        if(status===0)
             reset(); 
        }
    }

    const handleStartStop= ()=>{ 
        if (status === -1 || status === 0){
            setStatus(1);
        }else{
            setStatus(0); 
        }
    } 

    const reset=()=>{ 
        setTime(0)
        setLapTime(0)
        lapsList.current = []
    }


    const handleLapStamp=()=>{
        lapsList.current = [...lapsList.current, toTimeStamp(lapTime)]
        console.log('laps.current: '+ lapsList.current)
        setLapTime(0)
    }
    /*
    * @toTimeStamp returns String 
    */
   const toTimeStamp =(t)=> { 
        const convertedValueMinutes = Math.floor(t/60000)%60
        const convertedValueSeconds = Math.floor(t/1000)%60
        const convertedValueMilliseconds = Math.floor(t/10)%100
        const min = ('0'+convertedValueMinutes).slice(-2)
        const sec = ('0'+convertedValueSeconds).slice(-2)
        const mil = ('0'+convertedValueMilliseconds).slice(-2)
        return min+":"+sec+"."+mil
    }
    /*time can be subtracted then made into time stamp
    */


    
    return (
        <View style = {styles.clockView}>

            <Time 
            time={time}
            toTimeStamp={toTimeStamp}
            width={width}
            height={height}
            />
            <Controls 
            appState={appStateVisible}
            handleStartStop={handleStartStop}
            handleLapReset={handleLapReset}
            status={status}/> 

            <Laps 
            lapsList = {lapsList.current}
            width={width}
            height={height}
            />  
        </View>
    )
}

const styles = StyleSheet.create({

    clockView: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'black',
    },
})

export default Stopclock; 




 
