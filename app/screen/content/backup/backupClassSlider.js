import React from 'react'
import { StyleSheet, View, Text, Image, } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 200,
    height: 300,
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    // marginTop: 

  },
  title: {
    fontSize: 22,
    color: '#555',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    // marginTop: responsiveHeight(-25)
  },
})

const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text:
            'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    // Lokasi gambar mu
    image: require('../../../app/assets/icon/icon-pagi.png'),
    colors: ['#fff'],

  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text:
            'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    // Lokasi gambar mu
    image: require('../../../app/assets/icon/icon-pagi.png'),
    colors: ['#fff'],

  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    // Lokasi gambar mu
    image: require('../../../app/assets/icon/icon-pagi.png'),
    colors: ['#fff'],

  },
  {
    key: 'somethun3',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    // Lokasi gambar mu
    image: require('../../../app/assets/icon/icon-pagi.png'),
    colors: ['#fff'],
  },
]



export default class App extends React.Component {
    _renderItem = ({ item, dimensions }) => (
      <View
        style={[
          styles.mainContent,
          {
            flex: 1,
            paddingTop: item.topSpacer,
            paddingBottom: item.bottomSpacer,
            width: dimensions.width,
            backgroundColor:'white'
          },
        ]}
        colors={item.color}
      >
        <Image source={item.image} style={{ width: 360, height: 360 }} resizeMode='contain' />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );



    

    render() {
      return (
        <AppIntroSlider
          data={slides}
          renderItem={this._renderItem}
          // bottomButton
          showPrevButton
          // showSkipButton
          hideNextButton
          dotStyle={{ backgroundColor: '#DDD' }}
          activeDotStyle={{ backgroundColor: 'green' }}
          renderNextButton={() => { return (<Text style={{ fontWeight: 'bold', color: 'green' }}>Next</Text>) }}
          renderPrevButton={() => { return (<Text style={{ fontWeight: 'bold', color: 'green' }}>Back</Text>) }}
          renderDoneButton={() => { return (<Text style={{ fontWeight: 'bold', color: 'black' }}>Done</Text>) }}
          // hideDoneButton
          // onSkip={() => console.log("skipped")}
          onDone={() => alert('Done')}
        />
      )
    }
}