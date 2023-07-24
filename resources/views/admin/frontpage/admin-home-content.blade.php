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
                        <h3 style="margin-bottom: 0">Front Page | Home Page</h3>
                    </div>

                    <div class="d-flex justify-content-end">
                        <h3>Preview</h3>
                    </div>
                    <div class="box-recommend p-4 mb-4 text-blue">
                        <h4>Home Page Banner</h4>
                        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                        <form action="{{ route('admin_save_home_content') }}" method="POST" class="form_frontpage"
                            enctype="multipart/form-data">
                            @csrf

                            <div class="col ps-3">
                                <div class="row mb-3">
                                    <label class="mb-2" style="font-size: 23px">Background Image Default</label>
                                    <div class="col-3">
                                        @if ($homecontent)
                                            <img src="/{{ $homecontent['image'] }}"alt="" width="320px">
                                        @else
                                            <img src="{{ URL::asset('images/bg-slider.jpg') }}"alt=""
                                                width="320px">
                                        @endif
                                    </div>
                                    <div class="col d-flex align-items-center">
                                        <input type="file" name="image" id="Formimage"
                                            class="form-control form-control-lg " />
                                        @if ($errors->has('image'))
                                            <p class="text-danger">{{ $errors->first('image') }}</p>
                                        @endif

                                    </div>
                                </div>

                            </div>

                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Home Page Banner Title</label>
                                    <input type="text" name="banner_title" id="formbanner_title"
                                        class="form-control form-control-lg "
                                        value="{{ $homecontent ? $homecontent['banner_title'] : '' }}" required />

                                </div>

                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Home Page Banner Text</label>
                                    <input type="text" name="banner_text" id="formbanner_text"
                                        class="form-control form-control-lg "
                                        value="{{ $homecontent ? $homecontent['banner_text'] : '' }}" required />

                                </div>
                            </div>
                            <hr class="mb-2" style="opacity: 1; border: 2px solid white; margin:0">
                            <h4>Category Section Show</h4>
                            <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Category List Title</label>
                                    <input type="text" name="category_list_title" id="formcategory_title"
                                        class="form-control form-control-lg "
                                        value="{{ $homecontent ? $homecontent['category_list_title'] : '' }}" required />

                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Category Max Section Show</label>
                                    <input type="number" name="category_max_section_show" id="formcategory_max_show"
                                        class="form-control form-control-lg "
                                        value="{{ $homecontent ? $homecontent['category_max_section_show'] : '' }}"
                                        required />

                                </div>
                            </div>
                            <hr class="mb-2" style="opacity: 1; border: 2px solid white; margin:0">
                            <h4>About Us Section</h4>
                            <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                            <div class="col ps-3">
                                <div class="row form-group mb-2">
                                    <label class="form-label" style="font-size: 23px">About Us Section Show in Home
                                        Page</label>
                                    <div class="col-1 form-radio d-flex align-items-center">
                                        <input class="form-radio-input me-2" type="radio"
                                            name="about_us_section_in_home_page" id="flexRadioDefault1" value="yes"
                                            required>
                                        <label class="form-radio-label" class="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="col-1 form-radio d-flex align-items-center">
                                        <input class="form-radio-input me-2" type="radio"
                                            name="about_us_section_in_home_page" id="flexRadioDefault2" value="no"
                                            required>
                                        <label class="form-radio-label" class="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">About Us Section Title</label>
                                    <input type="text" name="about_us_section_title" id="about_title"
                                        class="form-control form-control-lg "
                                        value="{{ $homecontent ? $homecontent['about_us_section_title'] : '' }}"
                                        required />

                                </div>
                            </div>
                            <hr class="mb-2" style="opacity: 1; border: 2px solid white; margin:0">
                            <h4>Course Section</h4>
                            <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">

                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Course Section Title</label>
                                    <input type="text" name="course_section_title" id="Course_title"
                                        class="form-control form-control-lg "
                                        value="{{ $homecontent ? $homecontent['course_section_title'] : '' }}" required />

                                </div>
                            </div>
                            <hr class="mb-2" style="opacity: 1; border: 2px solid white; margin:0">
                            <h4>Teacher Section</h4>
                            <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">

                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Teacher Section Title</label>
                                    <input type="text" name="teacher_section_title" id="teacher_title"
                                        class="form-control form-control-lg "
                                        value="{{ $homecontent ? $homecontent['teacher_section_title'] : '' }}"
                                        required />

                                </div>
                            </div>

                            <div class="d-flex justify-content-end pt-1  mt-5 mb-1">
                                <button class="btn btn-button btn-shadow text-dark px-4" type="submit">Save
                                    Setting</button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>

        </div>
    </section>
@endsection
