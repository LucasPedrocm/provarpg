import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonText}>Propor troca</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
    elevation: 2,
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  cardDescription: {
    fontSize: 16,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  cardButton: {
    backgroundColor: '#007aff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;

