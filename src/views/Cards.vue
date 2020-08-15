<!-- VAMOS HACER BOTONES https://bootstrap-vue.org/docs/components/button#buttons -->
<template>
<!-- VOY A SEPARAR LOS BOTONES DE LA BARRA CON UN MT-5 CLASS BOOTSTRAP -->
    <div class="mt-5">
        <!-- PARA HACER UN BOTON SE PONE B-BUTTON . PARA CAMBIAR LOS COLORES RECORDAR QUE AHORA SE OCUPARA VARIANT. ESOS SON TODOS LOS BOTONES -->
        <b-button variant="info">Info</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="primary">Primary</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="dark">Dark</b-button>

        <b-row class="mt-5">
            <!-- VAMOS A PONER LAS TARJETAS O CARDS https://bootstrap-vue.org/docs/components/card -->
            <b-col cols="12" md="4">
                <!-- SE PONE B-CARD PARA INDICAR QUE ES UNA TARJETA COME LA IMG DE LA PAG DE BOOTSTRAP..SOLO COPIE LO QUE ESTA AQUI DE LA PAG. DE BOOTSTRAP -->
                <b-card img-src="../assets/1.jpg" img-top
                > 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione inventore velit ipsam dignissimos, quis facere ipsa minus accusantium nemo, sint illum unde corrupti! Laboriosam, repudiandae ex odit facilis possimus corporis.</p>
                <!-- VOY A PONER UN BOTON -->
                <b-button variant="danger" href="#">QUE LINDA FOTO</b-button>
                </b-card>
            </b-col>

            <b-col cols="12" md="4">
                <!-- SE PONE B-CARD PARA INDICAR QUE ES UNA TARJETA COME LA IMG DE LA PAG DE BOOTSTRAP..SOLO COPIE LO QUE ESTA AQUI DE LA PAG. DE BOOTSTRAP -->
                <b-card img-src="../assets/2.jpg" img-top
                >                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione inventore velit ipsam dignissimos, quis facere ipsa minus accusantium nemo, sint illum unde corrupti! Laboriosam, repudiandae ex odit facilis possimus corporis.</p>
                <!-- VOY A PONER UN BOTON -->
                <b-button variant="danger" href="#">QUE LINDA FOTO</b-button>
                </b-card>
            </b-col>

            <b-col cols="12" md="4">
                <!-- SE PONE B-CARD PARA INDICAR QUE ES UNA TARJETA COME LA IMG DE LA PAG DE BOOTSTRAP..SOLO COPIE LO QUE ESTA AQUI DE LA PAG. DE BOOTSTRAP -->
                <b-card img-src="../assets/1.jpg" img-top
                >                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione inventore velit ipsam dignissimos, quis facere ipsa minus accusantium nemo, sint illum unde corrupti! Laboriosam, repudiandae ex odit facilis possimus corporis.</p>
                <!-- VOY A PONER UN BOTON -->
                <b-button variant="danger" href="#">QUE LINDA FOTO</b-button>
                </b-card>
            </b-col>
        </b-row>





    </div>
</template>

<script>
export default {
    name: 'Cards'
}
</script>