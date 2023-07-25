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
  }
  function drawTextfromInputs() {
    // Clearing Canvas with white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
  
    ctx.drawImage(certImage, 0, 0, canvas.width, canvas.height);
    // Getting Input Values
    var textInputs1 = document.getElementById("text_1");
    console.log(textInputs1.value);
    var text1 = textInputs1.value;
    var font1 = textInputs1.dataset.font;
    var position1 = [textInputs1.dataset.x, textInputs1.dataset.y];
    var fontSize1 = textInputs1.dataset.fontsize;

    var editable = textInputs1.dataset.editable;

    // Adding Text
    addText(
      ctx,
      text1,
      position1,
      font1,
      fontSize1,
      textInputs1,
      editable
    );

    var textInputs2 = document.getElementById("text_2");
    console.log(textInputs2.value);
    var text2 = textInputs2.value;
    var font2 = textInputs1.dataset.font;
    var position2 = [textInputs2.dataset.x, textInputs2.dataset.y];
    var fontSize2 = textInputs2.dataset.fontsize;

    var editable = textInputs2.dataset.editable;

    // Adding Text
    addText(
      ctx,
      text2,
      position2,
      font2,
      fontSize2,
      textInputs2,
      editable
    );

    var textInputs3 = document.getElementById("footer_title");
    console.log(textInputs3.value);
    var text3 = textInputs3.value;
    var font3 = textInputs1.dataset.font;
    var position3 = [textInputs3.dataset.x, textInputs3.dataset.y];
    var fontSize3 = textInputs3.dataset.fontsize;

    var editable = textInputs3.dataset.editable;

    // Adding Text
    addText(
      ctx,
      text3,
      position3,
      font3,
      fontSize3,
      textInputs3,
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

