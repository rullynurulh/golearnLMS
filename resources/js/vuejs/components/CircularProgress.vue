<template>
    <div class="circular-progress">
        <div class="value-container">{{ progressValue }}%</div>
    </div>
</template>

<script>
export default {
    props: {
        progressEndValue: {
            type: Number,
            default: 100,
        },
    },
    data() {
        return {
            progressValue: 0,
            speed: 50,
        };
    },
    mounted() {
        this.progress();
    },
    methods: {
        progress() {
            if (this.progressEndValue > 0) {
                this.progressInterval = setInterval(() => {
                    this.progressValue++;
                    if (this.progressValue < this.progressEndValue) {
                        // detect class circular-progress
                        let circularProgress = document.querySelector(".circular-progress");
                        // detect class value-container
                        let valueContainer = document.querySelector(".value-container");

                        valueContainer.innerHTML = `${this.progressValue}%`;
                        circularProgress.style.background = `conic-gradient(
                        #4d5bf9 ${this.progressValue * 3.6}deg,
                        #cadcff ${this.progressValue * 3.6}deg
                    )`;

                    } else {
                        clearInterval(this.progressInterval);
                    }
                }, this.speed);
            }
        },
    },
    beforeDestroy() {
        clearInterval(this.progressInterval);
    },
    watch: {
        progressEndValue() {
            this.progress();
        },
    },
};
</script>

<style>
.circular-progress {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
}

.circular-progress:before {
    content: "";
    position: absolute;
    height: 84%;
    width: 84%;
    background-color: #ffffff;
    border-radius: 50%;
}

.value-container {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    color: #231c3d;
}
</style>
