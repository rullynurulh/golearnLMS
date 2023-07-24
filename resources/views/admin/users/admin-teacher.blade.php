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
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
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
                                        <a class="d-flex align-items-center chapter-info mb-2 ">
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
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">User | Teacher</h3>
                    </div>
                    <div class="row p-2 d-flex justify-content-between mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <h4 style="margin-bottom:0">Teacher List</h4>
                        </div>
                        <div class="col-3 d-flex justify-content-end">

                            <button id="myBtn" class="btn btn-add p-2"> <span class="iconify me-1"
                                    data-icon="el:plus-sign" data-width="24"></span> Add New</button>
                        </div>
                    </div>
                    <div>
                        @if ($errors->any())
                            {!! implode('', $errors->all('<div class="text-danger">:message</div>')) !!}
                        @endif
                    </div>

                    <div class="box-recommend mt-2 p-4">
                        <div class="row d-flex justify-content-start ">
                            <div class="col-1 d-flex justify-content-start ps-5">
                                <h5 style="font-weight: 700">No</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Profile</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Name</h5>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Email Address</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Gender</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Status</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Action</h5>
                            </div>
                        </div>
                        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                        @foreach ($teachers as $teacher)
                            <div class="row d-flex justify-content-start mb-2">
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <h3 class="margin-bottom:0">1</h3>
                                </div>
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    @if (is_null($teacher['image']))
                                        <img src="{{ URL::asset('images/guru1.jpg') }}"
                                            style="width: 60px !important; height: 60px !important;border-radius:50%">
                                    @else
                                        <img src="{{ URL::asset($teacher['image']) }}"
                                            style="width: 60px !important; height: 60px !important;border-radius:50%">
                                    @endif
                                </div>
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500">{{ $teacher['name'] }}</h5>
                                </div>
                                <div class="col-3 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500">{{ $teacher['email'] }}</h5>
                                </div>
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500">{{ $teacher['gender'] }}</h5>
                                </div>
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500">{{ $teacher['status'] }}</h5>
                                </div>

                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <button onClick="showModal({{ $teacher['id'] }})" id="myBtn_Edit"
                                            style="border: none; background-color:#EAEAEA;"> <span class="iconify me-1"
                                                data-icon="fa-solid:edit" data-width="27"></span></button>
                                        |
                                        <a href="{{ route('admin_delete_profile_user', $teacher['id']) }}"
                                            style="border: none;"> <span class="iconify ms-2" data-icon="bi:trash-fill"
                                                style="color: black;" data-width="25"></span></a>
                                    </div>
                                </div>
                            </div>
                        @endforeach


                    </div>

                </div>

            </div>

        </div>
    </section>

    <section>
        {{-- form add teacher --}}
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="box-modal p-4">
                    <div class="row d-flex justify-content-between">
                        <div class="col-4 d-flex align-items-center">
                            <span class="title-modal px-5">Add New Teacher</span>
                        </div>
                        <div class="col-2 d-flex justify-content-end">
                            <span class="close me-3">&times;</span>
                        </div>


                    </div>

                </div>
                <div class="box-form p-4">
                    <form action="{{ route('admin_add_profile_user') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label" style="font-size: 23px">Full Name </label>
                                    <input type="text" name="name" class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col ">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Email </label>
                                    <input type="email" name="email" class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Image </label>
                                    <input type="file" name="image" class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">About </label>
                                    <input type="text" name="about" class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Date of Birth</label>

                                    <input type="date" name="birthday" class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2 me-4">
                                    <label for="form-label text-white" style="font-size: 23px">Phone </label>
                                    <input type="number" class="form-control form-control-lg p-3" name="phone" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Password</label>
                                    <input type="password" name="password" id="password1"
                                        class="form-control form-control-lg p-3 form-password" />
                                    <span class="bi bi-eye-slash " id="togglePassword1"></span>


                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Confirm Password</label>
                                    <input type="password" name="password_confirmation" id="password2"
                                        class="form-control form-control-lg p-3 form-password" />
                                    <span class="bi bi-eye-slash " id="togglePassword2"></span>
                                </div>
                            </div>
                        </div>
                        <!-- Buttons Sign in -->
                        <div class="d-flex justify-content-center pt-1 mb-1">
                            <button class="btn btn-button btn-shadow text-dark px-4" type="submit">save</button>
                        </div>


                    </form>
                </div>

            </div>
        </div>
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
                    <form action="{{ route('admin_update_profile_user') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="row">
                            <input type="text" name="id" id="formId_edit" hidden>
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label" style="font-size: 23px">Full Name </label>
                                    <input type="text" name="name" id="formFullname_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>

                            </div>
                            <div class="col ">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Email </label>
                                    <input type="email" name="email" id="formEmail_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Image </label>
                                    <input type="file" name="image" id="formImage_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">About </label>
                                    <input type="text" name="about" id="formAbout_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col pe-4">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Date of Birth</label>
                                    <input type="date" name="birthday" id="formBirthday_edit"
                                        class="form-control form-control-lg p-3" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2 me-4">
                                    <label for="form-label text-white" style="font-size: 23px">Phone </label>
                                    <input type="tel" id="formPhone_edit" name="phone"
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
                                    <input type="password" name="password_confirmation" id="password4"
                                        class="form-control form-control-lg p-3 form-password" />
                                    <span class="bi bi-eye-slash " id="togglePassword4"></span>
                                </div>
                            </div>
                        </div>
                        <!-- Buttons Sign in -->
                        <div class="d-flex justify-content-center pt-1 mb-1">
                            <button class="btn btn-button btn-shadow text-dark px-4" type="submit">save</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </section>
    <script>
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>

    <script>
        // // Get the button that opens the modal
        // var btn_edit = document.getElementById("myBtn_Edit");
        let teacher = @json($teachersById);

        function showModal(id) {

            // Get the modal
            var modal_edit = document.getElementById("myModal_Edit");
            modal_edit.style.display = "block";

            // Get the <span> element that closes the modal
            var span_edit = document.getElementsByClassName("close_edit")[0];

            // When the user clicks on <span> (x), close the modal
            span_edit.onclick = function() {
                modal_edit.style.display = "none";
            }



            document.getElementById("formFullname_edit").value = teacher[id]['name']
            document.getElementById("formEmail_edit").value = teacher[id]['email']
            document.getElementById("formAbout_edit").value = teacher[id]['about']
            document.getElementById("formPhone_edit").value = teacher[id]['phone']
            document.getElementById("formBirthday_edit").value = teacher[id]['birthday']
            document.getElementById("formId_edit").value = id



        }


        // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal_edit.style.display = "none";
        //     }
        // }
    </script>

    <script>
        const togglePassword1 = document.querySelector("#togglePassword1");
        const password1 = document.querySelector("#password1");

        togglePassword1.addEventListener("click", function() {
            // toggle the type attribute
            const type = password1.getAttribute("type") === "password" ? "text" : "password";
            password1.setAttribute("type", type);

            // toggle the icon
            this.classList.toggle("bi-eye");
        });


        const togglePassword2 = document.querySelector("#togglePassword2");
        const password2 = document.querySelector("#password2");

        togglePassword2.addEventListener("click", function() {
            // toggle the type attribute
            const type = password2.getAttribute("type") === "password" ? "text" : "password";
            password2.setAttribute("type", type);

            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        const togglePassword3 = document.querySelector("#togglePassword3");
        const password3 = document.querySelector("#password3");

        togglePassword3.addEventListener("click", function() {
            // toggle the type attribute
            const type = password3.getAttribute("type") === "password" ? "text" : "password";
            password3.setAttribute("type", type);

            // toggle the icon
            this.classList.toggle("bi-eye");
        });


        const togglePassword4 = document.querySelector("#togglePassword4");
        const password4 = document.querySelector("#password4");

        togglePassword4.addEventListener("click", function() {
            // toggle the type attribute
            const type = password4.getAttribute("type") === "password" ? "text" : "password";
            password4.setAttribute("type", type);

            // toggle the icon
            this.classList.toggle("bi-eye");
        });


        // // prevent form submit
        // const form = document.querySelector("form");
        // form.addEventListener('submit', function(e) {
        //     e.preventDefault();
        // });
    </script>
@endsection
