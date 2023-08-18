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
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/courses-categories">
                                            <li>
                                                Categories
                                            </li>
                                        </a>
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
                                        <a class="d-flex align-items-center chapter-info mb-2 "href="/admin/quiz-setting">
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
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Front Page
                                </button>
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
                        <h3 style="margin-bottom: 0">Certificate | New Certificate </h3>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <h3 class="my-4 ms-2"style="margin-bottom: 0" id="titleText">New Certificate</h3>
                            <div class="box-recommend mt-2 p-4">
                                <form action="{{ route('admin_update_certificate') }}" method="POST"
                                    class="form_certificate" enctype="multipart/form-data">
                                    @csrf
                                    <input type="text" name="id" value="{{ $data_certificate['id'] }}" hidden>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="background_image" class="form-label "
                                                style="font-size: 23px">Background Image </label>
                                            <input type="file" name="background_image" id="background_image"
                                                class="form-control px-3 py-2" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="certif_title" class="form-label "
                                                style="font-size: 23px">Certificate Title
                                            </label>
                                            <input type="text" data-x="50" data-y="15" data-fontsize="3"
                                                data-font="Roboto" name="title" id="certif_title"
                                                class="form-control px-3 py-2 certinputs" placeholder="Enter Title"
                                                value="{{ $data_certificate['title'] }}" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="body" class="form-label " style="font-size: 23px">Body
                                            </label>
                                            <input type="text" data-x="50" data-y="60" data-fontsize="2"
                                                data-font="Roboto" name="body" id="body"
                                                class="form-control px-3 py-2 certinputs"
                                                value="{{ $data_certificate['body'] }}" />
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="course_name" class="form-label " style="font-size: 23px">Course
                                                Name
                                            </label>
                                            <select type="select" data-x="30" data-y="50" data-font="Roboto"
                                                data-fontsize="2" name="course_name" id="course_name"
                                                class="form-select px-3 py-2">
                                                @foreach ($course as $c)
                                                    @if ($c['name'] == $data_certificate['course_name'])
                                                        <option value="{{ $c['name'] }}" selected>{{ $c['name'] }}
                                                        </option>
                                                    @else
                                                        <option value="{{ $c['name'] }}">{{ $c['name'] }}</option>
                                                    @endif
                                                @endforeach

                                            </select>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="teacher_name" class="form-label " style="font-size: 23px">Teacher
                                                Name
                                            </label>
                                            <select type="select" data-x="50" data-y="88" data-font="Roboto"
                                                data-fontsize="2" name="teacher_name" id="teacher_name"
                                                class="form-select px-3 py-2 certicheck">
                                                @foreach ($teacher as $t)
                                                    @if ($t['name'] == $data_certificate['teacher_name'])
                                                        <option value="{{ $t['name'] }}" selected>{{ $t['name'] }}
                                                        </option>
                                                    @else
                                                        <option value="{{ $t['name'] }}">{{ $t['name'] }}</option>
                                                    @endif
                                                @endforeach

                                            </select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="signature" class="form-label "
                                                style="font-size: 23px">Signature</label>
                                            <input type="file" name="signature" id="signature"
                                                class="form-control px-3 py-2" />
                                        </div>
                                    </div>
                                    <!-- Buttons Sign in -->
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <div id="btn-batal">
                                        </div>
                                        <button class="btn btn-button btn-shadow text-dark px-5 rounded-pill "
                                            id="save_and_download" type="submit">save</button>

                                    </div>


                                </form>
                            </div>
                        </div>
                        <div class="col-9">
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
        var defaultCertPNG = "../../" + @json($data_certificate['background_image']);
        var defaultSignPNG = "../../" + @json($data_certificate['signature']);
        var logo = "../../images/logo_golearn.png"
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

        document.addEventListener("DOMContentLoaded", function() {
            // Creating Image from PNG file
            certImage.src = defaultCertPNG;
            SignImage.src = defaultSignPNG;
            logoImage.src = logo;
            var dimentionRatio = certImage.width / certImage.height;

            // When Image Loads Successfully
            certImage.onload = function() {
                // Setting Canvas Size
                canvas.width = 1920;
                canvas.height = 1080;
                defaultFontSize = canvas.width / 100;
                console.log(defaultFontSize);

                drawTextfromInputs();
                addListenerToInputs();
            };

            SignImage.onload = function() {

                ctx.drawImage(SignImage, (canvas.width - 150) / 2, 820, 100, 100);
            }
            logoImage.onload = function() {

                if (@json($certificate['show_logo'] == 'yes')) {
                    var position_logo_x = @json($certificate['position_logo_x']);
                    var position_logo_y = @json($certificate['position_logo_y']);
                    ctx.drawImage(logoImage, position_logo_x, position_logo_y, 90, 100);

                }
            }

        });

        function addListenerToInputs() {
            var inputs = document.getElementsByClassName("certinputs");
            var inputsLength = inputs.length;

            for (var i = 0; i < inputsLength; i++) {
                inputs[i].addEventListener("keyup", function() {
                    drawTextfromInputs();

                });
            }
            var radiocheck_course = document.getElementById("course_name");

            radiocheck_course.addEventListener("click", function() {
                drawTextfromInputs();
            });

            var radiocheck = document.getElementById("teacher_name");

            radiocheck.addEventListener("click", function() {
                drawTextfromInputs();
            });


        }

        function drawTextfromInputs() {
            // Clearing Canvas with white background
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";

            ctx.drawImage(certImage, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(SignImage, (canvas.width - 150) / 2, 820, 100, 100);
            if (@json($certificate['show_logo'] == 'yes')) {
                var position_logo_x = @json($certificate['position_logo_x']);
                var position_logo_y = @json($certificate['position_logo_y']);
                ctx.drawImage(logoImage, position_logo_x, position_logo_y, 90, 100);

            }

            // Getting Input Values
            var text1 = @json($certificate['text_1']);
            var font1 = "Roboto";
            var position1 = ["50", "20"];
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

            var text2 = @json($certificate['text_2']);
            var font2 = "Roboto";
            var position2 = ["50", "40"];
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
            var position3 = [textInputs3.dataset.x, textInputs3.dataset.y];
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

            if (@json($certificate['show_course'] == 'yes')) {
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
            }


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

            if (@json($certificate['show_date'] == 'yes')) {


                var text7 = "Date :";
                var font7 = "Roboto";
                var position7 = [65, 50];
                var fontSize7 = 2;
                var editable = 1;

                // Adding Text
                addText(
                    ctx,
                    text7,
                    position7,
                    font6,
                    fontSize7,
                    textInputs4,
                    editable
                );
            }

            imageSignatureInput.addEventListener("change", function() {
                var file = imageSignatureInput.files[0];
                var reader = new FileReader();
                reader.onloadend = function() {
                    // SignImage.src = reader.result;
                    // ctx.drawImage(SignImage, 800, 800, 100, 100);
                    SignImage.src = reader.result;
                    drawTextfromInputs();
                };
                if (file) {
                    reader.readAsDataURL(file);
                    console.log(reader);
                } else {
                    SignImage.src = defaultSignPNG;

                }

            });

        }


        imageBackgroundInput.addEventListener("change", function() {
            var file = imageBackgroundInput.files[0];
            var reader = new FileReader();
            reader.onloadend = function() {
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
                text = "{{ ' + text + ' }}";
            }
            ctx.font = Number(fontSize) * defaultFontSize + "px " + font;
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



        function printAtWordWrap(context, text, x, y, lineHeight, fitWidth) {
            fitWidth = fitWidth || 0;

            if (fitWidth <= 0) {
                context.fillText(text, x, y);
                return;
            }
            var words = text.split(' ');
            var currentLine = 0;
            var idx = 1;
            while (words.length > 0 && idx <= words.length) {
                var str = words.slice(0, idx).join(' ');
                var w = context.measureText(str).width;
                if (w > fitWidth) {
                    if (idx == 1) {
                        idx = 2;
                    }
                    context.fillText(words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine));
                    currentLine++;
                    words = words.splice(idx - 1);
                    idx = 1;
                } else {
                    idx++;
                }
            }
            if (idx > 0)
                context.fillText(words.join(' '), x, y + (lineHeight * currentLine));
        }
    </script>
@endsection
