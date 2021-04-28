import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    borderBottomWidth: 1,
    padding: 5,
  },
  pic: {
    borderRadius: 6,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 14,
  },
  artistTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 13,
  },
  albumTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 10,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
  item: {
    marginVertical: 1,
    marginHorizontal: 1,
  },
  mainContainer: {
    flex: 1,
  },
  playIndicator: {
    marginLeft: 5,
    marginRight: 0,
    width: 14,
    height: 14,
  },
});

export default styles;
