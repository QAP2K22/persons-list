import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import axiosConnect from '../services/axiosConnect';

export default function PersonDetails({ navigation, route }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const id = route.params.id
        axiosConnect.get(`/users/${id}/posts`).then(result => {
            setPosts(result.data.posts)
        })
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                {posts.map(posts => (
                    <Card style={styles.card}>
                        <Card.Content>
                            <Text variant="titleLarge">{posts.title}</Text>
                            <Text variant="bodyMedium">{posts.body}</Text>
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        margin: 10
    }
});
