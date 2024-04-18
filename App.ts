// styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredTextContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: '70%',
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 6,
  },
  textCenter1: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  multiLineText: {
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrowContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  arrow: {
    color: 'black',
    fontSize: 16,
  },
  cardsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
