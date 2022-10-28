$(document).ready(function(){
    $('#btn1').click(function(){
        $('#backdrop, #window, #window1, #nxt-btn').show();
        $(`#window2, #window3, #window4, #window5, 
           #window6, #window7, #window8, #window9, #window10,
           #window11, #window12, .correctanswer, .wronganswer`).hide();
        $('#btn1').css('pointer-events','none');
        $('#btn1').css('background-color','darkblue');

    });
});

$(document).ready(function(){
    $('#btn2').click(function(){
        $('#backdrop, #window, #window2, #nxt-btn').show();
        $(`#window1, #window3, #window4, #window5, 
           #window6, #window7, #window8, #window9, #window10,
           #window11, #window12, .correctanswer, .wronganswer`).hide();
        $('#btn2').css('pointer-events','none');
        $('#btn2').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn3').click(function(){
        $('#backdrop, #window, #window3, #nxt-btn').show();
        $(`#window1, #window2, #window4, #window5, 
        #window6, #window7, #window8, #window9, #window10,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn3').css('pointer-events','none');
     $('#btn3').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn4').click(function(){
        $('#backdrop, #window, #window4, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window5, 
        #window6, #window7, #window8, #window9, #window10,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn4').css('pointer-events','none');
     $('#btn4').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn5').click(function(){
        $('#backdrop, #window, #window5, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window6, #window7, #window8, #window9, #window10,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn5').css('pointer-events','none');
     $('#btn5').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn6').click(function(){
        $('#backdrop, #window, #window6, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window5, #window7, #window8, #window9, #window10,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn6').css('pointer-events','none');
     $('#btn6').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn7').click(function(){
        $('#backdrop, #window, #window7, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window5, #window6, #window8, #window9, #window10,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn7').css('pointer-events','none');
     $('#btn7').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn8').click(function(){
        $('#backdrop, #window, #window8, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window5, #window6, #window7, #window9, #window10,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn8').css('pointer-events','none');
     $('#btn8').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn9').click(function(){
        $('#backdrop, #window, #window9, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window5, #window6, #window7, #window8, #window10,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn9').css('pointer-events','none');
     $('#btn9').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn10').click(function(){
        $('#backdrop, #window, #window10, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window5, #window6, #window7, #window8, #window9,
        #window11, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn10').css('pointer-events','none');
     $('#btn10').css('background-color','darkblue');    
    });
});

$(document).ready(function(){
    $('#btn11').click(function(){
        $('#backdrop, #window, #window11, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window5, #window6, #window7, #window8, #window9,
        #window10, #window12, .correctanswer, .wronganswer`).hide();
     $('#btn11').css('pointer-events','none');
     $('#btn11').css('background-color','darkblue');
    });
});

$(document).ready(function(){
    $('#btn12').click(function(){
        $('#backdrop, #window, #window12, #nxt-btn').show();
        $(`#window1, #window2, #window3, #window4, 
        #window5, #window6, #window7, #window8, #window9,
        #window10, #window11, .correctanswer, .wronganswer`).hide();
     $('#btn12').css('pointer-events','none');
     $('#btn12').css('background-color','darkblue');
        
    });
});


$(document).ready(function(){
    $('.false').click(function(){
        $(".wronganswer").css("display","block");
        $(".correctanswer").hide();
    })
});

$(document).ready(function(){
    $('.true').click(function(){
        $(".correctanswer").css("display", "block");
        $(".wronganswer").hide();
    });
});

$(document).ready(function(){
$('#nxt-btn').click(function(){
    $('#backdrop, #window,  #nxt-btn').hide();
});
});

$(document).ready(function(){
$('#calculate').click(function(){
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    
    let total = 0;
  
    for (var value of formData.values()) {
       total += parseInt(value);
    }
    
    document.getElementById("final-score").innerHTML = Math.round(total/12 * 100) + "%";
    
    console.log(total);
 });
});


/*const CalcBtn = document.getElementById('calculate');
CalcBtn.addEventListener('click', getValues);




function getValues() {
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    
    let total = 0;
  
    for (var value of formData.values()) {
       total += parseInt(value);
    }
    
    document.getElementById("final-score").innerHTML = Math.round(total/12 * 100 + "%");
    
    console.log(total);
  }*/
