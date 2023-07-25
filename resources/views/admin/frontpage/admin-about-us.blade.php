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
                    <div class="box-recommend p-4 mb-5">
                        <h3 style="margin-bottom: 0">Front Page | About Us</h3>
                    </div>

                    <div class="box-recommend p-4 mb-4 text-blue">
                        <h4>About Page Banner</h4>
                        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                        <form action="{{ route('admin_save_about_us_content') }}" method="POST" class="form_frontpage"
                            enctype="multipart/form-data">
                            @csrf
                            <div class="col ps-3">
                                <div class="row mb-3">
                                    <label class="mb-2" style="font-size: 23px">Team Image</label>
                                    <div class="col-3">
                                        @if ($about_us)
                                            <img src="/{{ $about_us['image'] }}"alt="" width="320px">
                                        @else
                                            <img src="{{ URL::asset('images/about-us.jpg') }}"alt="" width="320px">
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
                                    <label class="form-label " style="font-size: 23px">About Us Banner Title</label>
                                    <input type="text" name="banner_title" id="about_title"
                                        class="form-control form-control-lg "
                                        value="{{ $about_us ? $about_us['banner_title'] : '' }}" required />

                                </div>

                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">About Us Description</label>
                                    <textarea class="form-control abt" name="description" id="" cols="30" rows="10" required>{{ $about_us ? $about_us['description'] : '' }}</textarea>

                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Why Choose Me Text</label>
                                    <textarea class="form-control abt" name="why_choose_me_text" id="" cols="30" rows="4" required>{{ $about_us ? $about_us['why_choose_me_text'] : '' }}</textarea>

                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Our Mission Text</label>
                                    <textarea class="form-control abt" name="our_mission_text" id="" cols="30" rows="4">{{ $about_us ? $about_us['our_mission_text'] : '' }}</textarea>

                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Our Vision Text</label>
                                    <textarea class="form-control abt" name="our_vision_text" id="" cols="30" rows="4">{{ $about_us ? $about_us['our_vision_text'] : '' }}</textarea>

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
