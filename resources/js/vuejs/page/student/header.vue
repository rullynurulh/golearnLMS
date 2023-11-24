<script>
export default {
    methods: {
        back() {
            window.location.href = '/student'
        }
    },
}
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-custom-header text-black">
        <div class="container-fluid px-4 py-2 text-black">

            <div class="navbar-brand" style="margin-bottom: 0;" @click="back">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-reply-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                </svg>
                <span class="header-title">Challenge</span>
            </div>
            <div class="d-flex">
                <button class="btn btn-button btn-shadow px-4 me-2">Previous</button>
                <button class="btn btn-button btn-shadow">Next</button>

            </div>
        </div>
    </nav>
</template>
<style>
.bg-custom-header {
    background-color: #EAEAEA;
}
.header-title {
    font-size: 25px; margin-left: 20px;
}
</style>