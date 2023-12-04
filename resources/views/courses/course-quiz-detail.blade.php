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

                        {{-- <div class="col-2 me-3">
                            <a onclick="getPreviousPage()" class="btn btn-button" style="min-width: 100px"
                                id="previousCourseButton">Previous</a>
                        </div>
                        <div class="col-2">
                            <a onclick="getNextPage()" class="btn btn-button" style="min-width: 100px"
                                id="nextCourseButton">Next</a>
                        </div> --}}
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
                                                    
                                                    if ($curriculum['id'] == $quiz['curriculum']) {
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
                                                            href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id']]) }}">
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
                                                                href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id']]) }}"
                                                                onclick="return false;">
                                                                <label class="mains">
                                                                    <input type="checkbox" disabled="disabled">
                                                                    <span class="geekmark"></span>
                                                                </label>{{ $curriculum['name'] }}
                                                            </a>
                                                        @else
                                                            <a class="d-flex align-items-center chapter-info"
                                                                href="{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $curriculum['id']]) }}">
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
                                            @if ($countVisited == count($chapter['curriculum']))
                                                <script>
                                                    var chapterButton = 'chapter_button_' + {{ $chapter['id'] }};
                                                    document.getElementById(chapterButton).checked = "checked";
                                                </script>
                                            @endif
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
                    <div class="card card-quiz text-left" style="margin-top: 3rem">
                        <div class="row ">
                            <div class="col-3 d-flex align-items-center">
                                <div class="row p-3">
                                    <h5 id="timer">00:00:00</h5>
                                    <h3>{{ $quiz['title'] }}</h3>

                                </div>

                            </div>
                            <div class="col-5 d-flex align-items-center justify-content-center">
                                <div class="mx-1 pages pages-code d-flex justify-content-end align-items-center">

                                    <li class="d-flex justify-content-center align-items-center button-hint ">
                                        <a onclick="getCourseHint()" target="_blank" rel="noopener"
                                            class="btn btn-primary ">
                                            Hint
                                        </a>
                                    </li>
                                    <li class=" d-flex justify-content-end align-items-center text-hint px-3"
                                        style="border: 1px solid black">
                                        <h4 style="margin-bottom: 0" id="jumlah_hint">0</h4>

                                    </li>

                                </div>

                            </div>

                            <div class="col-4 d-flex justify-content-end align-items-center pe-5">
                                <div class="row">
                                    <div class="col">
                                        <a onclick="getPrevQuestion()" class="btn btn-paging-quiz-view"
                                            id="previousQuestionButton">Previous</a>

                                    </div>


                                    <div class="col">
                                        <a onclick="getNextQuestion()" class="btn btn-paging-quiz-view"
                                            id="nextQuestionButton">Next</a>

                                    </div>
                                    <div class="col">
                                        <a onclick="submitAnswer()" class="btn btn-paging-quiz-view">Submit</a>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="box-quiz min-height-quiz">
                        <div class="row">
                            <div class="col-10 p-5">
                                <div class="d-flex justify-content-center" id="question_image">
                                </div>
                                <br>
                                <span style="font-size: 20px; font-weight: 500" id="question_text">question</span>
                                <div class="col">
                                    <div id="multiple_choice">
                                        <div class="option d-flex align-items-center my-3">
                                            <input class="radio-button-input" type="radio" id="option_a"
                                                name="answer" value="a" oninput="getAnswer()">
                                            <span class="ms-2" id="text_option_a" style="font-size: 19px">
                                                a</span>
                                        </div>
                                        <div class="option d-flex align-items-center my-3">
                                            <input class="radio-button-input" type="radio" id="option_b"
                                                name="answer" value="b" oninput="getAnswer()">
                                            <span class="ms-2" id="text_option_b" style="font-size: 19px">
                                                b</span>
                                        </div>
                                        <div class="option d-flex align-items-center my-3">
                                            <input class="radio-button-input" type="radio" id="option_c"
                                                name="answer" value="c" oninput="getAnswer()">
                                            <span class="ms-2" id="text_option_c" style="font-size: 19px">
                                                c</span>
                                        </div>
                                        <div class="option d-flex align-items-center my-3">
                                            <input class="radio-button-input" type="radio" id="option_d"
                                                name="answer" value="d" oninput="getAnswer()">
                                            <span class="ms-2" id="text_option_d" style="font-size: 19px">
                                                d</span>
                                        </div>
                                    </div>

                                    <div id="long_text">
                                        <textarea name="answer" id="answer" rows="3" class="form-control p-2" oninput="getAnswer()">
                                        </textarea>
                                    </div>

                                </div>

                            </div>

                            <div class="col-2">
                                <div class="bg-question box-question sidequestion">
                                    <div class="p-4">
                                        <span class="text-white" style="font-size: 19px;">Number of Question</span>
                                    </div>
                                    <div class="row mx-3">
                                        @php
                                            $nomor = 0;
                                        @endphp
                                        @for ($i = 0; $i < count($questions); $i++)
                                            <div class="col-4 mb-3">
                                                @php
                                                    $idPagination = 'pagination' . $i;
                                                @endphp
                                                <a id="{{ $idPagination }}" onclick="getQuestion({{ $nomor }})"
                                                    class="btn btn-pagination-quiz border-radius"
                                                    style="width: 44px; font-size: 20px; font-weight:500">{{ $nomor++ + 1 }}</a>
                                            </div>
                                        @endfor

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>
    <script>
        var hint = {{ $quiz_hint }}
        document.getElementById("jumlah_hint").innerHTML = hint

        function getCourseHint() {
            if (hint > 0) {
                hint--
                document.getElementById("jumlah_hint").innerHTML = hint
                window.open(
                    "{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $first_curriculum]) }}",
                    "_blank");


            }
        }
    </script>
    <script>
        var total_seconds = {{ $quiz['duration'] * 60 }};
        var hour = parseInt(total_seconds / 3600);
        var minutes = parseInt((total_seconds % 3600) / 60);
        var seconds = parseInt((total_seconds % 3600) % 60);

        function countDownTimer() {
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (hour < 10) {
                hour = "0" + hour;
            }


            document.getElementById("timer").innerHTML = hour + " : " + minutes + " : " + seconds;
            if (total_seconds <= 0) {
                submitAnswer()
            }
            total_seconds = total_seconds - 1;
            hour = parseInt(total_seconds / 3600);
            minutes = parseInt((total_seconds % 3600) / 60);
            seconds = parseInt((total_seconds % 3600) % 60);

            setTimeout("countDownTimer()", 1000);
        }
        countDownTimer();

        let question = @json($questions);
        let answer = []
        let lastQuestionNumber = -1;

        function getQuestion(nomor) {


            if (question[nomor]['type'] == 'multiple choice') {

                document.getElementById("multiple_choice").style.display = "block";
                document.getElementById("long_text").style.display = "none";
                document.getElementById("question_text").innerHTML = question[nomor]['question'];
                document.getElementById("text_option_a").innerHTML = question[nomor]['option_a'];
                document.getElementById("text_option_b").innerHTML = question[nomor]['option_b'];
                document.getElementById("text_option_c").innerHTML = question[nomor]['option_c'];
                document.getElementById("text_option_d").innerHTML = question[nomor]['option_d'];

                $(".radio-button-input").prop("checked", false);

                if (answer[nomor] != null) {
                    let id = "option_" + answer[nomor];
                    document.getElementById(id).checked = true;
                }

            } else {
                document.getElementById("multiple_choice").style.display = "none";
                document.getElementById("long_text").style.display = "block";
                document.getElementById("question_text").innerHTML = question[nomor]['question'];

                document.getElementById("answer").value = ''
                if (answer[nomor] != null) {

                    document.getElementById("answer").value = answer[nomor];
                }
            }

            if (question[nomor]['file'] != null) {

                var img = '<img  src="/' + question[nomor]['file'] +
                    '" alt="" style="max-width: 800px; max-height: 700px; object-fit: cover;">';
                document.getElementById('question_image').innerHTML = img;
                console.log(img);

            } else {
                document.getElementById('question_image').innerHTML = ''
            }


            if (lastQuestionNumber != -1) {
                let prevpaginationId = "pagination" + lastQuestionNumber;
                document.getElementById(prevpaginationId).className = ' btn btn-pagination-quiz border-radius';
            }


            let nowpaginationId = "pagination" + nomor;
            document.getElementById(nowpaginationId).className += ' btn-pagination-quiz-active';

            lastQuestionNumber = nomor;

        }

        function getNextQuestion() {


            if (lastQuestionNumber + 1 < question.length) {
                getQuestion(lastQuestionNumber + 1)
            }

        }

        function getPrevQuestion() {

            if (lastQuestionNumber - 1 >= 0) {
                getQuestion(lastQuestionNumber - 1)
            }

        }

        function getAnswer() {

            if (question[lastQuestionNumber]['type'] == 'multiple choice') {
                answer[lastQuestionNumber] = document.querySelector('input[name="answer"]:checked').value;
            } else {
                answer[lastQuestionNumber] = document.getElementById("answer").value;

            }
        }

        function submitAnswer() {
            var corret_answer = 0;
            var wrong_answer = 0;
            for (i = 0; i < question.length; i++) {
                if (question[i]['answer'] == answer[i]) {
                    corret_answer++;
                } else {
                    wrong_answer++;
                }
            }

            var result = corret_answer + '-' + wrong_answer + '-' + question.length + '-' + ({{ $quiz['duration'] * 60 }} -
                total_seconds);


            var url =
                "{{ route('student_quiz_save_result', ['course_id' => $course_id, 'now_curriculum' => $quiz['curriculum'], 'quiz_id' => $quiz['id'], 'enroll_id' => $enroll_id, 'result' => ':result']) }}"
            url = url.replace(':result', result);
            location.href = url;

        }


        getQuestion({{ 0 }})
        document.getElementById("pagination0").className += ' btn-pagination-quiz-active';
    </script>
    <script></script>
    <script>
        function getPreviousPage() {

            page = {{ $prev }}
            if (page != -1) {

                var previousPage = document.getElementById("previousCourseButton");
                let link =
                    "{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $prev]) }}";
                previousPage.href = link
            }

        }

        function getNextPage() {

            page = {{ $next }}
            if (page != -1) {

                var nextPage = document.getElementById("nextCourseButton");

                let link =
                    "{{ route('student_course_detail', ['course_id' => $course_id, 'now_curriculum' => $next]) }}";
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
