@extends('layouts.admin.main-admin')
@section('container')
    <section class="margin-top ">
        <div class="sidenav">
            <div class="content content-nav">
                <div class="row p-4">
                    <section class="section-curriculum sections">
                        <article>
                            <div class="mb-2">
                                <a href="/admin" class="collapsible btn mb-2 btn-admin">
                                    Dashboard
                                </a>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Users
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/user-teacher">
                                            <li>
                                                Teacher
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/user-student">
                                            <li>
                                                Student
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/users-setting">
                                            <li>
                                                User Setting
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Courses
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        @if (auth()->user()->role == 'admin')
                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/courses-categories">
                                                <li>
                                                    Categories
                                                </li>
                                            </a>
                                        @endif
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/courses-list">
                                            <li>
                                                Course List
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Quiz
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "href="/admin/add-quiz">
                                            <li>
                                                Add Quiz
                                            </li>
                                        </a>
                                        <a href="/admin/quiz-setting" class="d-flex align-items-center chapter-info mb-2 ">
                                            <li>
                                                Quiz Setting
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
                                    Certificates
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/certificate-list">
                                            <li>
                                                Certificate List
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/certificate-add">
                                            <li>
                                                Add Certificate
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2"
                                            href="/admin/certificate-setting">
                                            <li>
                                                Certificate Setting
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
                                    Front Page
                                </button>
                                @if (auth()->user()->role == 'admin')
                                    <div class="content-collapse">
                                        <ul class="list-lesson">
                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-home">
                                                <li>
                                                    Home Content
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-social">
                                                <li>
                                                    Social Setting
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-footer">
                                                <li>
                                                    Footer Setting
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-account">
                                                <li>
                                                    Account Setting
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-about-us">
                                                <li>
                                                    About Us
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                @endif

                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-2">
                        <h3 style="margin-bottom: 0">Certificate | Certificate Setting </h3>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <h3 class="my-4 ms-2"style="margin-bottom: 0" id="titleText">Certificate Setting</h3>
                            <div class="box-recommend mt-2 p-4" style="overflow: scroll; max-height: 720px">
                                <form action="" id="Inputs" class="form_certificate" enctype="multipart/form-data">

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="background_image" class="form-label "
                                                style="font-size: 23px">Background Image Default</label>
                                            <input type="file" value="Upload Image" accept="image/*"
                                                name="background_image" id="background_image"
                                                class="form-control px-3 py-2" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="show_logo_yes" class="form-label" style="font-size: 23px">Show
                                                Logo</label>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_logo"
                                                    id="show_logo_yes" checked value="yes_logo">
                                                <label class="form-radio-label" for="show_logo_yes">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_logo"
                                                    id="show_logo_no" value="no_logo">
                                                <label class="form-radio-label" for="show_logo_no">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="position_logo_x" class="form-label"
                                                        style="font-size: 23px">Position X
                                                    </label>
                                                    <input type="number" name="position_logo_x" id="position_logo_x"
                                                        class="form-control px-3 py-2 certinputs" value="1675"/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="position_logo_y" class="form-label"
                                                        style="font-size: 23px">Position Y
                                                    </label>
                                                    <input type="number" name="position_logo_y" id="position_logo_y"
                                                        class="form-control px-3 py-2 certinputs" value = "110" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-3" style="opacity: 1; border: 1px solid white; margin:0">
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="show_student_yes" class="form-label"
                                                style="font-size: 23px">Student Name</label>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="show_student_yes" checked value="yes_student">
                                                <label class="form-radio-label" for="show_student_yes">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="show_student_no" value="no_student">
                                                <label class="form-radio-label" for="show_student_no">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group">
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="position_student_x" class="form-label"
                                                        style="font-size: 23px">Position X
                                                    </label>
                                                    <input type="number" name="position_student_x"
                                                        id="position_student_x" class="form-control px-3 py-2 certinputs" value="50" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="position_student_y" class="form-label"
                                                        style="font-size: 23px">Position Y
                                                    </label>
                                                    <input type="number" name="position_student_y"
                                                        id="position_student_y" class="form-control px-3 py-2 certinputs" value="30"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="font_size" class="form-label" style="font-size: 23px">Font Size
                                            </label>
                                            <input type="number" name="font_size" id="font_size"
                                                class="form-control px-3 py-2 certinputs" value="30" />
                                        </div>
                                    </div>
                                    <hr class="my-3" style="opacity: 1; border: 1px solid white; margin:0">
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="text_1" class="form-label" style="font-size: 23px">Text 1
                                            </label>
                                            <input type="text" data-x="50" data-y="20" name="text_1"
                                                id="text_1" data-font="Roboto" data-fontsize="3"
                                                class="text_1 form-control px-3 py-2 certinputs"
                                                value="Proudly Presented To" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="text_2" class="form-label" style="font-size: 23px">Text 2
                                            </label>
                                            <input type="text" data-x="50" data-y="40" name="text_2"
                                                id="text_2" data-font="Roboto" data-fontsize="3"
                                                class="text_2 form-control px-3 py-2 certinputs"
                                                value="For The Successful Completion Of" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="body_position" class="form-label" style="font-size: 23px">Body
                                                Position
                                            </label>
                                            <select type="select" name="body_position" id="body_position"
                                                class="form-select px-3 py-2">
                                                <option value="Left">Left</option>
                                                <option selected value="center">Center</option>
                                                <option value="Right">Right</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="show_course_name_yes" class="form-label"
                                                style="font-size: 23px">Show Course Name</label>
                                            <div class="col-3 form-radio d-flex align-items-center" >
                                                <input class="form-radio-input me-2" type="radio"
                                                    name="show_course" id="show_course_name_yes" checked
                                                    value="yes_course_name">
                                                <label class="form-radio-label" for="show_course_name_yes">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio"
                                                    name="show_course" id="show_course_name_no"
                                                    value="no_course_name">
                                                <label class="form-radio-label" for="show_course_name_no">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="show_date_yes" class="form-label" style="font-size: 23px">Show
                                                Date</label>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_date"
                                                    id="show_date_yes" checked value="yes_date">
                                                <label class="form-radio-label" for="show_date_yes">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_date"
                                                    id="show_date_no" value="no_date">
                                                <label class="form-radio-label" for="show_date_no">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="footer_title" class="form-label" style="font-size: 23px">Footer
                                                Title
                                            </label>
                                            <select type="select" data-x="50" data-y="88" data-font="Roboto"
                                                data-fontsize="2" name="footer_title" id="footer_title"
                                                class="text_3 form-select px-3 py-2 certcheck">
                                                <option selected value="Teachers Name">Teacher Name</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="signature" class="form-label" style="font-size: 23px">Signature
                                                Image</label>
                                            <input type="file" name="signature" id="signature"
                                                class="form-control px-3 py-2 " />
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="row form-group">
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="signature_height" class="form-label"
                                                        style="font-size: 23px">Signature Height
                                                    </label>
                                                    <input type="number" name="signature_height" id="signature_height"
                                                        class="form-control px-3 py-2 certinputs" value="150"/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="signature_width" class="form-label"
                                                        style="font-size: 23px ">Signature Width
                                                    </label>
                                                    <input type="number" name="signature_width" id="signature_width"
                                                        class="form-control px-3 py-2 certinputs"  value="150"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Buttons Sign in -->
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <div id="btn-batal">
                                        </div>
                                        <button id="save_and_download"
                                            class="btn btn-button btn-shadow text-dark px-5 rounded-pill "
                                            type="submit">save</button>

                                    </div>


                                </form>
                            </div>
                        </div>
                        <div class="col-8">
                            <h3 class="my-4 ms-2"style="margin-bottom: 0">Preview</h3>
                            <div class="box-recommend mt-2 p-4">

                                <hr class="my-3" style="opacity: 1; border: 2px solid white; margin:0">
                                <div class="preview m-5 d-flex align-items-center" style="min-height: 500px">
                                    <canvas id="certificatecanvas"></canvas>
                                    <div style="display: block">
                                        <img src="" alt="" id="image_dummy">
                                    </div>
                                </div>
                                <hr class="my-3" style="opacity: 1; border: 2px solid white; margin:0">
                            </div>

                        </div>

                        <div class="loaderbody">
                            <div>
                                <span id="progress">-/-</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>
        //  Initializing variables
