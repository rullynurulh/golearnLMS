<script>
import axios from 'axios';
import DataTable from '../../components/DataTable.vue';
export default {
    components: {
        DataTable
    },
    data() {
        return {
            result: [],
            challenge: null,
            headers: [
                { text: 'No', value: 'no', sortable: 'false' },
                { text: 'Student', value: 'user' },
                { text: 'Status', value: 'status' },
                { text: 'Additional Hint Obtained', value: 'score', class: 'col-3', classItems:'justify-content-center' },
                { text: 'Date Done', value: 'date' }
            ],
        }
    },
    methods: {
        async getResults() {
            const id = this.$route.params.id;
            const { challenge, result } = await axios.get(`/api/challenge/resultChallenge/${id}`).then(res => res.data);
            this.result = result;
            this.challenge = challenge;
        },
        status(score) {
            score = parseInt(score)
            if (score > 0) {
                return 'Passed'
            }
            return 'Failed'
        },
        dateFormat(date) {
            // create format 23/08/2023
            const dateObj = new Date(date)
            const day = dateObj.getDate()
            const month = dateObj.getMonth() + 1
            const year = dateObj.getFullYear()
            return `${day}/${month}/${year}`
        }
    },
    created() {
        this.getResults();
    }
}
</script>
<template>
    <div>
        <div class="content p-5">
            <div class="box-recommend p-4 mb-4">
                <h3 style="margin-bottom: 0">Challenge {{ challenge }} | View Result</h3>
            </div>

            <div class="box-recommend mt-2 p-4">
                <DataTable :headers="headers" :items="result">
                    <template #item.no = "{item, index}">
                        <h3 style="margin-bottom: 0;">
                            {{ index + 1 }}
                        </h3>
                    </template>
                    <template #item.status = "{item}">
                        <div>
                            {{ status(item.score) }}
                        </div>
                    </template>
                    <template #item.date = "{item}">
                        <div>
                            {{ dateFormat(item.updated_at) }}
                        </div>
                    </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>