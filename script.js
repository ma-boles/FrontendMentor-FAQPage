//displays answers
//changes direction of arrow img 
//questions become bold 

function toggle1() {
     var text = document.getElementById("answerField1");
     if(text.style.display === "none") {
        text.style.display = "block"
     } else {
        text.style.display = "none"
     }

    var arrow = document.getElementById("arrow");
    if(arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "none"
    } else {
        arrow.style.transform = "rotate(180deg)"
    }

    var text = document.getElementById("question1");
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal"
    } else {
        text.style.fontWeight = "bold"
    }
}
 
function toggle2() {
    var text = document.getElementById("answerField2");
     if(text.style.display === "none") {
        text.style.display = "block"
     } else {
        text.style.display = "none"
     }

     var arrow = document.getElementById("arrow2");
     if(arrow.style.transform === "rotate(180deg)") {
         arrow.style.transform = "none"
     } else {
         arrow.style.transform = "rotate(180deg)"
     }

     var text = document.getElementById("question2");
     if (text.style.fontWeight === "bold") {
         text.style.fontWeight = "normal"
     } else {
         text.style.fontWeight = "bold"
     }
}

function toggle3() {
    var text = document.getElementById("answerField3");
     if(text.style.display === "none") {
        text.style.display = "block"
     } else {
        text.style.display = "none"
     }

    var arrow = document.getElementById("arrow3");
    if(arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "none"
    } else {
        arrow.style.transform = "rotate(180deg)"
    }

    var text = document.getElementById("question3");
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal"
    } else {
        text.style.fontWeight = "bold"
    }
}

function toggle4() {
    var text = document.getElementById("answerField4");
     if(text.style.display === "none") {
        text.style.display = "block"
     } else {
        text.style.display = "none"
     }

     var arrow = document.getElementById("arrow4");
     if(arrow.style.transform === "rotate(180deg)") {
         arrow.style.transform = "none"
     } else {
         arrow.style.transform = "rotate(180deg)"
     }
     
     var text = document.getElementById("question4");
     if (text.style.fontWeight === "bold") {
         text.style.fontWeight = "normal"
     } else {
         text.style.fontWeight = "bold"
     }
}

function toggle5() {
    var text = document.getElementById("answerField5");
     if(text.style.display === "none") {
        text.style.display = "block"
     } else {
        text.style.display = "none"
     }

     var arrow = document.getElementById("arrow5");
     if(arrow.style.transform === "rotate(180deg)") {
         arrow.style.transform = "none"
     } else {
         arrow.style.transform = "rotate(180deg)"
     }
     
     var text = document.getElementById("question5");
     if (text.style.fontWeight === "bold") {
         text.style.fontWeight = "normal"
     } else {
         text.style.fontWeight = "bold"
     }
}
       
