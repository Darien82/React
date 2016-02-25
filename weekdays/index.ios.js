var Moment = require('moment'),
     React = require('react-native'),
    AppRegistry = React.AppRegistry,
    Text = React.Text,
    View = React.View,
    StyleSheet = React.StyleSheet,
    DayItem = require('./src/day-item');



//Create a React component
var weekdays = React.createClass({
  render: function () {
    return <View style={styles.container}>
      {this.days()}
    </View>
    
    },
    
    days: function() {
      var daysItems = [];

      for(var i = 0; i < 7; i++){
        var day = Moment().add(i, 'days').format('dddd');
        daysItems.push(
          <DayItem day={day} daysUntil={i} />
          )
      }
        return daysItems
  }
});


//Style the component
var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


//Show the React component on the screen
AppRegistry.registerComponent('weekdays', function () {
  return weekdays
});