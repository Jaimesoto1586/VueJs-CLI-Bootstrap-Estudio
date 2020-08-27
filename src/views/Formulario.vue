<template>
  <div>
      <h1 class="text-center mt-5 display-4">Formulario</h1>
      <form class="mt-5">

               <!-- CORREO  @submit="onSubmit" ENVIA EL FORMULARIO  @reset="onReset" LIMPIA EL FORMULARIO -->
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

              <b-form-group id="input-group-1" label="Correo:" label-for="input-1" description="Tu correo es Privado; Nuca lo compartiremos con nadie">
                <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Correo" :state="comprobaremail"></b-form-input>
              </b-form-group>

               <!--NOMBRE  -->
              <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
                  <b-form-input id="input-2" v-model="form.name"  required placeholder="Nombre" :state="comprobarname"></b-form-input>
              </b-form-group>

               <!-- SELECCIONA TU SECCION -->
              <b-form-group id="input-group-3" label="Secciones:" label-for="input-3">
                  <b-form-select id="input-3" v-model="form.secciones" :options="secciones" required></b-form-select>
              </b-form-group>


               <!-- AREA DE TEXTO DE CONSULTA -->
              <p>Consulta:</p>
              <b-textarea v-model="form.textarea" required placeholder="Escribir" :state="comprobartextarea"></b-textarea>


               <!-- BOTONES -->
              <b-button class="mt-4" type="submit" variant="success">Enviar</b-button> <b-button class="mt-4" type="reset" variant="info">Limpiar</b-button>

        </b-form>


        <!-- ALERT TENGO QUE VER -->
        <b-card class="mt-3" header="Form Data Result">
         <pre class="m-0">{{ form }}</pre>
        </b-card>
        
      </form>
  </div>
</template>

<script>
  export default {
      name: 'Formulario',

    data() {
      return {
        form: {
          name: '',
          email: '',
          secciones: null,
          textarea:''
        },
        // PARA EL ALERT CREE UN DATA FALE Y LUEGO LO LLAMO EN METHODS CON UN THIS Y LLAMO TAMBIEN A TODOS LOS DATAS CON THIS TAMBIEN Y LUEGO REALIZO UN IF LLAMANDO A LA FUNCION this.formHasErrors Y FINALMENTE EL RETURN ALERT CON LO QUE QUIERO QUE DIGA
        formHasErrors: false,
        secciones: [{ text: 'Seleccione', value: null }, 'Albumes', 'Revistas', 'Promociones'],
        show: true
      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.secciones = null
        this.form.textarea = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    },
    
    computed: {
      comprobaremail(){
        return this.form.email.length > 0 ? true : false
      },
      comprobarname(){
        return this.form.name.length > 0 ? true : false
      },
      comprobartextarea(){
        return this.form.textarea.length > 0 ? true : false
      },
    }
  }
</script>