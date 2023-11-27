@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top ">
<div class="sidenav">
            <div class="content">
                <div class="row p-4">
                    <a href="/student" class="btn mb-3 btn-student-active">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student">My Course</a>
                    <a href="/student/challenge" class="btn mb-3 btn-student">Challenge</a>
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
                        <h3 style="margin-bottom: 0">Accomplishment</h3>
                    </div>
                    <h2 class="d-flex justify-content-center mb-4">My Achievements</h2>
                    <div class="box-recommend min-height-recommend">
                        <div class="row m-3">
                            <div class="col">
                                <div class="pt-4 pb-4">

                                    @foreach ($enrolleds as $e)
                                        <div class="card card-accomplishment text-left mb-3">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img class="card-img-left card-img-top-3"
                                                        src="{{ URL::asset($e['courses_image']) }}" alt="">
                                                </div>
                                                <div class="col-6 d-flex align-items-center">
                                                    <div class="row">

                                                        <h3>{{ $e['courses_name'] }}</h3>
                                                        <p class="d-flex align-items-center"><span class="iconify me-1 "
                                                                data-icon="material-symbols:check-circle-rounded"
                                                                style="color: #2f70af;" data-width="20px"> </span>Great
                                                            Work!
                                                            You have passed all the requirements and can view your
                                                            achievements
                                                            now.</p>
                                                    </div>
                                                    <div style="border-left:2px solid white;height:100px"></div>
                                                </div>

                                                <div class="col-3 d-flex align-items-center justify-content-center">

                                                    <a
                                                        href="{{ route('student_accomplishment_info', ['id' => $e['id']]) }}"class="btn btn-certificate-view">View
                                                        Certificate</a>
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

        </div>

    </section>
@endsection
