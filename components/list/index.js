import { Text, FlatList, View, TouchableOpacity } from "react-native"  

const List = ({data,onHandleModal}) => {

    const renderItem = ({item}) =>(
        <View>
          <Text>{item.value}</Text>
    
          <TouchableOpacity onPress={() => onHandleModal(item.id)}>
            <Text>X</Text>
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

export default List