import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from "react-native-web";
import SlideItem from './SlideItem';
import IconButton from "./base/IconButton";
import Button from './base/Button';
import Styles from '../styles';

function Slides({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const width = Math.min(Dimensions.get('window').width, 600);
    const separatorWidth = 20;
    const itemWidth = width - (separatorWidth * 2);
    const goToNextSlide=()=>{
        if(currentIndex<slides.length-1){
            setCurrentIndex(currentIndex+1)
        }
    }
    const goToPrevSlide=()=>{
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1)
        }
    }
    const restartSlide=()=>{
        setCurrentIndex(0)
    }
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 30}}>
                <IconButton testID="button-prev" left icon='arrow_back' onPress={goToPrevSlide} disabled={currentIndex===0}/>
                <View style={{width: separatorWidth}}/>
                <SlideItem item={slides[currentIndex]} width={itemWidth}/>
                <View style={{width: separatorWidth}}/>
                <IconButton testID="button-next" right icon='arrow_forward' onPress={goToNextSlide} disabled={currentIndex===slides.length-1}/>
            </View>
            <View style={styles.restartButtonContainer}>
                <Button testID="button-restart"
                        style={[Styles.mx_8, Styles.button, Styles.button_small]}
                        onPress={restartSlide}
                        disabled={currentIndex === 0}>Restart
                </Button>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    restartButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Slides;
