
import React,{useState} from 'react'
import {
  Text, 
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  Modal,
} from 'react-native'
import styles from '../../styles/styles';
import { Card } from "react-native-elements";
import ImageViewer from 'react-native-image-zoom-viewer'; 
import AppIntroSlider from 'react-native-app-intro-slider';




const stylesApp = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
      
    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 30,
      textAlign: 'center',
      fontSize: 15,
    },
    introImageStyle: {
      width: 250,
      height: 250,
      
    },
    introTextStyle: {
      color: 'black',
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingHorizontal: 16,
    },
    introTitleStyle: {
      fontSize: 22,
      color: '#555',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginBottom: 5,
      fontWeight: 'bold',
    },

  });
  
  
  // ===========================================================
  
  const TipsPage = () => {
  
    const [modal, setModal] = useState(false);
  
        const images = [{
          props: {
              source: require("../../assets/poster.jpeg")
          }
        }]
      
        const ImageView = () => {
          modal === true ? setModal(false) : setModal(true)
        }
          
    const[showRealApp, setShowRealApp] = useState(false);
      
        const onDone = () => {
          setShowRealApp(true);
        }
    
        const onSkip = () => {
          setShowRealApp(true);
        }
        
        const SliderPage = ({item}) => {
          return(
            <View style={{
                  flex:1,
                  backgroundColor: '#FFF',
                  alignItems:'center',
                  justifyContent: 'space-around',
                  paddingBottom: 100,
                  }}>
                  <View style={{paddingTop:5}}>
                      <Image style={stylesApp.introImageStyle} source={item.image}  />
                      </View>
                  <View>
                      <Text style={stylesApp.introTitleStyle}>
                        {item.title}
                      </Text>
                      <Text style={stylesApp.paragraphStyle} >
                          {item.text}
                      </Text>
                  </View>
                  
              
            </View>
          )
        };
      
      
      return(
      
       <>
        { showRealApp === true ? (
          <View style={stylesApp.container}>
                <View>
                    <Modal visible={modal} transparent={modal}>
	                   <ImageViewer backgroundColor={'#fff'} enableSwipeDown={true} imageUrls={images} onSwipeDown={() => ImageView()} />
	                 </Modal>    
	                 <View style={{marginBottom:100}}> 
	                   <Card containerStyle={{borderRadius: 5}}>
	                     <Card.Image source={require("../../assets/poster.jpeg")} onPress={() => ImageView()} />
	                   </Card>
	                 </View>
	                 <Text style={stylesApp.titleStyle}>
	                    Jangan Lupa Download Modul Pelatihannya ^^
	                 </Text>
	                 <Text style={stylesApp.paragraphStyle}>
	                 Semoga tips-tips tadi bermanfaat dan bisa diterapkan oleh para Ibu yaa...
	                 </Text>
	                 <Button
	                   title="Download Modul Pelatihan "
	                   onPress={() => {alert('Modul Pelatihan berhasil didownload.');}
					   }
	                 />
                </View>
           </View>
          ) : (
               <AppIntroSlider
                data={slides} 
                dotStyle={styles.greyInactive}
				activeDotStyle={styles.bluePNM}
                renderItem={SliderPage}
				renderNextButton={() => { return (<Text style={{ fontSize:20, fontWeight: 'bold', color: '#1A67B2' }}>Next</Text>) }}
				renderSkipButton={() => { return (<Text style={{ fontSize:20, fontWeight: 'bold', color: '#8ebfef' }}>Skip</Text>) }}
				renderDoneButton={() => { return (<Text style={{ fontSize:20, fontWeight: 'bold', color: '#1A67B2' }}>Done</Text>) }}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
              />
          
        )}
        </>
      );
  }
  
  export default TipsPage;
  
  
  const slides = [
    {
      key: 'slide1',
      text: 'Tau tidak kalau memisahkan Keuangan Usaha dan Kepentingan Keluarga itu sangat penting lho..\n\n Yuk, simak tips berikut cara mudah membiasakan diri memisahkan kedua hal tersebut',
      title: 'Semangat Pagi!',
      image: require('../../../app/assets/icon/slider-hello.png'),
     
    },
    {
      key: 'slide2',
      title: 'Tips Pertama!',
      text: 'Cara pertama, buat rekening atau tempat penyimpanan uang yang berbeda sis... \n\nMisalnya: dengan menggunakan amplop/dompet yang terpisah untuk simpanan dan keperluan rumah tangga. \nSehingga Ibu bisa mengontrol budget keperluan uang keluar/masuk',
      image: require('../../../app/assets/icon/slider-wallet.png'),
    },
    {
      key: 'slide3',
      title: 'Tips Kedua!!',
      text: 'Kedua, buatlah pencatatan atau pembukuan sederhana, biasakan mengumpulkan nota/kwitansi bukti belanja bahan baku ataupun barang yang terjual. \n\nKemudian, evaluasi dan seringlah mengontrol pergerakan transaksi usaha Ibu, dari keuntungan hingga pengeluaran.',
      image: require('../../../app/assets/icon/slider-notes.png'),
    },
    {
      key: 'slide4',
      title: 'Tips Terakhir,',
      text: 'Jangan lupa untuk selalu disiplin mengalokasikan keuntungan hasil usaha Ibu. \n Contohnya membagi porsi hasil usaha dengan persentase. \n\n Seperti, 20% untuk bayar kewajiban \n40% untuk tambahan modal \n30% untuk keperluan keluarga \n10% untuk investasi atau tabungan \nagar usaha yang sekarang dilakukan dapat lebih dikembangkan lagi ya Bu..',
      image: require('../../../app/assets/icon/slider-grafik.png'),
    },
  ];
  
  

    