import React, {useState } from "react";
import {StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity} from "react-native";

import { CustomModal, ListItems, AddItem } from "./components"; 

export default function App(){
  
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleDelete = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected(null)
    setModalVisible(!modalVisible)
  }

  const onHandleModal = (id) => {
    setModalVisible(!modalVisible)
    setItemSelected(itemList.find((item) => item.id === id))
  }

  const onHandleChangeText = (text) =>{
    setTextItem(text)
  }

  const addItem = () =>{
    setItemList((prevBase) => [
      ...prevBase,
      {
        id: Date.now(), 
        value: textItem
      }
    ]);
    setTextItem('');
  }

    return (
      <View style={styles.container}>
        {/* Add Item */}
        <AddItem 
          onHandleChangeText={onHandleChangeText}
          addItem={addItem}
          textItem={textItem}
        />

        {/* List Items */}

        <ListItems 
          data={itemList}
          onHandleModal={onHandleModal}
          setTextItem={setTextItem}
          />
        
        {/* Modal */}
        
         <CustomModal
          animationType="slide"
          visible={modalVisible}
         >
            <View style={styles.box}>
              
              <View style={styles.boxes}>
                <Text>¿Esta seguro de que quiere borrar?</Text>
              </View>

              <View style={styles.boxes}>
                <Text style={styles.textItem} >{itemSelected?.value}</Text>
              </View>

              <View style={styles.buttons}>
                  <Button 
                    title='Eliminar'
                    onPress={() => onHandleDelete(itemSelected?.id)}
                    color='#4A306D'
                    style={styles.button}/>

                  <Button 
                  title='Cancelar'
                  onPress={() => setModalVisible(!modalVisible)}
                  color='#cccccc'
                  style={styles.button}/>
              </View>
              

            </View>
         </CustomModal>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    box:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    buttons:{
      flex: 1,
      width: "80%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      maxHeight: 40,
    },
    button:{
      margin: 5,
    },
    boxes:{
      marginBottom: 40,
    },
    textItem:{
      textTransform: "uppercase",
      backgroundColor: "#23CE6B",
      padding: 7,
      borderRadius: 3,
      fontSize: 20,
    }
  });