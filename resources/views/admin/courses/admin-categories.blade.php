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
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
                                    Courses
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        @if (auth()->user()->role == 'admin')
                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/courses-categories">
                                                <li>
                                                    Categories
                                                </li>
                                            </a>
                                        @endif
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
                                        <a href="/admin/quiz-setting" class="d-flex align-items-center chapter-info mb-2 ">
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
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Front Page
                                </button>
                                @if (auth()->user()->role == 'admin')
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
                                @endif

                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">Course | Categories</h3>
                    </div>
                    <div>
                        @if ($errors->any())
                            {!! implode('', $errors->all('<div class="text-danger">:message</div>')) !!}
                        @endif
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div class="box-recommend mt-2 p-4">
                                <form action="{{ route('admin_add_category') }}" method="post"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <input type="text" name="id" id="Formid" value="-1" hidden>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Name Categories
                                            </label>
                                            <input type="text" name="name" id="Formname"
                                                class="form-control form-control-lg p-3" required />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Thumbnail Image
                                            </label>
                                            <input type="file" name="image" id="Formimage"
                                                class="form-control form-control-lg p-3" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white status" style="font-size: 23px">Status
                                            </label>
                                            <select name="status" id="Formstatus"
                                                class="form-select form-select-lg p-3">
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- Buttons Sign in -->
                                    <div class="d-flex justify-content-end pt-1 mb-1">
                                        <button class="btn btn-button btn-shadow text-dark px-4"
                                            type="submit">save</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="box-recommend mt-2 p-4">
                                <div class="row d-flex justify-content-start ">
                                    <div class="col-1 d-flex justify-content-start ps-4">
                                        <h5 style="font-weight: 700">No</h5>
                                    </div>
                                    <div class="col-3 d-flex justify-content-center">
                                        <h5 style="font-weight: 700">Name Categories</h5>
                                    </div>
                                    <div class="col-4 d-flex justify-content-center">
                                        <h5 style="font-weight: 700">Thumbnail Image</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center">
                                        <h5 style="font-weight: 700">Status</h5>
                                    </div>
                                    <div class="col-2 d-flex justify-content-center">
                                        <h5 style="font-weight: 700">Action</h5>
                                    </div>
                                </div>
                                <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                                @php
                                    $nomor = 1;
                                @endphp
                                @foreach ($categories as $category)
                                    <div class="row d-flex justify-content-start mb-2">
                                        <div class="col-1 d-flex justify-content-start align-items-center ps-4">
                                            <h3 class="margin-bottom:0">{{ $nomor++ }}</h3>
                                        </div>
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <h5 style="font-weight: 500">{{ $category['name'] }}</h5>
                                        </div>
                                        <div class="col-4 d-flex justify-content-center align-items-center">
                                            <h5 style="font-weight: 500">
                                                {{ str_replace('images/category-image/', '', $category['image']) }}</h5>
                                        </div>
                                        <div class="col-2 d-flex justify-content-center align-items-center">
                                            <h5 style="font-weight: 500">{{ $category['status'] }}</h5>
                                        </div>
                                        <div class="col-2 d-flex justify-content-center align-items-center">
                                            <div class="col d-flex justify-content-center align-items-center">

                                                <button onclick="getData({{ $category['id'] }})" id="myBtn_Edit"
                                                    style="border: none; background-color:#EAEAEA;">
                                                    <span class="iconify me-1" data-icon="fa-solid:edit"
                                                        data-width="27"></span></button>
                                                |
                                                <a href="{{ route('admin_delete_category', $category['id']) }}"
                                                    style="border: none;"> <span class="iconify ms-2"
                                                        data-icon="bi:trash-fill" style="color: black;"
                                                        data-width="25"></span></a>
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
        let category = @json($categoriesById);

        function getData(id) {

            document.getElementById("Formname").value = category[id]['name']
            document.getElementById("Formstatus").value = category[id]['status']
            document.getElementById("Formid").value = id


        }
    </script>
@endsection
