import React from 'react';
import { View, FlatList } from 'react-native';
import Card from '\Card.js';

const availableItems = [
  {
    id: '1',
    image: 'https://via.https://liquipedia.net/commons/images/thumb/b/b2/Radiance_burn.png/100px-Radiance_burn.png.com/400x200',
    title: 'Espada de Fogo',
    description: 'Uma espada flamejante com grande poder de ataque',
  },
  {
    id: '2',
    image: 'https://liquipedia.net/commons/images/thumb/9/9f/Shivas_guard_arctic_blast.png/100px-Shivas_guard_arctic_blast.png',
    title: 'Escudo de Gelo',
    description: 'Um escudo poderoso que aumenta a defesa do usuário',
  },
  {
    id: '3',
    image: 'https://i.pinimg.com/originals/80/2a/3c/802a3c991275cd2422ada44c56d509e6.png',
    title: 'Poção de Cura',
    description: 'Uma poção mágica que restaura a vida do usuário',
  },
];

const App = () => {
  return (
    <View>
      <FlatList
        data={availableItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
};

export default App;
