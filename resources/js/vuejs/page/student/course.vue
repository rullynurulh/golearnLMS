<script>
import axios from 'axios'
import Header from './header.vue'
import sidenav from './sidenav.vue'
import lesson from './lesson/index.vue'
import quiz from './quiz/index.vue'
export default {
    components: {
        Header,
        sidenav,
        lesson,
        quiz
    },
    data() {
        return {
            courses: [],
            progress: 0,
            loading: false,
            curriculumSelected: null,
            groupedByChapter: {},
            isHeader: false,
            endCourse: false
        }
    },
    methods: {
        async getCourse() {
            try {
                this.loading = true
                const student = localStorage.getItem('id')
                const id = this.$route.params.id
                const { data } = await axios.get(`/api/student/course/${student}/${id}`)
                this.courses = data.curriculum.map(item => {
                    return {
                        ...item,
                        enrolled: data.enrolled?.id,
                    }
                })
                this.progress = data.progress

                this.kelompokkanByChapter()

                if (this.curriculumSelected?.challenge != 'challenge' && !this.isHeader) {
                    this.setCurriculumFirst()
                }

                this.endCourseAktivation()
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        },
        kelompokkanByChapter() {
            let groupedByChapter = {}

            this.courses.forEach(item => {
                const { id, courses, name, created_at, updated_at } = item.chapter;
                const chapterId = id

                if (!groupedByChapter[chapterId]) {
                    groupedByChapter[chapterId] = {
                        id,
                        courses,
                        name,
                        created_at,
                        updated_at,
                        curriculum: [],
                        collapsed: true
                    }
                }

                // add collapsed object key 
                groupedByChapter[chapterId].curriculum.push(item)
            })

            this.groupedByChapter = groupedByChapter

        },
        setCurriculumFirst() {
            if (this.courses[0].next == false) {
                this.visitedCourse(this.courses[0], true)
            } else {
                const data = this.groupedByChapter
                // Fungsi untuk memecah curriculum
                const curriculum = Object.keys(data).reduce((acc, chapterId) => {
                    const chapter = data[chapterId];
                    const filteredCurriculum = chapter.curriculum.filter(item => item.category !== "challenge");

                    const mappedCurriculum = chapter.curriculum.map(item => ({
                        ...item,
                        chapter: {
                            id: chapter.id,
                            name: chapter.name,
                            created_at: chapter.created_at,
                            updated_at: chapter.updated_at,
                        },
                    }));

                    return [...acc, ...mappedCurriculum];
                }, []);


                // cek curriculum terakhir yang next true
                const curriculumLast = curriculum.findLastIndex((item) => item.next == true)

                this.curriculumSelected = curriculum[curriculumLast]
            }
        },
        async visitedCourse(currSelected, next) {
            try {
                let curriculum = currSelected.id
                let enrolled = currSelected.enrolled
                await axios.post(`/api/student/visitedCourse`, {
                    curriculum,
                    enrolled,
                    next
                })
                if (currSelected.category == "challenge") {
                    this.curriculumSelected = currSelected
                }

                this.getCourse()
            } catch (error) {
                console.log(error)
            }
        },
        openCurriculum(curriculum) {
            if (this.curriculumSelected?.id != curriculum?.id) {
                this.isHeader = false
                if (curriculum.next == false) {
                    this.visitedCourse(curriculum, true)
                } else {
                    this.curriculumSelected = curriculum
                }
            }
            this.endCourseAktivation()
        },
        previous() {
            this.isHeader = true
            // find index curriculumSelected on groupedByChapter
            let curriculumSelectedIndex = this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum.findIndex(item => item.id == this.curriculumSelected.id)
            // cek curriculumSelectedIndex is not 0
            if (curriculumSelectedIndex != 0) {
                // get curriculumSelectedIndex - 1
                let curriculumSelected = this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum[curriculumSelectedIndex - 1]
                // cek curriculumSelected is challenge
                if (curriculumSelected.category == "challenge") {
                    // set curriculumSelected
                    this.curriculumSelected = curriculumSelected
                } else {
                    // set curriculumSelected
                    if (curriculumSelected.next == true) {
                        this.curriculumSelected = curriculumSelected
                    } else {
                        this.curriculumSelected = curriculumSelected
                        this.visitedCourse(curriculumSelected, true)
                    }
                }
            } else {
                // get last curriculum curriculumSelectedIndex
                let chapterIndex = Object.keys(this.groupedByChapter).findIndex(item => item == this.curriculumSelected.chapter.id)
                if (chapterIndex != 0) {
                    let lastCurriculum = this.groupedByChapter[Object.keys(this.groupedByChapter)[chapterIndex - 1]].curriculum.length - 1
                    let curriculumSelected = this.groupedByChapter[Object.keys(this.groupedByChapter)[chapterIndex - 1]].curriculum[lastCurriculum]
                    this.curriculumSelected = curriculumSelected
                }
            }
            this.endCourseAktivation()
        },
        next() {
            this.isHeader = true
            // find index curriculumSelected on groupedByChapter
            let curriculumSelectedIndex = this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum.findIndex(item => item.id == this.curriculumSelected.id)
            // get last curriculum on groupedByChapter
            let lastCurriculum = this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum.length - 1
            // cek curriculumSelectedIndex is not lastCurriculum
            if (curriculumSelectedIndex != lastCurriculum) {
                // get curriculumSelectedIndex + 1
                let curriculumSelected = this.groupedByChapter[this.curriculumSelected.chapter.id].curriculum[curriculumSelectedIndex + 1]
                // cek curriculumSelected is challenge
                if (curriculumSelected.category == "challenge") {
                    // set curriculumSelected
                    this.curriculumSelected = curriculumSelected
                } else {
                    // set curriculumSelected
                    if (curriculumSelected.next == true) {
                        this.curriculumSelected = curriculumSelected
                    } else {
                        this.curriculumSelected = curriculumSelected
                        this.visitedCourse(curriculumSelected, true)
                    }
                }
            } else {
                // get first curriculum curriculumSelectedIndex
                let chapterIndex = Object.keys(this.groupedByChapter).findIndex(item => item == this.curriculumSelected.chapter.id)
                if (chapterIndex != Object.keys(this.groupedByChapter).length - 1) {
                    let curriculumSelected = this.groupedByChapter[Object.keys(this.groupedByChapter)[chapterIndex + 1]].curriculum[0]
                    this.curriculumSelected = curriculumSelected
                    if (curriculumSelected.next == false) {
                        this.visitedCourse(curriculumSelected, true)
                    }
                }
            }

            this.endCourseAktivation()
        },
        endCourseAktivation() {
            // detect last Object
            const data = this.groupedByChapter
            // Fungsi untuk memecah curriculum
            const curriculum = Object.keys(data).reduce((acc, chapterId) => {
                const chapter = data[chapterId];

                const mappedCurriculum = chapter.curriculum.map(item => ({
                    ...item,
                    chapter: {
                        id: chapter.id,
                        name: chapter.name,
                        created_at: chapter.created_at,
                        updated_at: chapter.updated_at,
                    },
                }));

                return [...acc, ...mappedCurriculum];
            }, []);

            // cek all next is true
            const nextTrue = curriculum.filter(item => item.next == true)

            if (nextTrue.length == curriculum.length) {
                if (this.curriculumSelected.id == nextTrue[nextTrue.length - 1].id) {
                    this.endCourse = true
                } else {
                    this.endCourse = false
                }
            }
        }
    },
    created() {
        this.getCourse()
    },
}
</script>
<template>
    <div>
        <div v-if="!loading">
            <Header :progress="progress" :cekAllCourse="endCourse" @previous="previous" @next="next" />
            <sidenav :courses="groupedByChapter" @refresh="getCourse" @openCurriculum="openCurriculum" />

            <div class="margin-left">
                <lesson :lesson="curriculumSelected" v-if="curriculumSelected?.category == 'lesson'" />
                <quiz :quiz="curriculumSelected" v-else-if="curriculumSelected?.category == 'quiz'" @refresh="getCourse" @next="next" />
            </div>
        </div>

    </div>
</template>