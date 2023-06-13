<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="{{ URL::asset('app.css') }}" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
</head>

<body>

    <section class="vh-100" style="
        background-image: url('images/2.jpeg');
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        ">
        <a href="/"
            style="position: absolute;
        left: 1rem;
        top: 1rem;
        z-index: 1;
        font-size: 30px;
        text-decoration: none;">
            < </a>
                <div class="container-fluid">
                    <div class="row bg-image p-5" >
                        <!-- Kolom Image -->
                        <div class="row">
                            <div class="px-5 ms-xl-4 mt-5 text-center " style="font-weight: 700">
                                <img src="{{ URL::asset('images/logoupi.png') }}"
                                    width="35%" alt="">
                                <h1 style="color: #048ACF; font-weight: 700">Welcome to</h1>
                                <h1 style="color: var(--primary3); font-weight: 700">Go-Learn! App</h1>
                                <h5 class="text-white">Silahkan masuk dengan Akun Anda.</h5>
                                <!-- <h1 style="font-weight: 700;">Casis Lab</h1> -->
                            </div>
                        </div>

                        <!-- Kolom Login -->
                        <div class="row">
                            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                                <div class="text-center mt-5">
                                    <h1 class="text-white">LOGIN</h1>
                                    <h4 class="text-white">
                                        SILAHKAN MASUKKAN USERNAME
                                        <br>
                                        DAN PASSWORD ANDA
                                    </h2>
                                
                                <div class="h-custom-2 px-5 ms-xl-4 mt-4 pt-5 pt-xl-0 mt-xl-n5">
                                    <form style="width: 25rem;" action="" method="post">
                                        @csrf
                                        @if (session()->has('message'))
                                            <p style="color: red !important; padding-left: 5px;">
                                                {{ session()->get('message') }}
                                            </p>
                                        @endif
                                        <!-- Email -->
                                        <div class="form-floating mb-2">
                                            <input type="email" name="email" id="fromEmailLogin"
                                                class="form-control form-control-lg" placeholder="name@example.com" />
                                            <label class="form-label text-dark" for="fromEmailLogin">Alamat Email</label>
                                        </div>
                                        <!-- Password -->
                                        <div class="form-floating mb-3">
                                            <input type="password" name="password" id="formPassLogin"
                                                class="form-control form-control-lg" placeholder="Password" />
                                            <label class="form-label text-dark" for="formPassLogin">Password</label>
                                        </div>
                                        <!-- Buttons Login -->
                                        <div class="d-flex justify-content-center pt-1 mb-4">

                                            <button class="btn btn-primary btn-shadow text-white"
                                                style="width: 200px !important; padding-top: 0.7rem; padding-bottom: 0.7rem;border-radius: 25px !important;"
                                                type="submit">Masuk</button>
                                        </div>
                                        <p class="text-center">Belum punya akun?</p>
                                        <!-- Buttons Register -->
                                        <div class="d-flex justify-content-center pt-1 mb-4">
                                            <a class="btn btn-success btn-shadow-success text-white" href="/register" role="button"
                                            style="width: 200px !important; padding-top: 0.7rem; padding-bottom: 0.7rem;border-radius: 25px !important;">
                                                Daftar<br>Sekarang
                                            </a>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</body>

</html>
