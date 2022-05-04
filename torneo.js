function golfScore() {

    var par = $("#par-input").val();
    var strokes = $("#strokes-input").val();	
    var message = "";
        
      if (par >= 1 && strokes == 1) {
        return "Hole-in-one!";
      } else if ((par - 2) >= strokes) {
        return "Eagle!";
      } else if ((par - 1) == strokes) {
        return "Birdie!";
      } else if (par == strokes) {
        return "Par"; 
      } else if ((par + 1) == strokes) {
        return "Bogey"; 
      } else if ((par + 2) == strokes) {
        return "Double Bogey";
      } else {
        return "Looks like you could use this!";
      } 
    } // closes function
    
    function refreshPage(){
      window.location.href = window.location.href;
    }  
    
    
    $(document).ready(function(){
        $("input").on("change keyup",function(){
         //remove the disabled then do the rest -- 
        $('.btn1').removeAttr('disabled'); 
       // start checking if the input boxes have values
             if ($.trim($('#name-input').val()).length == 0){
          $('.btn1').prop('disabled', true); 
          return false;
            } if ($.trim($('#hole-input').val()).length == 0){
            $('.btn1').prop('disabled', true); 
          return false;
          } if ($.trim($('#par-input').val()).length == 0){
          $('.btn1').prop('disabled', true); 
          return false;
          } if ($.trim($('#strokes-input').val()).length == 0){
          $('.btn1').prop('disabled', true); 
          return false;
         } else { 
         // if all has been passed should execute code
            $(".entry h2").replaceWith("<h2>Submitted!</h2>");
            $("form").hide().replaceWith("<p>" + golfScore() + "! <br>Thank you for entering the contest and good luck!</p>");
            $(".entry p").addClass("inputs message");
            $(".entry").append("<button>Replay?</button>");
            $(".entry button").addClass("btn2");
            $(".btn2").on('click', refreshPage);
            } // closes else
        }); // closes change key up
    }); // closes Doc Ready
    
    // CODE THAT HAD SOME BUGS 
    // $(document).ready(function(){
    //     $(".btn1").click(function(){
             
    //   if ($.trim($('.inputs').val()).length == 0){
    //   $('.inputs').prop('disabled', true);
    //   } else { 
    // 		 $(".entry h2").replaceWith("<h2>Submitted!</h2>");
    //        $("form").hide().replaceWith("<p>" + golfScore() + "! <br>Thank you for entering the contest and good luck!</p>");
    // 		 $(".entry p").addClass("inputs message");
    // 		 $(".entry").append("<button>Replay?</button>");
    // 		 $(".entry button").addClass("btn2");
    // 		 $(".btn2").on('click', refreshPage); 
    //    } // closes else
    //     });		
    // }); // closes Doc Ready	