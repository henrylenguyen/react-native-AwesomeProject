import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import IconOcticon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const App = () => {
  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: "orange",padding: 30}}>
      <Text style={{ fontSize: 32 }}>Id: {item.id}</Text>
      <Text style={{ fontSize: 20 }}>Name: {item.name}</Text>
      <Text style={{ fontSize: 20 }}>Email: {item.email}</Text>
      <Text style={{ fontSize: 20 }}>UserName: {item.username}</Text>
      <Text style={{ fontSize: 20 }}>Address: {item.address.street}</Text>
    </View>
  );

  const [mydata, setData] = useState([])

  useEffect(() => {
    getData()

    return () => {

    }
  }, [])

  var getData = async () => {
    var api = await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(api.data)
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mydata}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;