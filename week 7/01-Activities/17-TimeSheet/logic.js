var firebaseConfig = {
  apiKey: "AIzaSyBFrqKQprr18oh6cckTmL_yN6o1JT6Jwhs",
  authDomain: "employee-5353f.firebaseapp.com",
  databaseURL: "https://employee-5353f.firebaseio.com",
  projectId: "employee-5353f",
  storageBucket: "employee-5353f.appspot.com",
  messagingSenderId: "796398727948",
  appId: "1:796398727948:web:d4bc45405ec3f7e3f58f29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

    // Initial Values
    var name = "";
    var role = "";
    var startDate = "";
    var rate = "";

    // Capture Button Click
    $("#add-employee").on("click", function(event) {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name").val().trim();
      role = $("#role").val().trim();
      startDate = $("#startDate").val().trim();
      rate = $("#rate").val().trim();


      database.ref().push({
        name,
        role,
        startDate,
        rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startDate);
      console.log(snapshot.val().rate);

      // Change the HTML to reflect
    //   $("<td>").text(snapshot.val().name);
    //   $("<td>").text(snapshot.val().role);
    //   $("<td>").text(snapshot.val().startDate);
    //   $("<td>").text(snapshot.val().rate);

    //   // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
