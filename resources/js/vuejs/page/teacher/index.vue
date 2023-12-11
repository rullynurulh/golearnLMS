<script>
import axios from 'axios'
import DataTable from '../../components/DataTable.vue'
export default {
    components: {
        DataTable
    },
    data() {
        return {
            challenge: [],
            formchallenge: {
                nama: '',
                difficulty: '',
            },
            difficulty: {
                1: 'Easy',
                2: 'Middle',
                3: 'Hard',
            },
            headers: [
                { text: 'No', value: 'no', class: 'col-1', classItems: 'ps-4 justify-content-start', align: '', sortable: false },
                { text: 'Challenge Name', value: 'nama', class: 'col-3', classItems: 'justify-content-center' },
                { text: 'Difficulty', value: 'difficultyText' },
                { text: 'Hint Obtained', value: 'difficulty' },
                { text: 'Status', value: 'status' },
                { text: 'Action', value: 'action' },
            ]
        }
    },
    methods: {
        async getChallenge() {
            try {
                const user = localStorage.getItem('id')
                const { challenge } = await axios.get(`/api/challenge/${user}`).then(res => res.data)
                this.challenge = challenge
                // close menu quiz
                const subMenuQuiz = document.querySelectorAll('.sub-menu-wrap-quiz')
                subMenuQuiz.forEach((item) => {
                    item.classList.remove('open-menu')
                })
            } catch (error) {
                console.log(error)
            }
        },
        async addEditChallenge() {
            try {
                const cekFormNotEmty = Object.values(this.formchallenge).every(x => (x !== null && x !== ''))

                if (!cekFormNotEmty) {
                    this.$swal('Form tidak boleh kosong', '', 'error')
                    return
                }

                const user = localStorage.getItem('id')
                const { data } = await axios.post(`/api/challenge/${user}`, this.formchallenge)
                this.formchallenge = {
                    nama: '',
                    difficulty: '',
                }
                this.$swal('Data berhasil disimpan', '', 'success')
                this.getChallenge()
            } catch (error) {
                console.log(error)
                this.$swal('Gagal menyimpan data', '', 'error')
            }
        },
        difficultyText(difficulty) {
            return this.difficulty[difficulty]
        },
        statusText(status) {
            switch (status) {
                case 1:
                    return 'Draft'
                case 2:
                    return 'Saved'
                default:
                    return 'Not Solved'
            }
        },
        toggleMenuQuiz(id) {
            const subMenuQuiz = document.getElementById(`subMenuQuiz${id}`)
            subMenuQuiz.classList.toggle('open-menu')
        },
        batal() {
            this.formchallenge = {
                difficulty: '',
                nama: '',
            }
        },
        hapus(id) {
            this.$swal({
                title: 'Apakah anda yakin?',
                text: "Data yang dihapus tidak dapat dikembalikan!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F70AF',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, hapus!',
                cancelButtonText: 'Batal'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const { data } = await axios.delete(`/api/challenge/${id}`)
                        this.$swal('Data berhasil dihapus', '', 'success')
                        this.getChallenge()
                    } catch (error) {
                        console.log(error)
                        this.$swal('Gagal menghapus data', '', 'error')
                    }
                }
            })
        },
        goToQuestion(id) {
            // push name route
            this.$router.push({
                name: 'questionTeacher',
                params: {
                    id
                }
            })
        },
        viewResult(id) {
            // push name route
            this.$router.push({
                name: 'resultTeacher',
                params: {
                    id
                }
            })
        },
    },
    created() {
        this.getChallenge()
    },
}
</script>
<template>
    <div class="content p-5">
        <div class="box-recommend p-4 mb-4">
            <h3 style="margin-bottom: 0">Challenge | Add Challenge</h3>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <h3 class="ms-3 mb-4" style="margin-bottom: 0" id="titleText">Add Challenge</h3>
                <div class="box-recommend mt-2 p-4">
                    <div class="form-group mb-2">
                        <label for="" class="form-label" style="font-size: 23px;">Challenge Name</label>
                        <input type="text" class="form-control p-2" id="quizTitle" v-model="formchallenge.nama">
                    </div>
                    <div class="form-group mb-2">
                        <label for="" class="form-label" style="font-size: 23px;">Difficulty</label>
                        <select class="form-select" aria-label="Default select example" v-model="formchallenge.difficulty">
                            <option selected value="">Open this select menu</option>
                            <option v-for="(value, key) in difficulty" :key="key" :value="key">{{ value }}</option>
                        </select>
                    </div>
                    <div class="form-group mb-2">
                        <label for="" class="form-label" style="font-size: 23px;">Hint Obtained</label>
                        <input type="text" class="form-control p-2" id="quizTitle" disabled
                            v-model="formchallenge.difficulty">
                    </div>

                    <div class="d-flex justify-content-end pt-1 mb-1">
                        <button class="btn btn-button bg-danger btn-shadow text-dark px-4 me-2"
                            v-if="formchallenge.id" @click="batal">Batal</button>
                        <button class="btn btn-button btn-shadow text-dark px-4" @click="addEditChallenge">Save</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-6">
                <h3 class="ms-3 mb-4" style="margin-bottom: 0">Challenge List</h3>
                <div class="box-recommend mt-2 p-4">
                    <DataTable :headers="headers" :items="challenge">
                        <template #item.no="{ item, index }">
                            <h3 style="margin-bottom:0">
                                {{ index + 1 }}
                            </h3>
                        </template>
                        <template #item.difficultyText="{ item }">
                            <div>
                                {{ difficultyText(item.difficulty) }}
                            </div>
                        </template>
                        <template #item.status="{ item }">
                            <div>
                                {{ statusText(item.status) }}
                            </div>
                        </template>
                        <template #item.action="{ item }">
                            <div class="col d-flex justify-content-center align-items-start">
                                <button class="btn btn-action-quiz btn-shadow text-dark px-4"
                                    @click="toggleMenuQuiz(item.id)">Select</button>

                                <div class="sub-menu-wrap-quiz" :id="`subMenuQuiz${item.id}`">
                                    <div class="sub-menu-quiz">
                                        <a href="#" class="sub-menu-link" @click="viewResult(item.id)">
                                            <p style="margin: 0; text-align: end; color:#2F70AF;">View
                                                Result
                                            </p>
                                        </a>
                                        <a href="#" class="sub-menu-link" @click="goToQuestion(item.id)">
                                            <p style="margin: 0; text-align: end; color:#2F70AF;">Add Question
                                            </p>
                                        </a>
                                        <a href="#" class="sub-menu-link" @click="formchallenge = JSON.parse(JSON.stringify(item))">
                                            <p style="margin: 0; text-align: end; color:#2F70AF;">Edit
                                            </p>
                                        </a>
                                        <a href="#" class="sub-menu-link" @click="hapus(item.id)">
                                            <p style="margin: 0; text-align: end; color:#2F70AF;">Delete
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>