import { StatusBar } from 'expo-status-bar';
import { useRef, useState, useEffect} from 'react';
import { StyleSheet, View,Text, Button } from 'react-native';
import Stopclock from './Stopclock';

export default function App() {


  // const [x, setTime] = useState(0)
  // const time = useRef(0)
  // const [active, setActive] = useState(false)

  // let timer


  // useEffect(()=>{
  //   //console.log("this statement shouldnt show too often")
  //   if(active == true){
  //     timer = setInterval(()=>{
  //       setTime((t)=>t + 10)
  //     },10)
  //     }
  //     else
  //     if(active == false){
  //       clearInterval(timer)
  //       setTime(0)}
  //     return ()=> clearInterval(timer)
  // },[active])


  // onLapPress=()=>{
  //   time.current = x
  //   console.log(' time.current: '+time.current)
  // }



  

  //  onPress=()=>{
  //   if (!active){
  //     setActive(true)
  //   }else{
  //     setActive(false)
  //   }
  // }


  // return (
  //   <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
  //   <Text style = {{color:'black', fontWeight: 900 }}>
  //     {'This is the current time: '+ x + '\n'+ active}
  //   </Text>
  //   <Button onPress={onPress} title='Button'color='#007AFF' /> 
  //   <Button onPress={onLapPress} title={'Lap'}/>
  //   </View>
  // )


  return (
    <View style={styles.container}>
      <Stopclock/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
