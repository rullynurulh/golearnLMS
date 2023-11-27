@extends('layouts.student.main-student')
@section('container')
    @vite('resources/css/app.css')

    <section class="margin-top">
        <div class="bg-white" style="padding-bottom: 9rem">
            <div id="app"></div>
        </div>
    </section>
    @vite('resources/js/app.js')
@endsection
