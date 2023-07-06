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
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
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
                        <h3 style="margin-bottom: 0">User | Student</h3>
                    </div>
                    <div class="row p-2 d-flex justify-content-between mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <h4 style="margin-bottom:0">Student List</h4>
                        </div>
                       
                    </div>

                    <div class="box-recommend mt-2 p-4">
                        <div class="row d-flex justify-content-start ">
                            <div class="col-1 d-flex justify-content-start ps-5"><h5 style="font-weight: 700">No</h5></div>
                            <div class="col-1 d-flex justify-content-center"><h5 style="font-weight: 700">Profile</h5></div>
                            <div class="col-2 d-flex justify-content-center"><h5 style="font-weight: 700">Name</h5></div>
                            <div class="col-3 d-flex justify-content-center"><h5 style="font-weight: 700">Email Address</h5></div>
                            <div class="col-1 d-flex justify-content-center"><h5 style="font-weight: 700">Gender</h5></div>
                            <div class="col-2 d-flex justify-content-center"><h5 style="font-weight: 700">Date of Birth</h5></div>
                            <div class="col-1 d-flex justify-content-center"><h5 style="font-weight: 700">Status</h5></div>
                            <div class="col-1 d-flex justify-content-center"><h5 style="font-weight: 700">Action</h5></div>
                        </div>
                        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                        <div class="row d-flex justify-content-start mb-2">
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <h3 class="margin-bottom:0">1</h3>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <img src="{{ URL::asset('images/guru1.jpg') }}" style="width: 60px !important;border-radius:50%">
                            </div>
                            <div class="col-2 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">Student1</h5>
                            </div>
                            <div class="col-3 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">Student1@gmail.com</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">F</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">22/05/2000</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">Active</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <div class="col d-flex justify-content-center align-items-center">
                                  
                                        <button id="myBtn_Edit" style="border: none; background-color:#EAEAEA;"> <span class="iconify me-1" data-icon="fa-solid:edit" data-width="27"></span></button>
                                        |
                                        <a href="" style="border: none;"> <span class="iconify ms-2" data-icon="bi:trash-fill" style="color: black;" data-width="25"></span></a>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-start mb-2">
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <h3 class="margin-bottom:0">1</h3>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <img src="{{ URL::asset('images/guru1.jpg') }}" style="width: 60px !important;border-radius:50%">
                            </div>
                            <div class="col-2 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">Student1</h5>
                            </div>
                            <div class="col-3 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">Student1@gmail.com</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">M</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">22/05/2000</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <h5 style="font-weight: 500">Active</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center">
                                <div class="col d-flex justify-content-center align-items-center">
                                  
                                        <button id="myBtn_Edit" style="border: none; background-color:#EAEAEA;"> <span class="iconify me-1" data-icon="fa-solid:edit" data-width="27"></span></button>
                                        |
                                        <a href="" style="border: none;"> <span class="iconify ms-2" data-icon="bi:trash-fill" style="color: black;" data-width="25"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    </section>

    <section>
        {{-- form edit student --}}
        <div id="myModal_Edit" class="modal">
            <div class="modal-content">
                <div class="box-modal p-4">
                    <div class="row d-flex justify-content-between">
                        <div class="col-4 d-flex align-items-center">
                            <span class="title-modal px-5">Edit Student</span>
                        </div>
                        <div class="col-2 d-flex justify-content-end">
                            <span class="close_edit me-3">&times;</span>
                        </div>
                    </div>                   
                </div>
                <div class="box-form-edit p-4">
                    <form  action=""  enctype="multipart/form-data">
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label" style="font-size: 23px">Full Name </label>
                                    <input type="text" name="fullname" id="fromFullname_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col ">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Email </label>
                                    <input type="email" name="email" id="fromEmail_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Image </label>
                                    <input type="file" name="image" id="fromImage_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">About </label>
                                    <input type="text" name="about" id="fromAbout_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Date of Birth</label>
                                
                                    <input type="date" name="date_birth" id="formbirthday_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2 me-4">
                                    <label for="form-label text-white" style="font-size: 23px">Phone </label>
                                    <input type="tel" id="formphone_edit" name="phone"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">                                      
                                    <label for="form-label text-white" style="font-size: 23px">Password</label>
                                    <input type="password" name="password" id="password3"
                                        class="form-control form-control-lg p-3 form-password" />
                                    <span class="bi bi-eye-slash " id="togglePassword3"></span>
                                    
                                    
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Confirm Password</label>
                                    <input type="password" name="confirm_password" id="password4"
                                        class="form-control form-control-lg p-3 form-password" />
                                        <span class="bi bi-eye-slash " id="togglePassword4"></span>
                                </div>
                            </div>
                        </div>
                        <!-- Buttons Sign in -->
                        <div class="d-flex justify-content-center pt-1 mb-1">
                            <button class="btn btn-button btn-shadow text-dark px-4"
                                type="submit">save</button>
                        </div>
                    

                    </form>
                </div>
            </div>
        </div>
    </section>
    <script>

        // Get the modal
        var modal_edit = document.getElementById("myModal_Edit");
        
        // Get the button that opens the modal
        var btn_edit = document.getElementById("myBtn_Edit");
        
        // Get the <span> element that closes the modal
        var span_edit = document.getElementsByClassName("close_edit")[0];
        
        // When the user clicks the button, open the modal 
        btn_edit.onclick = function() {
          modal_edit.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span_edit.onclick = function() {
          modal_edit.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal_edit.style.display = "none";
          }
        }
    </script>

    <script>

        const togglePassword3 = document.querySelector("#togglePassword3");
        const password3 = document.querySelector("#password3");

        togglePassword3.addEventListener("click", function () {
            // toggle the type attribute
            const type = password3.getAttribute("type") === "password" ? "text" : "password";
            password3.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });


        const togglePassword4 = document.querySelector("#togglePassword4");
        const password4 = document.querySelector("#password4");

        togglePassword4.addEventListener("click", function () {
            // toggle the type attribute
            const type = password4.getAttribute("type") === "password" ? "text" : "password";
            password4.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });


        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });

    </script>
    
@endsection
