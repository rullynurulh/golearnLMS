<script>
export default {
    props: ['result', 'last']
}
</script>
<template>
    <div>
        <div class="box-challenge p-4">
            <h3>Your Challenge Result</h3>
        </div>
        <div class="box-recommend min-height-recommend p-5">
            <h3>Unfortunately you didn't make it through this challenge..</h3>

            <table>
                <tr>
                    <td>Exam Score</td>
                    <td>Duration (minute)</td>
                    <td class="text-center">Hint Obtained</td>
                    <td>Rating</td>
                </tr>
                <tr>
                    <td>Wrong Answer</td>
                    <td>{{ result.time }}</td>
                    <td class="text-center">+{{ result.score }}</td>
                    <td class="text-danger fw-bold">Failed</td>
                </tr>
            </table>

            <button class="btn btn-button mt-5" @click="$emit('next')" v-if="!last">Next Lesson</button>
        </div>
    </div>
</template>
<style>
    table {
        width: 100%;
        font-size: 20px;
    }
</style>