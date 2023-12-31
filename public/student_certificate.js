//  Initializing variables
var defaultCertPNG = "../images/certificate/dummy.png";
var defaultSignPNG = "../images/certificate/algebra.png";
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
var SignImage = new Image();

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
    SignImage.src = defaultSignPNG;
    var dimentionRatio = certImage.width / certImage.height;
  
    // When Image Loads Successfully
    certImage.onload = function () {
      // Setting Canvas Size
      canvas.width = 1920;
      canvas.height = 1080;
      defaultFontSize = canvas.width / 100;
      console.log(defaultFontSize);
      drawTextfromInputs();
    };

  });

  function drawTextfromInputs() {
    // Clearing Canvas with white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
  
    ctx.drawImage(certImage, 0, 0, canvas.width, canvas.height);
    // Getting Input Values
    var text1 = "Certificate Title";
    var font1 = "Roboto";
    var position1 = ["50","15"];
    var fontSize1 = "3";
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text1,
      position1,
      font1,
      fontSize1,

      editable
    );

    var text2 = "Proudly Presented To";
    var font2 = "Roboto";
    var position2 = ["50","20"];
    var fontSize2 = "3";
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text2,
      position2,
      font2,
      fontSize2,
      editable
    );

    var text3 = "User";
    var font3 = "Roboto";
    var position3 = ["50","30"];
    var fontSize3 = "3";
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text3,
      position3,
      font3,
      fontSize3,
      editable
    );

    var text4 = "For The Successful Completion Of";
    var font4 = "Roboto";
    var position4 = ["50","40"];
    var fontSize4 = "3";
    var editable = 1;

    // Adding Text
    addText(
      ctx,
      text4,
      position4,
      font4,
      fontSize4,
      editable
    );

    var text5 = "Course : "
    var font5 = "Roboto";
    var position5=  ["30","50"];
    var fontSize5 = "2";
    var editable = 1;

    // Adding Text
    addText(
      ctx,
      text5,
      position5,
      font5,
      fontSize5,
      editable
    );
    
    var text6 = "Date Time : " ;
    var font6 = "Roboto";
    var position6 = ["65","50"];
    var fontSize6 = "2";
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text6,
      position6,
      font6,
      fontSize6,
      editable
    );

    var text7 = "Lorem ipsum dolor sit amet consectetur. Tristique in in velit malesuada. Diam morbi ullamcorper dictum faucibus urna ut vestibulum pharetra arcu." ;
    var font7 = "Roboto";
    var position7 = ["50","60"];
    var fontSize7 = "2";
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text7,
      position7,
      font7,
      fontSize7,
      editable
    );

    var text8 = "mamang" ;
    var font8 = "Roboto";
    var position8 = ["50","88"];
    var fontSize8 = "2";
    var editable = 1;
    // Adding Text
    addText(
      ctx,
      text8,
      position8,
      font8,
      fontSize8,
      editable
    );

  }

  
  function addText(
    ctx = ctx,
    text = "Default Text",
    position = [0, 0],
    font,
    fontSize = 5 * defaultFontSize,
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
  
    var pdf = new jsPDF("l", "cm", [508,285.75]);
    const imgData = canvas.toDataURL('image/png');

    const imgProps= pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("certificate.pdf");
  });
