@extends('layouts.main')
@section('container')
    <section class="margin-top">
        <div class="bg-image-jumbotron" style="padding-bottom: 9rem">
            <div class="content p-5">
                <div class=" padding-center mb-5 pt-5">
                    <div class="row d-flex justify-content-between p-5">
                        <div class="col-7 px-5 mb-5" data-aos="fade-right">
                           <p class="text-white" style="font-size: 50px;">Lorem ipsum dolor </p>
                            <p class="text-white" style="text-align: justify; line-height: 1.1em; font-size:37px; width: 700px">Lorem ipsum dolor sit amet consectetur. Eros ullamcorper consectetur pretium egestas turpis. Mattis ornare vitae enim a sit accumsan.</p>
                        </div>
                        <div class="row">
                            <div class="col px-5 d-flex justify-content-start">
                                    <div class="btn btn-button me-5 p-4" style="font-size: 35px">Read More</div>
                                
                                    <div class="btn btn-button p-4" style="font-size: 35px">Get Started</div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="container">
            <div class="row" style="margin-top: -4rem;">
                <div class="pop-up-ads">
                    <div class="row d-flex justify-content-between" style="padding: 2rem;">
                        <div class="col-3 d-flex align-items-center" style="margin-bottom: 8rem">
                            <h1 class="text-white" style="margin: 0px;">Best Platform To learn Everything
                            </h1>
                        </div>
                        <div class="col-7 ">
                            
                                <div class="swiper" style="margin-right: 0px" >
                                    <!-- Additional required wrapper -->
                                    <div class="swiper-wrapper">
                                      <!-- Slides -->
                                      <div class="swiper-slide">
                                        <div class="card text-left">
                                            <img class="card-img-top" src="holder.js/100px180/" alt="">
                                            <div class="card-body">
                                              <h4 class="card-title">Title</h4>
                                              <p class="card-text">Body</p>
                                            </div>
                                          </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="card text-left">
                                            <img class="card-img-top" src="holder.js/100px180/" alt="">
                                            <div class="card-body">
                                              <h4 class="card-title">Title</h4>
                                              <p class="card-text">Body</p>
                                            </div>
                                          </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="card text-left">
                                            <img class="card-img-top" src="holder.js/100px180/" alt="">
                                            <div class="card-body">
                                              <h4 class="card-title">Title</h4>
                                              <p class="card-text">Body</p>
                                            </div>
                                          </div>
                                      </div>
                                      ...
                                    </div>
                                    <!-- If we need pagination -->
                                   
                                    
                                </div>
                                  
                                <!-- If we need navigation buttons -->
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                                
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="content mt-5">
            
            <div class=" padding-center">
                <div class="row d-flex px-5">
                    <div class="col" data-aos="fade-right">
                        <h2 >About Us</h2>
                        <hr style="width: 5.5rem; height: 0.15rem; color: #EACB27">
                        
                            
                    </div>
                    <div class="col" data-aos="fade-left" >
                        <div  class="image-logo" style="top:-2rem">
                            <img src="images/img-computer.png" alt="" style="width: 23rem;">
                        </div>
                        

                    </div>

                </div>
            </div>
            
        </div>
        <div class="content">
            <div class=" padding-center mt-5">
                <div class="row d-flex justify-content-between">
                    <div class="col-2 d-flex justify-content-center ms-5" data-aos="fade-up" data-aos-duration="500"
                        data-aos-delay="500">
                        <div class="image-logo" style="left:23rem; top:0rem">
                            <img src="images/logoupi.png" alt="logo"
                                    style="width: 16rem; opacity: 0.2;">
                        </div>
                        <h1 class="ms-5" style="display: flex;font-weight: 600; font-size: 4rem; align-items: center;">3
                            TAHAP PENTING
                        </h1>
                    </div>
                    <div class="col-9 ms-5" data-aos="fade-left" data-aos-duration="500" data-aos-delay="800">
                        <h4 style="margin-left: 20rem; text-align: justify; word-spacing: 0.5em; line-height: 1.5em">Ada 3 tahapan penting bagi para Casis/Catar agar dapat LULUS TERPILIH
                            dalam seleksi penerimaan anggota POLRI. 3 tahap tersebut memiliki bobot nilai
                            yang akan menentukan Ranking/ peringkat calon peserta. sehingga calon
                            peserta harus berlomba untuk bersaing mendapatkan kuota penerimaan
                            anggota Polri.</h4>
                        <div class="d-flex justify-content-end">
                            <div class="row d-flex justify-content-end mt-4">
                                <span class="block" style="background-color:#E8D1AE">
                                    <div class="col text-center ">
                                        <h2 class="mt-5 fw-bold">Akademik</h2>
                                        <h3 class="my-4">Bobot Nilai</h3>
                                        <h2 class="my-4">35%</h2>
                                    </div>
                                </span>
                                <span class="block" style="background-color:#DBBF94">
                                    <div class="col text-center">
                                        <h2 class="mt-5 fw-bold">Psikotes</h2>
                                        <h3 class="my-4">Bobot Nilai</h3>
                                        <h2 class="my-4">35%</h2>
                                    </div>
                                </span>
                                <span class="block" style="background-color:#CDAD7D">
                                    <div class="col text-center">
                                        <h2 class="mt-5 fw-bold">Jasmani</h2>
                                        <h3 class="my-4">Bobot Nilai</h3>
                                        <h2 class="my-4">30%</h2>
                                    </div>
                                </span>
                                <div>
                                    <h5 class="text-end mt-3">*Berdasarkan surat kapolri tahun 2022 untuk Bintara PTU</h5>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>

        <div class="content padding-center mt-5">
            <div class="row ">
                <div class="col-6 d-flex justify-content-center" data-aos="zoom-in-right" data-aos-duration="600"
                    data-aos-delay="300">
                    <img src="images/img-homepage-1.jpg" alt="" height="400px">
                </div>
                <div class="col-6" data-aos="zoom-in-left" data-aos-duration="600" data-aos-delay="300">
                    <div class="image-logo">
                        <img src="images/logoupi.png" alt="logo"
                                style="width: 10rem; opacity: 0.2;">
                    </div>
                    <h1 style="margin-top:-3.7rem; font-weight: 700;">CASISLAB.COM</h1>
                    <h4 style="text-align: justify; word-spacing: 0.5em; line-height: 1.5em">Dalam website ini, kami menyediakan layanan
                        simulasi CAT khusus teman-teman yang ingin
                        mengikuti seleksi penerimaan POLRI 2023.
                        Fasilitas dan layanan yang tersedia saat ini
                        sebagai berikut :
                    </h4>

                    <ul class="mt-3" style="list-style-type: none; margin-left: -2rem;">
                        <li class="benefit">
                            <h5><span class="iconify" data-icon="ion:school-outline" data-width="30" data-height="30">
                                </span> Simulasi CAT psikotes polri (Akpol, Bintara, Tamtama & SIPSS)</h5>

                        </li>
                        <li class="benefit">
                            <h5><span class="iconify" data-icon="ion:school-outline" data-width="30" data-height="30">
                                </span> Simulasi CAT Akademik polri (Akpol, Bintara, Tamtama & SIPSS)</h5>
                        </li>


                        <li class="benefit">
                            <h5>
                                <span class="iconify" data-icon="ion:school-outline" data-width="30" data-height="30">
                                </span> Simulasi Tes Kecermatan polri (angka, huruf & simbol hilang)
                            </h5>
                        </li>


                        <li class="benefit">
                            <h5>
                                <span class="iconify" data-icon="ion:school-outline" data-width="30" data-height="30">
                                </span> Paket soal dan kunci jawaban
                            </h5>

                        </li>
                        <li class="benefit">
                            <h5>
                                <span class="iconify" data-icon="ion:school-outline" data-width="30" data-height="30">
                                </span> Try out bersama
                            </h5>
                        </li>


                        <li class="benefit">
                            <h5>
                                <span class="iconify" data-icon="ion:school-outline" data-width="30" data-height="30">
                                </span> Update imformasi seputar penerimaan polri.
                            </h5>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
        <div class="bg-about-casis">
            <div class="content padding-center mt-4">
                <section class="home-testimonial">
                    <div class="container-fluid">
                        <div class="row d-flex justify-content-center testimonial-pos">
                            <div class="col-md-12 d-flex justify-content-center">
                                <h3>APA KATA MEREKA</h3>
                            </div>
                            <div class="col-md-12 d-flex justify-content-center">
                                <h2>TENTANG CASISLAB</h2>
                            </div>
                        </div>
                        <section class="home-testimonial-bottom">                         
                            <div class=" testimonial-inner">
                                <div class="swiper mySwiper" style="width: 100% !important; height: 100% !important;">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide " style="text-align: center;
                                      font-size: 18px;
                                      background: #fff;
                                      display: flex;
                                      justify-content: center;
                                      align-items: center;
                                      
                                      display: -webkit-box;
                                        display: -ms-flexbox;
                                        display: -webkit-flex;
                                        display: flex;
                                        -webkit-box-pack: center;
                                        -ms-flex-pack: center;
                                        -webkit-justify-content: center;
                                        justify-content: center;
                                        -webkit-box-align: center;
                                        -ms-flex-align: center;
                                        -webkit-align-items: center;
                                        align-items: center;">
                                            <div class="col style-3 me-2 " data-aos="flip-left" data-aos-duration="500"data-aos-delay="300">
                                                <div class="tour-item ">
                                                    <div class="row tour-desc bg-white me-2">
                                                        <div class="tour-text color-grey-3 text-center">&ldquo;Materi yang disampaikan sangat lengkap dan relevan Sehingga saya berhasil mendapatkan hasil yang memuaskan. Terimakasih casislab&rdquo;</div>
                                                        <div class="row d-flex align-items-end">
                                                            <div class="link-name d-flex justify-content-center"><span class="iconify me-1 " data-icon="uil:instagram" data-width="24"></span> m.shalli_firrizq
                                                            </div>
                                                            <div class="link-position d-flex justify-content-center">Alumni CasisLab</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                      </div>
                                      <div class="swiper-slide ">
                                        <div class="col style-3 me-2 "  data-aos="flip-left" data-aos-duration="500"data-aos-delay="300">
                                            <div class="tour-item ">
                                                <div class="row tour-desc bg-white me-2">
                                                    <div class="tour-text color-grey-3 text-center">&ldquo;Setelah mengikuti simulasi CAT casislab, saya merasa lebih siap dan percaya diri menghadapi tes dan alhamdulillah saya diterima mengikuti pendidikan di sepolwan tahun ini. Terimakasih casislab.&rdquo;</div>
                                                    <div class="row d-flex align-items-end">
                                                        <div class="link-name d-flex justify-content-center"><span class="iconify me-1" data-icon="uil:instagram" data-width="24"></span>  hadyarainaaa
                                                        </div>
                                                        <div class="link-position d-flex justify-content-center">Alumni CasisLab</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide ">
                                        <div class="col style-3 me-2 "  data-aos="flip-left" data-aos-duration="500"data-aos-delay="300">
                                            <div class="tour-item ">
                                                <div class="row tour-desc bg-white me-2">
                                                    <div class="tour-text color-grey-3 text-center">&ldquo;Materi dan soal yang sangat mirip dan relevan. Membuat ketakutan saya terhadap tes psi dan akademik hilang. Terimakasih casislab.&rdquo;</div>
                                                    <div class="row d-flex align-items-end">
                                                        <div class="link-name d-flex justify-content-center"><span class="iconify me-1" data-icon="uil:instagram" data-width="24"></span>  mhdmaulanadndi
                                                        </div>
                                                        <div class="link-position d-flex justify-content-center">Alumni CasisLab</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide ">
                                        <div class="col style-3 me-2 "  data-aos="flip-left" data-aos-duration="500"data-aos-delay="300">
                                            <div class="tour-item ">
                                                <div class="row tour-desc bg-white me-2">
                                                    <div class="tour-text color-grey-3 text-center">&ldquo;Tutor nya asik dan kece. Bikin materi pembelajaran terasa mudah dimengerti.  Kalian wajib ikutan bimbel nya juga. terimkasih casislab&rdquo;</div>
                                                    <div class="row d-flex align-items-end">
                                                        <div class="link-name d-flex justify-content-center"><span class="iconify me-1" data-icon="uil:instagram" data-width="24"></span> ffr.nanda
                                                        </div>
                                                        <div class="link-position d-flex justify-content-center">Alumni CasisLab</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide ">
                                        <div class="col style-3 me-2 "  data-aos="flip-left" data-aos-duration="500"data-aos-delay="300">
                                            <div class="tour-item ">
                                                <div class="row tour-desc bg-white me-2">
                                                    <div class="tour-text color-grey-3 text-center">&ldquo;Alhamdulillah setelah belajar menggunakan simulasi CAT dicasislab, saya merasa lebih yakin dan percaya diri menghadapi tes polri. Terimakasih casislab.&rdquo;</div>
                                                    <div class="row d-flex align-items-end">
                                                        <div class="link-name d-flex justify-content-center"><span class="iconify me-1" data-icon="uil:instagram" data-width="24"></span> lucky.ardnsyh
                                                        </div>
                                                        <div class="link-position d-flex justify-content-center">Alumni CasisLab</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide ">
                                        <div class="col style-3 me-2 "  data-aos="flip-left" data-aos-duration="500"data-aos-delay="300">
                                            <div class="tour-item ">
                                                <div class="row tour-desc bg-white me-2">
                                                    <div class="tour-text color-grey-3 text-center">&ldquo;Mantap banget simulasi CAT di casislab. Soalnya mirip pas tes. Alhamdulillah saya pendidikan tahun ini. Terimakasih casislab.&rdquo;</div>
                                                    <div class="row d-flex align-items-end">
                                                        <div class="link-name d-flex justify-content-center"><span class="iconify me-1" data-icon="uil:instagram" data-width="24"></span> rulliaprialdin
                                                        </div>
                                                        <div class="link-position d-flex justify-content-center">Alumni CasisLab</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide ">
                                        <div class="col style-3 me-2 "  data-aos="flip-left" data-aos-duration="500"data-aos-delay="300">
                                            <div class="tour-item ">
                                                <div class="row tour-desc bg-white me-2">
                                                    <div class="tour-text color-grey-3 text-center">&ldquo;Simulasi CAT casislab keren banget. Mirip seperti saat tes. Saya jadi lebih PD menghadapi tes psi nya. Terimakasih casislab.&rdquo;</div>
                                                    <div class="row d-flex align-items-end">
                                                        <div class="link-name d-flex justify-content-center"><span class="iconify me-1" data-icon="uil:instagram" data-width="24"></span> prodeo__
                                                        </div>
                                                        <div class="link-position d-flex justify-content-center">Alumni CasisLab</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </section>
                </section>
            </div>
        </div>

    </section>
@endsection
