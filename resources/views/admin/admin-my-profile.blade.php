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
                    <div class="box-recommend p-4 mb-5">
                        <h3 style="margin-bottom: 0">My Profile</h3>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="box-recommend p-4 mb-4 text-blue">
                                <h4>Profile Setting</h4>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">


                                <div class="col ps-3">
                                    <div class="row mb-3">
                                        <label class="mb-2" style="font-size: 23px">Photo Profile</label>
                                        <div class="col-3">
                                            @if ($errors->has('image'))
                                                <span class="text-danger">{{ $errors->first('image') }}</span>
                                            @endif
                                            @if (is_null($user['image']))
                                                <img src="{{ URL::asset('images/guru1.jpg') }}" alt=""
                                                    height="120px">
                                            @else
                                                <img src="{{ URL::asset($user['image']) }}" alt="" height="120px">
                                            @endif

                                        </div>
                                        <div class="col m-auto">
                                            <form class="form_frontpage"
                                                action="{{ route('admin_change_profile_picture') }}" method="post"
                                                enctype="multipart/form-data">
                                                @csrf
                                                <div id="changeimage" class="d-flex align-items-center justify-content-end">
                                                    <button onclick="changeImage()" class="btn btn-change">Change Photo
                                                        Profile
                                                    </button>

                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                                <form action="{{ route('admin_update_profile') }}" class="form_frontpage" method="post">
                                    @csrf
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Name</label>
                                            <input type="text" name="name" id="name"
                                                class="form-control form-control-lg " value="{{ $user['name'] }}"
                                                required />

                                        </div>

                                    </div>
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Role</label>
                                            <input type="text" name="role" id="role"
                                                class="form-control form-control-lg " value="{{ $user['role'] }}"
                                                disabled />

                                        </div>
                                    </div>
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Email</label>
                                            <input type="email" name="email" id="email"
                                                class="form-control form-control-lg " value="{{ $user['email'] }}"
                                                required />

                                        </div>
                                    </div>
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Phone</label>
                                            <input type="tel" name="phone" id="phone"
                                                class="form-control form-control-lg " value="{{ $user['phone'] }}"
                                                required />

                                        </div>
                                    </div>
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">About</label>
                                            <textarea class="form-control abt" name="about" id="" cols="30" rows="4" required>{{ $user['about'] }}</textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end pt-1  mt-5 mb-1">
                                        <button class="btn btn-button btn-shadow text-dark px-4"
                                            type="submit">Save</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="col-4">
                            <div class="box-recommend p-4 mb-4 text-blue">
                                <h4>Change Password</h4>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                <form action="{{ route('admin_change_password') }}" method="POST"
                                    class="form_frontpage">
                                    @csrf
                                    @if (session('status'))
                                        <div class="alert alert-success" role="alert">
                                            {{ session('status') }}
                                        </div>
                                    @elseif (session('error'))
                                        <div class="alert alert-danger" role="alert">
                                            {{ session('error') }}
                                        </div>
                                    @endif
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Current Password</label>
                                            <input type="password" name="old_password" id="c_password"
                                                class="form-control form-control-lg " value="" />
                                            <div class="d-flex justify-content-end align-items-center me-2 mt-1">
                                                <span class="bi bi-eye-slash " id="togglePassword1"></span>
                                            </div>
                                        </div>
                                        @if ($errors->has('old_password'))
                                            <p class="text-danger">{{ $errors->first('old_password') }}</p>
                                        @endif
                                    </div>
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">New Password</label>
                                            <input type="password" name="new_password" id="n_password"
                                                class="form-control form-control-lg " value="" />
                                            <div class="d-flex justify-content-end align-items-center me-2 mt-1">
                                                <span class="bi bi-eye-slash " id="togglePassword2"></span>

                                            </div>
                                        </div>
                                        @if ($errors->has('new_password'))
                                            <p class="text-danger">{{ $errors->first('new_password') }}</p>
                                        @endif

                                    </div>
                                    <div class="col ps-3">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Confirm Password</label>
                                            <input type="password" name="new_password_confirmation" id="confirm_password"
                                                class="form-control form-control-lg " value="" />
                                            <div class="d-flex justify-content-end align-items-center me-2 mt-1">
                                                <span class="bi bi-eye-slash " id="togglePassword3"></span>

                                            </div>
                                        </div>
                                        @if ($errors->has('new_password_confirmation'))
                                            <p class="text-danger">{{ $errors->first('new_password_confirmation') }}</p>
                                        @endif

                                    </div>
                                    <div class="d-flex justify-content-end pt-1  mt-5 mb-1">
                                        <button class="btn btn-button btn-shadow text-dark px-4"
                                            type="submit">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    </section>
    <script>
        const togglePassword1 = document.querySelector("#togglePassword1");
        const password1 = document.querySelector("#c_password");

        togglePassword1.addEventListener("click", function() {
            // toggle the type attribute
            const type = password1.getAttribute("type") === "password" ? "text" : "password";
            password1.setAttribute("type", type);

            // toggle the icon
            this.classList.toggle("bi-eye");
        });


        const togglePassword2 = document.querySelector("#togglePassword2");
        const password2 = document.querySelector("#n_password");

        togglePassword2.addEventListener("click", function() {
            // toggle the type attribute
            const type = password2.getAttribute("type") === "password" ? "text" : "password";
            password2.setAttribute("type", type);

            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        const togglePassword3 = document.querySelector("#togglePassword3");
        const password3 = document.querySelector("#confirm_password");

        togglePassword3.addEventListener("click", function() {
            // toggle the type attribute
            const type = password3.getAttribute("type") === "password" ? "text" : "password";
            password3.setAttribute("type", type);

            // toggle the icon
            this.classList.toggle("bi-eye");
        });
    </script>
    <script>
        function changeImage() {
            document.getElementById("changeimage").innerHTML =
                '<input type="file" name="image" id="Formimage" class="form-control form-control-lg me-2" /> ' +
                '<button type="submit" class="btn btn-change">Save</button>'
        }
    </script>
@endsection
