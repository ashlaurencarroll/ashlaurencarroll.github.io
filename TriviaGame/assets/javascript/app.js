





document.getElementById("form1").onClick=function() {
  
    

}
document.getElementById("answer").addEventListener("click", function () {
   var q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
   var q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
   var q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
   var q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
   var q5 = parseInt(document.querySelector('input[name="q5"]:checked').value);
    console.log(q1);
    
    result = q1 + q2 + q3 + q4 + q5;

   // $('input[type=radio]').prop("checked");
   // console.log($('input[type=radio]'))

   document.getElementById("grade").innerHTML = result;
    
});






setTimeout(timeUp, 1000 * 60);
function timeUp() {
   

    
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up"); 
}


var number = 60;
var intervalId;
$("#start").on("click", run);


function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {

        stop();
       
      } else { $("#answer").on("click", stop);}
        
    
      
    
    

    function stop() {
        

        clearInterval(intervalId);
      }
    } 
      
    
      

