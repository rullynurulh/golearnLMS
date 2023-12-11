<script>
import axios from 'axios'
import result from './result.vue'
export default {
    components: {
        result
    },
    props: ['quiz', 'endCourse'],
    data() {
        return {
            questions: [],
            question: null,
            questionIndex: 0,
            intervalId: null,
            timer: 0,
            timerSoal: 0,
        }
    },
    methods: {
        accessImage(file) {
            if (file) {
                return `/api/apiImage/${file}`
            }
        },
        getQuestion() {
            this.questions = this.quiz.soal.map(item => {
                return {
                    ...item,
                    answer: item.answer.map(answer => {
                        return {
                            ...answer,
                            isSelected: false
                        }
                    })
                }
            })
            this.question = this.questions[this.questionIndex]
            this.startTimer();
            this.hitungMundur();
        },
        startTimer() {
            this.intervalId = setInterval(() => {
                this.timer++;
            }, 1000);
        },
        hitungMundur() {
            // quiz.soal[0].minutes
            this.timerSoal = this.questions[0].minutes * 60;
            this.intervalId = setInterval(() => {
                if (this.timerSoal > 0) {
                    this.timerSoal--;
                } else {
                    this.submit();
                }
            }, 1000);
        },
        async submit() {
            // check every answer is selected or not undefined
            const isAllAnswerSelected = this.questions.every(question => {
                return question.answer.some(answer => answer.isSelected)
            })

            if (!isAllAnswerSelected && this.timerSoal > 0) {
                this.$swal('Error', 'Lengkapi jawaban terlebih dahulu', 'error')
                return
            }


            clearInterval(this.intervalId);

            let correct_answer = 0
            let wrong_answer = 0

            this.questions.forEach(question => {
                if (question.type == 'single') {
                    const isCorrect = question.answer.some(answer => answer.isSelected && answer.isCorrect)
                    if (isCorrect) {
                        correct_answer++
                    } else {
                        wrong_answer++
                    }
                } else {
                    const isCorrect = question.answer.every(answer => answer.isSelected == answer.isCorrect)
                    if (isCorrect) {
                        correct_answer++
                    } else {
                        wrong_answer++
                    }
                }
            })

            const conversionTime = () => {
                let time = this.questions[0].minutes * 60;
                let minutes = Math.floor(time / 60);
                let seconds = time % 60;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                return minutes + ':' + seconds;
            }

            const total_question = this.questions.length

            let form = {
                enrolled: this.quiz.enrolled,
                quiz: this.quiz.id_category,
                correct_answer,
                wrong_answer,
                total_question,
                // kurangi satu detik karena intervalId dihentikan setelah submit
                duration: this.timerSoal > 0 ? this.makeTimer : conversionTime(),
            }

            try {
                const response = await axios.post('/api/student/postAnswerQuiz', form)
                if (response.data.success) {
                    this.$emit('refresh')
                }
            } catch (error) {
                console.log(error);
            }


        },
        tryagain() {
            delete this.quiz.result
        },
        next() {
            this.$emit('next')
        },
        async usedHint() {
            const { data } = await axios.get(`/api/student/usedHint/${localStorage.getItem('id')}`)
            if (data.message == 'success') {
                axios.delete(`/api/student/deleteVisitedCourse/${this.quiz.enrolled}/${this.quiz.id}`)
                window.location.reload()  
            } else {
                this.$swal('Error', 'Hint gagal digunakan', 'error')
            }
        }
    },
    computed: {
        makeTimer() {
            let minutes = Math.floor(this.timer / 60);
            let seconds = this.timer % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return minutes + ':' + seconds;
        },
        makeTimerSoal() {
            let minutes = Math.floor(this.timerSoal / 60);
            let seconds = this.timerSoal % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return minutes + ':' + seconds;
        },
    },
}
</script>
<template>
    <div>
        <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem;" v-if="!quiz?.result">
            <div class="content p-5" v-if="questions.length > 0">
                <div class="card card-quiz text-left" style="margin-top: 3rem">
                    <div class="row ">
                        <div class="col-3 d-flex align-items-center">
                            <div class="row p-3">
                                <h5 id="timer">{{ makeTimerSoal }} min</h5>
                                <h3>{{ quiz.name }}</h3>
                            </div>
                        </div>
                        <div class="col-5 d-flex align-items-center justify-content-center">
                            <div class="mx-1 pages pages-code d-flex justify-content-end align-items-center"
                                v-if="quiz.soal[0].help_mode == 'yes'">
                                <li class="d-flex justify-content-center align-items-center button-hint ">
                                    <a @click="usedHint" class="btn btn-primary ">
                                        Hint
                                    </a>
                                </li>
                            </div>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center pe-5">
                            <div class="row">
                                <div class="col">
                                    <a class="btn btn-paging-quiz-view" v-if="questionIndex > 0"
                                        @click="questionIndex--; question = questions[questionIndex]"
                                        id="previousQuestionButton">Previous</a>
                                </div>
                                <div class="col">
                                    <a class="btn btn-paging-quiz-view" v-if="questionIndex < quiz.soal.length - 1"
                                        @click="questionIndex++; question = questions[questionIndex]"
                                        id="nextQuestionButton">Next</a>
                                </div>
                                <div class="col">
                                    <a v-if="questionIndex == quiz.soal.length - 1" @click="submit"
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
                                    <h3>{{ quiz.name }}</h3>
                                    <p class="d-flex align-items-center">min. persentage {{ quiz.soal[0].percentage }}%
                                    </p>
                                </div>
                            </div>

                            <div class="col-2 ">
                                <div class="row d-flex align-items-center justify-content-end">

                                    <span class="d-flex justify-content-end" style="font-weight: 600; padding-right: 30px;">{{
                                        quiz.soal[0].minutes }} min</span>
                                    <div class="div d-flex align-items-center justify-content-end">
                                        <a @click="getQuestion" class="btn btn-certificate-view">Start</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <result v-else :quiz="quiz.result" :endCourse="endCourse" @tryagain="tryagain" @next="next"></result>
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