import React,{useState} from 'react';
import { Input,Layout,Select,IndexPath,SelectItem,Text,Calendar,Card,Button,Avatar,  } from '@ui-kitten/components';
import { StyleSheet,SafeAreaView,ScrollView,View} from 'react-native'
import { RNCamera } from 'react-native-camera';
// import { Layout, Card, Button } from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';


const lstKategory = ["izin bencana", "izin sakit","izin anak sakit"]

const Ijin = () => {
const [kategory,setKategory] = useState ("")
const [day,setDay] = useState("")
const [limit,setLimit] = useState("")
const [keterangan,setKeterangan] = useState("")
const [date, setDate] =useState(new Date());




const renderOption = (title) => (

    <SelectItem key={title} title={title} />
);

let camera = null;

// const saveImage = () => {
   
//     const namefile = ""+new Date();
   
//     const reference = storage().ref(namefile);

//     const pathToFile = gambar;
//     // uploads file
//     reference.putFile(pathToFile).then(() => {
//          console.log("Uploaded")
//          storage()
//          .ref(namefile)
//          .getDownloadURL().then((downloadData) =>{
//             console.log(downloadData)
//             console.log(namefile)
//             saveData(downloadData,namefile)
         
//          })
//     });
   
//    }

   const takePicture = async () => {
    console.log("test")
        if (camera) {
          const options = { quality: 0.5, base64: true };
          const data = await camera.takePictureAsync(options);
          console.log(JSON.stringify(data));
          setGambar(data.uri)
          console.log(data.uri);
        }
      };



    return (
        <SafeAreaView>
        <ScrollView>

        <Layout style = {styles.container}>
         <Select style={styles.layout}
                selectedIndex={new IndexPath(kategory)}
                placeholder='Deafult'
                value={lstKategory[kategory.row]}
                onSelect={index => setKategory(index)}>
                {lstKategory.map(renderOption)}
            </Select>

             <Input style={styles.layout}
                placeholder='Dari Tanggal'
                value={day}
                onChangeText={txthari => setDay(txthari)} /> 


                    <View>
                    <React.Fragment>
                    <Text category='h6' style = {styles.text}>
                    Pilih Tanggal di bawah : {date.toLocaleDateString()}
                    </Text>
                    <Calendar 
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                    />
                    </React.Fragment>
                    </View>

                <Input style={styles.layout}
                placeholder='Sampai Tanggal'
                value={limit}
                onChangeText={txtlimit => setLimit(txtlimit)} /> 
                   
                    <View>
                   <React.Fragment>
                    <Text category='h6' style = {styles.text}>
                    Pilih Tanggal di bawah : {date.toLocaleDateString()}
                    </Text>
                    <Calendar 
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                    />
                    </React.Fragment>
                    </View>

                
                <Input style={styles.layout}
                placeholder='Keterangan'
                value={keterangan}
                onChangeText={txtketerangan => setKeterangan(txtketerangan)} /> 

            <RNCamera
                    ref={ref => {
                        camera = ref;
                    }}
                    style={{flexDirection: 'row', justifyContent: 'center', height:100 , width:100 }}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}

                />


<Card style={styles.containerPicture}>
          {/* <Avatar style={styles.avatar} size='giant' source={{ uri: '' }} /> */}
               

                <Button onPress={() => takePicture()}>
                    Ambil Foto
            </Button>
            </Card>

            <Card style={styles.containerPicture}>
                <Button onPress={() => { saveImage() }}>
                    Submit
            </Button>
            </Card>

          

        

        </Layout>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Ijin
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor : 'lightblue'

    },
    
    layout: {
        margin: 40,
        alignItems: 'center',
    },

    containerPicture: {


        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    avatar: {
        alignItems: 'center',
        margin: 8,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },

      containerTanggal: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      containerCalendar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      calendarContainer: {
        margin: 2,
      },
      text: {
          textAlign :'center'
      }
   
});
