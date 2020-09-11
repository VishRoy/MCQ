import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/QuizScreenStyle';

const PrevNext = ({ qno, len, navigation , score}) => {
    return (
        <View style={styles.submitView}>
             { qno !== (len - 1) ? null : <TouchableOpacity onPress={() => navigation.navigate('Score', {score : score, len: len})} style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default PrevNext;