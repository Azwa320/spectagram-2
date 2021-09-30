import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  FlatList,
  Image,
    } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};
export default class PostCard extends React.Component {
  render(){
      return(
          <View style={styles.container}>

              <View style={styles.cardContainer}>
                  <View style={styles.authorContainer}>
                      <View style={styles.authorImageContainer}>
                          <Image>
                              source={require("../assetss/assets/profile_img.png")}
                              style={styles.profileImage}
                          </Image>
                      </View>
<View style={styles.authorNameContainer}>
    <Text style={styles.authorNameText}>{this.props.post.author}</Text>
</View>
                 </View>
                 <Image source={require("../assetss/assets/post.jpeg")} style={styles.postImage}/>
                 <View style={styles.captionContainer}>
                     <Text style={styles.captionText}>{this.props.post.captiion}
                     </Text>
                 </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <IonIcons name={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>

              </View>
          </View>
      )
  }
  }

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  storyImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  titleContainer: { paddingLeft: RFValue(20), justifyContent: 'center' },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  descriptionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
