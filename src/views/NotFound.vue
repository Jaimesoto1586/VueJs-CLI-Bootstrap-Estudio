<template>
    <div>
        <h1>Lo que estas buscando No esta aqui</h1>
        <!-- ROUTE ABAJO EN COMPUTED DEVUELVE LO QUE ESCRIBES EN LA BARRA DE NAVEGACION  -->
        <p>{{route}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        route (){
            // Esto devuelve el mensaje que se escribio en la barra del navegador
            return this.$route.path
        }
    }
}
</script>