import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  TouchableOpacity,
  Image,
  Alert,
//   ScrollView,
  FlatList,
//   PermissionsAndroid,
//   Platform,
//   ToastAndroid
} from 'react-native';

import styles from './style';
// import DoneAllIcon from '@material-ui/icons/DoneAll';


// import database from '@react-native-firebase/database';




class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "CheckIn", image:"https://bootdey.com/img/Content/avatar/avatar6.png"},
        {id:2, title: "CheckOut", image:"https://img.icons8.com/color/70/000000/administrator-male.png"} ,
        {id:3, title: "Ijin", image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
        {id:4, title: "HistoryAbsen", image:"https://img.icons8.com/color/70/000000/to-do.png"} ,
        {id:5, title: "Signout", image:"https://img.icons8.com/nolan/70/000000/job.png"} ,
        
      ],
      counter : 1
    };
  }
  
  componentDidMount(){
     
  }
  
  
  clickEventListener =(item) =>{
    Alert.alert(item.title)
    switch(item.title){
    
      case "CheckIn" :
    
        this.props.navigation.navigate("CheckIn")
     break;

     case "CheckOut" :
    
        this.props.navigation.navigate("CheckOut")
     break;

    case "Ijin" :
    
       this.props.navigation.navigate("Ijin")
    break;

    case "HistoryAbsen" :
    
      this.props.navigation.navigate("HistoryAbsen")
   break;

   case "Selfie" :
    
    this.props.navigation.navigate("Selfie")
 break;
  
    
    
    }
  }
  
  
  logout = ()=>{
  console.log("SignOut")
    auth()
      .signOut()
      .then(() => {
      console.log('User signed out!')
      this.props.navigation.navigate("Login")
      }).catch((error) => {
        this.props.navigation.navigate("Login")
      
      });
    
  }
    render() {
        return (
          <View style={styles.container}>
          <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.card} onPress={()=>this.clickEventListener(item)}>
                  <View style={styles.cardFooter}></View>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardHeader}>
                    <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}/>
             <View style={styles.container2}>
               

                
              </View>
              </View>
        );
    }
    
 ;
    
    
}

export default Dashboard;