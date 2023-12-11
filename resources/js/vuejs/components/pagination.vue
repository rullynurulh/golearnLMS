<script>
export default {
    props: {
        filteredDalamProses: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data() {
        return {
            currentPage: 1,
            perPage: 5,
            loading: false,
        }
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.pages[this.pages.length - 1]) this.currentPage++
        },
        previousPage() {
            if (this.currentPage != 1) this.currentPage--
        },
        nowPage(page) {
            if (page != "...") this.currentPage = page
        },
        disableClickPageThreeDots(page) {
            if (page == "...") return true
        },
    },
    computed: {
        renderPaginate() {
            return this.filteredDalamProses.slice(
                this.perPage * (this.currentPage - 1),
                this.perPage * this.currentPage
            )
        },
        pages() {
            let totalPages = Math.ceil(
                this.filteredDalamProses.length / this.perPage
            )

            let pages = []

            const totalPageNumber = this.currentPage + 4;

            for (let i = 1; i <= totalPages; i++) {
                if (i <= totalPageNumber && pages.length < 5) {
                    pages.push(i)
                } else {
                    pages.push("...")
                    pages.push(totalPages)
                    break
                }
            }

            if (this.currentPage > 5 && this.currentPage < totalPages) {
                pages = [
                    1,
                    "...",
                    this.currentPage - 1,
                    this.currentPage,
                    this.currentPage + 1,
                    "...",
                    totalPages
                ]
            } else if (this.currentPage > 5 && this.currentPage == totalPages) {
                pages = [1, "...", this.currentPage - 1, this.currentPage]
            }
            return pages

        },
        showingData() {
            return this.currentPage * this.perPage - this.perPage + 1
        },
        informasiDataTampil() {
            return `Showing ${this.showingData} to ${this.renderPaginate.length} of ${this.filteredDalamProses.length} entries`
        },
    },
    mounted() {
        this.$emit('updateFilteredDalamProses', this.renderPaginate)
    },
    watch: {
        renderPaginate() {
            this.$emit('updateFilteredDalamProses', this.renderPaginate)
        },
        filteredDalamProses() {
            this.currentPage = 1
        },
    },
}
</script>
<template>
    <div>
        <div class="d-flex">
            <div class="p-2 flex-grow-1">
                {{ informasiDataTampil }}
            </div>
            <div class="p-2">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item" :class="currentPage == 1 ? 'disabled' : ''">
                            <a class="page-link" @click="previousPage">Previous</a>
                        </li>
                        <li class="page-item" :class="paginate == currentPage ? 'active' : ''" v-for="paginate in pages"
                            :key="paginate">
                            <a class="page-link" @click="nowPage(paginate)"
                                :disabled="disableClickPageThreeDots(paginate)">{{
                                    paginate }}</a>
                        </li>
                        <li class="page-item" :class="currentPage == pages[pages.length - 1] ? 'disabled' : ''">
                            <a class="page-link" @click="nextPage">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>