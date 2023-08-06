@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top ">
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">
                    <a href="/student" class="btn mb-3 btn-student">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student">My Course</a>
                    <a href="/student/myprofile" class="btn mb-3 btn-student">My Profile</a>
                    <a href="/student/accomplishment" class="btn mb-3 btn-student-active">Accomplishment</a>
                    <a href="/student/setting" class="btn mb-3 btn-student">Account Setting</a>
                </div>
            </div>
        </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">My Achievements</h3>
                    </div>
                    <div class="card card-accomplishment text-left mb-3 mx-4">
                        <div class="row">
                            <div class="col-3">
                                <img class="card-img-left card-img-top-3" src="{{ URL::asset('images/course.jpg') }}"
                                    alt="">
                            </div>
                            <div class="col-6 d-flex align-items-center">
                                <div class="row">

                                    <h3>Figma Tutorial</h3>
                                    <p class="d-flex align-items-center"><span class="iconify me-1 "
                                            data-icon="material-symbols:check-circle-rounded" style="color: #2f70af;"
                                            data-width="20px"> </span>Great Work! You have passed all the requirements and
                                        can view your achievements now.</p>
                                </div>
                                <div style="border-left:2px solid white;height:100px"></div>
                            </div>

                            <div class="col-3 d-flex align-items-center justify-content-center">

                                <button id="save_and_download" class="btn btn-certificate-view">Download
                                    Certificate</button>
                            </div>

                        </div>
                    </div>
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

            </div>

        </div>

    </section>
    <script>
        //  Initializing variables
        var defaultCertPNG = "/" + @json($certificate['background_image']);
        var defaultSignPNG = "/" + @json($certificate['signature']);
        var logo = "/images/logo_golearn.png"

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
        };

        function drawTextfromInputs() {
            // Clearing Canvas with white background
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";

            ctx.drawImage(certImage, 0, 0, canvas.width, canvas.height);
            position_logo_x = @json($certificate_setting['position_logo_x']);
            position_logo_y = @json($certificate_setting['position_logo_y']);
            ctx.drawImage(logoImage, position_logo_x, position_logo_y, 90, 100);
            var signX = (canvas.width - 150) / 2;
            var signY = 840 - (150 / 3);
            sign_height = @json($certificate_setting['signature_height']);
            sign_width = @json($certificate_setting['signature_width']);
            ctx.drawImage(SignImage, signX, signY, sign_height, sign_width);
            // Getting Input Values
            var text1 = @json($certificate['title']);
            var font1 = "Roboto";
            var position1 = ["50", "15"];
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

            var text2 = @json($certificate_setting['text_1']);
            var font2 = "Roboto";
            var position2 = ["50", "20"];
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

            var text3 = @json(auth()->user()->name);
            var font3 = "Roboto";
            position_student_x = @json($certificate_setting['position_student_x']);
            position_student_y = @json($certificate_setting['position_student_y']);
            var position3 = [position_student_x, position_student_y];
            var fontSize3 = @json($certificate_setting['font_size']);
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

            var text4 = @json($certificate_setting['text_2']);
            var font4 = "Roboto";
            var position4 = ["50", "40"];
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

            if (@json($certificate_setting['show_course']) == "yes") {

                var text5 = "Course : " + @json($certificate['course_name']);
                var font5 = "Roboto";
                var position5 = ["30", "50"];
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
            }

            if (@json($certificate_setting['show_date']) == "yes") {

                var today = new Date();
                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

                var text6 = "Date Time : " + date;
                var font6 = "Roboto";
                var position6 = ["65", "50"];
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
            }

            var text7 = @json($certificate['body']);
            var font7 = "Roboto";
            var position7 = ["50", "60"];
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

            var text8 = @json($certificate['teacher_name']);
            var font8 = "Roboto";
            var position8 = ["50", "88"];
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
                text = "{{ ' + text + ' }}";
            }
            ctx.font = Number(fontSize) * defaultFontSize + "px " + font;
            // Measure Height & Width of Text
            var textWidth = ctx.measureText(text).width * (100 / canvas.width);

            var textHeight = fontSize;
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


        downloadButton.addEventListener("click", function() {
            selectedElement = null;
            drawTextfromInputs();

            var pdf = new jsPDF("l", "cm", [508, 285.75]);
            const imgData = canvas.toDataURL('image/png');

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save("certificate.pdf");
        });
    </script>
@endsection
