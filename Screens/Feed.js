import * as React from 'react';
import { Text, View } from 'react-native';
import PostCard  from '../Screens/postCard';
export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({
      fontsLoaded: true,
    });
  }
  renderItem = ({ item: story }) => {
    return <PostCard story={story} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                style={styles.iconImage}
                source={require('../assetss/assets/logo.png')}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text styles={styles.appTitleText}>Spectagram</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              data={stories}
            />
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#15193c' },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: { flex: 0.07, flexDirection: 'row' },
  appIcon: { flex: 0.3, justifyContent: 'center', alignItems: 'center' },
  iconImage: { width: '100%', height: '100%', resizeMode: 'contain' },
  appTitleTextContainer: { flex: 0.7, justifyContent: 'center' },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  cardContainer: { flex: 0.93 },
});
