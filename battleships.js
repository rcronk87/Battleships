// This is the controller
$(document).ready(function(){
  tableLoop();
// This is the click to change color to red and counts torpedos
$("td").click(function() {
  $(this).css("background-color", "red")
  $("#torpedos").text("Torpedos used: " + torpedos++);
})













});
// This is the model
// fucntion to makle the table 10 x 10
var torpedos = 1;
function tableLoop() {
  var table = $("<table> </table>")
  // loop to make rows
  for (i = 0; i < 10; i++) {
    var row = $("<tr></tr>").addClass("trSpace" + i);
    $(table).append(row);
    // loop to make 100 td
      for (var j = 0; j < 10; j++) {
        var stuff = $("<td></td>").addClass("space" + i + j);
        $(row).append(stuff);
      }
  }
  // adding table to html
  $(".board").append(table);
}
