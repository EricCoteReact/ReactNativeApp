import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

const Row = ({ user }) => {
    console.log(user);

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.item.avatar }} style={styles.photo} />
            <Text style={styles.text}>
                {user.item.first_name} {user.item.last_name}
            </Text>
        </View>
    )
}

export default Row;