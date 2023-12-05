<script>
import axios from 'axios'
import result from './result.vue'
export default {
    components: {
        result
    },
    props: ['challenge', 'endCourse'],
    data() {
        return {
            questions: [],
            question: null,
            questionIndex: 0,
            intervalId: null,
            timer: 0,
        }
    },
    methods: {
        statusText(status) {
            status = parseInt(status)
            switch (status) {
                case 1:
                    return 'Easy'
                case 2:
                    return 'Middle'
                default:
                    return 'Hard'
            }
        },
        getQuestions() {
            this.questions = this.challenge.soal.map(item => {
                return {
                    ...item,
                    answer: item.answer.map(answer => {
                        return {
                            ...answer,
                            isCorrect: answer.isCorrect == "true" ? true : false,
                            isSelected: false
                        }
                    })
                }
            })
            this.question = this.questions[this.questionIndex]
            this.startTimer() 
        },
        startTimer() {
            this.intervalId = setInterval(() => {
                this.timer++;
            }, 1000);
        },
        accessImage(file) {
            if (file) {
                return `/api/apiImage/${file}`
            }
        },
        submit() {
            // check every answer is selected
            const isAllAnswerSelected = this.questions.every(question => {
                return question.answer.some(answer => answer.isSelected)
            })

            if (!isAllAnswerSelected) {
                this.$swal('Error', 'Lengkapi jawaban terlebih dahulu', 'error')
                return
            }

            // check every answer is correct
            const isAllAnswerCorrect = this.questions.every(question => {
                return question.answer.every(answer => {
                    return answer.isSelected === answer.isCorrect
                })
            })

            // stop timer
            clearInterval(this.intervalId);

            // calculate score
            console.log(isAllAnswerCorrect)
            const student = localStorage.getItem('id')
            let form = {
                challenge_id: this.questions[0].challenge.id,
                score: isAllAnswerCorrect ? parseInt(this.questions[0].challenge.difficulty) : 0,
                time: this.makeTimer
            }

            axios.post(`/api/question/${student}/student`, form).then(res => {
                this.$swal('Success', 'Berhasil submit jawaban', 'success')
                this.$emit('refresh')
            }).catch(err => {
                console.log(err)
                this.$swal('Error', 'Gagal mengirimkan jawaban', 'error')
            })
        },
        tryagain() {
            delete this.challenge.result
        },
        next() {
            this.$emit('next')
        },
    },
    computed: {
        makeTimer() {
            let minutes = Math.floor(this.timer / 60);
            let seconds = this.timer % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return minutes + ':' + seconds;
        },
    }
}
</script>
<template>
    <div>
        <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem;" v-if="!challenge?.result">
            <div class="content p-5" v-if="questions.length > 0">
                <div class="card card-quiz text-left p-4" style="margin-top: 3rem">
                    <div class="d-flex">
                        <div class="p-2 flex-grow-1">
                            <h5>{{ makeTimer }} min</h5>
                            <h3 class="fw-bold pt-n5">{{ questions[0].challenge.nama }}</h3>
                        </div>
                        <div class="p-2">
                            <div class="row">
                                <div class="col">
                                    <a class="btn btn-paging-quiz-view" v-if="questionIndex > 0"
                                        @click="questionIndex--; question = questions[questionIndex]"
                                        id="previousQuestionButton">Previous</a>
                                </div>
                                <div class="col">
                                    <a class="btn btn-paging-quiz-view" v-if="questionIndex < challenge.soal.length - 1"
                                        @click="questionIndex++; question = questions[questionIndex]"
                                        id="nextQuestionButton">Next</a>
                                </div>
                                <div class="col">
                                    <a v-if="questionIndex == challenge.soal.length - 1" @click="submit"
                                        class="btn btn-paging-quiz-view">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-9">
                        <div class="box-recommend min-height-recommend p-5">
                            <div class="d-flex justify-content-center">
                                <img :src="accessImage(question?.file)" width="300" v-if="question?.file">
                            </div>
                            <p class="my-2" style="font-size: 20px; font-weight: 500">
                                {{ question?.question }}
                            </p>

                            <div class="d-flex justify-content-start">
                                <div class="d-flex flex-column">
                                    <div v-for="(answer, index) in question?.answer" :key="index" class="d-flex my-2">
                                        <div class="p-2">
                                            <input type="radio" :name="'question-' + question.id"
                                                :checked="answer.isSelected"
                                                @click="question.answer.forEach(item => item.isSelected = false); answer.isSelected = true"
                                                v-if="question.type == 'single'" />
                                            <input type="checkbox" :checked="answer.isSelected"
                                                @click="answer.isSelected = !answer.isSelected" v-else />
                                        </div>
                                        <div class="p-2">
                                            <span style="font-size: 19px">{{ answer.answer }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box-question-number min-height-recommend p-5">
                            <h3 class="text-white">Number of Question</h3>
                            <div class="row">
                                <div class="col" v-for="(number, idx) in questions" :key="idx">
                                    <a :class="questionIndex == idx ? 'btn btn-number-question-active' : 'btn btn-number-question'"
                                        @click="questionIndex = idx; question = questions[idx]">
                                        {{ idx + 1 }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content p-5" v-else>
                <div class="box-recommend min-height-recommend p-2" style="margin-top: 3rem">
                    <div class="card card-quiz text-left m-5">
                        <div class="row p-4">
                            <div class="col-10 d-flex align-items-center">
                                <div class="row ">
                                    <h3>{{ challenge.soal[0].challenge.nama }}</h3>
                                    <p class="d-flex align-items-center">Hint can get : {{
                                        challenge.soal[0].challenge.difficulty }}</p>
                                </div>
                            </div>
                            <div class="col-2 ">
                                <div class="row d-flex align-items-center justify-content-end">
                                    <span class="d-flex justify-content-end"
                                        style="font-weight: 600; padding-right: 30px;">{{
                                            statusText(challenge.soal[0].challenge.difficulty) }}</span>
                                    <div class="div d-flex align-items-center justify-content-end" @click="getQuestions">
                                        <a class="btn btn-certificate-view">Start</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <result :endCourse="endCourse" :challenge="challenge?.result" v-else @tryagain="tryagain" @next="next" />
    </div>
</template>
<style>
.box-question-number {
    border-radius: 10px;
    background: #A3A3A3;
    margin-left: -30px;
}

.btn-number-question {
    /* rounded border with bg-color gray and color text black */
    background: #D9D9D9;
    /* Background color */
    color: black;
    /* Text color */
    font-size: 20px;
    font-weight: 500;
    width: 60px;
    /* Set width and height to create a circle */
    height: 60px;
    line-height: 30px;
    /* Center the text vertically */
    text-align: center;
    /* Center the text horizontally */
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    /* Make it a circle with border-radius */
}

.btn-number-question-active {
    /* rounded border with bg-color gray and color text black */
    background: #D9D9D9;
    /* Background color */
    color: black;
    /* Text color */
    font-size: 20px;
    font-weight: 500;
    width: 60px;
    /* Set width and height to create a circle */
    height: 60px;
    line-height: 30px;
    /* Center the text vertically */
    text-align: center;
    /* Center the text horizontally */
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    /* Make it a circle with border-radius */
    border: 2px solid blue;
    /* Add a blue stroke */

}

input[type=checkbox] {
    visibility: visible;
}
</style>