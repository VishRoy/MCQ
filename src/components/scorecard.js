import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/ScoreCardScreenStyle';

const ScoreCardScreen = ({route}) => {
    const {score} = route.params;
    const {len} = route.params;
    return (
        <View style={styles.scoreCardView}>
            <Text style={styles.scoreCardText}>Congrats</Text>
            <Text style={styles.scoreCardText}>You've scored {score} out of {len}</Text>
        </View>
    )
}

export default ScoreCardScreen;