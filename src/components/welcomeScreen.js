import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/WelcomeScreenStyle';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>MCQs</Text>
            <View style={styles.instructionsContainer}>
                <Text style={styles.instructionsText}>Instructions : </Text>
                <Text style={styles.textStyle}>1. There will be 15 questions with multiple options to select from.</Text>
                <Text style={styles.textStyle}>2. Every question will have a time limit of 1 minute to answer.</Text>
                <Text style={styles.textStyle}>3. You can only select one answer per question. Once you select an answer, you cannot change it.</Text>
                <Text style={styles.textStyle}>4. 1 mark will be rewarded for each correct answer.</Text>
                <Text style={styles.textStyle}>5. Once you select an answer, you will be re-directed to next question in 5 secs.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.startButton}>
                <Text style={styles.startText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen ;
