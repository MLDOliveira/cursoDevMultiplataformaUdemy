import React from 'react';
import { 
    View, 
    TextInput, 
    StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput 
            style={styles.campo}
            placeholder='Resultado...'
            editable={false}
        />
    </View>
);

const styles = StyleSheet.create({
    campo: {
        fontSize: 30,
        height: 100
    }
});
