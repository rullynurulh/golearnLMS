<script>
export default {
    props: ['quiz', 'endCourse'],
    methods: {
        next() {
            this.$emit('next')
        },
        tryagain() {
            this.$emit('tryagain')
        }
    },
}
</script>
<template>
    <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem;">
        <div class="content p-5">
            <div class="card card-quiz text-left" style="margin-top: 3rem">
                <div class="row ">
                    <div class="col-4 d-flex align-items-center">
                        <div class="row p-5">
                            <h3>Your Exam Score</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-quiz min-height-quiz">
                <div class="row">

                    <div class="col p-5">
                        <h3 class="mb-4">
                            {{ quiz.isPassed ? 'Congratulations! You Have Completed This Quiz'
                                : 'Failed! Please Read The Lesson Again' }}
                        </h3>
                        <div class="row d-flex justify-content-start mb-2">
                            <div class="col-3">
                                <h5>Exam Score</h5>
                            </div>
                            <div class="col-3">
                                <h5>Duration (minute)</h5>
                            </div>
                            <div class="col-3">
                                <h5>Percentage</h5>
                            </div>
                            <div class="col-3">
                                <h5>Rating</h5>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-start mb-3">
                            <div class="col-3">
                                <h5>{{ quiz.correct_answer }} Correct Answer
                                    <br>{{ quiz.wrong_answer }} Wrong Answer
                                </h5>
                            </div>
                            <div class="col-3">
                                <h5>{{ quiz.duration }}
                                </h5>
                            </div>
                            <div class="col-3">
                                <h5>{{ quiz.percentageStudent }}%
                                </h5>
                            </div>
                            <div class="col-3">
                                <h5 style="font-weight: 900" :class="quiz.isPassed ? 'text-success' : 'text-danger'">
                                    {{ quiz.isPassed ? 'Success' : 'Failed' }}
                                </h5>
                            </div>
                        </div>

                        <div class="col-9">
                            <div class="row">
                                <div class="col-2" v-if="!quiz.isPassed"><a @click="tryagain" class="btn btn-button">Try
                                        Again</a>
                                </div>
                                <div class="col-2 me-5" id="endCourse" v-if="endCourse">
                                    <a class="btn btn-button" style="min-width: 130px" href="/student">End Course</a>
                                </div>
                                <div class="col-2" v-else><a @click="next" id="nextCourse" class="btn btn-button">Next
                                        Lesson
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>