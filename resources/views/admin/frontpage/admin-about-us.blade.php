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
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active" >
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
                        <form action="" class="form_frontpage" enctype="multipart/form-data">

                            <div class="col ps-3">
                                <div class="row mb-3">
                                    <label class="mb-2" style="font-size: 23px">Team Image</label>
                                    <div class="col-3">
                                        <img src="{{ URL::asset('images/about-us.jpg') }}"alt="" width="320px">
                                    </div>
                                    <div class="col d-flex align-items-center">
                                        <input type="file" name="image" id="Formimage" class="form-control form-control-lg "/>
                                    </div>
                                </div>
                    
                            </div>

                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">About Us Banner Title</label>
                                    <input type="text" name="about_title" id="about_title"
                                        class="form-control form-control-lg " placeholder="Welcome to Go Learn!"/>

                                </div>
                                
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">About Us Description</label>
                                    <textarea class="form-control abt" name="about_description" id="" cols="30" rows="10">Lorem ipsum dolor sit amet consectetur. Lectus sed urna amet nec scelerisque donec ornare. Diam et orci phasellus tempus. Integer id aliquet viverra est lorem pellentesque. A at sed ultricies interdum adipiscing. Hac suscipit gravida libero venenatis dictum. Mauris iaculis sem id mi tincidunt nulla elit. Sed facilisis mi vitae justo pretium. Lobortis massa tellus erat vitae habitant elementum porta aliquam in. Sed quisque curabitur laoreet enim fermentum. Risus proin varius duis fermentum. Facilisi mattis ultrices sagittis ultrices vel ultrices cras sollicitudin. Arcu enim massa risus elementum orci. Massa sociis porta aenean habitasse eget nunc vulputate diam. Tortor quam euismod sollicitudin quisque. Amet condimentum sit libero urna. Sit fusce netus dui eget ultrices massa duis diam. Sapien turpis id laoreet sit etiam adipiscing massa et. Consectetur quis bibendum eu viverra sit. Sit egestas mi vulputate erat. Non ac vitae purus senectus elementum. Risus mi nunc at iaculis mattis sed sit tincidunt nulla.</textarea>

                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Why Choose Me Text</label>
                                    <textarea class="form-control abt" name="about_why_choose" id="" cols="30" rows="4">Lorem ipsum dolor sit amet consectetur. Lectus sed urna amet nec scelerisque donec ornare. Diam et orci phasellus tempus. Integer id aliquet viverra est lorem pellentesque. A at sed ultricies interdum adipiscing. Hac suscipit gravida libero venenatis dictum. Mauris iaculis sem id mi tincidunt nulla elit. Sed facilisis mi vitae justo pretium. Lobortis massa tellus erat vitae habitant elementum porta aliquam in. Sed quisque curabitur laoreet enim fermentum. Risus proin varius duis fermentum. Facilisi mattis ultrices sagittis ultrices vel ultrices cras sollicitudin.</textarea>

                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Our Mission Text</label>
                                    <textarea class="form-control abt" name="about_mission" id="" cols="30" rows="4">Lorem ipsum dolor sit amet consectetur. Lectus sed urna amet nec scelerisque donec ornare. Diam et orci phasellus tempus. Integer id aliquet viverra est lorem pellentesque. A at sed ultricies interdum adipiscing. Hac suscipit gravida libero venenatis dictum. Mauris iaculis sem id mi tincidunt nulla elit. Sed facilisis mi vitae justo pretium. Lobortis massa tellus erat vitae habitant elementum porta aliquam in. Sed quisque curabitur laoreet enim fermentum. Risus proin varius duis fermentum. Facilisi mattis ultrices sagittis ultrices vel ultrices cras sollicitudin.</textarea>

                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Our Vision Text</label>
                                    <textarea class="form-control abt" name="about_vision" id="" cols="30" rows="4">Lorem ipsum dolor sit amet consectetur. Lectus sed urna amet nec scelerisque donec ornare. Diam et orci phasellus tempus. Integer id aliquet viverra est lorem pellentesque. A at sed ultricies interdum adipiscing. Hac suscipit gravida libero venenatis dictum. Mauris iaculis sem id mi tincidunt nulla elit. Sed facilisis mi vitae justo pretium. Lobortis massa tellus erat vitae habitant elementum porta aliquam in. Sed quisque curabitur laoreet enim fermentum. Risus proin varius duis fermentum. Facilisi mattis ultrices sagittis ultrices vel ultrices cras sollicitudin.</textarea>

                                </div>
                            </div>
                            <div class="d-flex justify-content-end pt-1  mt-5 mb-1">
                                <button class="btn btn-button btn-shadow text-dark px-4" type="submit">Save Setting</button>
                            </div>
                        </form>
                    </div>

                    
                </div>

            </div>

        </div>
    </section>

@endsection
