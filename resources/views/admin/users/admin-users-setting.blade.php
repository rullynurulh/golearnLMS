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
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/user-teacher">
                                                Teacher
                                            </a>
                                        </li>
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/user-student">
                                                Student
                                            </a>
                                        </li>

                                        <li class="d-flex align-items-center chapter-info ">
                                            <a class="chapter-info" href="/admin/users-setting">
                                                User Setting
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Courses
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/courses-categories">
                                                Categories
                                            </a>
                                        </li>
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/courses-list">
                                                Course List
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Quiz
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/add-quiz">
                                                Add Quiz
                                            </a>
                                        </li>
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info">
                                                Quiz Setting
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Certificates
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/certificate-list">
                                                Certificate List
                                            </a>
                                        </li>
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/certificate-add">
                                                Add Certificate
                                            </a>
                                        </li>

                                        <li class="d-flex align-items-center chapter-info ">
                                            <a class="chapter-info" href="/admin/certificate-setting">
                                                Certificate Setting
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Front Page
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/frontpage-home">
                                                Home Content
                                            </a>
                                        </li>
                                        <li class="d-flex align-items-center chapter-info mb-2 ">
                                            <a class="chapter-info" href="/admin/frontpage-social">
                                                Social Setting
                                            </a>
                                        </li>

                                        <li class="d-flex align-items-center chapter-info ">
                                            <a class="chapter-info" href="/admin/frontpage-footer">
                                                Footer Setting
                                            </a>
                                        </li>

                                        <li class="d-flex align-items-center chapter-info ">
                                            <a class="chapter-info" href="/admin/frontpage-account">
                                                Account Setting
                                            </a>
                                        </li>

                                        <li class="d-flex align-items-center chapter-info ">
                                            <a class="chapter-info" href="/admin/frontpage-about-us">
                                                About Us
                                            </a>
                                        </li>
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
                    <div class="row mb-4">
                        <div class="col-3">
                            <div class="box-recommend p-3">
                                <div class="row p-3">
                                    <div class="col-5 d-flex justify-content-center">
                                        <span class="dashboard-title">100</span>
                                    </div>
                                    <div class="col-7 d-flex justify-content-start align-items-center">
                                        <span class="dashboard-name">Student</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-3">
                            <div class="box-recommend p-3">
                                <div class="row p-3">
                                    <div class="col-5 d-flex justify-content-center">
                                        <span class="dashboard-title">10</span>
                                    </div>
                                    <div class="col-7 d-flex justify-content-start align-items-center">
                                        <span class="dashboard-name">Teacher</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-3">
                            <div class="box-recommend p-3">
                                <div class="row p-3">
                                    <div class="col-5 d-flex justify-content-center">
                                        <span class="dashboard-title">10</span>
                                    </div>
                                    <div class="col-7 ">
                                        <div class="row d-flex justify-content-start align-items-center">
                                            <span style="font-size:25px;">Course</span>
                                            <span style="font-size:20px;">5<span style="font-size:20px; color:#D44040;">
                                                    Inactive</span></span>
                                        </div>



                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-3">
                            <div class="box-recommend p-3">
                                <div class="row p-3">
                                    <div class="col-5 d-flex justify-content-center">
                                        <span class="dashboard-title">1</span>
                                    </div>
                                    <div class="col-7 d-flex justify-content-start align-items-center">
                                        <span class="dashboard-name">Staff</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="box-recommend mt-5 p-4">
                        <h5 style="font-weight: 700" class="mb-4">Recent Enrolls</h5>
                        <div class="row d-flex justify-content-start ">
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Student</h5>
                            </div>
                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Email Address</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Course Title</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Instructor</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Recent Enroll</h5>
                            </div>
                        </div>
                        <hr class="mb-2" style="opacity: 1; border: 2px solid white; margin:0">
                        <div class="row d-flex justify-content-start ">
                            <div class="col-2 d-flex justify-content-start">
                                <ul>
                                    <li>
                                        <h5 style="font-weight: 400" class="ms-3">Student 1</h5>
                            </div>
                            </li>
                            </ul>

                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 400; text-decoration: underline;">student1@gmail.com</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 400">Course 1</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 400">Instructor 1</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 400">11 Minute Ago</h5>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-start ">
                            <div class="col-2 d-flex justify-content-start">
                                <ul>
                                    <li>
                                        <h5 style="font-weight: 400" class="ms-3">Student 1</h5>
                            </div>
                            </li>
                            </ul>

                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 400; text-decoration: underline;">student1@gmail.com</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 400">Course 1</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 400">Instructor 1</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 400">11 Minute Ago</h5>
                            </div>
                        </div>
                    </div>
                    <div class="box-recommend mt-5 p-4">
                        <h5 style="font-weight: 700" class="mb-4">Total Student by each Courses</h5>
                        <div class="row d-flex justify-content-start ">
                            <div class="col-4 ps-5 d-flex justify-content-start">
                                <h5 style="font-weight: 700">Course Title</h5>
                            </div>
                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Instructor</h5>
                            </div>
                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Enroll</h5>
                            </div>
                        </div>
                        <hr class="mb-2" style="opacity: 1; border: 2px solid white; margin:0">
                        <div class="row d-flex justify-content-start ">
                            <div class="col-4 d-flex justify-content-start">
                                <ul>
                                    <li>
                                        <h5 style="font-weight: 400" class="ms-3">Course 1</h5>
                            </div>
                            </li>
                            </ul>

                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 400;">Instuctor 1</h5>
                            </div>
                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 400">30/30</h5>
                            </div>

                        </div>
                        <div class="row d-flex justify-content-start ">
                            <div class="col-4 d-flex justify-content-start">
                                <ul>
                                    <li>
                                        <h5 style="font-weight: 400" class="ms-3">Course 2</h5>
                            </div>
                            </li>
                            </ul>

                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 400;">Instuctor 2</h5>
                            </div>
                            <div class="col-4 d-flex justify-content-center">
                                <h5 style="font-weight: 400">20/30</h5>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection
