<!-- VAMOS A CREAR UN NAVBAR DESDE VUEJS BOOTSTRAP PARA ESO BORRE LA BARRA QUE TRAE POR DEFECTO Y DEJE <router-view/> PORQUE LO OTRO DEBE IR SI O SI EL TEMPLATE CON EL DIV  VIDEO https://www.youtube.com/watch?v=qoE6pTHv5eg&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=26 -->
<template>
  <div id="app">
    <!-- AQUI VA EL NAVBAR DE BOOTSTRAP . AHORA SON OTROS LOS COMANDO. TOGGLEABLE="MD (PARA DISPOSITIVOS MOVILES HASTA MEDIUN. VIENE RESPONSIVE ALTIRO) TYPE="DARK" (AQUI ES PARA LA LETRA EL COLOR) Y VARIANT="DANGER" (ES EL COLOR DE LA BARRA . EL NAVBAR QUE PUSE ES EL PRIMERO Y SOLO LE CAMBIE EL TOOGLEABLE QUE ESTABA EN LG POR MD -->
    <!-- ESTA ES LA BARRA NAVEGADORA -->
    <b-navbar toggleable="md" type="dark" variant="dark">

      <!-- VAMOS A CREAR UN CONTAINER. AHORA ES TODO CON B ANTES. PARA CONTAINER ES B-CONTAINER -->
      <b-container>

        <!-- ESTE ES EL BOTON DE LA BARRA NAVEGADORA -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- ESTE ES EL LOGO DE NUESTRA BARRA NAVEGADORA -->
        <b-navbar-brand href="#">Jaime</b-navbar-brand>

        <!-- ELEMENTOS COLAPSADOS QUIERE DECIR QUE TODOS LOS ELEMENTOS QUE ESTEN DENTRO DE B-COLLAPSE SE VAN A OCULTAR AL MOMENTO QUE NUESTRO DISPOSITIVO SEA MD EN ESTE CASO. EL ID="NAV_COLLAPSE" ES IMPORTANTE PORK ESTA RELACIONADO CON EL TARGET="NAV_COLLAPSE" EN LA LINEA 12 ESTO QUIERE DECIR QUE CADA VEZ QUE TOQUEMOS EL BBOTON SE DESPLEGARA TODO LO QUE ESTA EN B-COLLAPSE-->
        <b-collapse is-nav id="nav-collapse">

          <!-- ¡¡ OJO AQUI ES EN DONDE ESTOY PONIENDO LAS RUTAS O ROUTES !!  ELEMENTOS QUE SE DESPLEGARAN CUANDO PASE A FORMATO MD RESPOSIVE AL MOMENTO DE HACER CLICK EN EL BOTON. SACAMOS EL DISABLE PORQUE QUEREMOS QUE SEA ACTIVO EL EXACT VA ASI PARA QUE CADA VEZ QUE HAGAMOS CLICK SE ILUMINA UN POCO MAS LAS LETRAS   -->
            <b-navbar-nav>
              <b-nav-item :to="{name: 'Home'}" active-class="active" exact>Home</b-nav-item>
              <b-nav-item :to="{name: 'About'}" active-class="active">About</b-nav-item>
              <b-nav-item :to="{name: 'Contact'}" active-class="active">Contact</b-nav-item>
              <b-nav-item :to="{name: 'Grid'}" active-class="active">Grid</b-nav-item>
              <b-nav-item :to="{name: 'Cards'}" active-class="active">Cards</b-nav-item>
              <b-nav-item :to="{name: 'Revistas'}" active-class="active">Revistas</b-nav-item>
              <b-nav-item :to="{name: 'Form'}" active-class="active">Form</b-nav-item>
              <b-nav-item :to="{name: 'Formulario'}" active-class="active">Formulario</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
        <!-- FIN DE B-COLLAPSE -->

      </b-container>
      <!-- FIN DEL CONTAINER -->

    </b-navbar>

  <!-- TODO LO QUE ESTE DE FORMA DINAMICA HAY QUE REALIZAR UN CONTAINER.VOY HACER UN CONTAINER PARA CENTRAR EL CONTENIDO DE LA PAGINA. VIDEO https://www.youtube.com/watch?v=WPlOlF3lWK0&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=27  PAGINA DE VUE BOOTSTRAP https://bootstrap-vue.org/docs/components/layout#layout-and-grid-system -->
    <b-container>
      <!-- ESTE ROUTER-VIEW VENIA DE FABRICA XD -->
      <router-view/>

    </b-container>





    <!-- VOY A SACAR ESTAS VISTAS  -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> -->
  </div>
</template>

<!-- ELIMINE TODOS LOS ESTILOS QUE VENIAN DE DEFAULT EN APP -->
