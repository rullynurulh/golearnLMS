<script>
export default {
    props: ['challenges', 'challengeSelected'],
    methods: {
        selectChallenge(challenge) {
            this.$emit('select-challenge', challenge)
        },
        challengeisActive(challenge) {
            return this.challengeSelected && this.challengeSelected.id === challenge.id
        },
        resultChallenge(score) {
            if (score == 0) {
                return '<span class="text-danger">Failed</span>'
            } else if(score > 0) {
                return '<span class="text-success">Passed</span>'
            }
        }
    },
}
</script>
<template>
    <div>
        <div class="scrollable">
            <div class="sidebar">
                <div class="content mt-2 p-2">
                    <div class="box-list-challenge mb-2"
                        :class="{ 'box-list-challenge-active': challengeisActive(challenge) }"
                        v-for="(challenge, idx) in challenges" :key="idx">
                        <div class="row d-flex justify-content-start" @click="selectChallenge(challenge)">
                            <div class="col-1 d-flex justify-content-start align-items-center">
                                <input type="checkbox" :checked="challenge.isDone">
                            </div>
                            <div class="col-8 d-flex justify-content-start align-items-center">
                                <div class="overflow-ecilips "
                                    style=" overflow: hidden; text-overflow: ellipsis ; white-space: nowrap;  ">
                                    <h5 style="font-weight: 500; margin-bottom:0; ">
                                        {{ challenge.nama }}
                                    </h5>
                                </div>
                            </div>
                            <div class="col-2 d-flex justify-content-end align-items-center">
                                <div v-html="resultChallenge(challenge?.resultChallenge?.score)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.sidebar {
    position: absolute;
    width: 250px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/* 
.scrollable {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
} */

.box-list-challenge {
    border-radius: 5px;
    background: #EAEAEA;
    padding: 1rem;
}

.box-list-challenge-active {
    border-radius: 5px;
    background: #CCCCCC;
    scale: 1.1;
    padding: 1rem;
}

.box-list-challenge:hover {
    border-radius: 5px;
    background: #CCCCCC;
    padding: 1rem;
}
</style>