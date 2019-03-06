import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button1Disabled: false,
      button2Disabled: false,
      button3Disabled: false,
      button1Color: {
        backgroundColor: 'white'
      },
      button2Color: {
        backgroundColor: 'white'
      },
      button3Color: {
        backgroundColor: 'white'
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          pointerEvents={this.state.button1Disabled ? "none": undefined}
          style={[styles.buttonContainer, this.state.button1Color]}
          onTouchStart={()=> {
            this.setState({
              button1Color: {
                backgroundColor: 'green'
              },
              button2Color: {
                backgroundColor: 'black'
              },
              button3Color: {
                backgroundColor: 'black'
              },
              button2Disabled: true,
              button3Disabled: true,
            })
          }}>
          <Text style={styles.textContainer}>Drużyna 1</Text>
      </View>
      <View
        pointerEvents={this.state.button2Disabled ? "none": undefined}
        style={[styles.buttonContainer, this.state.button2Color]}
        onTouchStart={()=> {
          this.setState({
            button2Color: {
              backgroundColor: 'green'
            },
            button1Color: {
              backgroundColor: 'black'
            },
            button3Color: {
              backgroundColor: 'black'
            },
            button3Disabled: true,
            button1Disabled: true,
          })
        }}>
        <Text style={styles.textContainer}>Drużyna 2</Text>
      </View>
      <View 
        pointerEvents={this.state.button3Disabled ? "none": undefined}
        style={[styles.buttonContainer, this.state.button3Color]}
        onTouchStart={()=> {
          this.setState({
            button3Color: {
              backgroundColor: 'green'
            },
            button1Color: {
              backgroundColor: 'black'
            },
            button2Color: {
              backgroundColor: 'black'
            },
            button1Disabled: true,
            button2Disabled: true,
          })
        }}>
        <Text style={styles.textContainer}>Drużyna 3</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 40,
    textAlign: 'center',
    textAlignVertical: 'center' 
  },
});
