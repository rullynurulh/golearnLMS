@extends('layouts.course.main-course')
@section('container')
    <section class="margin-top ">
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">
                    <section class="section-curriculum sections">
                        <article>
                            @php
                                $hasNextPage = false;
                            @endphp
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
                                                    if ($curriculum['id'] == $quiz['curriculum']) {
                                                        $class .= 'active-chapter';
                                                    }
                                                @endphp
                                                <li class="{{ $class }}">
                                                    @if (isset($isVisited[$curriculum['id']]))
                                                        <a class="d-flex align-items-center chapter-info"
                                                            href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id'], 'now_chapter' => $curriculum['chapter']]) }}">
                                                            <label class="mains">
                                                                <input type="checkbox" checked="checked"
                                                                    disabled="disabled">
                                                                <span class="geekmark"></span>
                                                            </label>{{ $curriculum['name'] }}
                                                        </a>
                                                    @else
                                                        @if ($course_suequence == 'yes')
                                                            @if (!$hasNextPage)
                                                                <a class="d-flex align-items-center chapter-info"
                                                                    href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id'], 'now_chapter' => $curriculum['chapter']]) }}">
                                                                    <label class="mains">
                                                                        <input type="checkbox" disabled="disabled">
                                                                        <span class="geekmark"></span>
                                                                    </label>{{ $curriculum['name'] }}
                                                                </a>
                                                                @php
                                                                    $hasNextPage = true;
                                                                @endphp
                                                            @else
                                                                <a class="d-flex align-items-center chapter-info"
                                                                    href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id'], 'now_chapter' => $curriculum['chapter']]) }}"
                                                                    onclick="return false;">
                                                                    <label class="mains">
                                                                        <input type="checkbox" disabled="disabled">
                                                                        <span class="geekmark"></span>
                                                                    </label>{{ $curriculum['name'] }}
                                                                </a>
                                                            @endif
                                                        @else
                                                            <a class="d-flex align-items-center chapter-info"
                                                                href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id'], 'now_chapter' => $curriculum['chapter']]) }}"
                                                                onclick="return false;">
                                                                <label class="mains">
                                                                    <input type="checkbox" disabled="disabled">
                                                                    <span class="geekmark"></span>
                                                                </label>{{ $curriculum['name'] }}
                                                            </a>
                                                        @endif
                                                    @endif
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
                    <div class="box-recommend min-height-recommend p-2">
                        <div class="card card-quiz text-left m-5">
                            <div class="row p-4">
                                <div class="col-10 d-flex align-items-center">
                                    <div class="row ">
                                        <h3>{{ $quiz['title'] }}</h3>
                                        <p class="d-flex align-items-center">min. persentage {{ $quiz['min_percentage'] }}%
                                        </p>
                                    </div>

                                </div>

                                <div class="col-2 ">
                                    <div class="row d-flex align-items-center justify-content-end">

                                        <span class="d-flex justify-content-end"
                                            style="font-weight: 600">{{ $quiz['duration'] }} min</span>
                                        <div class="div d-flex align-items-center justify-content-end">
                                            <a href="{{ route('student_quiz_question', ['quiz_id' => $quiz['id'], 'question_id' => -1]) }}"
                                                class="btn btn-certificate-view">Start</a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </section>
@endsection
