import { StyleSheet, View, TextInput, Button } from "react-native"

const AddItem = ({onHandleChangeText, addItem, textItem}) =>{
     return(
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="New task" 
          style={styles.input} 
          onChangeText={onHandleChangeText}
          value={textItem}
        />
        <Button title="add" onPress={addItem} color="#A39BA8"/>
      </View>
     )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    inputContainer:{
      marginTop: 50,
      marginBottom: 20,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    input:{
      borderBottomColor: "#565254",
      borderBottomWidth: 1,
      height: 40,
      color: '#212121',
      width: '75%',
    }
  });

export default AddItem