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
                                <button type="button" id="active" class="collapsible btn mb-2 btn-admin-active">
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
                    <div class="box-recommend p-4 mb-5">
                        <h3 style="margin-bottom: 0">Front Page | Account Setting</h3>
                    </div>

                    <div class="box-recommend p-4 mb-4 text-blue">
                        <h4>Account Setting</h4>
                        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                        <form action="{{ route('admin_save_account_content') }}" method="POST" class="form_frontpage"
                            enctype="multipart/form-data">
                            @csrf

                            <div class="col ps-3">
                                <div class="row mb-3">
                                    <label class="mb-2" style="font-size: 23px">Logo Image Default</label>
                                    <div class="col-3">
                                        @if ($account)
                                            <img src="/{{ $account['image'] }}"alt="" height="120px">
                                        @else
                                            <img src="{{ URL::asset('images/icon_golearn.png') }}"alt=""
                                                height="120px">
                                        @endif
                                    </div>
                                    <div class="col d-flex align-items-center">
                                        <input type="file" name="image" id="Formimage"
                                            class="form-control form-control-lg " />
                                    </div>
                                </div>

                            </div>

                            <div class="col ps-3">
                                <div class="form-group mb-2">
                                    <label class="form-label " style="font-size: 23px">Site Name</label>
                                    <input type="text" name="site_name" id="site_name"
                                        class="form-control form-control-lg "
                                        value="{{ $account ? $account['site_name'] : '' }}" required />

                                </div>

                            </div>
                            <div class="col ps-3">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Email</label>
                                            <input type="email" name="email" id="email"
                                                value="{{ $account ? $account['email'] : '' }}" required
                                                class="form-control form-control-lg " />

                                        </div>

                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Phone</label>
                                            <input type="tel" name="phone" id="phone"
                                                value="{{ $account ? $account['phone'] : '' }}" required
                                                class="form-control form-control-lg " />

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col ps-3">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Country</label>
                                            <input type="text" name="country" id="country"
                                                value="{{ $account ? $account['country'] : '' }}" required
                                                class="form-control form-control-lg " />

                                        </div>

                                    </div>
                                    <div class="col">
                                        <div class="form-group mb-2">
                                            <label class="form-label " style="font-size: 23px">Address</label>
                                            <input type="text" name="address" id="address"
                                                value="{{ $account ? $account['address'] : '' }}" required
                                                class="form-control form-control-lg " />

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end pt-1  mt-5 mb-1">
                                <button class="btn btn-button btn-shadow text-dark px-4" type="submit">Save
                                    Setting</button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>

        </div>
    </section>
@endsection
