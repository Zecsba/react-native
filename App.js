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
          <AddItem 
            onHandleChangeText={onHandleChangeText}
            addItem={addItem}
          />
        <ListItems 
          data={itemList}
          onHandleModal={onHandleModal}
          setTextItem={setTextItem}
        />
        
         <CustomModal
          animationType="slide"
          visible={modalVisible}
         >
            <View>
              <Text>Mi modal</Text>
            </View>
            <View>
              <Text>¿Esta seguro de que quiere borrar?</Text>
            </View>
            <View>
              <Text>{itemSelected?.value}</Text>
            </View>

              <Button 
                title='Eliminar'
                onPress={() => onHandleDelete(itemSelected?.id)}
                color='#4A306D'/>

              <Button 
              title='Cancelar'
              onPress={() => setModalVisible(!modalVisible)}
              color='#cccccc'/>
         </CustomModal>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container:{
      flex: 1,
    }
  });