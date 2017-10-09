module.exports= (function() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var mapDay= function(dayIdx) {
    return days[dayIdx];
  };

  var mapMonth= function(monIdx) {
    return months[monIdx];
  };

  var dateFromUnix= function(unixTimeStamp) {
    return new Date(unixTimeStamp * 1000);
  };

  return {
    getDateDescription: function(unixTimeStamp) {
      var date = dateFromUnix(unixTimeStamp);
      return `${mapDay(date.getDay())}, ${date.getDate()} ${mapMonth(date.getMonth())} ${date.getFullYear()}`; 
    }
  }
})();
