//  Initializing variables
var defaultCertPNG = "../images/certificate/dummy.png";
var logo = "../images/logo_golearn.png"
var defaultFontSize = 20;
var defaultFont = "Arial";
var defaultColor = "black";
var prevX = 0;
var prevY = 0;

// Defining Canvas
var canvas = document.getElementById("certificatecanvas");
var ctx = canvas.getContext("2d");
var certImage = new Image();
var logoImage = new Image();

var canvasOffset = canvas.getBoundingClientRect();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = window.pageXOffset;
var scrollY = window.pageYOffset;
var startX = 0;
var startY = 0;
var selectedElement = null;
var dragMode = false;

// Defining Sheet Stuffs
var titles = null;
var sheetData = null;
var progress = document.getElementById("progress");
var loaderbody = document.querySelector(".loaderbody");

// Defining DOM Elements
var Inputs = document.getElementById("inputs");
var downloadButton = document.getElementById("save_and_download");
var imageBackgroundInput = document.getElementById("background_image");
var showLogo = document.getElementById("show_logo_yes");
var imageSignatureInput = document.getElementById("signature");

document.addEventListener("DOMContentLoaded", function () {
    // Creating Image from PNG file
    certImage.src = defaultCertPNG;
    var dimentionRatio = certImage.width / certImage.height;
  
    // When Image Loads Successfully
    certImage.onload = function () {
      // Setting Canvas Size
      canvas.width = 1920;
      canvas.height = 1080;
      defaultFontSize = canvas.width / 100;
      console.log(defaultFontSize);
      drawTextfromInputs();
      addListenerToInputs();
    };
  });

  function addListenerToInputs() {
    var inputs = document.getElementsByClassName("certinputs");
    var inputsLength = inputs.length;
    for (var i = 0; i < inputsLength; i++) {
      inputs[i].addEventListener("keyup", function () {
        drawTextfromInputs();
      });
    }
    var radiocheck_course = document.getElementById("course_name");
   
    radiocheck_course.addEventListener("click", function () {
      drawTextfromInputs();
    });

    var radiocheck = document.getElementById("teacher_name");
   
    radiocheck.addEventListener("click", function () {
      drawTextfromInputs();
    });


  }
  function drawTextfromInputs() {
    // Clearing Canvas with white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
  
    ctx.drawImage(certImage, 0, 0, canvas.width, canvas.height);
    // Getting Input Values
    var text1 = "Proudly Presented To";
    var font1 = "Roboto";
    var position1 = ["50","20"];
    var fontSize1 = "3";
    var editable = 1;

    var textInputs4 = document.getElementById("teacher_name");
    // Adding Text
    addText(
      ctx,
      text1,
      position1,
      font1,
      fontSize1,
      textInputs4,
      editable
    );

    var text2 = "For The Successful Completion Of";
    var font2 = "Roboto";
    var position2 = ["50","40"];
    var fontSize2 = "3";
    var editable = 1;

    var textInputs4 = document.getElementById("teacher_name");
    // Adding Text
    addText(
      ctx,
      text2,
      position2,
      font2,
      fontSize2,
      textInputs4,
      editable
    );

    var textInputs3 = document.getElementById("body");
    var text3 = textInputs3.value;
    var font3 = textInputs3.dataset.font;
    var position3=  [textInputs3.dataset.x, textInputs3.dataset.y];
    var fontSize3 = textInputs3.dataset.fontsize;
    var editable = 1;

    // Adding Text
    addText(
      ctx,
      text3,
      position3,
      font3,
      fontSize3,
      textInputs4,
      editable
    );

    var text4 = textInputs4.value;
    var font4 = textInputs4.dataset.font;
    var position4 = [textInputs4.dataset.x, textInputs4.dataset.y];
    var fontSize4 = textInputs4.dataset.fontsize;
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text4,
      position4,
      font4,
      fontSize4,
      textInputs4,
      editable
    );
    var textInputs5 = document.getElementById("course_name");
    var text5 = "Course Name : " + textInputs5.value;
    var font5 = textInputs4.dataset.font;
    var position5 = [textInputs5.dataset.x, textInputs5.dataset.y];
    var fontSize5 = textInputs5.dataset.fontsize;
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text5,
      position5,
      font5,
      fontSize5,
      textInputs5,
      editable
    );

    var textInputs6 = document.getElementById("certif_title");
    var text6 = textInputs6.value;
    var font6 = textInputs6.dataset.font;
    var position6 = [textInputs6.dataset.x, textInputs6.dataset.y];
    var fontSize6 = textInputs6.dataset.fontsize;
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text6,
      position6,
      font6,
      fontSize6,
      textInputs6,
      editable
    );
    
  }

  imageBackgroundInput.addEventListener("change", function () {
    var file = imageBackgroundInput.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      certImage.src = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      certImage.src = defaultCertPNG;
    }
  });


  function addText(
    ctx = ctx,
    text = "Default Text",
    position = [0, 0],
    font,
    fontSize = 5 * defaultFontSize,
    dom,
    editable = "1"
  ) {
    
    ctx.textAlign = "center";
    // Setting Text Position
    ctx.textBaseline = "top";
    if (editable == "0") {
      text = "{{" + text + "}}";
    }
    ctx.font = Number(fontSize) * defaultFontSize +"px " + font;
    // Measure Height & Width of Text
    var textWidth = ctx.measureText(text).width * (100 / canvas.width);
    
    var textHeight = fontSize;
    dom.dataset.width = textWidth - 100;
    dom.dataset.height = textHeight;
    // console.log(textWidth,textHeight);
  
    // Setting Text Position
    const xPos = Number(position[0] * (canvas.width / 100));
    const yPos = Number(position[1] * (canvas.height / 100));
    
    printAtWordWrap(ctx, text, xPos, yPos, 35, 1000);
  }

  

function printAtWordWrap( context , text, x, y, lineHeight, fitWidth){
    fitWidth = fitWidth || 0;
    
    if (fitWidth <= 0)
    {
        context.fillText( text, x, y );
        return;
    }
    var words = text.split(' ');
    var currentLine = 0;
    var idx = 1;
    while (words.length > 0 && idx <= words.length)
    {
        var str = words.slice(0,idx).join(' ');
        var w = context.measureText(str).width;
        if ( w > fitWidth )
        {
            if (idx==1)
            {
                idx=2;
            }
            context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
            currentLine++;
            words = words.splice(idx-1);
            idx = 1;
        }
        else
        {idx++;}
    }
    if  (idx > 0)
        context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
}


downloadButton.addEventListener("click", function () {
  selectedElement = null;
  drawTextfromInputs();

  // Creating Image from Canvas
  var image = canvas.toDataURL("images/certificate" );

  // Creating Download Link
  var link = document.createElement("a");
  link.download = "certificate.png";
  link.href = image;
  link.click();
  
});