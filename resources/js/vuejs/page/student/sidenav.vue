<script>
export default {
    props: ['courses', 'isDisableNext', 'curriculumActive'],
    methods: {
        checkCourse(course) {
            // if visited all curriculum true return true
            return course.curriculum.every((curriculum) => curriculum.isVisited)
        },
        selectCurriculum(curriculum, key, curKey) {
            if (key > 1) {
                // cek curriculum sebelumnya next true, lewati jika category challenge
                let cekAllIndexNextIsTrueExceptCategoryChallenge = this.courses[key - 1].curriculum.every((curriculum) => {
                    return curriculum.category !== 'challenge' ? curriculum.next : true;
                });

                cekAllIndexNextIsTrueExceptCategoryChallenge ? this.$emit('openCurriculum', curriculum) : ''

            } else {
                // cek curriculum sebelumnya
                if (curKey != 0) {
                    let cekCurriculumBefore = this.courses[key].curriculum[curKey - 1].next
                    cekCurriculumBefore ? this.$emit('openCurriculum', curriculum) : ''
                    // console.log("cekCurriculumBefore", cekCurriculumBefore)
                }

                if( curriculum.category == 'challenge' ) {
                    this.$emit('openCurriculum', curriculum)
                }
            }

            if (curriculum.next == true) {
                this.$emit('openCurriculum', curriculum)
            }
        },
        isActive(curriculum) {
          if (curriculum.id == this.curriculumActive.id) {
            return 'is-active'
          }  
        },
        cekResult(curriculum) {
            let category = curriculum.category
            switch (category) {
                case 'quiz':
                    if (curriculum?.result) {
                        if(curriculum?.result?.isPassed) {
                            return '<span class="text-success">Passed</span>'
                        } else {
                            return '<span class="text-danger">Failed</span>'
                        }
                    } else {
                        return ''
                    }
                case 'challenge':
                    if (curriculum?.result) {
                        if (curriculum?.result?.isPassed) {
                            return '<span class="text-success">Passed</span>'
                        } else {
                            return '<span class="text-danger">Failed</span>'
                        }
                    } else {
                        return ''
                    }
                default:
                    return ''
            }
        }
    },
}
</script>
<template>
    <div class="sidenav">
        <div class="content">
            <div class="row p-4">
                <section class="section-curriculum sections">
                    <article>
                        <div v-for="(course, key) in courses" :key="key" class="mb-2">
                            <button type="button" class="collapsible" @click="course.collapsed = !course.collapsed">
                                <label class="mains">
                                    <input type="checkbox" disabled="disabled" :checked="checkCourse(course)">
                                    <span class="geekmark"></span>
                                </label>
                                {{ course.name }}
                            </button>
                            <div class="content-collapse" v-if="course.collapsed">
                                <ul class="list-lesson">
                                    <li class="detail-chapter mb-2" :class="isActive(curriculum)" v-for="(curriculum, curKey) in course.curriculum"
                                        :key="curKey">
                                        <div class="d-flex align-items-center chapter-info" @click="selectCurriculum(curriculum, key, curKey)">
                                            <label class="mains">
                                                <input type="checkbox" :checked="curriculum.isVisited" disabled="disabled">
                                                <span class="geekmark"></span>
                                            </label>{{ curriculum.name }} 
                                            <span class="text-right">
                                                <div v-html="cekResult(curriculum)"></div>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>  
                        </div>
                    </article>
                </section>
            </div>
        </div>
    </div>
</template>
<style>
    .sidenav {
        height: 100%;
    }

    .chapter-info {
        cursor: pointer;
    }

    .text-right {
        margin-left: auto;
    }

    .is-active {
        background-color: #CCCCCC;
    }
</style>