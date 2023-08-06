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
                    <h5 class="mb-3">Welcome To Golearn! App | <span>{{ auth()->user()->name }}</span></h5>
                    <div class="box p-3 mb-3">
                        <h4>Continue Learning</h4>
                        @foreach ($enrolleds as $enrolled)
                            <div class="course-continue mb-4">
                                <div class="row">
                                    @if (is_null($enrolled['courses_image']))
                                        <img src="{{ URL::asset($enrolled['courses_image']) }}"
                                            style="width: 300px; border-radius: 20px ">
                                    @else
                                        <img src="images/course.jpg" style="width: 300px; border-radius: 20px ">
                                    @endif

                                    <div class="col p-3 me-5">
                                        <div class="course-title">{{ $enrolled['courses_name'] }}</div>
                                        @php
                                            $progress = ($enrolled['completed_lesson'] / $enrolled['lesson']) * 100;
                                        @endphp
                                        <div class="d-flex justify-content-end me-2">{{ $progress }}%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: {{ $progress }}%" role="progressbar"
                                                aria-valuenow="{{ $progress }}" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                        <div class="row mt-3 d-flex justify-content-between">
                                            <div class="col">
                                                <div class="course-title">Next Task : <span
                                                        style="color: var(--primary3)">{{ $enrolled['next_task_name'] }}</span>
                                                </div>
                                            </div>
                                            <a href="{{ route('student_course_detail', ['course_id' => $enrolled['courses_id'], 'now_curriculum' => $enrolled['next_task_id']]) }}"
                                                class="col d-flex justify-content-end" style="text-decoration: none">
                                                <div class="course-title">Continue <span class="iconify"
                                                        data-icon="fluent:arrow-right-12-filled" data-width="15"></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="box-recommend p-4">
                        <h4>Recommended For You</h4>
                        <div class="row">
                            @foreach ($courses as $course)
                                <div class="col-3 mb-2">
                                    <a href="{{ route('student_course_overwiew', $course['id']) }}" class="card text-left"
                                        style="text-decoration: none; color: black;">
                                        @if (!is_null($course['image']))
                                            <img class="card-img-top card-img-top-1" src="/{{ $course['image'] }}"
                                                alt="">
                                        @else
                                            <img class="card-img-top card-img-top-1" src="images/course.jpg" alt="">
                                        @endif

                                        <div class="card-body p-3">
                                            <div class="pb-3">
                                                <span class="iconify" data-icon="material-symbols:star"
                                                    style="color: #fdcf73; margin-top: -5px;" data-width="20"></span>
                                                <span class="iconify" data-icon="material-symbols:star"
                                                    style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                    data-width="20"></span>
                                                <span class="iconify" data-icon="material-symbols:star"
                                                    style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                    data-width="20"></span>
                                                <span class="iconify" data-icon="material-symbols:star-outline"
                                                    style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                    data-width="20"></span>
                                                <span class="iconify" data-icon="material-symbols:star-outline"
                                                    style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                    data-width="20"></span>
                                                <span>(20 Review)</span>
                                            </div>

                                            <h4 class="card-title">{{ $course['name'] }}</h4>
                                            <hr class="mb-3">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="row mb-5 d-flex justify-content-between">
                                                        <div class="col-2">
                                                            @if (!is_null($course['instructor_image']))
                                                                <img src="/{{ $course['instructor_image'] }}"
                                                                    style="width: 75px; border-radius: 50%">
                                                            @else
                                                                <img src="images/guru1.jpg"
                                                                    style="width: 75px; border-radius: 50%">
                                                            @endif
                                                        </div>
                                                        <div class="col-9 d-flex justify-content-between align-items-center"
                                                            style="padding-left: 1.5rem">
                                                            <span
                                                                class=" text-center">{{ $course['instructor_name'] }}</span>
                                                            <div class="row pe-2">
                                                                <div class="col">
                                                                    <span class="iconify" data-icon="mdi:user"
                                                                        style="color: #d9d9d9;"
                                                                        data-width="24"></span>{{ $course['student_enrolled'] }}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            @endforeach

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection
