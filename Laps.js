import {React, useRef} from 'react';
import {View, StyleSheet} from 'react-native'; 
import LapsRender from './LapsRender';
import {FlashList} from '@shopify/flash-list'





function laps ({ width, height, lapsList, size}){ 

    const screenHeight = height
    const screenWidth = width

    const flashRef = useRef(null)


    const renderItem = ({item, index})=>{
        return (
            <LapsRender 
            item = {item} 
            size = {size}
            index ={index + 1}/> // add one to remove index 
        )
    }

    return (
        <View style={styles.mainView}>
            <View style={{width: screenWidth * .9, minHeight: screenHeight/3.99}}>
               
                <FlashList
                ref={flashRef}
                extraData={size}
                data={lapsList}
                renderItem={renderItem}
                estimatedItemSize={10}
                inverted={false}
                onContentSizeChange={()=>{
                    flashRef.current.scrollToIndex({index: size-1})
                }}
                /> 

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    mainView: {
        backgroundColor: 'black',
    }, 
})

export default laps;


