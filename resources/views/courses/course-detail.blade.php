@extends('layouts.course.main-course')
@section('container')
    <section class="margin-top ">
        <div class="nav-course">
            <div class="row d-flex justify-content-between px-3 py-2">
                <div class="col-4 d-flex align-items-center">
                    <div class="row d-flex align-items-center">
                        <div class="col-1 mx-3">
                            <span class="iconify" data-icon="icon-park-solid:back" data-width="40"></span>
                        </div>
                        <div class="col d-flex align-items-center ms-3">
                            <h4 style="margin-bottom: 0">Figma Tutorial</h4>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row d-flex justify-content-end">

                        <div class="col-2 me-5" id="endCourse" style="display: none">
                            <a class="btn btn-button" style="min-width: 130px" href="/student">End Course</a>
                        </div>
                        <div class="col-2 me-3">
                            <a onclick="getPreviousPage()" class="btn btn-button" style="min-width: 100px"
                                id="previousCourseButton">Previous</a>
                        </div>
                        <div class="col-2">
                            <a onclick="getNextPage()" class="btn btn-button" style="min-width: 100px"
                                id="nextCourseButton">Next</a>
                        </div>


                        <div class="col-3 d-flex justify-content-center align-items-center">
                            <div class="circular-progress" data-inner-circle-color="white"
                                data-percentage="{{ $progress }}" data-progress-color="#2F70AF" data-bg-color="white">
                                <div class="inner-circle"></div>
                                <p class="percentage">{{ $progress }}%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">
                    <section class="section-curriculum sections">
                        <article>
                            @php
                                $hasNextPage = false;
                                $previousPage = -1;
                                $nextPage = -1;
                                $prev = -1;
                                $next = -1;
                            @endphp
                            @foreach ($chapters as $chapter)
                                <div class="mb-2">
                                    <button type="button" class="collapsible">
                                        <label class="mains">
                                            @php
                                                $chapterButton = 'chapter_button_' . $chapter['id'];
                                            @endphp
                                            <input type="checkbox" disabled="disabled" id="{{ $chapterButton }}">
                                            <span class="geekmark"></span>
                                        </label>
                                        {{ $chapter['name'] }}
                                    </button>
                                    <div class="content-collapse">
                                        <ul class="list-lesson">
                                            @php
                                                $countVisited = 0;
                                            @endphp
                                            @foreach ($chapter['curriculum'] as $curriculum)
                                                @php
                                                    $class = 'detail-chapter mb-2 ';
                                                    if ($curriculum['id'] == $lesson['curriculum']) {
                                                        $class .= 'active-chapter';
                                                        $prev = $previousPage;
                                                        $nextPage = $curriculum['id'];
                                                    } else {
                                                        if ($nextPage != -1 && $next == -1) {
                                                            $next = $curriculum['id'];
                                                        }
                                                    }
                                                @endphp
                                                <li class="{{ $class }}">
                                                    @if (isset($isVisited[$curriculum['id']]))
                                                        @php
                                                            $countVisited++;
                                                        @endphp
                                                        <a class="d-flex align-items-center chapter-info"
                                                            href="/course/{{ $course_id }}">
                                                            <label class="mains">
                                                                <input type="checkbox" checked="checked"
                                                                    disabled="disabled">
                                                                <span class="geekmark"></span>
                                                            </label>{{ $curriculum['name'] }}
                                                        </a>
                                                    @else
                                                        @if ($course_suequence == 'yes')
                                                            @if (!$hasNextPage)
                                                                @php
                                                                    $hasNextPage = true;
                                                                @endphp
                                                            @endif
                                                            <a class="d-flex align-items-center chapter-info"
                                                                href="/course/{{ $course_id }}"
                                                                onclick="return false;">
                                                                <label class="mains">
                                                                    <input type="checkbox" disabled="disabled">
                                                                    <span class="geekmark"></span>
                                                                </label>{{ $curriculum['name'] }}
                                                            </a>
                                                        @else
                                                            <a class="d-flex align-items-center chapter-info"
                                                                href="/course/{{ $course_id }}">
                                                                <label class="mains">
                                                                    <input type="checkbox" disabled="disabled">
                                                                    <span class="geekmark"></span>
                                                                </label>{{ $curriculum['name'] }}
                                                            </a>
                                                        @endif
                                                    @endif
                                                </li>
                                                @php
                                                    $previousPage = $curriculum['id'];
                                                @endphp
                                            @endforeach
                                        </ul>
                                        @if ($countVisited == count($chapter['curriculum']))
                                            <script>
                                                var chapterButton = 'chapter_button_' + {{ $chapter['id'] }};
                                                document.getElementById(chapterButton).checked = "checked";
                                            </script>
                                        @endif


                                    </div>
                                </div>
                            @endforeach

                            @if ($lesson['curriculum'] == $previousPage)
                                <script>
                                    document.getElementById("endCourse").style.display = "block";
                                </script>
                            @endif

                        </article>
                    </section>
                </div>
            </div>
        </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem; ">
                <div class="content p-5">
                    <div class="box-recommend min-height-recommend" style="margin-top: 3rem;">
                        @if (!is_null($lesson['source']))
                            <div class="container p-5 d-flex justify-content-center align-items-center">
                                <iframe width="1300px" height="600px" src="{{ $lesson['source'] }}"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>

                            </div>
                        @endif
                        @if (!is_null($lesson['file']))
                            <div class="container p-5 d-flex justify-content-center align-items-center">
                                <div>
                                    <object data={{ URL::asset($lesson['file']) }} type="application/pdf" width="1080"
                                        height="678">
                                        <iframe src={{ URL::asset($lesson['file']) }} width="500" height="678">
                                            <p>This browser does not support PDF!</p>
                                        </iframe>
                                    </object>
                                </div>

                            </div>
                        @endif

                    </div>
                </div>

            </div>

        </div>

    </section>

    <script>
        function getPreviousPage() {

            page = {{ $prev }}
            if (page != -1) {
                var previousPage = document.getElementById("previousCourseButton");
                let link =
                    "/course/{{ $course_id }}";
                previousPage.href = link
            }

        }

        function getNextPage() {

            page = {{ $next }}
            if (page != -1) {

                var nextPage = document.getElementById("nextCourseButton");

                let link =
                    "/course/{{ $course_id }}";
                nextPage.href = link
            }


        }
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
                    content.style.maxHeight = 0 + "px";
                }
            });

        }
    </script>
@endsection
