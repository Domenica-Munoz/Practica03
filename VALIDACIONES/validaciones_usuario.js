
var valCed = false;
var valNom = false;
var valApel = false;
var valEmail = false;
var valTel = false;
var valDir=   false;
var valFecha= false;
var valContra=false;


//funcion que valida el campo de Nombre 
function validarNumeros(e){   
   
    tecla = e.keyCode || e.which;   
    var nombre = window.document.getElementById("nombres");
 //verifica que el campo no contenga numeros
 if(expre.test(nombre.value)==true){
       
      nombres.style.borderColor ="red";
     valNom = false;
     var aux = nombre.value.substring(nombre.value.length-1);
     var rempla = nombre.value.replace(aux,"");
     nombre.value=rempla;
}
  
    //verifica que el campo Nombre contenga solo letras 
    else if (expreL.test(nombre.value)==true){
        nombres.style.borderColor ="blue";
        valNom=true;
    }else{
         nombres.style.borderColor ="red";
        valNom=false;
    }
    
    }
    //verifica que tedos los campos esten correctos


    //funcion que valida el campo del Apellido
function validarNumeros1(e){   
    
  tecla = e.keyCode || e.which;  
    
    var apellido = window.document.getElementById("apellidos");
    
        //valida que el campo no contenga numeros 
     if(expre.test(apellido.value)==true){
       
      apellido.style.borderColor ="red";
         valApel = false;
    var aux = apellido.value.substring(apellido.value.length-1);
     var rempla = apellido.value.replace(aux,"");
     apellido.value=rempla;
}
    //valida que el campo tenga el formato solicitado
    else if (expreL.test(apellido.value)==true){
    apellido.style.borderColor ="blue";
    valApel = true;
}
    else{
         apellidos.style.borderColor ="red";
    valApel = false;
}
}
    

//funcion que valida el campo de telefono
    function validarLetras1(e){   
   
    tecla = e.keyCode || e.which;
    var telefono = window.document.getElementById("telefono");
        telefono.style.borderColor = "none";
        
        //verifica que no se ingrese una letra en el campo 
     if((tecla>64&& tecla<91) || tecla==194){            
        telefono.style.borderColor = "red";
         valTel=false;
         var aux = telefono.value.substring(telefono.value.length-1);
     var rempla = telefono.value.replace(aux,"");
     telefono.value=rempla;
         
               }  else{
                   telefono.style.borderColor = "blue";
                   valtele=true;
               }
    }
    function validaCedula(e){
    
        tecla = e.keyCode | e.which;
       //toma el texto ingresado en en campo dela cedula
         var cadena = window.document.getElementById("cedula").value.trim();
         cedula.style.borderColor ="none";
         
        //variables declaradas para validacion de la cedula
            var total = 0;
            var longitud = cadena.length;
            var verificador = longitud - 1;
    
          
              for(i = 0; i < verificador; i++){
                if (i%2 === 0) {
                  var aux = cadena.charAt(i) * 2;
                  if (aux > 9) aux -= 9;
                  total += aux;
                } else {
                  total += parseInt(cadena.charAt(i)); // hace concatenaciones el lugar de sumas
                }
              }
    
              total = total % 10 ? 10 - total % 10 : 0;
    
        //validacion de la cedula 
        
              if (cadena.charAt(longitud-1) == total && longitud==10) {
        
                console.info("cedula Valida" );
                  cedula.style.borderColor ="blue";
                  valCed=true;
              }else if(longitud!=10){
                console.info("cedula invalida" );
                  cedula.style.borderColor ="red";
                  valCed = false;
                 
              }
        
    }

    function validar_correo()
{
    var contenido=document.getElementById('correo').value;
    var conte=contenido.split("@est.ups.edu.ec");
    var conte=contenido.split("@ups.edu.ec");
    if(!conte[1] || conte[0]=="") {
      alert('no es correo valido(1)');
    } else{
      var cont1=conte[0].split(".");
      var cont2=conte[1].split(".");
      if(!cont1[1]){
        alert('no es correo valido(2)');
      }else if(!cont2[1])
      {
        alert('no es correo valido(3)');
      }
    }
}
    

function validarEmail(elemento){
  var texto = document.getElementById(elemento.id).value;
  
  if (!regex.test(texto)) {
      document.getElementById("resultado").innerHTML = "Correo invalido";
      correo.style.border = '4px red solid'
  } else {
    document.getElementById("resultado").innerHTML = "";
    correo.style.border = '4px blue solid'
  }
}



function validarFecha() {
  var Fecha = document.getElementById('fechaNacimiento').value;
  var Mensaje = '';
  document.getElementById('mensajeFecha').className = '';
  if (Fecha.length == 10) {
    fe = Fecha.split('/');
    var Anio = fe[2];
    var Mes = fe[1] - 1;
    var Dia = fe[0];
    var VFecha = new Date(Anio, Mes, Dia);
    if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
      Mensaje = 'Fecha correcta';
      document.getElementById('mensajeFecha').innerHTML = 'Fecha correcta';
      fechaNacimiento.style.borderColor = "blue";
    }
    else {
      Mensaje = 'Fecha incorrecta';
      document.getElementById('mensajeFecha').innerText = 'no valido';
      fechaNacimiento.style.borderColor = "red";
    }
  }
  document.getElementById('mensajeFecha').innerHTML = Mensaje;
}



function validaTodo(formulario01){
    var verdad = false;

    if(valCed==false){
        window.document.getElementById("mensajeCedula").innerHTML = "<p>Cedula Incorrecta</p>"
        console.info("mal echo");
       
        
    }
    else{
         window.document.getElementById("mensajeCedula").innerHTML = "<p></p>"
        
    }
    if(valNom==false){
        window.document.getElementById("mensajeNombres").innerHTML = "<p>Nombres mal Ingresados</p>"
        console.info("mal echo");
       
        
    }
    else{
         window.document.getElementById("mensajeNombres").innerHTML = "<p></p>"
       
    }
    if(valApel==false){
        window.document.getElementById("mensajeApellidos").innerHTML = "<p>Apellidos mal  Ingresados</p>"
        console.info("mal echo");
         
        
    }
    else{
         window.document.getElementById("mensajeApellidos").innerHTML = "<p></p>"
        
        
    }
    if(valDir==false){
        window.document.getElementById("mensajeDireccion").innerHTML = "<p>Direccion Incorecta</p>"
        console.info("mal echo");
         
        
        
    }
    else{
         window.document.getElementById("mensajeDireccion").innerHTML = "<p></p>"
       
    }
    if(valTel==false){
        window.document.getElementById("mensajeTelefono").innerHTML = "<p>Telefono mal ingresada</p>"
        console.info("mal echo");
        
        
    }
    else{
 window.document.getElementById("mensajeTelefono").innerHTML = "<p></p>"

    }
    if(valFecha==false){
        window.document.getElementById("mensajeFecha").innerHTML = "<p>Fecha mal ingresada</p>"

    }else{
        window.document.getElementById("mensajeFecha").innerHTML = "<p></p>"

    }

    if(valEmail==false){
        windows.document.getElementById('mensajeCorreo').innerHTML="<p>Correo  incorrecta</p>"
        console.info("mal echo");

    }else{
        window.document.getElementById('mensajeCorreo').innerHTML="<p></p>"
    }
    if(valContra==false){
        windows.document.getElementById('mensajeContrasena').innerHTML="<p>Contrasena incorrecta</p>"
        console.info("mal echo");
    }else{
        window.document.getElementById('mensajeContrasena').innerHTML="<p></p>"
    }

    
}
 