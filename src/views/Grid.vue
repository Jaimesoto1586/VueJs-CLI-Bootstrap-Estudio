<template>
<!-- VAMOS A OCUPAR UNA CLASE DE BOOTSTRAP NORMAL EN EL DIV EN ESTE CASO MARGIN TOP 5 (MT-5) PARA SEPARAR EL CONTENIDO DE LA BARRA -->
    <div class="mt-5">
        <!-- NO PONDRE AQUI EL B-CONTAINER YA QUE ESTA EN EL APP.VUE CUANDO DEJE EN CONTAINER EL <router-view/> POR LO TANTO SOLO HAGO EL ROW Y EL COL -->
        <b-row>
            <!-- LE PONDREMOS UN COLS="12" AHORA SE PONE HACI EN BOOTSRAP https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system-->
            <b-col cols="12" md="6" lg="4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos et nesciunt eum vero nisi inventore voluptatibus natus, aliquam officiis nobis soluta necessitatibus non ex tempore est dolore eaque autem.</p>
            </b-col>
            <b-col cols="12" md="6" lg="8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos et nesciunt eum vero nisi inventore voluptatibus natus, aliquam officiis nobis soluta necessitatibus non ex tempore est dolore eaque autem.</p>
            </b-col>
        </b-row>

        <b-row>
            <!-- LE PONDREMOS UN COLS="12" AHORA SE PONE HACI EN BOOTSRAP https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system-->
            <b-col cols="12" md="6" lg="4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos et nesciunt eum vero nisi inventore voluptatibus natus, aliquam officiis nobis soluta necessitatibus non ex tempore est dolore eaque autem.</p>
            </b-col>
            <b-col cols="12" md="6" lg="8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos et nesciunt eum vero nisi inventore voluptatibus natus, aliquam officiis nobis soluta necessitatibus non ex tempore est dolore eaque autem.</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'Grid'
}
</script>