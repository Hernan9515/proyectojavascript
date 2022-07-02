<?php include "head.php" ?>
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