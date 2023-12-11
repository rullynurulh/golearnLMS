<script>
export default {
    props: ['lesson'],
    methods: {
        thisUrlPDF(link) {
            // get url application
            let url = window.location.origin;
            // get url pdf
            let urlPDF = url + '/' + link;
            return urlPDF;
        }
    },
}
</script>
<template>
    <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem;">
        <div class="content p-5">
            <div class="box-recommend min-height-recommend p-2" style="margin-top: 3rem">
                <div class="container p-5 d-flex justify-content-center align-items-center" v-if="lesson?.soal.source">
                    <iframe width="1300px" height="600px" :src="lesson?.soal.source" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                </div>
                <div class="container p-5 d-flex justify-content-center align-items-center" v-else>
                    <div>
                        <object :data="thisUrlPDF(lesson.soal.file)" type="application/pdf" width="1080"
                                            height="678">
                            <p>
                                Your browser does not support PDFs.
                                <a :href="thisUrlPDF(lesson.soal.file)">Download the PDF</a>
                                .
                            </p>
                        </object>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>