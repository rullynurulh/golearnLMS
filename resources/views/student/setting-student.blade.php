@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top ">
<div class="sidenav">
            <div class="content">
                <div class="row p-4">
                    <a href="/student" class="btn mb-3 btn-student-active">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student">My Course</a>
                    <a href="/student/challenge" class="btn mb-3 btn-student">Challenge</a>
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
                        <h3 style="margin-bottom: 0">Account Setting</h3>
                    </div>
                    <div class="row">

                        <div class="col">
                            <div class="box-recommend px-5 pt-4 pb-4">
                                <h4 class="text-profile">Change Password</h4>
                                <hr style="background-color: #FFF; border: 2px  #FFF solid; opacity: 1">
                                <form action="{{ route('change_password') }}" method="POST">
                                    @csrf
                                    @if (session('status'))
                                        <div class="alert alert-success" role="alert">
                                            {{ session('status') }}
                                        </div>
                                    @elseif (session('error'))
                                        <div class="alert alert-danger" role="alert">
                                            {{ session('error') }}
                                        </div>
                                    @endif
                                    <div class="form-group mb-3">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formpassword">Current Password
                                        </label><input type="password" name="old_password" id="formpassword"
                                            class="form-control" />
                                        @if ($errors->has('old_password'))
                                            <span class="text-danger">{{ $errors->first('old_password') }}</span>
                                        @endif
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="fornewpassword">New Password
                                        </label><input type="password" name="new_password" id="fornewpassword"
                                            class="form-control" />
                                        @if ($errors->has('new_password'))
                                            <span class="text-danger">{{ $errors->first('new_password') }}</span>
                                        @endif
                                    </div>
                                    <div class="form-group mb-4">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formconfirmpassword">Confirm Password
                                        </label><input type="password" name="new_password_confirmation" id="formconfirm"
                                            class="form-control" />
                                        @if ($errors->has('new_password_confirmation'))
                                            <span
                                                class="text-danger">{{ $errors->first('new_password_confirmation') }}</span>
                                        @endif
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-button" type="submit">Save</button>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection
