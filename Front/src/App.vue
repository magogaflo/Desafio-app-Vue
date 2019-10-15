<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <a class="navbar-brand logo_h" href="Home.html">
        <img src="./assets/logoDA.png" class="logoPrincipal" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <div class="collapse navbar-collapse offset" id="navbarSupportedContent">

        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link"> <router-link to="/">HOME</router-link><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" ><router-link to="/about">ABOUT</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" > <router-link to="/contacto">CONTACTO</router-link></a>
          </li>
        </ul>

      </div>
  	</nav>
    <router-view/>
  </div>
</template>

