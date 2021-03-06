//Funcion para el texto que sale del Title a la par del input para indicar al usuario que hacer
$( function() {
  $("[title]").tooltip({
    position:{
      my: "left top",
      at: "right+5 top-5",
      collision:"none"
    }
  });
  $("#dialog").dialog();
 });
 //Funcion para que cuando el usuario envie el formulario al correo, se envien el mensaje, el nombre y el correo.
$(function() {
  const $form = document.querySelector('#form');
  const $buttonMail = document.querySelector('#send');
  $form.addEventListener('submit',handleSubmit);
  function handleSubmit(event){
    event.preventDefault();
    const  form = new FormData(this);
    $buttonMail.setAttribute('href',`mailto:marcolivares2000@gmail.com?subject= ${form.get('motivo')}&body= Mi Correo Electronico:${form.get('email')}\n
    Mi numero telefonico es: ${form.get('telefono')}\n Mensaje: ${form.get('message')}`);
    $buttonMail.click();
  }
});
//Esta Funcion para hacer que cuando el usuario clickee en galeria, le resalte el div donde se encuentran los botones de galeria
$(function() {
  var box = document.getElementById('botones');
  document.getElementById('galeria').addEventListener('click', function(evt) {
    var target = evt.target;
    if (target.id == 'galeria') {
      box.style.border = '4px solid black';
      document.getElementById("head1").innerHTML="Esta es la Galeria Da Click Aqui Para Ver Distintas Razas y Mascotas";
    }
  }, false);
  })
  //Informacion de la mascota
  $(function() { //Preferi hacer otra funcion apesar de ser el mismo codigo para llevar un orden
    var box = document.getElementById('contGeneral');
    var select = document.getElementById('infor1')
    var select2 = document.getElementById('infor2')
    var select3 = document.getElementById('infor3')
    document.getElementById('infor1').addEventListener('click', function(e) {//Event List para Pomeranian
      var targ = e.target;
      if (targ.id == 'infor1') {
        document.getElementById("tituGen").innerHTML ="Pomeranian";
        box.style.border = '4px solid black';
        box.style.backgroundColor="white"
        select.style.border='4px solid red';
        select2.style.border='3px solid black';
        select3.style.border='3px solid black';
        document.getElementById("contGeneral").innerHTML ="Aunque hoy es bien conocida por ser una de las razas m??s peque??as del grupo de perros miniatura,"+
        "el Pomerania era, hace tiempo, de un tama??o bastante mayor."+"El nombre de la raza procede de su lugar de origen, Pomerania, que era un antiguo ducado"+ 
        "del litoral B??ltico que se encontraba entre el este de Alemania y el oeste de Polonia. El Pomerania descend??a de perros de trabajo europeos.\n"+
        "Los colores del Pomerania son muchos y parece que en el pasado varios pa??ses europeos se especializaron en distintos colores."+
        "El Pomerania blanco proced??a de Francia, mientras que el rojo vino de Italia. Aunque hab??a Pomerania de color blanco y negro en el siglo XIX,"+
        "??stos no eran, salvo rara vez, buenos ejemplares de la raza. Los de color crema y los rojos fueron los m??s apreciados en esa ??poca.\n\n"+
        "En la d??cada de 1880, se dec??a que en Inglaterra se limitaba, pr??cticapeso era de unos 9 kg. De todas formas vemos, gracias al autor Dalziel,"
        +"que hab??a una l??nea de ejemplares de color leonado oscuro cerca de Birmingham alrededor de 1860.\n\n"+
        "En 1911, el primer Pomerania naranja de Gran Breta??a fue Offley Henry Drew que, tras aparearse con Ch. Mars, sent?? las bases para que el naranja"+
        "se volviese un color muy popular. No fue hasta los a??os 30 cuando se dispuso de una amplia gama de colores en Gran Breta??a,"+
        "siendo el naranja un color que estuvo especialmente de moda en el siglo XX. Los ejemplares de color blanco ya s??lo se ven en algunas ocasiones,"+
        "y parece ser que los de color negro han experimentado un cierto resurgir en los ??ltimos 20 a??os.";
      }
    }, false);
    document.getElementById('infor2').addEventListener('click', function(e) {//Event List para yorkshire terrier
      var targ2 = e.target;
      if (targ2.id == 'infor2') {
        box.style.border = '4px solid black';
        box.style.backgroundColor="white"
        select.style.border='3px solid black';
        select3.style.border='3px solid black';
        select2.style.border='4px solid red';
        document.getElementById("tituGen").innerHTML ="Yorkshire Terrier";
        document.getElementById("contGeneral").innerHTML ="Comenzando la historia del Yorkshire Terrier, los trabajadores de los molinos"+
        "y de las fabricas de algodon y lana, necesitaban un perro peque??o ratonero, empezaron a cruzar los perros Terrier ingleses y escoceses, dando lugar por"+
        "primera vez en la historia al Yorkshire Terrier. Su apariencia es: de pelo largo, colgante, recto y parejo en cada lado del cuerpo con una l??nea divisoria."+
        "Sus colores son Negro y Fuego. El Fuego todos los pelos son m??s oscuros en la ra??z, volvi??ndose m??s claros hacia la punta."+
        "Marr??n y Fuego. El Fuego ??? todos los pelos son m??s oscuros en la ra??z, volvi??ndose m??s claros hacia la punta."+
        "Es molde es igual al negro y fuego pero reemplazando el negro por el marr??n."+
        "Dorado: El Fuego ??? todos los pelos son m??s oscuros en la ra??z, volvi??ndose m??s claros hacia la punta.\n "+
        "Completamente fuego, puede haber cierta diferencia de intensidad formando el molde del negro y fuego.\n"+
        "Tricolor: De base blanca en todo el cuerpo, con pelos rojos en la cabeza obligatoriamente, "+
        "una o m??s manchas negras o azul en el cuerpo de mayor o menor tama??o";
      }
    }, false);
    document.getElementById('infor3').addEventListener('click', function(e) { //Event List para gatos
      var targ2 = e.target;
      if (targ2.id == 'infor3') {
        select.style.border='3px solid black';
        select2.style.border='3px solid black';
        box.style.backgroundColor="white"
        box.style.border = '4px solid black';
        select3.style.border='4px solid red';
        document.getElementById("tituGen").innerHTML ="Gatos";
        document.getElementById("contGeneral").innerHTML ="En nuestro caso, las razas que manejamos son Persas e Himalayos, pero existen muchas mas razas"+
        "como los esfinge,Siames,Birmano, Exoticos, entre otros"+
        "El origen del gato Persa se remonta al siglo XVII, con los primeros ejemplares importados desde Persia (actual Ir??n) a Italia y simult??neamente el gato de Angora de Turqu??a a "+
        "Francia.El gato de pelo largo surgi?? a demanda de la aristocracia de la ??poca, y el gen responsable del pelo largo surgi?? de la hibridaci??n con el Manul (felis manul) "+
        "o gato de Pallas.Los gatos provenientes de Persia eran grises y los de Turqu??a blancos."+
        "Pronto llegaron a Gran Breta??a, donde se desarroll?? la rama persa actual, a finales de 1800 en Inglaterra donde se perfeccion?? con la de sangre de gatos de Angora, "+
        "obteniendo un pelo m??s sedoso y multiplicando los colores de la capa."+" En los colores tenemos: Unicolores: Negro,Blanco,Azu,Crema y Rojo"+
        "Bicolor; blanco y negro, blanco y azul, blanco y rojo, blanco y crema.."+"Calic?? diluido; blanco con manchas azules y crema."+
        "Calic??; as?? como la escama de tortuga es negra con manchas blancas y rojas, el calic?? es blanco con manchas negras y rojas."+
        "Y muchas variedades seg??n la combinaci??n.";       
      }
    }, false);
    })