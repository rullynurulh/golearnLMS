@extends('layouts.course.main-course')
@section('container')
    <section class="margin-top ">
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
                                                        href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_proces' => $curriculum['id']]) }}">
                                                        <label class="mains">
                                                            @if ($curriculum['chapter'] > $lesson['chapter'])
                                                                <input type="checkbox">
                                                            @elseif ($curriculum['chapter'] < $lesson['chapter'])
                                                                <input type="checkbox" checked="checked">
                                                            @elseif ($curriculum['chapter'] == $lesson['chapter'] && $curriculum['id'] < $lesson['curriculum'])
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
            <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem;">
                <div class="content p-5">
                    <div class="box-recommend min-height-recommend">
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
