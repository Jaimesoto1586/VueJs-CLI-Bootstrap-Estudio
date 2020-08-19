<!-- VIDEO DEL FORMULARIO https://www.youtube.com/watch?v=Z1LxWfjjdfU&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=29 Y LA PAGINA DE BOOTSTRAP DEL FORMULARIO https://bootstrap-vue.org/docs/components/form-input -->
<template>
  <div class="mt-5">
        <h1>Tipos de Formularios</h1>

        <form class="mt-5">
        <!-- FORMULARIO SEGUN LOS COMANDOS DE BOOTSTRAP CON <b-form-input> ME HIZO UNA BARRA PARA INGRESAR DATOS. EL TYPE ES PARA QUE COSA LO VAMOS A UTILIZAR SI ES PARA NUMEROS O TEXTO. SI ES NUMERO ES TYPE NUMBER Y SI ES TEXTO ES TYPE TEXT TE LO BLOQUEA ALTIRO . EN LA PAGINA HAY MUCHOS HASTA PARA EL DIA TIEMPO COLOR URL ETC.-->
            <b-row>
                <b-col md="3">
                     <!-- :STATE="TRUE O FALSE" SE PONE UNA X O UN VISTO EN EL FORMULARIO-->
                    <b-form-input type="text" v-model="texto" :state="comprobar" placeholder="Escribe tu Nombre"></b-form-input>
                     <small>Minimo 3 caracteres</small>
                     <p>Texto: {{texto}}</p> <!-- ESTO ES PARA VER QUE ESCRIBO DENTRO DEL CAMPO SE REFLEJA ABAJO -->
                </b-col>

                <!-- AGREGAREMOS OTRA COLUMNA VIDEO https://www.youtube.com/watch?v=iGGm_piFwoY&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=30 -->
                <b-col md="3">
                <!-- <b-form-select > SIEMPRE LO VAMOS A RELACIONAR CON UN V-MODEL="SELECT" Y SE HACE EN EL DATA RETURN SELECT: NULL . APARTE TENDREMOS :OPTIONS QUE SERAN NUESTROS OBJETOS Y TAMBIEN VA DENTRO DEL DATA RETURN     https://bootstrap-vue.org/docs/components/form-select  -->
                <b-form-select v-model="select" :options="animales"></b-form-select>
                     <p>Selección: {{select}}</p>
                </b-col>

                <!-- VAMOS A HACER UN FORM RADIO UTILIZANDO LA ETIQUETA <B-FORM-RADIO-GROUP> Y DENTRO DE LA ETIQUETA PONDREMOS NUESTRA COMUNICACION V-MODEL="RADIO" ESTO VA EN EL DATA EL RADIO, ESTO GUARDARA LA OPCION QUE SELECCIONE EL USUARIO. PERO ANTES DE ESO DEBEMOS HACER UNA COLUMNA PARA SEPARAR LOS FORMULARIOS https://bootstrap-vue.org/docs/components/form-radio-->
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
                     <!-- ESTE PARRAFO PINTARA LA RESPUESTA -->
                     <p>Radio: {{radio}}</p>
                </b-col>

                <!-- AHORA VAMOS A REALIZAR UNA SELECCION MULTIPLE Y ESTO SE GUARDARAN EN UN ARRAY Y LO MISMO HAY QUE HACER UNA COLUMNA -->
                <b-col md="3">
                <!-- FUNCIONA DE LA MISMA FORMA QUE LOS DEMAS SOLO QUE SE GUARDARAN DENTRO DE UN ARRAY. EL CHECK VA DENTRO DEL DATA. VAMOS A UTILIZAR EL MISMO ARRAY DE OBJETOS DEL ANTERIOR EL CUAL ERA ANIMALESRADIO -->
                    <b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
                        <!-- VAMOS A PINTAR LA RESPUESTA -->
                        <p>Multiple: {{check}}</p>
                </b-col>
            </b-row>
        </form>

        <h1>Primer Formulario "Con Inputs para rellenar"</h1>

        <form class="mt-5">
            <b-row>
                <b-col md="3">
                    <!-- DEBE IR TYPE PLACEHOLDER V-MODEL :STATE=COMPROBAR (COMPUTED)  ESTOY OCUPANDO LOS MISMO QUE EN LOS EJEMPLOS ANTERIORES-->
                    <b-form-input type="text" placeholder="Nombre" v-model="texto" :state="comprobar"></b-form-input>
                    <br>
                    <!-- DEBE IR TYPE PLACEHOLDER V-MODEL LO CAMBIE AHORA ES APELLIDO :STATE=COMPROBAR1 DEBO HACER UNO NUEVO EN COMPUTED (COMPUTED)   ESTOY OCUPANDO LOS MISMO QUE EN LOS EJEMPLOS ANTERIORES-->
                    <b-form-input type="text" placeholder="Apellido" v-model="apellido" :state="comprobar1"></b-form-input>
                    <br>
                    <!-- DEBE IR TYPE PLACEHOLDER V-MODEL LO CAMBIE AHORA ES APELLIDO :STATE=COMPROBAR1 DEBO HACER UNO NUEVO EN COMPUTED (COMPUTED)   ESTOY OCUPANDO LOS MISMO QUE EN LOS EJEMPLOS ANTERIORES-->
                    <b-form-input type="email" placeholder="Correo" v-model="correo" :state="comprobar2" required></b-form-input>
                    
                </b-col>
            </b-row>
        </form>



    </div>
