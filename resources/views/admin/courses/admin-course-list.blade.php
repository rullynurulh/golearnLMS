@extends('layouts.admin.main-admin')
@section('container')
    <section class="margin-top ">
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">Course | All Course</h3>
                    </div>
                    <div class="row p-2 d-flex justify-content-between mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <h4 style="margin-bottom:0">All Course</h4>
                        </div>
                        <div class="col-4 d-flex justify-content-end">

                            <a href="/admin/add-course" class="btn btn-add p-2"> <span class="iconify me-1"
                                    data-icon="el:plus-sign" data-width="24"></span> Add New Course</a>
                        </div>
                    </div>
                    <div class="box-recommend mt-2 p-4">
                        <div class="row d-flex justify-content-start ">
                            <div class="col-1 d-flex justify-content-start ps-5">
                                <h5 style="font-weight: 700">No</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Categories</h5>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Course Title</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Course Code</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Instructor</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Lesson</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Enrolled</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Action</h5>
                            </div>
                        </div>
                        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                        @php
                            $nomor = 1;
                        @endphp
                        @foreach ($courses as $course)
                            <div class="row d-flex justify-content-start mb-3">
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <h3 style="margin-bottom:0">{{ $nomor++ }}</h3>
                                </div>
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500; margin-bottom:0">{{ $course['categories_name'] }}</h5>
                                </div>
                                <div class="col-3 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500; margin-bottom:0">{{ $course['name'] }}</h5>
                                </div>
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500; margin-bottom:0">{{ $course['class_code'] }}</h5>
                                </div>
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500; margin-bottom:0">{{ $course['instructor_name'] }}</h5>
                                </div>
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500; margin-bottom:0">{{ $course['lesson'] }}</h5>
                                </div>
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500; margin-bottom:0">10/50</h5>
                                </div>
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <div class="col d-flex justify-content-center align-items-center">

                                        <a href="{{ route('admin_edit_course', $course['id']) }}"
                                            style="border: none; background-color:#EAEAEA;">
                                            <span class="iconify me-1" data-icon="fa-solid:edit"
                                                data-width="27"></span></a>
                                        |
                                        <a href="{{ route('admin_delete_course', $course['id']) }}" style="border: none;">
                                            <span class="iconify ms-2" data-icon="bi:trash-fill" style="color: black;"
                                                data-width="25"></span></a>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection
