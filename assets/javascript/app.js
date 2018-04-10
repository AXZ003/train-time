// Initialize Firebase
var config = {
    apiKey: "AIzaSyAUDS0JcNoMiQqOjf5ugi_xgFnbYOs_TGo",
    authDomain: "time-sheet-7521b.firebaseapp.com",
    databaseURL: "https://time-sheet-7521b.firebaseio.com",
    projectId: "time-sheet-7521b",
    storageBucket: "time-sheet-7521b.appspot.com",
    messagingSenderId: "62468382937"
  };
  firebase.initializeApp(config);


var database = firebase.database();

var trainCounter = 0;


$(document).on("click","#search", function(event){
    
    event.preventDefault();

    var name = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var arrival = $("#first-train-time").val().trim();
    var frequency = $("#frequency").val().trim();
    
    //Initial Time


    var firstTimeConverted = moment(arrival, "hh:mm A").subtract(1, "years");

   //Current 
   var currentTime = moment();

   var differenceTime = moment().diff(moment(firstTimeConverted), "minutes");

   // Time Left
   var timeRemainder = differenceTime % frequency; 

   //Minutes Away
   var tMinTillTrain = frequency - timeRemainder;

   // Next Train
   var next = moment().add(tMinTillTrain, "minutes");
   var nextArrival = moment(next).format("hh:mm A");
 








    var trainObj = {

        name: name,
        destination: destination,
        arrival: arrival,
        frequency: frequency,
        minAway:tMinTillTrain,


    };

    database.ref().push(trainObj);

});

// Do I need to reset? 

database.ref().on('child_added', function(snapshot){
    
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().arrival);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().minAway);

    // appends

    var tRow = $("<tr>");

    var nameDisp = $("<td>").html(snapshot.val().name);
    var destDisp = $("<td>").html(snapshot.val().destination);
    var frequDisp = $("<td>").html(snapshot.val().frequency); // rate 
    var arrivalDisp = $("<td>").html(snapshot.val().arrival);
    var minAwayDisp = $("<td>").html(snapshot.val().minAway);

      
// Append the newly created table data to the table row

    tRow.append(nameDisp, destDisp, frequDisp, arrivalDisp, minAwayDisp);
    

// Append the table row to the table body

    $(".comment-display").append(tRow);

});


