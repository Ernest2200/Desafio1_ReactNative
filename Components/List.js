import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const Series=[
  {
    Name:'The Bing Bang Theory ',
    Description:'Leonard y Sheldon son dos cerebros privilegiados que pueden ser capaces de decirle a todo el mundo más de lo que quiere saber sobre la física cuántica, pero que no tienen ni la menor idea de cómo relacionarse socialmente, sobre todo cuando se trata de mujeres. Sin embargo, la llegada de una nueva vecina llamada Penny al edificio altera la vida sentimental de Leonard y las obsesiones de Sheldon.',
    Genre:'Comedia de situación',
    Seasons: '12',
    Image:'https://static.wikia.nocookie.net/doblaje/images/0/06/La_teor%C3%ADa_del_Big_Bang.jpg/revision/latest/top-crop/width/360/height/450?cb=20220214011226&path-prefix=es'
  },
  {
    Name:'Dr. House',
    Description:'En el Princenton Plainsboro de Nueva Jersey, el Dr. Gregory House, un singular genio de la medicina, se encarga de resolver casos como lo haría Sherlock Holmes. De forma astuta juega con la psicología de la Dra. Lisa Cuddy, su mejor amigo, el oncólogo James Wilson, y del resto de su equipo de trabajo.',
    Genre:'Drama',
    Seasons: '8',
    Image:'https://www.justwatch.com/images/poster/199979169/s332/temporada-6'
  },
  {
    Name:'Breaking Bad',
    Description:'El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor. Su salario apenas le alcanza para sostener a su familia, una situación que no mejora cuando su esposa da a luz y su hijo adolescente sufre de parálisis cerebral, pero Walter queda anonadado cuando se entera que tiene un cáncer terminal. Al concluir que su enfermedad iba a arruinar financieramente a su familia, él toma una decisión desesperada con el fin de ganar más dinero durante el tiempo que le queda y transforma un viejo vehículo de recreación en un laboratorio de matanfetaminas sobre ruedas.',
    Genre:'Drama/Suspenso',
    Seasons: '5',
    Image:'https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg'
  },
  {
    Name:'Peaky Blinders',
    Description:'Gran Bretaña vive la posguerra. Los soldados regresan, se acuñan nuevas revoluciones y nacen bandas criminales en una nación agitada. En Birmingham, una pandilla de gánsters callejeros asciende hasta convertirse en los reyes de la clase obrera.',
    Genre:'Drama/Crimen',
    Seasons: '6',
    Image:'https://es.web.img3.acsta.net/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64'
  },
  {
    Name:'El Mentalista',
    Description:'Patrick Jane, consejero de la Agencia de Investigación de California, es conocido por sus métodos inusuales, sin contar su ex carrera como psíquico, pero el hombre tiene un récord asombroso de casos resueltos en crímenes serios utilizando poderes de observación extraordinarios. Eso no significa que la agente experta Teresa Lisbon y su equipo estén encantados de tener como miembro clave del equipo a una persona tan excéntrica.',
    Genre:'Drama/Suspenso/Misterio',
    Seasons: '7',
    Image:'https://images.justwatch.com/poster/199614970/s718/el-mentalista.%7Bformat%7D'
  },
  {
    Name:'Smallville',
    Description:'Una interpretación sobre la historia de Superman, la cual tiene como protagonista al joven Clark Kent quien trata de asimilar sus surgidos súper poderes. En la décima y última temporada, Clark continúa su romance con Lois y enfrenta su destino mientras supera sus pruebas finales, forjando su identidad icónica por la cual será conocido a través del tiempo.',
    Genre:'Acción/Suspenso/Sobrenatural',
    Seasons: '10',
    Image:'https://es.web.img2.acsta.net/pictures/15/08/25/13/36/120735.jpg'
  },
  {
    Name:'Stranger Things',
    Description:'Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.',
    Genre:'Terror/Suspenso',
    Seasons: '4',
    Image:'https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg'
  },
  {
    Name:'Vis a vis',
    Description:'Macarena es una joven frágil e inocente que entra en la cárcel a la espera de un juicio por un delito de malversación. En prisión, ingresará a un mundo peligroso, completamente diferente a lo que conocía, que la obligará a evolucionar a la fuerza.',
    Genre:'Thriller',
    Seasons: '4',
    Image:'https://www.themoviedb.org/t/p/w500/gctQfAuQbQRjfgBbWm3UW4XeVRa.jpg'
  },
  {
    Name:'The Punisher',
    Genre:'Acción/Ficción Conspirativa',
    Seasons: '2',
    Description:'Un exmarine se ve envuelto en una conspiración militar mientras trata de castigar a las personas responsables de los asesinatos de los miembros de su familia.',
    Image:'https://static.wikia.nocookie.net/disney/images/a/a8/The_Punisher_poster.jpg/revision/latest?cb=20170715010239&path-prefix=es'
  },
  {
    Name:'Ragnarök',
    Description:'Un pequeño pueblo noruego que experimenta inviernos cálidos y aguaceros violentos será liderado por otro Ragnarok.',
    Genre:'Drame',
    Seasons: '2',
    Image:'https://es.web.img3.acsta.net/pictures/19/12/05/09/14/4556356.jpg'
  },
]




export default function List({navigation}) {
  return (
    <View >
    <SafeAreaView>
  <ScrollView style={styles.scroll_container}>
          <View >
          {
           Series.map((movie, i) => (
              <ListItem containerStyle={{backgroundColor:"black"}} 
              
               key={i} bottomDivider onPress={() => navigation.navigate("Detalles", { NameMovie: movie.Name, ImageMovie: movie.Image, MovieDesc:movie.Description})}
               >
                <Avatar style={styles.peliculas}  source={{uri: movie.Image}}></Avatar>
                <ListItem.Content >
                  <ListItem.Title style={{color: "white"}} >{movie.Name}</ListItem.Title>
                  <ListItem.Subtitle style={{color: "white"}}>{movie.Genre}</ListItem.Subtitle>
                  <ListItem.Subtitle style={{color: "white"}}>{movie.Seasons}<Text> Temporadas</Text></ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
          </View>
      </ScrollView>

  </SafeAreaView>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  peliculas:{
    width:150,
    height:200,
    marginStart:10,
    marginRight:10
  }
});
