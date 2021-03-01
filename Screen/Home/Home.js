import React,{useState} from 'react'
import { StyleSheet, } from 'react-native';
import { Input,Layout,Button, Card} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';



const HomeScreen = () => {
    

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


const saveData = ()=> {
    firestore()
  .collection('Users')
  .add({
    name: 'Ada Lovelace',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  });
}


    return (
        <Layout style = {styles.container}>
        <Input style = {styles.layout}
        placeholder='Username/Email'
        value={username}
        onChangeText={txtusername => setUsername(txtusername)}
      />

        <Input style = {styles.layout}
        placeholder='Masukkan Password'
        value={password}
        onChangeText={txtpassword => setPassword(txtpassword)}
      />        

     
      <Button style = {styles.containerPicture} onPress={()=> {saveData()}} >
       Login
      </Button>    
      

      </Layout>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
    backgroundColor : '#999999',
    marginTop :30,
      flex: 1,
      flexDirection: 'column',

    },
    layout: {
        margin: 15,
        alignItems: 'center'
    },
    containerPicture: {
        width: 150,
        marginLeft : 200,
        borderRadius :70,
        flexDirection: 'column',
        justifyContent: 'space-between'

    }
  });
  
