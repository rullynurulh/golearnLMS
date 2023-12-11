<script>
import pagination from './pagination.vue';
export default {
    components: {
        pagination
    },
    props: {
        headers: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        search: {
            type: String,
            required: false,
            default: ''
        },
        scrollable: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    data() {
        return {
            renderPaginate: [],
            sortColumn: 'no_urut',
            sortDirection: 'asc',
        }
    },
    methods: {
        updateFilterDalamProses(data) {
            this.renderPaginate = data
        },
        sort(header) {
            if (header.sortable == false) return;
            const column = header.value
            if (column === this.sortColumn) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
            } else {
                this.sortColumn = column
                this.sortDirection = 'asc'
            }
        },
        checkClassItems(header) {
            if (header.classItems) {
                return `${header.class} ${header.classItems}`
            } else {
                return `${header.class}`
            }
        },
    },
    computed: {
        filteredDalamProses() {
            return this.sortedDataTable.filter((data) => {
                return Object.keys(data).some((key) => {
                    return String(data[key]).toLowerCase().includes(this.search.toLowerCase())
                })
            })
        },
        sortedDataTable() {
            const sorted = this.items.sort((a, b) => {
                const modifier = this.sortDirection === 'asc' ? 1 : -1
                if (a[this.sortColumn] < b[this.sortColumn]) return -1 * modifier
                if (a[this.sortColumn] > b[this.sortColumn]) return 1 * modifier
                return 0
            })
            return sorted
        }
    }
}
</script>
<template>
    <div class="row d-flex justify-content-start">
        <div class="d-flex ps-4 align-items-center" v-for="header in headers" :key="header.text"
            :class="[header.class ? checkClassItems(header) : 'col-2 justify-content-center']"
            @click="sort(header)" :sortable="header.sortable == false ? false : true">
            <h5 style="font-weight: 700">
                <slot :name="`header.${header.value}`">
                    {{ header.text }}
                </slot>
            </h5>
            <span v-if="sortColumn === header.value">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up"
                    v-if="sortDirection === 'asc'" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down"
                    v-else viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
            </span>
        </div>
        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
        <div v-if="renderPaginate.length > 0">
            <div class="row d-flex justify-content-start mb-2" v-for="(data, idx) in renderPaginate" :key="idx">
                <div class="d-flex" v-for="header in headers" :key="header.value"
                    :class="header.class ? checkClassItems(header) : 'col-2 justify-content-center'">
                    <h5 style="font-weight: 500">
                        <slot :name="`item.${header.value}`" :item="data" :index="idx">
                            {{ data[header.value] }}
                        </slot>
                    </h5>
                </div>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center align-items-center" style="height: 50vh">
            <h3 class="text-center">Data Kosong</h3>
        </div>
        <hr class="mb-3" style="opacity: 1; border: 2px solid white; margin:0">
        <pagination :filteredDalamProses="filteredDalamProses" @updateFilteredDalamProses="updateFilterDalamProses" />
    </div>
</template>