</template>

<script>
export default {
    name: 'Form',
    // VAMOS A RELACIONAR NUESTRO FORMULARIO CON EL DATA Y CON EL V-MODEL LO RELACIONAMOS
    data() {
        return {
            texto: '',

            // V-MODEL APELLIDO
            apellido: '',

            // ESTE ES EL V-MODEL DE LA ETIQUETA <b-form-radio-group> VA A SER NULL Y LAS OPCIONES VAN A SER LAS MISMAS QUE LOS ANIMALES PERO SE LLAMARA ANIMALESRADIO Y DEBO HACER UN NUEVO ARRAY CON OBJETOS CON LOS MISMOS ANIMALES PERO SAQUARE EL VALUE NULL TEXT 
            radio: null,

            // ESTE V-MODEL CHECK VA EN EL FORMULARIO MULTIPLE EN EL ULTIMO
            check: [],

            //AQUI EN EL SELECT SE GUARDARA LO QUE EL USUARIO COLOQUE COMO RESPUESTA
            select: null,

            // ESTE ES UN ARRAY CON OBJETOS Y SIEMPRE COMIENZA CON CORCHETES Y DESPUES MOSTACHOS [{}] ESTO ESTA EN LA PAGINA DE BOOTSTRAP. LOS VALORES PERRO GATO Y PATO VAN A VIAJAR AL SELECT. ESTE ARRAY DE OBJETOS VA EN EL SEGUNDO FORMULARIO EN :OPTIONS
            animales: [
                {value: null, text: 'Seleccione un animal'},
                {value: 'Perro', text: 'Guau Guauu'},
                {value: 'Gato', text: 'Miau'},
                {value: 'Pato', text: 'Cuack'},
            ],

            // ESTEW OTRO ARRAY DE OBJETOS VA EN EL TERCER FORMULARIO EN :OPTIONS ANIMALESRADIO Y SAQUE EL VALUE NULL
             animalesRadio: [
                {value: 'Perro', text: 'Guau Guauu'},
                {value: 'Gato', text: 'Miau'},
                {value: 'Pato', text: 'Cuack'},
            ]
        }
    },

    // VAMOS A DEJAR DE FORMA DINAMICA EL TRUE EN EL FORMULARIO PARA ESO HAY QUE HACER UN COMPUTED
    computed: {
        comprobar(){
            // SI NUESTRO TEXTO QUE ESCRIBIMOS TIENE MAS DE 2 LETRAS O CARACTERS DEVOLVERA UN TRUE OSEA VERDADERO Y EN CASO CONTRARIO VA A DEVOLVER UN FALSE O FALSO.ENTONCES AHORA EN VEZ DEL TRUE QUE PUSIMOS LA LINEA 11 :STATE="TRUE" AHORA PONEMOS COMPROBAR 
            return this.texto.length > 2 ? true : false 
        },
        comprobar1(){
            // SI NUESTRO TEXTO QUE ESCRIBIMOS TIENE MAS DE 2 LETRAS O CARACTERS DEVOLVERA UN TRUE OSEA VERDADERO Y EN CASO CONTRARIO VA A DEVOLVER UN FALSE O FALSO.ENTONCES AHORA EN VEZ DEL TRUE QUE PUSIMOS LA LINEA 11 :STATE="TRUE" AHORA PONEMOS COMPROBAR 
            return this.apellido.length > 2 ? true : false 
        }
    }
}
</script>


video https://www.youtube.com/watch?v=iGGm_piFwoY&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=30 minuto 3:43