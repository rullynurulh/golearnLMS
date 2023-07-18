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
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
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
                                <button type="button" class="collapsible btn mb-2 btn-admin">
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
                    <form action="">
                        <div class="box-recommend p-4 mb-4">
                            <div class="row d-flex justify-content-between">
                                <div class="col-3">
                                    <h3 style="margin-bottom: 0">Add Question</h3>
                                </div>
                                <div class="col-3 d-flex justify-content-end">
                                    <div class="row">
                                        <div class="col">
                                            <button class="btn btn-button btn-shadow text-dark px-4"
                                                type="submit">Draft</button>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-button btn-shadow text-dark px-4"
                                                type="submit">save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="box-recommend mt-2 p-4">
                                    <form action="" enctype="multipart/form-data" method="POST">
                                        @csrf
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label for="form-label text-white" style="font-size: 23px">File (optional)
                                                </label>
                                                <input type="file" name="file" id="file_optional"
                                                    class="form-control  p-2" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label for="form-label text-white" style="font-size: 23px">Question</label>
                                                <textarea name="question" id="question" rows="6" class="form-control p-2">
                                                 </textarea>
                                            </div>
                                        </div>
                                        <div class="row d-flex justify-content-start mb-2">
                                            <div class="col-1 d-flex align-items-center me-4">
                                                <p style="font-size: 23px; margin-bottom:0;">Type</p>
                                            </div>
                                            <div class="col-4 d-flex align-items-center" style="font-size: 20px">
                                                <input class="me-2" type="radio" id="radio1"
                                                    style="font-size: 20px" name="type" value="multiple choice"
                                                    checked onclick="showForm()">
                                                Multiple Choice
                                                <label for="radio1"></label>
                                            </div>
                                            <div class="col-4  d-flex align-items-center" style="font-size: 20px">
                                                <input class="me-2" type="radio"id="radio2"
                                                    style="font-size: 20px" name="type" value="long answer"
                                                    onclick="hideForm()">
                                                Long Answer
                                                <label for="radio2"></label>
                                            </div>

                                        </div>
                                        <div class="col" id="form_multiple_choice">
                                            <div class="form-control  mb-2" style="padding:0px">
                                                <div class="d-flex row">
                                                    <div class="col-1 d-flex align-items-center justify-content-center" style=" position:relative;">
                                                        a.
                                                    </div>
                                                    <div class="col-10 d-flex align-items-center justify-content-start "  style="right: 10px; position:relative;">
                                                        <input type="text"name="answer_a" id="answer_a"
                                                            class="form-control p-2 " style="border:0px"/>
                                                          
                                                    </div> 
                                                    <div class="col-1 d-flex align-items-center justify-content-end">
                                                        <input class="me-2 radio-answer" type="radio" 
                                                            style="font-size: 20px" name="answer" value="answer"
                                                            >    
                                                    </div> 

                                                </div>
                                                
                                            </div>
                                            <div class="form-control  mb-2" style="padding:0px">
                                                <div class="d-flex row">
                                                    <div class="col-1 d-flex align-items-center justify-content-center" style=" position:relative;">
                                                        b.
                                                    </div>
                                                    <div class="col-10 d-flex align-items-center justify-content-start "  style="right: 10px; position:relative;">
                                                        <input type="text"name="answer_b" id="answer_b"
                                                            class="form-control p-2 " style="border:0px"/>
                                                          
                                                    </div> 
                                                    <div class="col-1 d-flex align-items-center justify-content-end">
                                                        <input class="me-2 radio-answer" type="radio" 
                                                            style="font-size: 20px" name="answer" value="answer"
                                                            >    
                                                    </div> 

                                                </div>
                                                
                                            </div>
                                            <div class="form-control  mb-2" style="padding:0px">
                                                <div class="d-flex row">
                                                    <div class="col-1 d-flex align-items-center justify-content-center" style=" position:relative;">
                                                        c.
                                                    </div>
                                                    <div class="col-10 d-flex align-items-center justify-content-start "  style="right: 10px; position:relative;">
                                                        <input type="text"name="answer_a" id="answer_a"
                                                            class="form-control p-2 " style="border:0px"/>
                                                          
                                                    </div> 
                                                    <div class="col-1 d-flex align-items-center justify-content-end">
                                                        <input class="me-2 radio-answer" type="radio" 
                                                            style="font-size: 20px" name="answer" value="answer"
                                                            >    
                                                    </div> 

                                                </div>
                                                
                                            </div>
                                            <div class="form-control  mb-2" style="padding:0px">
                                                <div class="d-flex row">
                                                    <div class="col-1 d-flex align-items-center justify-content-center" style=" position:relative;">
                                                        d.
                                                    </div>
                                                    <div class="col-10 d-flex align-items-center justify-content-start "  style="right: 10px; position:relative;">
                                                        <input type="text"name="answer_d" id="answer_d"
                                                            class="form-control p-2 " style="border:0px"/>
                                                          
                                                    </div> 
                                                    <div class="col-1 d-flex align-items-center justify-content-end">
                                                        <input class="me-2 radio-answer " type="radio" 
                                                            style="font-size: 20px" name="answer" value="answer"
                                                            >
                                                                
                                                    </div> 

                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="col" id="form_long_answer" style="display:none">
                                            <textarea name="answer_long" id="answer_long" rows="3" class="form-control p-2">
                                            </textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="box-recommend mt-2 p-4 min-height-recommend">
                                    <div class="row d-flex justify-content-start ">
                                        <h4>Question List</h4>
                                    </div>
                                    <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                    @php
                                        $nomor = 1;
                                    @endphp
                                    @foreach ($questions as $question)
                                        <div class="box-list-admin mb-2">
                                            <div class="row d-flex justify-content-start">

                                                <div class="col-1 d-flex justify-content-start align-items-center">
                                                    <h4 style="margin-bottom:0">{{ $nomor++ }}.</h4>
                                                </div>
                                                <div class="col-9 d-flex justify-content-start align-items-center">
                                                    <div class="overflow-ecilips "
                                                        style=" overflow: hidden; text-overflow: ellipsis ; white-space: nowrap;  ">
                                                        <h5 style="font-weight: 500; margin-bottom:0; ">
                                                            {{ $question['question'] }}</h5>

                                                    </div>
                                                </div>
                                                <div class="col-2 d-flex justify-content-end align-items-center">
                                                    <div class="col d-flex justify-content-end align-items-center">
                                                        <a href="" style="border: none;"> <span
                                                                class="iconify ms-2" data-icon="ph:x-bold"
                                                                style="color: red;" data-width="25"></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach

                                    <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                    <div class="d-flex justify-content-center pt-1 mb-1">
                                        <button class="btn btn-button btn-shadow text-dark px-4" type="submit">Add
                                            New</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    </section>
    <script>
        function hideForm() {
            document.getElementById("form_multiple_choice").style.display = "none";
            document.getElementById("form_long_answer").style.display = "block";
        }

        function showForm() {
            document.getElementById("form_multiple_choice").style.display = "block";
            document.getElementById("form_long_answer").style.display = "none";
        }
    </script>
    <script>
        let subMenuQuiz_1 = document.getElementById("subMenuQuiz-1");
        let subMenuQuiz_2 = document.getElementById("subMenuQuiz-2");

        function toggleMenuQuiz1() {
            subMenuQuiz_1.classList.toggle("open-menu");
        }

        function toggleMenuQuiz2() {
            subMenuQuiz_2.classList.toggle("open-menu");
        }
    </script>
@endsection
