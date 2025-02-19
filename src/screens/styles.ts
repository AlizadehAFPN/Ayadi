import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '80%',
  },
  editButton: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderRadius: 40,
  },
  editButtonText: {
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  input: {
    width: '90%',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
  saveButton: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonView:{
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'90%',
  },
});
