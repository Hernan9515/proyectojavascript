'Use Strict'
function formulario() {

    this.nombre="";
    this.apellido="";
    this.documento="";
    this.correo="";
    this.usuario="";
    this.observacion="";

    this.getNombre=function(){
        return nombre;
    }

    this.getApellido=function(){
        return apellido;
    }

    this.getDocumento=function(){
        return documento;
    }

    this.getCorreo=function(){
        return correo;
    }

    this.getUsuario=function(){
        return usuario;
    }

    this.getObservacion=function(){
        return observacion;
    }

    this.setNombre=function(nomb){
        nombre=nomb;
    }

    this.setApellido=function(apell){
        apellido=apell;
    }

    this.setDocumento=function(doc){
        documento=doc;
    }

    this.setCorreo=function(email){
        correo=email;
    }

    this.setUsuario=function(usu){
        usuario=usu;
    }

    this.setObservacion=function(obs){
        observacion=obs
    }
}

function salida(){

    var obj = new formulario();

    var nomb=document.getElementById("nombres").value;
    var apell=document.getElementById("apellidos").value;
    var doc=document.getElementById("identificacion").value;
    var email=document.getElementById("correo1").value;
    var usu=document.getElementById("user").value;
    var obs=document.getElementById("observacion").value;

    obj.setNombre(nomb);
    obj.setApellido(apell);
    obj.setDocumento(doc);
    obj.setCorreo(email);
    obj.setUsuario(usu);
    obj.setObservacion(obs);

    var n1=obj.getNombre();
    var n2=obj.getApellido();
    var n3=obj.getDocumento();
    var n4=obj.getCorreo();
    var n5=obj.getUsuario();
    var n6=obj.getObservacion();

    document.write("Lo datos del usuario son:<br>");
    document.write("Nombre: "+n1+"<br>");
    document.write("Apellido: "+n2+"<br>");
    document.write("Identificación: "+n3+"<br>");
    document.write("Correo: "+n4+"<br>");
    document.write("Usuario: "+n5+"<br>");
    document.write("Observación: "+n6+"<br>");

}

/*class formulario{
    constructor(nombre, apellido, documento, correo, usuario, obsevacion){
        this.nombre=nombre;
        this.apellido=apellido;
        this.documento=documento;
        this.correo=correo;
        this.usuario=usuario;
        this.observacion=obsevacion;
    }
}

const registro =  new formulario();

window.addEventListener('load', function(event){
    const form=document.getElementById("form");
    form.addEventListener('submit',function(e){
        e.preventDefault();

        if(this.nombre.value=="" || this.apellido.value=="" || this.documento.value=="" || this.correo.value=="" || this.usuario.value=="" || this.observacion.value==""){
            alert("Debe ingresar todos los campos");
         }else{
            registro.nombre=this.nombre.value
            registro.apellido=this.apellido.value
            registro.documento=this.documento.value
            registro.correo=this.correo.value
            registro.usuario=this.usuario.value
            registro.observacion=this.observacion.value
            alert("Datos enviados");
        }
    })
});*/