import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import axiosConnect from '../services/axiosConnect';

export default function PersonsList({ navigation }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axiosConnect.get('/users').then(result => {
      setUsers(result.data.users)
    })
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {users.map(users => (
          <Card.Title
            title={`${users.firstName} ${users.firstName}`}
            subtitle={users.phone}
            left={() => <Avatar.Image size={40} source={{ uri: users.image }} />}
            right={(props) => <IconButton {...props} icon="more" onPress={() => navigation.push("person-details", { id: users.id })} />}
          />

        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll: {
    width: "90%"
  }
});
