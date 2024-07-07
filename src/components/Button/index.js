import { StyleSheet, TouchableOpacity, Text } from "react-native"
const Button = ({
    text,
    buttonStyle
}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',        
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    text: {
        color: 'white',
        textTransform:'capitalize'
    }
})

export default Button;