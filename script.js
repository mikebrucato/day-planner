// date variables and time of day array

var date = moment().format("MMMM DD YYYY")
console.log(date)
$("#currentDay").append(date)


// function that updates the background color according to the time of day
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

// save button function that saves the user's input in the time of day fields
$(".rowBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    
});