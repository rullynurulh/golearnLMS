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
                                                        class="form-control px-3 py-2" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="position_logo_y" class="form-label"
                                                        style="font-size: 23px">Position Y
                                                    </label>
                                                    <input type="number" name="position_logo_y" id="position_logo_y"
                                                        class="form-control px-3 py-2" />
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
                                                        id="position_student_x" class="form-control px-3 py-2" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="position_student_y" class="form-label"
                                                        style="font-size: 23px">Position Y
                                                    </label>
                                                    <input type="number" name="position_student_y"
                                                        id="position_student_y" class="form-control px-3 py-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="font_size" class="form-label" style="font-size: 23px">Font Size
                                            </label>
                                            <input type="number" name="font_size" id="font_size"
                                                class="form-control px-3 py-2" placeholder="30" />
                                        </div>
                                    </div>
                                    <hr class="my-3" style="opacity: 1; border: 1px solid white; margin:0">
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="text_1" class="form-label" style="font-size: 23px">Text 1
                                            </label>
                                            <input type="text" data-x="50" data-y="40" name="text_1"
                                                id="text_1" data-font="Roboto" data-fontsize="3"
                                                class="text_1 form-control px-3 py-2 certinputs"
                                                value="For The Successful Completion Of" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="text_2" class="form-label" style="font-size: 23px">Text 2
                                            </label>
                                            <input type="text" data-x="50" data-y="60" name="text_2"
                                                id="text_2" data-font="Roboto" data-fontsize="2"
                                                class="text_2 form-control px-3 py-2 certinputs"
                                                value="Lorem ipsum dolor sit amet consectetur. Tristique in in velit malesuada. Diam morbi ullamcorper dictum faucibus urna ut vestibulum pharetra arcu." />
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
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio"
                                                    name="show_course_name" id="show_course_name_yes" checked
                                                    value="yes_course_name">
                                                <label class="form-radio-label" for="show_course_name_yes">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio"
                                                    name="show_course_name" id="show_course_name_no"
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
                                                class="text_3 form-select px-3 py-2 certinputs">
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
                                                class="form-control px-3 py-2" />
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
                                                        class="form-control px-3 py-2" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="signature_width" class="form-label"
                                                        style="font-size: 23px">Signature Width
                                                    </label>
                                                    <input type="number" name="signature_width" id="signature_width"
                                                        class="form-control px-3 py-2" />
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
    <script src="{{ URL::asset('certificate.js') }}"></script>
@endsection
