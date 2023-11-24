<script>
import axios from 'axios';
export default {
    props: ['challenge'],
    data() {
        return {
            questions: null,
            timer: 0,
            question: null,
            questionIndex: 0,
            intervalId: null,
        }
    },
    methods: {
        async getQuestions() {
            try {
                const { question } = await axios.get(`/api/question/${this.challenge.id}`).then(res => res.data)
                this.questions = question.map(item => {
                    return {
                        ...item,
                        answer: item.answer.map(answer => {
                            return {
                                ...answer,
                                isCorrect: answer.isCorrect == "true" ? true : false,
                                isSelected: false,
                            }
                        })
                    }
                })
                this.question = this.questions[this.questionIndex]
            } catch (error) {
                console.log(error);
            }
        },
        startTimer() {
            this.intervalId = setInterval(() => {
                this.timer++;
            }, 1000);
        },
        nextQuestion() {
            // next array
            this.questionIndex++;
            this.question = this.questions[this.questionIndex]
        },
        prevQuestion() {
            // prev array
            this.questionIndex--;
            this.question = this.questions[this.questionIndex]
        },
        accessImage(file) {
            if (file) {
                return `/api/apiImage/${file}`
            }
        },
        stopTimer() {
            clearInterval(this.intervalId);
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
            this.stopTimer();

            // calculate score
            console.log(isAllAnswerCorrect)
            const student = localStorage.getItem('id')
            let form = {
                challenge_id: this.challenge.id,
                score: isAllAnswerCorrect ? parseInt(this.challenge.difficulty) : 0,
                time: this.makeTimer
            }

            axios.post(`/api/question/${student}/student`, form).then(res => {
                this.$swal('Success', 'Berhasil submit jawaban', 'success')
                this.$emit('refresh')
            }).catch(err => {
                console.log(err)
                this.$swal('Error', 'Gagal mengirimkan jawaban', 'error')
            })
        }
    },
    computed: {
        makeTimer() {
            let minutes = Math.floor(this.timer / 60);
            let seconds = this.timer % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return minutes + ':' + seconds;
        }
    },
    created() {
        this.getQuestions();
    },
    mounted() {
        this.startTimer();
    },
}
</script>
<template>
    <div class="box-challenge p-4">
        <div class="d-flex">
            <div class="p-2 flex-grow-1">
                <h3 class="fw-bold pt-n5">{{ challenge?.nama }}</h3>
                <span>{{ makeTimer }} min</span> <br>
            </div>
            <div class="p-2">
                <button class="btn btn-lg btn-primary" @click="submit">
                    Submit
                </button>
            </div>
        </div>
    </div>
    <div class="box-recommend min-height-recommend p-5">
        <div class="d-flex justify-content-center">
            <img :src="accessImage(question?.file)" width="300" v-if="question?.file">
        </div>
        <p class="my-2">
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
                        <input type="checkbox" 
                        :checked="answer.isSelected"
                        @click="answer.isSelected = !answer.isSelected" v-else />
                    </div>
                    <div class="p-2">
                        <span>{{ answer.answer }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- button prev next on bottom right -->
        <div class="d-flex justify-content-end">
            <div class="p-2">
                <button class="btn btn-lg btn-primary" @click="prevQuestion" v-if="questionIndex > 0">
                    Prev
                </button>
            </div>
            <div class="p-2">
                <button class="btn btn-lg btn-primary" @click="nextQuestion" v-if="questionIndex < questions?.length - 1">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
