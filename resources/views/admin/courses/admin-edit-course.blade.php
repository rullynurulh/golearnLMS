@extends('layouts.admin.main-admin')
@section('container')
    <section class="margin-top ">
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">Course | All Course</h3>
                    </div>
                    <div class="row p-2 d-flex justify-content-between mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <h4 style="margin-bottom:0">{{ $course['name'] }}</h4>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            <div class="row mx-1 pages pages-code d-flex justify-content-end align-items-center">
                                <li
                                    class="col-3 d-flex justify-content-center align-items-center pages-point active-button-code ">
                                    <h4 style="margin-bottom:0">Code Class</h4>
                                </li>
                                <li class="col-7 d-flex justify-content-end align-items-center pages-point not-active">
                                    <h4 style="margin-bottom: 0" id="p1">{{ $course['class_code'] }} </h4>
                                    <button class="btn btn-copy"onclick="copyToClipboard('#p1')"><span class="iconify ms-2"
                                            data-icon="tabler:copy" style="color: black;" data-width="25"></span></button>
                                </li>

                            </div>

                        </div>
                    </div>

                    <div class="row d-flex justify-content-start m-auto panel">
                        <li data-rel="1"
                            class="col-2 me-2 d-flex justify-content-center panel-point pointer active-button ">
                            Curriculum</li>
                        <li data-rel="2" class="col-2 me-2 d-flex justify-content-center panel-point pointer ">
                            Certificate</li>
                        <li data-rel="3" class="col-2 me-2 d-flex justify-content-center panel-point pointer ">
                            Enrolled</li>
                        <li data-rel="4" class="col-2 d-flex justify-content-center panel-point pointer ">
                            Leaderboard</li>
                    </div>
                    <section class="section-curriculum sections">

                        <article>
                            <div id="myModal_add_quiz" class="modal">
                                <div class="modal-content">
                                    <div class="box-modal p-4">
                                        <div class="row d-flex justify-content-between">
                                            <div class="col-4 d-flex align-items-center">
                                                <span class="title-modal px-5">Update Chapter</span>
                                            </div>
                                            <div class="col-2 d-flex justify-content-end">
                                                <span class="close_add_quiz close me-3">&times;</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-form p-4">
                                        <form action="{{ route('admin_add_chapter') }}" enctype="multipart/form-data"
                                            method="POST">
                                            @csrf
                                            <div class="col pe-4">
                                                <div class="form-group mb-2">
                                                    <label for="form-label text-white" style="font-size: 20px">Chapter
                                                        Name </label>
                                                    <input type="text" name="name" id="fromchapter_name"
                                                        class="form-control p-2" required />
                                                    <input type="text" id="fromchapter_id" name="chapter_id" hidden>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-center pt-1">
                                                <button class="btn btn-button btn-shadow text-dark px-4 "
                                                    type="submit">save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="box-recommend mt-2 p-4">
                                <div class="row d-flex justify-content-start ">
                                    <div class="add-new-course">
                                        @if ($errors->has('name'))
                                            <span class="text-danger">{{ $errors->first('name') }}</span>
                                        @endif
                                        <button class="collapsible-chapter btn-add-chapter"> <span class="iconify me-1"
                                                data-icon="el:plus-sign" data-width="24"></span> Add Chapter</button>
                                        <div class="content-collapse-chapter">
                                            <div class="box-add-chapter">
                                                <form action="{{ route('admin_add_chapter') }}" method="POST">
                                                    @csrf
                                                    <div class="form-group mb-2">
                                                        <label for="form-label text-white" style="font-size: 20px">Chapter
                                                            Name </label>
                                                        <input type="text" name="name" id="fromchapter_name"
                                                            class="form-control p-2" required />
                                                        <input type="text" name="courses" value="{{ $course['id'] }}"
                                                            hidden>
                                                    </div>
                                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                                        <button class="btn btn-save btn-shadow text-dark px-4"
                                                            type="submit">save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                @php
                                    $nomor = 1;
                                @endphp
                                @foreach ($chapters as $chapter)
                                    <div class="box-list-admin mb-2">
                                        <div class="row d-flex justify-content-start">
                                            <div class="col-1 d-flex justify-content-start align-items-center">
                                                <h3 style="margin-bottom:0">{{ $nomor++ }}</h3>
                                            </div>
                                            <div class="col-9 d-flex justify-content-start align-items-center">
                                                <h5 style="font-weight: 500; margin-bottom:0">{{ $chapter['name'] }}</h5>
                                            </div>
                                            <div class="col-2 d-flex justify-content-end align-items-center">
                                                <div class="col d-flex justify-content-end align-items-center">

                                                    <a onClick="showModal({{ $chapter['id'] }})"
                                                        style="border: none; background-color:none">
                                                        <span class="iconify me-1" data-icon="fa-solid:edit"
                                                            style="color: black;" data-width="27"></span></a>
                                                    |
                                                    <a href="{{ route('admin_delete_chapter', $chapter['id']) }}"
                                                        style="border: none;"> <span class="iconify ms-2"
                                                            data-icon="bi:trash-fill" style="color: black;"
                                                            data-width="25"></span></a>
                                                    |
                                                    <a href="{{ route('admin_add_curriculum', ['course_id' => $course['id'], 'chapter_id' => $chapter['id']]) }}"
                                                        style="border: none;"> <span class="iconify ms-2"
                                                            data-icon="mingcute:add-fill" style="color: black;"
                                                            data-width="25"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </article>
                    </section>

                    <section class="section-certificate sections">
                        <article>
                            <div class="box-recommend mt-2 p-4">
                                <div class="row d-flex justify-content-start ">
                                    <h4>Assign Certificate</h4>
                                </div>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                <form action="{{ route('admin_add_course_certificate') }}" method="POST"
                                    class="p-3">
                                    @csrf
                                    <div class="form-group mb-2">
                                        <input type="text" name="course" id="" value="{{ $course['id'] }}"
                                            hidden>
                                        <label for="form-label text-white"
                                            style="font-size: 20px; margin-bottom: 5px;">Select Certificate </label>
                                        <select name="certificate" id="certificate" class="form-select p-2">
                                            @foreach ($certificate as $c)
                                                @if ($course_certificate && $c['id'] == $course_certificate['certificate'])
                                                    <option selected value="{{ $c['id'] }}">{{ $c['title'] }}
                                                    </option>
                                                @else
                                                    <option value="{{ $c['id'] }}">{{ $c['title'] }}</option>
                                                @endif
                                            @endforeach

                                        </select>
                                    </div>
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <button class="btn btn-save btn-shadow text-dark px-4"
                                            type="submit">save</button>
                                    </div>
                                </form>

                            </div>
                        </article>
                    </section>
                    <section class="section-enrolled sections">
                        <article>
                            <div class="box-recommend mt-2 p-4">
                                <div class="row d-flex justify-content-start ">
                                    <h4>Student Enrolled</h4>
                                </div>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                @php
                                    $nomor = 1;
                                @endphp
                                @foreach ($enrolleds as $enrolled)
                                    <div class="box-list-admin mb-2">
                                        <div class="row d-flex justify-content-start">
                                            <div class="col-1 d-flex justify-content-start align-items-center">
                                                <h3 style="margin-bottom:0">{{ $nomor++ }}</h3>
                                            </div>
                                            <div class="col-9 d-flex justify-content-start align-items-center">
                                                <h5 style="font-weight: 500; margin-bottom:0">
                                                    {{ $enrolled['student_name'] }}</h5>
                                            </div>

                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </article>
                    </section>
                    <section class="section-leaderboard sections">
                        <article>
                            <div class="box-recommend mt-2 p-4">
                                <div class="row d-flex justify-content-between ">
                                    <div class="col-3 ms-2">
                                        <h4>Leaderboard</h4>
                                    </div>
                                    <div class="col-1">
                                        <h4>{{ $student_enrolled }}/50</h4>
                                    </div>

                                </div>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                @php
                                    $nomor = 1;
                                @endphp
                                @foreach ($enrolleds as $enrolled)
                                    <div class="box-list-admin mb-2">
                                        <div class="row d-flex justify-content-start">
                                            <div class="col-1 d-flex justify-content-start align-items-center">
                                                <h3 style="margin-bottom:0">{{ $nomor++ }}</h3>
                                            </div>
                                            <div class="col-9 d-flex justify-content-start align-items-center">
                                                <h5 style="font-weight: 500; margin-bottom:0">
                                                    {{ $enrolled['student_name'] }}</h5>
                                            </div>
                                            <div class="col-2 d-flex justify-content-end align-items-center">
                                                <h5 style="font-weight: 500; margin-bottom:0">
                                                    {{ (int) $enrolled['student_point'] }}
                                                    Point</h5>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach


                            </div>
                        </article>
                    </section>

                </div>

            </div>

        </div>
    </section>

    <script>
        let chapter = @json($chaptersById);

        function showModal(id) {

            // Get the modal
            var modal_edit = document.getElementById("myModal_add_quiz");
            modal_edit.style.display = "block";

            // Get the <span> element that closes the modal
            var span_edit = document.getElementsByClassName("close_add_quiz")[0];

            // When the user clicks on <span> (x), close the modal
            span_edit.onclick = function() {
                modal_edit.style.display = "none";
            }

            document.getElementById("fromchapter_id").value = id
            document.getElementById("fromchapter_name").value = chapter[id]['name']



        }
    </script>
    <script>
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }
    </script>
    <script>
        (function($) {
            $('.panel li').click(function() {
                $(this).addClass('active-button').siblings('li').removeClass('active-button');
                $('.sections:nth-of-type(' + $(this).data('rel') + ')').stop().fadeIn(300, 'linear').siblings(
                    '.sections').stop().fadeOut(300, 'linear');
            });
        })(jQuery);
    </script>

    <script>
        var coll = document.getElementsByClassName("collapsible-chapter");
        var i;
        for (i = 0; i < coll.length; i++) {

            coll[i].addEventListener("click", function() {

                this.classList.toggle("active-chapter");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });

        }
    </script>
@endsection
