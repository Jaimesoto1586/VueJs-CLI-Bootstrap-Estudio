<template>
    <div>
        <h1>{{mensaje}}</h1>
    </div>
</template>

<script>
export default {
    name: 'RevistasHello',
    props: {
        mensaje: String
    }
}
</script>