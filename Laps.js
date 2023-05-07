import {React, useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'; 



function laps ({ width, height, lapsList}){ 


    const screenWidth = width
    
    const renderItem = useCallback(({item, index})=>{
        console.log("this statement shouldnt show too often")
        return (
            <View style = {styles.LapFrame}>
                <Text style={styles.lapText}>Lap{index + 1}</Text>
                <Text style={styles.lapText}>{item}</Text>
            </View> 
        )
    },[])

    const keyExtractor = useCallback((index)=>{
        return()=> index
   },[])

    return (
        <View style={styles.mainView}>
            <View style={{width: screenWidth * .9}}>
                <FlatList
                data={lapsList}
                renderItem={renderItem}
                key={keyExtractor} 
                /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LapFrame : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth:16,
        borderBottomWidth: .17,
        borderBottomColor: '#F9F6EE'
    }, 
    lapText: {
        color:'#F9F6EE',
        fontSize: 18, 
        borderBottomWidth: 8,
    },
    
    mainView: {
        backgroundColor: 'black',
         flex:.95,
    }, 

})

export default laps;



   {/* {laps.map(
                        (lap, index)=> {
                            
                            return(
                            <View style = {styles.LapFrame} key={index}>
                                <Text style={styles.lapText}>Lap{index + 1}</Text>
                                <Text style={styles.lapText}>{lap}</Text>
                            </View> 
                        )
                    })} */}