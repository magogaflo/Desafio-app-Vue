<template>
  <div>
  <!--JUMBOTRON-->
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-4 comunidadMujeres">💡 COMUNIDAD DE MUJERES APASIONADAS POR LA TECNOLOGÍA</h1>
			<p class="lead VosSosParte">#VosSosParte</p>
		</div>
	</div>
	
	<!--LISTADO DE EVENTOS-->
	<h1 class="proxEventos">Próximos Eventos</h1>
  
	<div class="contenedorEventos"> <!-- contenedor de todos los eventos -->
		<div class="row">
      
			<div class="col-sm-6" v-for="evento in eventos" :key="evento.id">
        <br>
				<div class="card border-info">
					<div class="card-header border-info">
						<font style="vertical-align: heredar;">{{evento.fecha}}</font>
					</div>
					<div class="card-body">
						<h5 class="card-title">{{evento.nombre}}</h5>
						<!-- <p class="card-text"></p>  -->
						<router-link class="btn btn-celeste" :to="'/evento/'+ evento.idEvento">Ver Evento</router-link>
					</div>
				</div>
			</div>

		</div>
	</div>
  
</div>

</template>

<script>
  export default {
    name: 'Home',
      data() {
      return {
        eventos: []     
      }
    },
    methods:{
      fetchData(){
        fetch('http://localhost:3000/eventos', {mode: 'cors'}).then((response)=>{
          return response.json();
        }).then((data)=> {
          this.eventos = data.map(item=>{
            item.fecha = new Date(item.fecha).toLocaleDateString()
            return item;
          })
          
          console.log('Request successful', data);
        }).catch((error)=>{
          console.log('Request failed', error)
        })
      }
    },
    mounted(){
      this.fetchData()
    }
    
  }
</script>


