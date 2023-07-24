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
                        <h3 style="margin-bottom: 0">Certificate | Certificate Setting </h3>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <h3 class="my-4 ms-2"style="margin-bottom: 0" id="titleText">Certificate Setting</h3>
                            <div class="box-recommend mt-2 p-4" style="overflow: scroll; max-height: 720px">
                                <form action="" class="form_certificate" enctype="multipart/form-data" >
                                
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Background Image Default</label>
                                            <input type="file" name="icons" id="icons" class="form-control px-3 py-2"/>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="form-label" style="font-size: 23px">Show Logo</label>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_logo"
                                                    id="flexRadioDefault1" value="yes_logo">
                                                <label class="form-radio-label" for="flexRadioDefault1">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_logo"
                                                    id="flexRadioDefault2" checked value="no_logo">
                                                <label class="form-radio-label" for="flexRadioDefault2">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="form-label text-white" style="font-size: 23px">Position X
                                                    </label>
                                                    <input type="number" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                        />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="form-label text-white" style="font-size: 23px">Position Y
                                                    </label>
                                                    <input type="number" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-3" style="opacity: 1; border: 1px solid white; margin:0">
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="form-label" style="font-size: 23px">Student Name</label>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="flexRadioDefault_student" value="yes_student">
                                                <label class="form-radio-label" for="flexRadioDefault_student">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="flexRadioDefault_student" checked value="no_student">
                                                <label class="form-radio-label" for="flexRadioDefault_student">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group">
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="form-label text-white" style="font-size: 23px">Position X
                                                    </label>
                                                    <input type="number" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                        />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="form-label text-white" style="font-size: 23px">Position Y
                                                    </label>
                                                    <input type="number" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Font Size
                                            </label>
                                            <input type="number" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                placeholder="30"/>
                                        </div>
                                    </div>
                                    <hr class="my-3" style="opacity: 1; border: 1px solid white; margin:0">
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Text 1
                                            </label>
                                            <input type="text" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                placeholder="30"/>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Text 2
                                            </label>
                                            <input type="text" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                placeholder="30"/>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Body Position
                                            </label>
                                            <select type="select" name="social_name" id="social_name" class="form-select px-3 py-2"
                                                placeholder="Facebook"/>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="form-label" style="font-size: 23px">Show Course Name</label>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="flexRadioDefault_student" value="yes_student">
                                                <label class="form-radio-label" for="flexRadioDefault_student">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="flexRadioDefault_student" checked value="no_student">
                                                <label class="form-radio-label" for="flexRadioDefault_student">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row form-group mb-2">
                                            <label for="form-label" style="font-size: 23px">Show Date</label>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="flexRadioDefault_student" value="yes_student">
                                                <label class="form-radio-label" for="flexRadioDefault_student">
                                                    YES
                                                </label>
                                            </div>
                                            <div class="col-3 form-radio d-flex align-items-center">
                                                <input class="form-radio-input me-2" type="radio" name="show_student"
                                                    id="flexRadioDefault_student" checked value="no_student">
                                                <label class="form-radio-label" for="flexRadioDefault_student">
                                                    NO
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Footer Title
                                            </label>
                                            <select type="select" name="social_name" id="social_name" class="form-select px-3 py-2"
                                                placeholder="Facebook"/>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Signature Image</label>
                                            <input type="file" name="signature" id="signature" class="form-control px-3 py-2"/>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="row form-group">
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="form-label text-white" style="font-size: 23px">Signature Height
                                                    </label>
                                                    <input type="number" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                        />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group mb-2">
                                                    <label for="form-label text-white" style="font-size: 23px">Signature Weight
                                                    </label>
                                                    <input type="number" name="social_name" id="social_name" class="form-control px-3 py-2"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Buttons Sign in -->
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <div id="btn-batal">
                                        </div>
                                        <button class="btn btn-button btn-shadow text-dark px-5 rounded-pill "
                                            type="submit">save</button>

                                    </div>


                                </form>
                            </div>
                        </div>
                        <div class="col-8">
                            <h3 class="my-4 ms-2"style="margin-bottom: 0">Preview</h3>
                            <div class="box-recommend mt-2 p-4">
                                
                                <hr class="my-3" style="opacity: 1; border: 2px solid white; margin:0">
                                <div class="preview" style="min-height: 500px">

                                </div>
                                <hr class="my-3" style="opacity: 1; border: 2px solid white; margin:0">
                            </div>

                        </div>
                    </div>

                    
                </div>

            </div>

        </div>
    </section>

@endsection
