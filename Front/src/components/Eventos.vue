<template >
    <div>
       <!--FLECHA-->
		<div class="volverAtras">
			<a class="nav-link"><router-link to="/">
				<img src="../assets/flecha.png" class="flecha" /></router-link>
			</a>
		</div>
	<!--EVENTO-->
		<img src="../assets/logocurso.png" class="imgEvento" />
		<div class="eventoc">
			<div class="descripcionE"> 
				{{descripcion}} 
				<h3 class="evento1">{{evento1}}</h3>
			</div>
		
			<div class="descripcionExtra" v-for="(idEvento, index) of evento" >
				<p>Lugar:{{idEvento.nombre}}</p>
		    	<p>Direccion:{{}}</p>
				<p>Fecha:{{idEvento.fecha}}</p>
				<p>Hora:{{idEvento.hora}}</p>
			</div>
		
		</div>
			
		<button><router-link class="btn btn-celeste btn-insc" :to="'/formulario'">Inscribirme</router-link></button>
			<!--<a href="Formulario.html" class="btn btn-celeste btn-insc"></a>-->
	</div>
	
</template>


<script>
export default {
	name: 'Evento',
	data(){return {
		descripcion: `En esta charla vas a aprender a diseñar tus primeras
		 interfaces de aplicación para el celular y resolver una problemática cotidiana.
		 En esta charla vas a aprender a diseñar tus primeras interfaces de aplicación para el celular y resolver
		 una problemática cotidiana.`,
		evento1:`Detalle del evento`,
		evento:[]
		}
	},
	
	mounted() {
		const id = this.$route.params.idEvento
	
		fetch('http://localhost:3000/eventos/'+ id, {mode:'cors'}) 
 		 .then(res=> {
			return res.json();
 		 	}).then(data=> {
			  	this.evento = data;
		 		
		});
			
	
	}
	
}

</script>
