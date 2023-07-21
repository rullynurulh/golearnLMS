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
                        <div class="col-2 me-3">
                            <a href="" class="btn btn-button" style="min-width: 100px">Previous</a>
                        </div>
                        <div class="col-2">
                            <a href="" class="btn btn-button" style="min-width: 100px">Next</a>
                        </div>
                        <div class="col-3 d-flex justify-content-center align-items-center">
                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="80" data-progress-color="#2F70AF" data-bg-color="white">
                                <div class="inner-circle"></div>
                                <p class="percentage">0%</p>
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
                            @foreach ($chapters as $chapter)
                                <div class="mb-2">
                                    <button type="button" class="collapsible">
                                        <label class="mains">
                                            <input type="checkbox" disabled="disabled">
                                            <span class="geekmark"></span>
                                        </label>
                                        {{ $chapter['name'] }}
                                    </button>
                                    <div class="content-collapse">
                                        <ul class="list-lesson">
                                            @foreach ($chapter['curriculum'] as $curriculum)
                                                @php
                                                    $class = 'detail-chapter mb-2 ';
                                                    if ($curriculum['id'] == $lesson['curriculum']) {
                                                        $class .= 'active-chapter';
                                                    }
                                                @endphp
                                                <li class="{{ $class }}">
                                                    <a class="d-flex align-items-center chapter-info"
                                                        href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id'], 'now_chapter' => $curriculum['chapter']]) }}">
                                                        <label class="mains">
                                                            @if ($lesson['chapter'] > $now_chapter)
                                                                <input type="checkbox">
                                                            @elseif ($lesson['chapter'] < $now_chapter)
                                                                <input type="checkbox" checked="checked">
                                                            @elseif ($now_chapter == $lesson['chapter'] && $now_curriculum < $lesson['curriculum'])
                                                                <input type="checkbox" checked="checked">
                                                            @else
                                                                <input type="checkbox">
                                                            @endif
                                                            <span class="geekmark"></span>
                                                        </label>{{ $curriculum['name'] }}
                                                    </a>
                                                </li>
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
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem; ">
                <div class="content p-5">
                    <div class="box-recommend min-height-recommend" style="margin-top: 3rem;">
                        <div class="container p-5 d-flex justify-content-center align-items-center">
                            <iframe width="1300px" height="600px" src="{{ $lesson['source'] }}" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    </section>
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
