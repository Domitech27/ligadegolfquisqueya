function moreLessFunction() {
    var threeDotsText = document.getElementById("threeDots");
    var clickAndMoreText = document.getElementById("clickAndMore");
    var moreLessButtonText = document.getElementById("moreLessButton");
  
    if (threeDotsText.style.display ==="none") {
      threeDotsText.style.display = "inline";
      moreLessButtonText.innerHTML = "Read More"; 
      clickAndMoreText.style.display = "none";
    } 
  
    else {
      threeDotsText.style.display = "none";
      moreLessButtonText.innerHTML = "Read Less"; 
      clickAndMoreText.style.display = "inline";
    }
  }
  
  
  function submitFunction() {
    alert("Thank you! You are subscribed."); // It will be active when the subscribe button is pushed.
  }
  