@extends('layouts.admin.main-admin')
@section('container')
    <section class="margin-top ">
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">

                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">Certificates | Certificate List</h3>
                    </div>

                    <div class="row p-2 d-flex justify-content-between mb-3">
                        <div class="col-3 d-flex align-items-center">
                            <h4 style="margin-bottom:0">Certificate List</h4>
                        </div>
                    </div>


                    <div class="box-recommend mt-2 p-4">
                        <div class="row d-flex justify-content-start ">
                            <div class="col-1 d-flex justify-content-start ps-5">
                                <h5 style="font-weight: 700">No</h5>
                            </div>
                            <div class="col-2 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Title</h5>
                            </div>
                            <div class="col-5 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Preview</h5>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Use In</h5>
                            </div>
                            <div class="col-1 d-flex justify-content-center">
                                <h5 style="font-weight: 700">Action</h5>
                            </div>
                        </div>
                        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                        @php
                            $nomor = 1;
                        @endphp
                        @foreach ($certificate as $c)
                            <div class="row d-flex justify-content-start mb-2">
                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <h3 class="margin-bottom:0">{{ $nomor++ }}</h3>
                                </div>
                                <div class="col-2 d-flex justify-content-center align-items-center">

                                    <h5 style="font-weight: 500">{{ $c['title'] }}</h5>

                                </div>
                                <div class="col-5 d-flex justify-content-center align-items-center">
                                    <img src="{{ URL::asset($c['background_image']) }}" alt="" width="220"
                                        height="120">
                                </div>
                                <div class="col-3 d-flex justify-content-center align-items-center">
                                    <h5 style="font-weight: 500">{{ $c['course_name'] }}</h5>
                                </div>

                                <div class="col-1 d-flex justify-content-center align-items-center">
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <a href="{{ route('admin_get_edit_certificate', ['id' => $c['id']]) }}"
                                            style="border: none; background-color:#EAEAEA;"> <span class="iconify me-1"
                                                data-icon="fa-solid:edit" style="color: black;"
                                                data-width="27"></span></a>
                                        |
                                        <a href="{{ route('admin_delete_certificate', ['id' => $c['id']]) }}"
                                            style="border: none;"> <span class="iconify ms-2" data-icon="bi:trash-fill"
                                                style="color: black;" data-width="25"></span></a>
                                    </div>
                                </div>
                            </div>
                        @endforeach


                    </div>

                </div>

            </div>

        </div>
    </section>
@endsection
