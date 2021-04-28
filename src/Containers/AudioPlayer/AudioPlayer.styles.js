import {StyleSheet, Dimensions} from 'react-native';

const listHeight = Dimensions.get('window').height - 150;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 600,
  },
  searchBox: {
    height: 60,
  },
  songList: {
    height: listHeight,
  },
  musicPlayer: {
    height: 40,
    margin: 5,
  },
});

export default styles;
