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
                                <button type="button"  class="collapsible btn mb-2 btn-admin">
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
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
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
                        <h3 style="margin-bottom: 0">Add New Course</h3>
                    </div>

                    <div class="box-recommend mt-2 p-4">
                        <form  action=""  enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-4 pe-4">
                                    <div class="form-group mb-2">
                                        <label for="form-label" style="font-size: 23px">Instuctor </label>
                                        <select type="text" name="instructor" id="forminstructor"
                                            class="form-select form-select-lg p-3" >
                                            <option value="instuctor1">instuctor1</option>
                                            <option value="instuctor2">instuctor2</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-4 ">
                                    <div class="form-group mb-2">
                                        <label for="form-label" style="font-size: 23px">Categories </label>
                                        <select type="text" name="categories" id="formcategories"
                                            class="form-select form-select-lg p-3" >
                                            <option value="categories1">categories1</option>
                                            <option value="categories2">categories2</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-4 ">
                                    <div class="form-group mb-2">
                                        <label for="form-label text-white" style="font-size: 23px">Email </label>
                                        <input type="email" name="email" id="fromEmail_edit"
                                            class="form-control form-control-lg p-3" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 pe-4">
                                    <div class="form-group mb-2">
                                        <label for="form-label" style="font-size: 23px">Course Name</label>
                                        <input type="text" name="name-course" id="formname_course"
                                            class="form-control form-control-lg p-3" />
                         
                                    </div>
                                </div>
                                <div class="col-4 ">
                                    <div class="form-group mb-2">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Course Image </label>
                                            <input type="file" name="image" id="fromImage_course"
                                                class="form-control form-control-lg p-2" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 ">
                                    <div class="form-group mb-2">
                                        <label for="form-label" style="font-size: 23px">Class Code</label>
                                        <input type="text" name="class-code" id="formclass-code"
                                            class="form-control form-control-lg p-3" />
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Course Requirement</label>
                                    <textarea type="text" name="CourseRequirement" id="CourseRequirement"
                                        class="form-control form-control-lg p-3" >
                                    </textarea>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Course Description</label>
                                    <textarea type="text" name="CourseDescription" id="CourseDescription"
                                        class="form-control form-control-lg p-3" >
                                    </textarea>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-2">
                                    <label for="form-label text-white" style="font-size: 23px">Course Outcomet</label>
                                    <textarea type="text" name="CourseOutcome" id="CourseOutcome"
                                        class="form-control form-control-lg p-3" >
                                    </textarea>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center pt-1 mb-1">
                                <button class="btn btn-button btn-shadow text-dark px-4"
                                    type="submit">save</button>
                            </div>
                        
    
                        </form>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>

@endsection
