import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "Tim A";
  const teamB = "Tim B";

  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamA} Menang!`, `${teamA} mencapai skor 10.`);
      }
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert(`${teamB} Menang!`, `${teamB} mencapai skor 10.`);
      }
    }
  };

  const decrementScore = (team) => {
    if (team === 'A') {
      setScoreA(scoreA > 0 ? scoreA - 1 : 0);
    } else {
      setScoreB(scoreB > 0 ? scoreB - 1 : 0);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Skor Pertandingan Futsal</Text>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('A')} />
          <Button title="-" onPress={() => decrementScore('A')} />
        </View>
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('B')} />
          <Button title="-" onPress={() => decrementScore('B')} />
        </View>
      </View>

      <View style={styles.resetButton}>
        <Button title="Reset Pertandingan" onPress={resetScores} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  resetButton: {
    marginTop: 30,
  },
});

export default App;
