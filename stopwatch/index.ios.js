var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;

var Stopwatch = React.createClass({
  render: function () {
    return <View style={styles.container}>
    <View style={[styles.header, this.border('yellow')]}>
    <View style={[styles.timerWrapper, this.border('red')]}>
        <Text>
        00:00.00
    </Text>
    </View>

    <View style={[styles.buttonWrapper, this.border('green')]}>
    {this.startStopButton()}
    {this.lapButton()}
    </View> 
    </View> 

    <View style={[styles.footer, this.border('blue')]}>
    <Text>
      I am a list of Laps
    </Text>
    </View>
    </View>    
  },
  startStopButton: function(){
    return <View>
    <Text>
    Start
    </Text>
    </View>
  },
  lapButton: function(){
    return <View>
        <Text>
         Lap
        </Text>
      </View>
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'stretch',
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1

  },
  timerWrapper: {
  flex: 5
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row'

  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);