var defaultCertPNG = "../images/certificate/dummy.png";
var defaultSignPNG = "../images/certificate/algebra.png";
var logo = "../images/logo_golearn.png"
var empty = "../images/certificate/Empty.png"

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
var imageSignatureInput = document.getElementById("signature");

document.addEventListener("DOMContentLoaded", function () {
    // Creating Image from PNG file
    certImage.src = defaultCertPNG;
    SignImage.src = defaultSignPNG;
    logoImage.src =logo;
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
    };
    var radiocheck = document.getElementById("footer_title");
    
    radiocheck.addEventListener("click", function () {
      drawTextfromInputs();
    });

    var radiocheck1 = document.getElementById("show_course_name_yes");
    
    radiocheck1.addEventListener("click", function () {

      drawTextfromInputs();
    });
    var radiocheck1 = document.getElementById("show_course_name_no");
    
    radiocheck1.addEventListener("click", function () {

      drawTextfromInputs();
    });

    var radiocheck2 = document.getElementById("show_date_yes");
    
    radiocheck2.addEventListener("click", function () {

      drawTextfromInputs();
    });
    var radiocheck2 = document.getElementById("show_date_no");
    
    radiocheck2.addEventListener("click", function () {

      drawTextfromInputs();
    });

    var radiocheck3 = document.getElementById("show_student_yes");
    
    radiocheck3.addEventListener("click", function () {

      drawTextfromInputs();
    });
    var radiocheck3 = document.getElementById("show_student_no");
    
    radiocheck3.addEventListener("click", function () {

      drawTextfromInputs();
    });

    var radiocheck4 = document.getElementById("show_logo_yes");
    
    radiocheck4.addEventListener("click", function () {
      drawTextfromInputs();
    });
    var radiocheck5 = document.getElementById("show_logo_no");
    
    radiocheck5.addEventListener("click", function () {

      drawTextfromInputs();
    });

   
  }
  function drawTextfromInputs() {

    var signature_height_input = document.getElementById("signature_height");
    var signature_height = signature_height_input.value;
    
    var signature_width_input = document.getElementById("signature_width");
    var signature_width = signature_width_input.value;
    
    console.log(signature_height, signature_width);
    // Clearing Canvas with white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    
    
    ctx.drawImage(certImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(SignImage, (canvas.width-signature_width)/2, (840 - (signature_height/3)) , signature_width, signature_height );
    // Getting Input Values
    var textInputs1 = document.getElementById("text_1");
    
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
        
        
        var text3 = "Lorem ipsum dolor sit amet consectetur. Tristique in in velit malesuada. Diam morbi ullamcorper dictum faucibus urna ut vestibulum pharetra arcu."
        var font3 = textInputs1.dataset.font;
        var position3 = [50, 60];
        var fontSize3 = 2;
        var editable = 1;
        
        // Adding Text
        addText(
      ctx,
      text3,
      position3,
      font3,
      fontSize3,
      textInputs2,
      editable
      );
      var textInputs4 = document.getElementById("footer_title");
      var text4 = textInputs4.value;
      var font4 = textInputs4.dataset.font;
      var position4 = [textInputs4.dataset.x, textInputs4.dataset.y];
      var fontSize4 = textInputs4.dataset.fontsize;
      
      var editable = textInputs4.dataset.editable;
      
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

      if(document.getElementById("show_course_name_yes").checked == true)  {
        var text5 = "Course Name :";
        var font5 = "Roboto";
        var position5 = [30, 50];
        var fontSize5 = 2;
        var editable = 1;
        
        // Adding Text
        addText(
          ctx,
          text5,
          position5,
          font5,
          fontSize5,
          textInputs4,
          editable
        );
      }
      if(document.getElementById("show_date_yes").checked == true)  {
        var text6 = "Date :";
        var font6 = "Roboto";
        var position6 = [65, 50];
        var fontSize6 = 2;
        var editable = 1;
        
        // Adding Text
        addText(
          ctx,
          text6,
          position6,
          font6,
          fontSize6,
          textInputs4,
          editable
        );
      }

      if(document.getElementById("show_student_yes").checked == true)  {
        var text7 = "Student Name";
        var font7 = "Roboto";
        var position_student_x = document.getElementById("position_student_x").value;
        var position_student_y = document.getElementById("position_student_y").value;
        var font_student = document.getElementById("font_size").value;
        var position7 = [ position_student_x, position_student_y];
        var fontSize7 = font_student/10;
        var editable = 1;
        
        // Adding Text
        addText(
          ctx,
          text7,
          position7,
          font7,
          fontSize7,
          textInputs4,
          editable
        );
      }
      
      if(document.getElementById("show_logo_yes").checked == true)  {
        var position_logo_x = document.getElementById("position_logo_x").value;
        var position_logo_y = document.getElementById("position_logo_y").value;
        logoImage.src = logo;
        ctx.drawImage(logoImage, position_logo_x, position_logo_y, 90, 100);
      }
      if(document.getElementById("show_logo_no").checked == true)  {
        var position_logo_x = document.getElementById("position_logo_x").value;
        var position_logo_y = document.getElementById("position_logo_y").value;
        logoImage.src = empty;
        ctx.drawImage(logoImage, position_logo_x, position_logo_y, 90, 100);
      }
    }
    

    
  
    
    
    imageSignatureInput.addEventListener("change", function () {
      var file = imageSignatureInput.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        SignImage.src = reader.result;
        ctx.drawImage(SignImage, 800, 800, 100, 100);
      };
      if (file) {
        reader.readAsDataURL(file);
        console.log(reader);
      }
      else{
        SignImage.src = defaultSignPNG;
        
      }
      
    });
    
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
    </script>
@endsection
