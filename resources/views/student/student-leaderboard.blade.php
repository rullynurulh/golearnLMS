@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top ">
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">
                    <a href="/student" class="btn mb-3 btn-student-active">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student">My Course</a>
                    <a href="/student/myprofile" class="btn mb-3 btn-student">My Profile</a>
                    <a href="/student/accomplishment" class="btn mb-3 btn-student">Accomplishment</a>
                    <a href="/student/setting" class="btn mb-3 btn-student">Account Setting</a>
                </div>
            </div>
        </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0 ">Courses Figma Tutorial</h3>
                    </div>

                    <div class="box-recommend p-4 min-height-recommend">
                        <div class="row ">
                            <div class="col">
                                <h4 class="mx-3">Leaderboard</h4>
                            </div>
                            <div class="col d-flex justify-content-end">
                                <h4 class="mx-3">{{ $student_enrolled }}/50</h4>

                            </div>

                        </div>

                        <hr style="border: 2px solid white; opacity: 1">

                        <div class="row">
                            <div class="col">
                                @php
                                    $nomor = 1;
                                @endphp
                                @foreach ($leaderboards as $leaderboard)
                                    <div class="card card-name-leaderboard text-left mb-2">
                                        <div class="row p-4">
                                            <div class="col-10 d-flex align-items-center">
                                                <div class="row  d-flex align-items-center">
                                                    <h4 style="margin-bottom: 0"><span class="me-4"
                                                            style="font-weight: 800">{{ $nomor++ }}</span>{{ $leaderboard['student_name'] }}
                                                    </h4>
                                                </div>

                                            </div>

                                            <div class="col-2 ">

                                                <h4 style="margin-bottom: 0">{{ (int) $leaderboard['student_point'] }} Point
                                                </h4>
                                            </div>

                                        </div>
                                    </div>
                                @endforeach

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection
