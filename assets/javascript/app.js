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




$(document).on("click","#search", function(event){
    

var trainObj = {

    name: $("#name").val().trim(),
    destination: $("#destination").val().trim(),
    trainTime: $("#train-time").val().trim(), // moment
    frequency: $("#frequency").val().trim(),
    


};
console.log(moment);
database.ref().push(trainObj);

console.log(trainObj);



});


database.ref().on('child_added', function(snapshot){
    // console.log(snapshot.val());


var tRow = $("<tr>");

var nameDisp = $("<td>").html(snapshot.val().name);
var destDisp = $("<td>").html(snapshot.val().destination);
var frequDisp = $("<td>").html(snapshot.val().frequency);
// var traintimeDisp = $("<td>").html(snapshot.val().trainTime);
      
// Append the newly created table data to the table row

      tRow.append(nameDisp, destDisp, frequDisp);
      
// Append the table row to the table body
      
$(".comment-display").append(tRow);



// console.log(tRow[0]);








})


