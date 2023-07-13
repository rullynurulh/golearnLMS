@extends('layouts.admin.main-admin')
@section('container')
    <section class="margin-top " >
        <div class="sidenav">
            <div class="content content-nav">
                <div class="row p-4">  
                    <section class="section-curriculum sections">
                        <article>
                            <div class="mb-2">
                                <a href="/admin"  class="collapsible btn mb-2 btn-admin">
                                    Dashboard
                                </a>
                            </div>
                            <div class="mb-2">
                                <button type="button"  class="collapsible btn mb-2 btn-admin">
                                    Users
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/user-teacher">
                                            <li  >
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
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/courses-categories">
                                            <li >
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
                                <button type="button" id="active"  class="collapsible btn mb-2 btn-admin-active">
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
                                            <li >
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
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/certificate-list">
                                            <li>
                                                Certificate List 
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/certificate-add">
                                            <li >
                                                Add Certificate
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2" href="/admin/certificate-setting">
                                            <li  >
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
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/frontpage-home">
                                            <li >
                                                Home Content
                                            </li>
                                        </a>
                                        
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/frontpage-social">
                                            <li>
                                                Social Setting 
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/frontpage-footer">
                                            <li >
                                                Footer Setting
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/frontpage-account">
                                            <li >
                                                Account Setting
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/frontpage-about-us">
                                            <li >
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
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">Quiz | Add Quiz</h3>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <h3 class="ms-3 mb-4"style="margin-bottom: 0">Add Quiz</h3>
                            <div class="box-recommend mt-2 p-4">
                                <form  action="" enctype="multipart/form-data">
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Quiz Title </label>
                                            <input type="text" name="quiz_title" id="quiz_title"
                                                class="form-control  p-2" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Duration (minute) </label>
                                            <input type="number" name="duration" id="duration"
                                                class="form-control p-2" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Min Persentage (%) </label>
                                            <input type="number"  min="0" or max="100"name="min_persentage" id="min_persentage"
                                                class="form-control p-2" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Help Mode </label>
                                            <div class="row">
                                                <div class="col d-flex align-items-center" style="font-size: 20px">
                                                    <input class="me-2" type="radio"  id="radio1" style="font-size: 20px" name="optradio" value="option1" checked>
                                                    Unlock
                                                    <label  for="radio1"></label>
                                                </div>
                                                <div class="col d-flex align-items-center" style="font-size: 20px">
                                                    <input class="me-2" type="radio"id="radio2" style="font-size: 20px" name="optradio" value="option2">
                                                    Lock
                                                    <label  for="radio2"></label>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <!-- Buttons Sign in -->
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <button class="btn btn-button btn-shadow text-dark px-4"
                                            type="submit">save</button>
                                    </div>
                                
            
                                </form>
                            </div>
                        </div>
                        <div class="col-9">
                            <h3 class="ms-3 mb-4"style="margin-bottom: 0">Add Quiz</h3>
                            <div class="box-recommend mt-2 p-4">
                                <div class="row d-flex justify-content-start ">
                                    <div class="col-1 d-flex justify-content-start ps-4 align-items-center"><h5 style="font-weight: 700">No</h5></div>
                                    <div class="col-2 d-flex justify-content-center align-items-center"><h5 style="font-weight: 700">Quiz Title</h5></div>
                                    <div class="col-2 d-flex justify-content-center align-items-center"><h5 style="font-weight: 700">Duration  (minute)</h5></div>
                                    <div class="col-2 d-flex justify-content-center align-items-center"><h5 style="font-weight: 700; text-align:center">Min. Persentage(%)</h5></div>
                                    <div class="col-2 d-flex justify-content-center align-items-center"><h5 style="font-weight: 700">Help Mode</h5></div>
                                    <div class="col-1 d-flex justify-content-center align-items-center"><h5 style="font-weight: 700">Status</h5></div>
                                    <div class="col-2 d-flex justify-content-center align-items-center"><h5 style="font-weight: 700">Action</h5></div>
                                </div>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                <div class="row d-flex justify-content-start mb-2">
                                    <div class="col-1 d-flex justify-content-start  ps-4">
                                        <h3 class="margin-bottom:0">1</h3>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">Quiz 1</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">120</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">80</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">Yes</h5>
                                    </div>
                                    <div class="col-1 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">Save</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <div class="col d-flex justify-content-center align-items-start">
                                            <button class="btn btn-action-quiz btn-shadow text-dark px-4 "  onclick="toggleMenuQuiz1()">Select </button>
                                            <div class="sub-menu-wrap-quiz" id="subMenuQuiz-1">
                                                <div class="sub-menu-quiz ">
                                                    
                                                    <a href="/admin/result-quiz" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">View Result</p>
                                                    </a>
                                                    <a href="/admin/add-question" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">Add Question</p>
                                                    </a>
                                                    <a href="#" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">Edit</p>
                                                    </a>
                                                    <a href="#" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">Delete</p>
                                                    </a>
    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-start mb-2">
                                    <div class="col-1 d-flex justify-content-start  ps-4">
                                        <h3 class="margin-bottom:0">1</h3>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">Quiz 1</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">120</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">80</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">Yes</h5>
                                    </div>
                                    <div class="col-1 d-flex justify-content-center ">
                                        <h5 style="font-weight: 500">Save</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center ">
                                        <div class="col d-flex justify-content-center align-items-start">
                                            <button class="btn btn-action-quiz btn-shadow text-dark px-4 "  onclick="toggleMenuQuiz2()">Select </button>
                                            <div class="sub-menu-wrap-quiz" id="subMenuQuiz-2">
                                                <div class="sub-menu-quiz ">
                                                    
                                                    <a href="#" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">View Result</p>
                                                    </a>
                                                    <a href="#" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">Add Question</p>
                                                    </a>
                                                    <a href="#" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">Edit</p>
                                                    </a>
                                                    <a href="#" class="sub-menu-link" >
                                                        <p style="margin: 0; text-align: end; color:#2F70AF;">Delete</p>
                                                    </a>
    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
    <script>
        let subMenuQuiz_1 = document.getElementById("subMenuQuiz-1");
        let subMenuQuiz_2 = document.getElementById("subMenuQuiz-2");

        function toggleMenuQuiz1(){
            subMenuQuiz_1.classList.toggle("open-menu");
        }

        function toggleMenuQuiz2(){
            subMenuQuiz_2.classList.toggle("open-menu");
        }
    </script>

@endsection
