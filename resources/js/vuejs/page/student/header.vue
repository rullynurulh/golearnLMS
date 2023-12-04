
<script>
import CircularProgress from '../../components/CircularProgress.vue'
export default {
    props: ['progress', 'cekAllCourse'],
    components: {
        CircularProgress
    },
    methods: {
        back() {
            window.location.href = '/student'
        },
        next() {
            this.$emit('next')
        },
        previous() {
            this.$emit('previous')
        }
    },
}
</script>
<template>
    <div class="nav-course">
        <div class="row d-flex justify-content-between px-3 py-2">
            <div class="col-4 d-flex align-items-center">
                <div class="row d-flex align-items-center">
                    <div class="col-1 mx-3">
                        <span class="iconify" data-icon="icon-park-solid:back" data-width="40"></span>
                    </div>
                    <div class="col d-flex align-items-center ms-3">
                        <h4 style="margin-bottom: 0">Figma Tutorial</h4>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="row d-flex justify-content-end">
                    <div class="col-2 me-5" id="endCourse" v-if="cekAllCourse">
                        <a class="btn btn-button" style="min-width: 130px" href="/student">End Course</a>
                    </div>
                    <div class="col-2 me-3">
                        <a @click="previous" class="btn btn-button" style="min-width: 100px"
                            id="previousCourseButton">Previous</a>
                    </div>
                    <div class="col-2" v-if="!cekAllCourse">
                        <a @click="next" class="btn btn-button" style="min-width: 100px" id="nextCourseButton">
                            Next </a>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center">
                        <circular-progress :progress-end-value="progress" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
.bg-custom-header {
    background-color: #EAEAEA;
}

.header-title {
    font-size: 25px;
    margin-left: 20px;
}

</style>