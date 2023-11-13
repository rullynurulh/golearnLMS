@extends('layouts.admin.main-admin')
@section('container')
    <section class="margin-top ">
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <h4 class="mb-2">Welcome To Golearn! App | <span>Super Admin</span></h4>
                    <div class="row mb-4">
                        <div class="col-3">
                            <div class="box-recommend p-3">
                                <div class="row p-3">
                                    <div class="col-5 d-flex justify-content-center">
                                        <span class="dashboard-title">{{ $student }}</span>
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
                                        <span class="dashboard-title">{{ $teacher }}</span>
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
                                        <span class="dashboard-title">{{ $course }}</span>
                                    </div>
                                    <div class="col-7 ">
                                        <div class="row d-flex justify-content-start align-items-center">
                                            <span style="font-size:25px;">Course</span>
                                            <span style="font-size:20px;">0<span style="font-size:20px; color:#D44040;">
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
                                        <span class="dashboard-title">0</span>
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
                        @foreach ($enrolls as $enroll)
                            <div class="row d-flex justify-content-start ">
                                <div class="col-2 d-flex justify-content-start">
                                    <ul>
                                        <li>
                                            <h5 style="font-weight: 400" class="ms-3">{{ $enroll['student_name'] }}</h5>
                                </div>
                                </li>
                                </ul>

                                <div class="col-4 d-flex justify-content-center">
                                    <h5 style="font-weight: 400; text-decoration: underline;">
                                        {{ $enroll['student_email'] }}</h5>
                                </div>
                                <div class="col-2 d-flex justify-content-center">
                                    <h5 style="font-weight: 400">{{ $enroll['courses_name'] }}</h5>
                                </div>
                                <div class="col-2 d-flex justify-content-center">
                                    <h5 style="font-weight: 400">{{ $teachersById[$enroll['teachers_id']] }}</h5>
                                </div>
                                <div class="col-2 d-flex justify-content-center">
                                    <h5 style="font-weight: 400">
                                        @if (floor($enroll['enrolled_at'] / 3600) > 0)
                                            {{ floor($enroll['enrolled_at'] / 3600) }} Hour Ago
                                        @endif
                                        {{ floor(($enroll['enrolled_at'] % 3600) / 60) }} Minute Ago
                                    </h5>
                                </div>
                            </div>
                        @endforeach

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
                        @foreach ($courses as $c)
                            <div class="row d-flex justify-content-start ">
                                <div class="col-4 d-flex justify-content-start">
                                    <ul>
                                        <li>
                                            <h5 style="font-weight: 400" class="ms-3">{{ $c['name'] }}</h5>
                                </div>
                                </li>
                                </ul>

                                <div class="col-4 d-flex justify-content-center">
                                    <h5 style="font-weight: 400;">{{ $c['instructor_name'] }}</h5>
                                </div>
                                <div class="col-4 d-flex justify-content-center">
                                    <h5 style="font-weight: 400">{{ $c['student_enrolled'] }}/30</h5>
                                </div>

                            </div>
                        @endforeach


                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection
