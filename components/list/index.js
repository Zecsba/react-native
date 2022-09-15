import { StyleSheet,Text, FlatList, View, TouchableOpacity } from "react-native"  

const List = ({data,onHandleModal}) => {

    const renderItem = ({item}) =>(
        <View style={styles.view}>
          <Text style={styles.text}>{item.value}</Text>
    
          <TouchableOpacity onPress={() => onHandleModal(item.id)} style={styles.list}>
            <Text style={styles.ex}>X</Text>
          </TouchableOpacity>
    
        </View>
    )

    return (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
         />
    )
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDF5FC",
    width: 360,
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "#B8C5D6",
    borderWidth: 1,
    margin: 7,
  },
  list:{
    padding: 9
  },
  text:{
    marginLeft: 15,
  },
  ex:{
    marginRight: 15,
    padding: 3,
    backgroundColor: "red",
    borderRadius: 10
  }
});

export default List