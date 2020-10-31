// date variables and time of day array

var date = moment().format("MMMM do YYYY")

$("#currentDay").append(date)


// function that updates the 
var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

updateTime();

function updateTime() {
    var currentTime = moment().format('H')
        for (var i = 0; i < timeOfDay.length; i++)

            if (parseInt(timeOfDay[i]) > currentTime) {
                $("#" + timeOfDay[i]).attr("style", "background-color: #58ce7b") 

            }

            else if (parseInt(timeOfDay[i]) < currentTime) {
                $("#" + timeOfDay[i]).attr("style", "background-color: lightgray")

            }

            else if (parseInt(timeOfDay[i]) == currentTime) {
                $("#" + timeOfDay[i]).attr("style", "background-color: #fc665e")
            }
}