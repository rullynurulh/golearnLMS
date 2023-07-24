@extends('layouts.admin.main-admin')
@section('container')
    <section class="margin-top ">
        <div class="sidenav">
            <div class="content content-nav">
                <div class="row p-4">
                    <section class="section-curriculum sections">
                        <article>
                            <div class="mb-2">
                                <a href="/admin" class="collapsible btn mb-2 btn-admin">
                                    Dashboard
                                </a>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Users
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/user-teacher">
                                            <li>
                                                Teacher
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/user-student">
                                            <li>
                                                Student
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/users-setting">
                                            <li>
                                                User Setting
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Courses
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/courses-categories">
                                            <li>
                                                Categories
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/courses-list">
                                            <li>
                                                Course List
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Quiz
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "href="/admin/add-quiz">
                                            <li>
                                                Add Quiz
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 "href="/admin/quiz-setting">
                                            <li>
                                                Quiz Setting
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Certificates
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/certificate-list">
                                            <li>
                                                Certificate List
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/certificate-add">
                                            <li>
                                                Add Certificate
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2"
                                            href="/admin/certificate-setting">
                                            <li>
                                                Certificate Setting
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
                                    Front Page
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/frontpage-home">
                                            <li>
                                                Home Content
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/frontpage-social">
                                            <li>
                                                Social Setting
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/frontpage-footer">
                                            <li>
                                                Footer Setting
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/frontpage-account">
                                            <li>
                                                Account Setting
                                            </li>
                                        </a>

                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/frontpage-about-us">
                                            <li>
                                                About Us
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-2">
                        <h3 style="margin-bottom: 0">Front Page | Social Setting</h3>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <h3 class="my-5 ms-2"style="margin-bottom: 0" id="titleText">Add New</h3>
                            <div class="box-recommend mt-2 p-4">
                                <form action="{{ route('admin_save_social_content') }}" method="POST"
                                    class="form_frontpage" enctype="multipart/form-data">
                                    @csrf
                                    <input type="text" name="id" id="id" value="-1" hidden>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Icons </label>
                                            <input type="file" name="image" id="image"
                                                class="form-control px-3 py-2" />
                                            @if ($errors->has('image'))
                                                <p class="text-danger">{{ $errors->first('image') }}</p>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Social Link
                                            </label>
                                            <input type="text" name="link" id="link"
                                                class="form-control px-3 py-2" placeholder="enter social link" required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Social Name
                                            </label>
                                            <input type="text" name="social_name" id="social_name"
                                                class="form-control px-3 py-2" placeholder="enter social name" required />
                                        </div>
                                    </div>

                                    <!-- Buttons Sign in -->
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <div id="btn-batal">
                                        </div>
                                        <button class="btn btn-button btn-shadow text-dark px-5 rounded-pill "
                                            type="submit">save</button>

                                    </div>


                                </form>
                            </div>
                        </div>
                        <div class="col-9">
                            <h3 class="my-5 ms-2"style="margin-bottom: 0">Quiz List</h3>
                            <div class="box-recommend mt-2 p-4">
                                <div class="row d-flex justify-content-start">
                                    <div class="col-2 d-flex justify-content-start ps-4 align-items-center">
                                        <h5 style="font-weight: 700">No</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center align-items-center">
                                        <h5 style="font-weight: 700">Icon</h5>
                                    </div>
                                    <div class="col-4 d-flex justify-content-center align-items-center">
                                        <h5 style="font-weight: 700">Link</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center align-items-center">
                                        <h5 style="font-weight: 700; text-align:center">Social Name</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center align-items-center">
                                        <h5 style="font-weight: 700">Action</h5>
                                    </div>
                                </div>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                @php
                                    $nomor = 1;
                                @endphp
                                @foreach ($socialcontent as $s)
                                    <div class="row d-flex justify-content-start  mb-3">
                                        <div class="col-2 d-flex justify-content-start ps-4 align-items-center">
                                            <h5 style="font-weight: 700">{{ $nomor++ }}</h5>
                                        </div>
                                        <div class="col-2 d-flex justify-content-center align-items-center">
                                            <img src="/{{ $s['image'] }}" alt="icon"
                                                style="width: 50px !important;border-radius:50%">
                                        </div>
                                        <div class="col-4 d-flex justify-content-left align-items-center">
                                            <h5 style="font-weight: 700">{{ $s['link'] }}</h5>
                                        </div>
                                        <div class="col-2 d-flex justify-content-center align-items-center">
                                            <h5 style="font-weight: 700; text-align:center">{{ $s['social_name'] }}</h5>
                                        </div>
                                        <div class="col-2 d-flex justify-content-center align-items-center">
                                            <div class="col d-flex justify-content-center align-items-center">

                                                <a onclick="getData({{ $s['id'] }})"
                                                    style="border: none; background-color:#EAEAEA;">
                                                    <span class="iconify me-1" data-icon="fa-solid:edit"
                                                        style="color: black;" data-width="27"></span></a>
                                                |
                                                <a href="{{ route('admin_delete_social_content', ['id' => $s['id']]) }}"
                                                    style="border: none;">
                                                    <span class="iconify ms-2" data-icon="bi:trash-fill"
                                                        style="color: black;" data-width="25"></span></a>
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
    <script>
        let content = @json($socialcontentById);

        function cancelUpdate() {

            document.getElementById("btn-batal").innerHTML = '';
            document.getElementById("id").value = -1;
            document.getElementById("link").value = '';
            document.getElementById("social_name").value = '';

        }

        function getData(id) {

            document.getElementById("id").value = id;
            document.getElementById("link").value = content[id]['link'];
            document.getElementById("social_name").value = content[id]['social_name'];
            document.getElementById("titleText").innerHTML = "Update Social Content";




            document.getElementById("btn-batal").innerHTML =
                '<button class="btn btn-button btn-shadow bg-danger text-dark px-4 me-2" onclick="cancelUpdate()">Batal</button>'


        }
    </script>
@endsection
