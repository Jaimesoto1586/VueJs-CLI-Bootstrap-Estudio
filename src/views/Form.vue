<!-- VIDEO DEL FORMULARIOhttps://www.youtube.com/watch?v=Z1LxWfjjdfU&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=29 Y LA PAGINA DE BOOTSTRAP DEL FORMULARIO https://bootstrap-vue.org/docs/components/form-input -->
<template>
  <div class="mt-5">
        <h1>Formularios</h1>

            <form>
            <!-- FORMULARIO SEGUN LOS COMANDOS DE BOOTSTRAP CON <b-form-input> ME HIZO UNA BARRA PARA INGRESAR DATOS. EL TYPE ES PARA QUE COSA LO VAMOS A UTILIZAR SI ES PARA NUMEROS O TEXTO. SI ES NUMERO ES TYPE NUMBER Y SI ES TEXTO ES TYPE TEXT TE LO BLOQUEA ALTIRO . EN LA PAGINA HAY MUCHOS HASTA PARA EL DIA TIEMPO COLOR URL ETC.-->
                 <b-row>
                    <b-col md="3">
                         <!-- :STATE="TRUE O FALSE" SE PONE UNA X O UN VISTO EN EL FORMULARIO-->
                        <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
                        <small>Minimo 3 caracteres</small>
                        <p>Texto: {{texto}}</p> <!-- ESTO ES PARA VER QUE ESCRIBO DENTRO DEL CAMPO SE REFLEJA ABAJO -->
                    </b-col>
                    <!-- AGREGAREMOS OTRA COLUMNA VIDEO https://www.youtube.com/watch?v=iGGm_piFwoY&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=30 -->
                    <b-col md="3">
                    <!-- <b-form-select > SIEMPRE LO VAMOS A RELACIONAR CON UN V-MODEL="SELECT" Y SE HACE EN EL DATA RETURN SELECT: NULL . APARTE TENDREMOS :OPTIONS QUE SERAN NUESTROS OBJETOS Y TAMBIEN VA DENTRO DEL DATA RETURN     https://bootstrap-vue.org/docs/components/form-select  -->
                        <b-form-select v-model="select" :options="animales"></b-form-select>
                        <p>Selección: {{select}}</p>
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
            //AQUI EN EL SELECT SE GUARDARA LO QUE EL USUARIO COLOQUE COMO RESPUESTA
            select: null,
            // ESTE ES UN ARRAY CON OBJETOS Y SIEMPRE COMIENZA CON CORCHETES Y DESPUES MOSTACHOS [{}] ESTO ESTA EN LA PAGINA DE BOOTSTRAP. LOS VALORES PERRO GATO Y PATO VAN A VIAJAR AL SELECT
            animales: [
                {value: null, text: 'Seleccione un animal'},
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
        }
    }
}
</script>


video https://www.youtube.com/watch?v=iGGm_piFwoY&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=30 minuto 3:43