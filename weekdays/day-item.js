//IMPORT SOME CODE WE NEED

var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');
//Create our component

var dayItem = React.createClass ({
	render: function() {
	return <Text style ={styles.day}>
		A day of the week
		</Text>
	}
});


var styles = Style.create({
	day: {
		fontsize: 18,
		color: '#000FF'
	}

});

module.exports = DayItem;

//Style our component

//Make this code available elsewhere