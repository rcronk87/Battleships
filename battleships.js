// This is the controller
$(document).ready(function(){
  tableLoop();
// This is the click to change color to red and counts torpedos
  $("td").click(function() {
    var split = $(this).attr('class').split("");
    console.log(split);
    $(this).css("background-color", "red")
    $(this).addClass("hit");
    if(shipLocation === split){
      alert("hit");
    }
    if($("td").hasClass("hit") === true) {
      $("#torpedos").text("Torpedos used: " + torpedos++);
      $(this).off("click");
    }
});













});
// This is the model
// fucntion to makle the table 10 x 10
var torpedos = 1;
var index;
var board = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]];
const ship = 1;
var shipPosition = Math.floor(Math.random()*100)
function tableLoop() {
  var table = $("<table> </table>")
  // loop to make rows
  for (i = 0; i < 10; i++) {
    var row = $("<tr></tr>").addClass([i]);
    $(table).append(row);
    // loop to make 100 td
      for (var j = 0; j < 10; j++) {
        var stuff = $("<td></td>").addClass([i] + [j]);
        $(row).append(stuff);
      }
  }
  // adding table to html
  $(".board").append(table);
}
var index;
function boardData() {
  for(var i= 0; i < 10; i++) {
    for(var j=1; j < 10; j++){
      board[i][j] = 0;
    };
  };
}
var shipLocation
function callShip() {
  for (var i=0; i<5; i++){
    var column = Math.floor(Math.random() * 10);
    // column = column.toString();
    var row = Math.floor(Math.random() * 10);
    // row = row.toString();
    board[row][column] = ship
  }
  console.log(shipLocation)
}
boardData();
callShip();

// function newCallShip() {
//   var randomShip = Math.floor(Math.random() * 100);
//   var shipSpot = "space" + randomShip
//   console.log(newCallShip)
// }
