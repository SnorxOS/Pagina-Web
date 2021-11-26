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
        document.getElementById("contGeneral").innerHTML ="Aunque hoy es bien conocida por ser una de las razas más pequeñas del grupo de perros miniatura,"+
        "el Pomerania era, hace tiempo, de un tamaño bastante mayor."+"El nombre de la raza procede de su lugar de origen, Pomerania, que era un antiguo ducado"+ 
        "del litoral Báltico que se encontraba entre el este de Alemania y el oeste de Polonia. El Pomerania descendía de perros de trabajo europeos.\n"+
        "Los colores del Pomerania son muchos y parece que en el pasado varios países europeos se especializaron en distintos colores."+
        "El Pomerania blanco procedía de Francia, mientras que el rojo vino de Italia. Aunque había Pomerania de color blanco y negro en el siglo XIX,"+
        "éstos no eran, salvo rara vez, buenos ejemplares de la raza. Los de color crema y los rojos fueron los más apreciados en esa época.\n\n"+
        "En la década de 1880, se decía que en Inglaterra se limitaba, prácticapeso era de unos 9 kg. De todas formas vemos, gracias al autor Dalziel,"
        +"que había una línea de ejemplares de color leonado oscuro cerca de Birmingham alrededor de 1860.\n\n"+
        "En 1911, el primer Pomerania naranja de Gran Bretaña fue Offley Henry Drew que, tras aparearse con Ch. Mars, sentó las bases para que el naranja"+
        "se volviese un color muy popular. No fue hasta los años 30 cuando se dispuso de una amplia gama de colores en Gran Bretaña,"+
        "siendo el naranja un color que estuvo especialmente de moda en el siglo XX. Los ejemplares de color blanco ya sólo se ven en algunas ocasiones,"+
        "y parece ser que los de color negro han experimentado un cierto resurgir en los últimos 20 años.";
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
        "y de las fabricas de algodon y lana, necesitaban un perro pequeño ratonero, empezaron a cruzar los perros Terrier ingleses y escoceses, dando lugar por"+
        "primera vez en la historia al Yorkshire Terrier. Su apariencia es: de pelo largo, colgante, recto y parejo en cada lado del cuerpo con una línea divisoria."+
        "Sus colores son Negro y Fuego. El Fuego todos los pelos son más oscuros en la raíz, volviéndose más claros hacia la punta."+
        "Marrón y Fuego. El Fuego – todos los pelos son más oscuros en la raíz, volviéndose más claros hacia la punta."+
        "Es molde es igual al negro y fuego pero reemplazando el negro por el marrón."+
        "Dorado: El Fuego – todos los pelos son más oscuros en la raíz, volviéndose más claros hacia la punta.\n "+
        "Completamente fuego, puede haber cierta diferencia de intensidad formando el molde del negro y fuego.\n"+
        "Tricolor: De base blanca en todo el cuerpo, con pelos rojos en la cabeza obligatoriamente, "+
        "una o más manchas negras o azul en el cuerpo de mayor o menor tamaño";
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
        "El origen del gato Persa se remonta al siglo XVII, con los primeros ejemplares importados desde Persia (actual Irán) a Italia y simultáneamente el gato de Angora de Turquía a "+
        "Francia.El gato de pelo largo surgió a demanda de la aristocracia de la época, y el gen responsable del pelo largo surgió de la hibridación con el Manul (felis manul) "+
        "o gato de Pallas.Los gatos provenientes de Persia eran grises y los de Turquía blancos."+
        "Pronto llegaron a Gran Bretaña, donde se desarrolló la rama persa actual, a finales de 1800 en Inglaterra donde se perfeccionó con la de sangre de gatos de Angora, "+
        "obteniendo un pelo más sedoso y multiplicando los colores de la capa."+" En los colores tenemos: Unicolores: Negro,Blanco,Azu,Crema y Rojo"+
        "Bicolor; blanco y negro, blanco y azul, blanco y rojo, blanco y crema.."+"Calicó diluido; blanco con manchas azules y crema."+
        "Calicó; así como la escama de tortuga es negra con manchas blancas y rojas, el calicó es blanco con manchas negras y rojas."+
        "Y muchas variedades según la combinación.";       
      }
    }, false);
    })