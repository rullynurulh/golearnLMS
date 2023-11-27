<script>
import axios from 'axios'
export default {
    data() {
        return {
            questions: [],
            formQuestion: {
                file: '',
                question: '',
                typeAnswer: 'single',
                answer: [],
            },
        }
    },
    methods: {
        changeToAbjad(n) {
            return String.fromCharCode(96 + parseInt(n))
        },
        pushAnswer() {
            for (let i = 0; i < 4; i++) {
                this.formQuestion.answer.push({
                    answer: '',
                    isCorrect: false,
                })
            }
        },
        async getQuestions() {
            try {
                const idQuiz = this.$route.params.id
                const { question } = await axios.get(`/api/quiz/${idQuiz}`).then(res => res.data)
                this.questions = question
                this.$refs.file.value = ''
            } catch (error) {
                console.log(error)
            }

        },
        async simpanQuestions() {
            const { question, typeAnswer, answer } = this.formQuestion
            const validasi = answer.filter(item => item.answer != '')
            if (question == '' || typeAnswer == '' || validasi.length < 2) {
                this.$swal('Error', 'Harap isi semua field', 'error')
                return
            }

            // jika salah satu answer masih kosong
            if (answer.filter(item => item.answer == '').length > 0) {
                this.$swal('Error', 'Harap isi semua jawaban', 'error')
                return
            }

            // jika answer belum dipilih isCorrect true
            const validasiAnswer = answer.filter(item => item.isCorrect == true)
            if (validasiAnswer.length == 0) {
                this.$swal('Error', 'Harap pilih jawaban yang benar', 'error')
                return
            }

            const idQuiz = this.$route.params.id
            const { data } = await axios.post(`/api/quiz/${idQuiz}`, this.formQuestion, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => res.data)
            this.questions.push(data)
            this.formQuestion = {
                file: '',
                question: '',
                typeAnswer: 'single',
                answer: [],
            }
            this.pushAnswer()
            this.getQuestions()
        },
        uploadGambar(file) {
            const validasi = ['image/jpeg', 'image/jpg', 'image/png']
            if (validasi.includes(file.type)) {
                this.formQuestion.file = file
            } else {
                this.$swal('Error', 'File harus berupa gambar', 'error')
                // remove file
                this.formQuestion.file = ''
                this.$refs.file.value = ''
            }
        },
        hapusJawaban(id) {
            this.$swal({
                title: 'Apakah anda yakin?',
                text: "Data yang dihapus tidak dapat dikembalikan!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await axios.delete(`/api/quiz/${id}`)
                        this.getQuestions()
                        this.$swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
        },
        publishChallenge() {
            const idQuestion = this.$route.params.id
            this.$swal({
                title: 'Apakah anda yakin?',
                text: "Data yang disimpan tidak dapat diubah!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F70AF',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, simpan!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        const data = {
                            status: 'published'
                        }
                        axios.put(`/api/quiz/${idQuestion}/changeStatus`, data)
                        this.$swal('Data berhasil disimpan', '', 'success')
                        // push name route
                        window.location.href = '/admin/add-quiz'
                    } catch (error) {
                        console.log(error)
                        this.$swal('Gagal menyimpan data', '', 'error')
                    }
                }
            })
        },
        unpublishChallenge() {
            const idQuiz = this.$route.params.id
            this.$swal({
                title: 'Apakah anda yakin?',
                text: "Data yang disimpan tidak dapat diubah!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F70AF',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, simpan!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        axios.put(`/api/quiz/${idQuiz}/changeStatus`, {
                            status: 'draft'
                        })
                        this.$swal('Data berhasil disimpan', '', 'success')
                        window.location.href = '/admin/add-quiz'
                    } catch (error) {
                        console.log(error)
                        this.$swal('Gagal menyimpan data', '', 'error')
                    }
                }
            })
        }
    },
    created() {
        this.getQuestions()
    },
    mounted() {
        this.pushAnswer()
    },
    watch: {
        'formQuestion.typeAnswer': function (val) {
            this.formQuestion.answer = []
            this.pushAnswer()
        }
    },
    computed: {
        getLastQuestion() {
            return this.questions.length + 1
        },
    }
}
</script>
<template>
    <div class="content p-5">
        <div class="box-recommend p-4 mb-5">
            <div class="d-flex">
                <div class="p-2 flex-grow-1">
                    <h3 style="margin-bottom: 0">Add Question</h3>
                </div>
                <div class="p-2">
                    <button class="btn btn-secondary btn-lg btn-shadow px-4 me-2" @click="unpublishChallenge">Draft</button>
                    <button class="btn btn-button btn-shadow px-4" @click="publishChallenge">Save</button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-7">
                <div class="box-recommend mt-2 p-4">
                    <p>Question No. <b>{{ getLastQuestion }}</b></p>
                    <div class="form-group mb-2">
                        <label for="" class="form-label">File (Optional)</label>
                        <input type="file" class="form-control p-2" ref="file" id="quizTitle"
                            @change="uploadGambar($event.target.files[0])" accept="image/*">
                    </div>
                    <label for="" class="form-label">Question</label>
                    <div class="form-group mb-2">
                        <textarea class="form-control text-black" cols="10" rows="5"
                            v-model="formQuestion.question"></textarea>
                    </div>
                    <div class="form-group mb-2 row">
                        <div class="col-auto">
                            <label for="" class="form-label">Type</label>
                        </div>
                        <div class="col-auto">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="single" v-model="formQuestion.typeAnswer">
                                <label class="form-check-label" for="inlineRadio1">Multiple Choice</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="multiple" v-model="formQuestion.typeAnswer">
                                <label class="form-check-label" for="inlineRadio2">Multiple Answer</label>
                            </div>
                        </div>
                    </div>
                    <!-- generate 4  -->
                    <div class="form-control mb-2" style="padding:0px" v-for="(answer, idx) in formQuestion.answer"
                        :key="idx">
                        <div class="d-flex row">
                            <div class="col-1 d-flex align-items-center justify-content-center" style=" position:relative;">
                                {{ changeToAbjad(idx + 1) }}.
                            </div>
                            <div class="col-10 d-flex align-items-center justify-content-start "
                                style="right: 10px; position:relative;">
                                <input type="text" name="option_a" id="option_a" class="form-control p-2 "
                                    style="border:0px" v-model="answer.answer">
                            </div>
                            <div class="col-1 d-flex align-items-center justify-content-end">
                                <input v-if="formQuestion.typeAnswer == 'single'" class="me-2 radio-answer" type="radio"
                                    style="font-size: 20px" name="answer_multiple_choice" :value="changeToAbjad(idx + 1)"
                                    :checked="answer.isCorrect"
                                    @click="formQuestion.answer.forEach((item, index) => { item.isCorrect = false }); answer.isCorrect = true">

                                <input v-if="formQuestion.typeAnswer == 'multiple'" class="me-2 checkbox-answer"
                                    type="checkbox" style="font-size: 20px" name="answer_multiple_choice"
                                    :value="changeToAbjad(idx + 1)" :checked="answer.isCorrect"
                                    @click="answer.isCorrect = !answer.isCorrect">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="box-recommend mt-2 p-4 min-height-recommend">
                    <h3 style="margin-bottom: 0">Question List</h3>
                    <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0;">
                    <div class="box-list-admin mb-2" v-for="(question, idx) in questions" :key="idx">
                        <div class="row d-flex justify-content-start">
                            <div class="col-1 d-flex justify-content-start align-items-center">
                                <h4 style="margin-bottom:0">{{ idx + 1 }}.</h4>
                            </div>
                            <div class="col-9 d-flex justify-content-start align-items-center">
                                <div class="overflow-ecilips "
                                    style=" overflow: hidden; text-overflow: ellipsis ; white-space: nowrap;  ">
                                    <h5 style="font-weight: 500; margin-bottom:0; ">
                                        {{ question.question }}
                                    </h5>

                                </div>
                            </div>
                            <div class="col-2 d-flex justify-content-end align-items-center">
                                <div class="col d-flex justify-content-end align-items-center">
                                    <a href="#" @click="hapusJawaban(question.id)" style="border: none;">
                                        <span class="iconify ms-2" data-icon="ph:x-bold" style="color: red;"
                                            data-width="25"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-button btn-shadow" @click="simpanQuestions">Add New</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>