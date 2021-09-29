canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_postion_of_x, last_postition_of_y;
color = "purple";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent = "mouseDown";
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      
      console.log("Last Position Of X = " + last_postion_of_x + "last Position Of Y = " + last_postition_of_y);
      ctx.moveTo(last_postion_of_x, last_postition_of_y);

      console.log("Current Position Of Y = " + current_position_of_mouse_x + "Curent Position Of Y = " + current_position_of_mouse_y);
      ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
      ctx.stroke();
    }

    last_postion_of_x = current_position_of_mouse_x;
    last_postition_of_y = current_position_of_mouse_y;
}



canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      
      console.log("Last Position Of X = " + last_postion_of_x + "last Position Of Y = " + last_postition_of_y);
      ctx.moveTo(last_postion_of_x, last_postition_of_y);

      console.log("Current Position Of Y = " + current_position_of_mouse_x + "Curent Position Of Y = " + current_position_of_mouse_y);
      ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
      ctx.stroke();
    }

    last_postion_of_x = current_position_of_mouse_x;
    last_postition_of_y = current_position_of_mouse_y;
}



