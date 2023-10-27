//Datos de im&aacute;genes: T&iacute;tulos
titulos = ['1. India - Agra - El Taj Majal.',
   '2. Albania - Region de Ballsh.',
   '3. Atenas- Parten&oacute;n.',
   '4. B&eacute;lgica - Amberes.',
   '5. Costa Rica - Parque nacional de la Amistad.',
   '6. Egipto - Templo de Abu Simbel.',
   '7. Espa&ntilde;a - Albacete ciudad.',
   '8. Espa&ntilde;a - Tarragona - Acueducto romano.'];
numTitulo = -1; //Referencia al pie de foto.
numImagen = 0; //Referencia a la imagen.
modo = "0"; //referencia al modo de transici&oacute;n.
window.onload = function () { //tras cargar la p&aacute;gina ... 
   //Localizaci&oacute;n de elementos en el DOM:
   titEnt = document.getElementById("tituloEntrante");  // pie de foto que ponemos (entrante)
   titSal = document.getElementById("tituloSaliente"); // pie de foto que quitamos (saliente)
   imgEnt = document.images["fotoEntrante"]; //imagen entrante
   imgSal = document.images["fotoSaliente"];  //imagen saliente
   divEnt = document.getElementById("entrante"); //pantalla m&oacute;vil entrante
   divSal = document.getElementById("saliente"); //pantalla movil saliente
   miprueba = document.getElementById('prueba'); //l&iacute;nea de informaci&oacute;n.
   tie = document.getElementById("TablaimagenE"); //celda de imagen entrante
   tis = document.getElementById("TablaimagenS"); //celda de imagen saliente
   pararCambio = setInterval(cambio, 8000)
}
function activar() { //al pulsar en el menu ...
   clearInterval(completado) //parar temporizador de transici&oacute;n
   clearInterval(pararCambio) //parar temporizador cambio de imagen
   pararCambio = setInterval(cambio, 8000) //iniciar temporizador cambio de imagen
   cambio() //cambiar imagen.
}
function cambio() { //Temporizador de cambio de imagen
   //reiniciar variables
   divSal.style.left = "0px" //posici&oacute;n pantalla saliente
   divSal.style.top = "0px"
   divEnt.style.left = "0px" //posici&oacute;n pantalla entrante
   divEnt.style.top = "0px"
   divSal.style.opacity = 1; //opacidad imagen saliente
   divSal.style.filter = "alpha(opacity=100)"
   titSal.style.visibility = "visible"; //visibilidad t&iacute;tulo saliente.
   imgEnt.style.width = "400px"; //tama&ntilde;o imagen entrante
   imgSal.style.width = "400px"; //tama&ntilde;o imagen saliente
   divSal.style.zIndex = "0" //restaurar superposiciones
   //tipos de transici&oacute;n
   switch (modo) {
      case "0": //tipo Sin transici&oacute;n
         divSal.style.left = "400px" //posici&oacute;n inicial pantalla saliente.
         miprueba.innerHTML = "Sin Transici&oacute;n."; //info tipo transici&oacute;n
         break;
      case "1": //tipo De derecha a izquierda
         posEnt = 400; //posici&oacute;n inicial pantalla entrante.
         posSal = 0; //posicion inicial pantalla saliente.
         miprueba.innerHTML = "Transici&oacute;n de derecha a izquierda.";
         break;
      case "2": //tipo De izquierda a derecha
         posEnt = -400; //posici&oacute;n inicial pantalla entrante.
         posSal = 0; //posicion inicial pantalla saliente.
         miprueba.innerHTML = "Transici&oacute;n de izquierda a derecha.";
         break;
      case "3": //tipo De arriba a abajo
         posEnt = -340;
         posSal = 0;
         miprueba.innerHTML = "Transici&oacute;n de arriba a abajo.";
         break;
      case "4": //tipo De abajo a arriba
         posEnt = 340;
         posSal = 0;
         miprueba.innerHTML = "Transici&oacute;n de abajo a arriba.";
         break;
      case "5": //tipo Transparencias
         gradoTrans = 100;
         miprueba.innerHTML = "Transici&oacute;n con transparencias."
         break;
      case "6": //tipo Aumentar imagen 
         aumentar = 0; //tama&ntilde;o inicial
         tie.valign = "middle" //alineaci&oacute;n vertical centrada
         tie.align = "center" //alineaci&oacute;n horizontal centrada
         tie.height = "300" //altura = altura de imagen
         tie.width = "400" //anchura = anchura de imagen
         miprueba.innerHTML = "Transici&oacute;n aumentando la imagen."
         break;
      case "7": //tipo Disminuir imagen 
         disminuir = 400; //tama&ntilde;o inicial
         tis.valign = "middle" //alineaci&oacute;n vertical centrada
         tis.align = "center" //alineaci&oacute;n horizontal centrada
         tis.height = "300" //altura = altura de imagen
         tis.width = "400" //anchura = anchura de imagen
         miprueba.innerHTML = "Transici&oacute;n disminuyendo la imagen."
         break;
   }
   //Transici&oacute;n y paso a imagen siguiente.
   completado = setInterval(transicion, 50) //iniciar temporizador transici&oacute;n
   numImagen++; //paso a la imagen siguiente
   numTitulo++; //paso a pie de foto siguiente
   if (numImagen > 8) { //reiniciar tras llegar al final.
      numImagen = 1
      numTitulo = 0
   }
}
function transicion() { //temporizador de transici&oacute;n
   switch (modo) {
      case "0"://modo sin transici&oacute;n
         visionar(); //visualizar elementos comunes
         clearInterval(completado) //parar transici&oacute;n
         break;
      case "1":  //modo de derecha a izquierda
         visionar(); //visualizar en pantalla
         posEnt -= 10; //px de desplazamiento para entrante
         posSal -= 10; //px de desplazamiento para saliente
         divEnt.style.left = posEnt + "px"; //desplazamiento pantalla entrante 
         divSal.style.left = posSal + "px";	//desplazamiento pantalla saliente 
         if (posEnt <= 0) { //la pantalla entrante ocupa toda la pantalla:
            clearInterval(completado) //parar el desplazamiento.   
         }
         break;
      case "2":  //modo de izquierda a derecha
         visionar(); //visualizar en pantalla
         posEnt += 10; //px de desplazamiento para entrante
         posSal += 10; //px de desplazamiento para saliente
         divEnt.style.left = posEnt + "px"; //desplazamiento pantalla entrante 
         divSal.style.left = posSal + "px";	//desplazamiento pantalla saliente 
         if (posEnt >= 0) { //la pantalla entrante ocupa toda la pantalla:
            clearInterval(completado) //parar el desplazamiento.   
         }
         break;
      case "3":  //modo de arriba a abajo
         visionar(); //visualizar en pantalla
         posEnt += 10; //px de desplazamiento
         posSal += 10;
         divEnt.style.top = posEnt + "px"; //desplazamiento pantallas 
         divSal.style.top = posSal + "px";
         if (posEnt >= 0) { //parar el desplazamiento.
            clearInterval(completado)
         }
         break;
      case "4":  //modo de abajo a arriba
         visionar(); //visualizar en pantalla
         posEnt -= 10; //px de desplazamientovertical-align: ;
         posSal -= 10;
         divEnt.style.top = posEnt + "px"; //desplazamiento pantallas 
         divSal.style.top = posSal + "px";
         if (posEnt <= 0) { //parar el desplazamiento.
            clearInterval(completado)
         }
         break;
      case "5": //modo transparencias
         gradoTrans -= 2; //cambio en el grado de transparencia
         transpEnt = (100 - gradoTrans) / 100; //grado transp. para entrante (mozilla)
         transpSal = gradoTrans / 100; //grado trans. para saliente (mozilla)
         transpIeEnt = 100 - gradoTrans; //grado trans. para entrante (I.E.)
         transpIeSal = gradoTrans; //grado trans. para saliente (I.E.)
         divEnt.style.opacity = transpEnt; //estilo trans. entrante (mozilla)
         divSal.style.opacity = transpSal; //estilo trans. saliente (mozilla)
         divEnt.style.filter = "alpha(opacity=" + transpIeEnt + ")"; //estilo trans. entrante (I.E.)
         divSal.style.filter = "alpha(opacity=" + transpIeSal + ")"; //estilo trans. saliente (I.E.)
         visionar() //visualizar pantallas de imagen
         titSal.style.visibility = "hidden" //desechamos el titulo saliente.
         if (gradoTrans <= 0) { // completamos la transici&oacute;n
            clearInterval(completado) //paramos el temporizador.
         }
         break;
      case "6": //modo aumentar imagen
         aumentar += 10; //aumento de tama&ntilde;o por intervalo
         imgEnt.style.width = aumentar + "px" //aplicar aumento con CSS
         visionar() //ver im&aacute;genes
         titSal.style.visibility = "hidden"; //quitar t&iacute;tulo saliente
         if (aumentar >= 400) { //parar transici&oacute;n al completar.
            clearInterval(completado);
         }
         break;
      case "7": //modo disminuir imagen
         disminuir -= 10; //disminuci&oacute;n de tama&ntilde;o por intervalo
         imgSal.style.width = disminuir + "px" //aplicar disminuci&oacute;n con CSS
         divSal.style.zIndex = "1" //posicionar delante
         visionar() //ver im&aacute;genes
         titSal.style.visibility = "hidden"; //quitar t&iacute;tulo saliente
         if (disminuir <= 0) { //parar transici&oacute;n al completar.
            clearInterval(completado);
         }
         break;
   }
}
function visionar() { //visualiza la imagen
   fotoEntra = numImagen + 1; //num para foto entrante
   tituloEntra = numTitulo + 1;  //num para titulo entrante
   if (fotoEntra > 8) { //reiniciamos ciclo al llegar al final
      fotoEntra = 1;
      tituloEntra = 0;
   }
   imgEnt.src = "foto" + fotoEntra + ".jpg"; //mostrar imagen entrante
   imgSal.src = "foto" + numImagen + ".jpg"; //mostrar imagen saliente
   titEnt.innerHTML = titulos[tituloEntra]; //mostrar pie foto entrante
   titSal.innerHTML = titulos[numTitulo]; //mostrar pie foto saliente
}
