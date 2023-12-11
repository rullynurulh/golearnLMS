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
                        <h3 style="margin-bottom: 0">{{ $course['name'] }}</h3>
                    </div>
                    <div class="row">
                        <div class="col-9">
                            <div class="box-recommend p-4">
                                <div class="row mb-3" style="font-size: 50px; color: white;">
                                    <div class="col">
                                        <div class="row ">
                                            <div class="col-2">
                                                @if (is_null($course['instructor_image']))
                                                    <img src="/images/guru1.jpg" style="width: 50px; border-radius: 50%">
                                                @else
                                                    <img src="/{{ $course['instructor_image'] }}"
                                                        style="width: 50px; border-radius: 50%">
                                                @endif
                                            </div>
                                            <div class="col d-flex justify-content-between align-items-center"
                                                style="padding-left: 1.5rem">
                                                <span class=" text-left"
                                                    style="font-size: 25px;font-weight: 500; color: black;">{{ $course['instructor_name'] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    |
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <div class="row ">

                                            <div class="col d-flex justify-content-center align-items-center"
                                                style="padding-left: 1.5rem">
                                                <span class=" text-left"
                                                    style="font-size: 25px;font-weight: 500; color: black;">{{ $course['categories_name'] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    |
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <div class="row ">

                                            <div class="col d-flex justify-content-center align-items-center"
                                                style="padding-left: 1.5rem">
                                                <span class=" text-left"
                                                    style="font-size: 25px;font-weight: 500; color: black;">Code :
                                                    {{ $course['class_code'] }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <img class="d-flex justify-content-center" src="/{{ $course['image'] }}"
                                        style="height: 550px; border-radius: 3%" alt="">

                                </div>

                                <div class="row mx-1 pages  mb-3">
                                    <li data-rel="1"
                                        class="col d-flex justify-content-center pages-point active-button pointer">
                                        Overview</li>
                                    <li data-rel="2" class="col d-flex justify-content-center pages-point pointer">
                                        Curriculum</li>
                                </div>

                                <div class="row mt-1 mb-2">
                                    <section class="section-overview sections">
                                        <article>
                                            <div class="section-info mb-2">
                                                <h4>Course Requirements</h4>
                                                <div class="box-overview p-3">
                                                    <ul style="margin-top: 1rem">
                                                        @for ($i = 0; $i < sizeof($course['requirement']); $i++)
                                                            <li class="mb-1">{{ $course['requirement'][$i] }}</li>
                                                        @endfor

                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="section-info mb-2">
                                                <h4>Course Descriptions</h4>
                                                <div class="box-overview p-3">
                                                    <ul style="margin-top: 1rem">
                                                        @for ($i = 0; $i < sizeof($course['description']); $i++)
                                                            <li class="mb-1">{{ $course['description'][$i] }}</li>
                                                        @endfor

                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="section-info">
                                                <h4>Course Outcomes</h4>
                                                <div class="box-overview p-3">
                                                    <ul style="margin-top: 1rem">
                                                        @for ($i = 0; $i < sizeof($course['outcome']); $i++)
                                                            <li class="mb-1">{{ $course['outcome'][$i] }}</li>
                                                        @endfor

                                                    </ul>
                                                </div>
                                            </div>
                                        </article>
                                    </section>

                                    <section class="section-curriculum sections">
                                        <article>
                                            @foreach ($chapters as $chapter)
                                                <div class="mb-2">
                                                    <button type="button"
                                                        class="collapsible ">{{ $chapter['name'] }}</button>
                                                    <div class="content-collapse">
                                                        <ul class="list-lesson py-2 px-4">
                                                            @foreach ($chapter['curriculum'] as $curriculum)
                                                                <li>{{ $curriculum['name'] }}</li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="box-recommend px-5 pt-5 pb-4">
                                <div class="row">
                                    @if ($status == 'enrolled')
                                        @if ($now_curriculum == -1)
                                            <a onclick="return false;" href="/course/{{ $course['id'] }}"
                                                class="btn btn-button" style="font-size: 25px; font-weight:600">Go Learn</a>
                                        @else
                                            <a href="/course/{{ $course['id'] }}" class="btn btn-button"
                                                style="font-size: 25px; font-weight:600">Go Learn</a>
                                        @endif
                                    @else
                                        <form action="{{ route('student_course_enroll') }}" method="POST">
                                            @csrf
                                            <input type="text" name="courses" value="{{ $course['id'] }}" hidden>
                                            <button type="submit" class="btn btn-button"
                                                style="font-size: 25px; font-weight:600"
                                                {{ $course['lesson'] == 0 ? 'disabled="disabled"' : '' }}>
                                                JOIN NOW</button>
                                        </form>
                                    @endif
                                </div>
                                <div class="row d-flex justify-content-start" style="color:#141F46;">
                                    <div class="col p-3">
                                        <div class="row mb-4">
                                            <div class="col-3 d-flex align-items-center">
                                                <span class="iconify" data-icon="fa6-solid:book" data-width="35"></span>
                                            </div>
                                            <div class="col-7 d-flex align-items-center"
                                                style="font-size: 20px; font-weight: 500">
                                                {{ $course['lesson'] }} Lesson
                                            </div>


                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-3 d-flex align-items-center">
                                                <span class="iconify" data-icon="fa6-solid:medal" data-width="35"></span>
                                            </div>
                                            <div class="col-7 d-flex align-items-center"
                                                style="font-size: 20px; font-weight: 500">Certificate
                                                of Completion</div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3 d-flex align-items-center">
                                                <span class="iconify" data-icon="ion:person-sharp"
                                                    data-width="40"></span>
                                            </div>
                                            <div class="col-7 d-flex align-items-center"
                                                style="font-size: 20px; font-weight: 500">
                                                {{ $course['student_enrolled'] }}/50</div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <script>
            (function($) {
                $('.pages li').click(function() {
                    $(this).addClass('active-button').siblings('li').removeClass('active-button');
                    $('.sections:nth-of-type(' + $(this).data('rel') + ')').stop().fadeIn(300, 'linear').siblings(
                        '.sections').stop().fadeOut(300, 'linear');
                });
            })(jQuery);
        </script>
        <script>
            var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            }
        </script>
    </section>
@endsection
