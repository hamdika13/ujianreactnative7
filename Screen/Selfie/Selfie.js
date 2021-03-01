import React from 'react';
import { Input,Layout,Card,Button } from '@ui-kitten/components';
import { StyleSheet} from 'react-native'
import { RNCamera } from 'react-native-camera';

const Selfie = () => {

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
       <Layout>
             <RNCamera
                    ref={ref => {
                        camera = ref;
                    }}
                    style={{flexDirection: 'row', justifyContent: 'center', height:100 , width:100 }}
                    // tampilan selfie
                    type={RNCamera.Constants.Type.front}
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
    )
}

export default Selfie

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
