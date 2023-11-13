@extends('layouts.admin.main-admin')
@section('container')
    @vite('resources/js/vuejs/app.js', 'resources/css/app.css')

    <section class="margin-top">
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div id="app"></div>
            </div>
            
        </div>
    </section>
@endsection
