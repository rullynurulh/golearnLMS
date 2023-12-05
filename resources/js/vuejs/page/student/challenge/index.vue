<script>
export default {
    props: ['challenge']
}
</script>
<template>
    <div>
        <div class="content p-5">
            <div class="box-recommend min-height-recommend p-2" style="margin-top: 3rem">
                <div class="card card-quiz text-left m-5">
                    <div class="col-10 d-flex align-items-center">
                        <div class="row ">
                            <h3>{{ challenge.nama }}</h3>
                            <p class="d-flex align-items-center">Hint can get : {{ challenge?.difficulty }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>