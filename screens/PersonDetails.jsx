import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card, ToggleButton } from 'react-native-paper';
import axiosConnect from '../services/axiosConnect';

export default function PersonDetails({ navigation, route }) {
    const [user, setUser] = useState([])

    useEffect(() => {
        const id = route.params.id
        axiosConnect.get(`/users/${id}`).then(result => {
            setUser(result.data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <ToggleButton.Group
                onValueChange={() => navigation.push("person-posts", { id: user.id })}
            >
                <ToggleButton icon="account-details" value="left" />
            </ToggleButton.Group>
            <View style={styles.center}>
                <Card style={styles.cardWidth}>
                    <Card.Content style={styles.cardContent}>
                        <Avatar.Image size={100} source={{ uri: user.image }} />
                        <Text variant="displaySmall">{`${user.firstName} ${user.lastName} `}</Text>
                        <Text variant="labelMedium">{`${user.username}`}</Text>
                    </Card.Content>
                </Card>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    center: {
        alignItems: "center",
    },


    cardWidth: {
        marginTop: 30,
        width: "90%",
    },

    cardContent: {
        alignItems: "center",
        justifyContent: "center",

    }

});
