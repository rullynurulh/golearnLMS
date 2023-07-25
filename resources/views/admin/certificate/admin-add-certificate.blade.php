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
                                <button type="button"  class="collapsible btn mb-2 btn-admin">
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
                                <button type="button" class="collapsible btn mb-2 btn-admin" >
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
                        <h3 style="margin-bottom: 0">Certificate | New Certificate  </h3>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <h3 class="my-4 ms-2"style="margin-bottom: 0" id="titleText">New Certificate</h3>
                            <div class="box-recommend mt-2 p-4">
                                <form action="" class="form_certificate" enctype="multipart/form-data" >
                                
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="background_image" class="form-label " style="font-size: 23px">Background Image </label>
                                            <input type="file" name="background_image" id="background_image" class="form-control px-3 py-2"/>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="certif_title" class="form-label " style="font-size: 23px">Certificate Title
                                            </label>
                                            <input type="text" data-x="50" data-y="15" data-fontsize="3" data-font="Roboto" name="certif_title" id="certif_title" class="form-control px-3 py-2 certinputs"
                                                placeholder="Enter Title" value="Certificate Title"/>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="body" class="form-label " style="font-size: 23px">Body
                                            </label>
                                            <input type="text" data-x="50" data-y="60" data-fontsize="2" data-font="Roboto" name="body" id="body" class="form-control px-3 py-2 certinputs"
                                                value="Lorem ipsum dolor sit amet consectetur. Tristique in in velit malesuada. Diam morbi ullamcorper dictum faucibus urna ut vestibulum pharetra arcu."/>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="course_name" class="form-label " style="font-size: 23px">Course Name
                                            </label>
                                            <select type="select" data-x="30" data-y="50" data-font="Roboto"
                                            data-fontsize="3" name="course_name" id="course_name" class="form-select px-3 py-2">
                                                <option selected value="0">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="teacher_name" class="form-label " style="font-size: 23px">Teacher Name
                                            </label>
                                            <select type="select" data-x="50" data-y="88" data-font="Roboto"
                                            data-fontsize="2" name="teacher_name" id="teacher_name" class="form-select px-3 py-2 certicheck"
                                                >
                                                <option selected value="mamang">Mamang</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="signature" class="form-label " style="font-size: 23px">Signature</label>
                                            <input type="file" name="signature" id="signature" class="form-control px-3 py-2"/>
                                        </div>
                                    </div>
                                    <!-- Buttons Sign in -->
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <div id="btn-batal">
                                        </div>
                                        <button class="btn btn-button btn-shadow text-dark px-5 rounded-pill " id="save_and_download"
                                            type="submit">save</button>

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
    <script src="{{ URL::asset('addcertificate.js') }}"></script>
@endsection