import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const Movies=[
    {
      Name:'Red social',
      Genre:'Drama/Ficción histórica',
      Image:'https://catalogo.artium.eus/sites/default/files/imagenesbody/02/2015/cartel.jpg'
    },
    {
      Name:'Top Gun:Maverick',
      Genre:'Acción/Aventura',
      Image:'https://pics.filmaffinity.com/Top_Gun_Maverick-537976462-large.jpg'
    },
    {
      Name:'Top Gun:Pasion y Gloria',
      Genre:'Acción/Aventura',
      Image:'https://www.themoviedb.org/t/p/w500/W8QUPhiBOCdj2urJDzc2D9xdQb.jpg'
    },
    {
      Name:'El conjuro',
      Genre:'Terror/Suspenso',
      Image:'https://mx.web.img3.acsta.net/pictures/19/03/20/19/26/1988298.jpg'
    },
    {
      Name:'Al filo del mañana 2',
      Genre:'Ciencia ficción/Acción',
      Image:'https://es.web.img3.acsta.net/pictures/14/05/05/12/46/010208.jpg'
    },
    {
      Name:'Fury',
      Genre:' Bélico/Acción',
      Image:'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg'
    },
    {
      Name:'Hasta el último hombre',
      Genre:'Bélico/Drama',
      Image:'http://desmonddoss.com/hacksaw-ridge-movie/hrm.jpg'
    },
    {
      Name:'Click: Perdiendo el control',
      Genre:'Comedia/Fantasía',
      Image:'https://pics.filmaffinity.com/Click_Perdiendo_el_control-924581501-large.jpg'
    },
    {
      Name:'Siempre a tu lado',
      Genre:'Drama',
      Image:'https://miro.medium.com/max/480/1*ErraiLcWqiCovSwHZy5lAg.jpeg'
    },
    {
      Name:'Contra lo imposible',
      Genre:'Drama/Deportes',
      Image:'https://es.web.img2.acsta.net/pictures/19/09/17/17/10/3468061.jpg'
    },
  ]



export default function List({navigation}) {
  return (
    <View >
    <SafeAreaView>
  <ScrollView style={styles.scroll_container}>
          <View>
          {
            Movies.map((movie, i) => (
              <ListItem key={i} bottomDivider onPress={() => navigation.navigate("Details")}>
                <Avatar rounded source={{uri: movie.Image}}></Avatar>
                <ListItem.Content>
                  <ListItem.Title>{movie.Name}</ListItem.Title>
                  <ListItem.Subtitle>{movie.Genre}</ListItem.Subtitle>
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
});
