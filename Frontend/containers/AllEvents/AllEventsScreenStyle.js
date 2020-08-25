import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  colMain: {
    ...Helpers.fullWidth,
    width: 375,
    height: 667,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  eventHeader: {
    ...Helpers.fullWidth,
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
  eventAvatar: {
    ...Helpers.fullWidth,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    padding: Metrics.medium,
  },
  eventImg: {
    width: 375,
    height: 250,
    backgroundColor: Colors.secondary,
    overflow: 'hidden',
  },
  avatarContainer: {
    ...Helpers.fullWidth,
    height: 50,
    marginBottom: 50,
  },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  headerText: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: 'left',
    marginTop: 3,
    marginBottom: 0,
    marginHorizontal: 20,
    fontSize: 13,
  },
  moreText: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: 'left',
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 12,
  },
  eventFooter: {
    width: 300,
    alignContent: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
})
