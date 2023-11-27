<script>
import Header from './header.vue';
import sidenav from './sidenav.vue';
import question from './question.vue';
import axios from 'axios';
import success from './result/success.vue';
import failed from './result/failed.vue';
export default {
    components: {
        Header,
        sidenav,
        question,
        success,
        failed
    },
    data() {
        return {
            challenges: null,
            isOpenQuestions: false,
            isOpenChallenge: false,
            challengeSelected: null,
            isFailed: false,
            isSuccess: false,
            currentChallengeIndex: 0
        }
    },
    methods: {
        closeResult() {
            this.isSuccess = false
            this.isFailed = false
            this.isOpenChallenge = false
        },
        onSelectChallenge(challenge) {
            this.closeResult()
            this.challengeSelected = challenge
            if (challenge?.resultChallenge) {
                if (challenge?.resultChallenge.score == 0) {
                    this.isFailed = true
                    // this.isOpenChallenge = true
                } else if (challenge?.resultChallenge.score > 0) {
                    this.isSuccess = true
                }
            } else {
                this.isOpenChallenge = true
            }
            this.currentChallengeIndex = this.challenges.findIndex(challenge => challenge.id === this.challengeSelected.id)
        },
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
        openChallenge() {
            this.isOpenQuestions = true
            this.isOpenChallenge = false
        },
        refreshData() {
            this.isOpenQuestions = false
            this.isOpenChallenge = false
            this.challenges = null
            this.getChallenge()
        },
        async getChallenge() {
            try {
                const student = localStorage.getItem('id')
                const { challenge } = await axios.get(`/api/challenge/${student}/student`).then(res => res.data)
                this.challenges = challenge

                if (this.challengeSelected) {
                    this.getResult()
                } else {
                    if(this.challenges.length > 0) {
                        this.onSelectChallenge(this.challenges[0])
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        getResult() {
            const id = this.challengeSelected?.id

            this.challengeSelected = this.challenges.find(challenge => challenge.id === id)

            if (this.challengeSelected?.resultChallenge) {
                if (this.challengeSelected?.resultChallenge.score == 0) {
                    this.isFailed = true
                } else {
                    this.isSuccess = true
                }
            }
        },
        nextChallenge() {
            const idx = this.challenges.findIndex(challenge => challenge.id === this.challengeSelected.id)
            const nextChallenge = this.challenges[idx + 1]
            this.onSelectChallenge(nextChallenge)
        },
    },
    created() {
        this.getChallenge()
    },
    computed: {
        isLastChallenge() {
            return this.currentChallengeIndex === this.challenges?.length - 1
        }
    }
}
</script>
<template>
    <div>
        <Header />
        <sidenav :challenges="challenges" :challengeSelected="challengeSelected" @select-challenge="onSelectChallenge" />
        <div class="margin-left">

            <div class="content p-5">
                <div class="box-challenge p-4 mb-5" >
                    <div class="d-flex" v-if="isOpenChallenge">
                        <div class="p-2 flex-grow-1">
                            <h3 style="margin-bottom: 0;">{{ challengeSelected?.nama }}</h3>
                            <p class="pt-3" style="margin-bottom: 0;">Hint can get : {{ challengeSelected?.difficulty }}</p>
                        </div>
                        <div class="p-2">
                            <p class="fw-bold pb-n2 text-center">{{ statusText(challengeSelected?.difficulty) }}</p>
                            <button class="btn btn-lg btn-primary" @click="openChallenge">Start</button>
                        </div>
                    </div>
                    <div class="d-flex" v-else>
                        <h3 class="fw-bold">Tidak ada Challenge</h3>
                    </div>
                </div>

                <question :challenge="challengeSelected" v-if="isOpenQuestions" @refresh="refreshData" />

                <success v-if="isSuccess" :result="challengeSelected?.resultChallenge" :last="isLastChallenge"
                    @next="nextChallenge" />
                <failed v-if="isFailed" :result="challengeSelected?.resultChallenge" :last="isLastChallenge"
                    @next="nextChallenge" />
            </div>
        </div>
    </div>
</template>
<style>
.box-challenge {
    border-radius: 10px;
    background: #FFC95E;
}
.content {
    height: 85vh;
    /* disable scroll */
}
</style>