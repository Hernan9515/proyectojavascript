<?php include "head.php" ?>
<header class="hero">
    <nav class="nav__hero">
      <div class="container nav__container">
        <div class="logo">
          <a href="index.html"><img src="img/logotipo.png" alt="logotipo" width="370px" height="60px"></a>
        </div>
        <div class="links">
          <a href="#" class="link">Inicio</a>
          <a href="#" class="link">Servicios</a>
          <a href="#" class="link">Proyectos</a>
          <a href="#" class="link">Clientes</a>
          <a href="#" class="link">Capacitaciones</a>
          <a href="index.html" class="link link--active">Contacto</a>
        </div>
      </div>
    </nav>
  </header>

  <form class="form-register" onsubmit="salida()" id="form"> 
    <h4>Formulario Registro</h4>
    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre">
    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido">
    <input class="controls" type="number" name="ident" id="identificacion" placeholder="Ingrese su identificación">
    <input class="controls" type="email" name="correo1" id="correo1" placeholder="Ingrese su Correo">
    <input class="controls" type="text" name="usuario1" id="user" placeholder="Usuario">
    <textarea class="controls" id="observacion" name="obs" cols="30" rows="8" placeholder="Escribir observaciones"></textarea>
    <input type="checkbox" class="form-check-input" id="checkpolitica">
    <label for="gridCheck" class="form-check-label"><a href="#"> Acepto Terminos y Condiciones</a></label>
    <input class="botons" type="submit" value="Enviar" id="boton">
    <p><a href="#">¿Ya tengo Cuenta?</a></p>
  </form>
  <script src="formulario.js"></script>
  <?php include "footer.php" ?>