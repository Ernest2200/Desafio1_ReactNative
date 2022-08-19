import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet,Image,Text,ScrollView} from 'react-native';


export default function Home() {
  return (
  <View>
    <ScrollView>
      <View>
      <View style={{flexDirection:'row'}} >
        <Image
        style={styles.banner}
        source={{uri:'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/12/producciones-netflix-2175501.jpg?itok=uFhAi4Ez'} }/>
      </View>
      </View>

      <View style={styles.contenedor}>
  <Text style={styles.titulo}>Comedia</Text>
  <ScrollView horizontal>
    <View>
    <Image
    style={styles.peliculas}
    source={{uri:'https://1.bp.blogspot.com/-oZqtpEj62vw/X9cpCv7lAzI/AAAAAAAA7UE/fblZkA9IwF0yWvkqQnhmCRLIhOJcYa0-ACLcBGAsYHQ/s888/la-otra-missy-poster-netflix.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://static.wikia.nocookie.net/doblaje/images/d/d1/LosMiller.jpg/revision/latest?cb=20130823231720&path-prefix=es'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://r2.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F050%2F061%2Fnoche-de-juegos-1.jpg&   nuevoancho=690&medio=abc'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51-ELDuCZIL._SX349_BO1,204,203,200_.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://i.pinimg.com/474x/77/9a/26/779a2649670bd9e5c99ced14d7a63925--the-intouchables-film.jpg'} }/> 
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://static.wikia.nocookie.net/doblaje/images/3/31/Como_Ser_Soltera_Poster_Latino_JPosters.jpg/revision/latest?cb=20160126023135&path-prefix=es'} }/>
    </View>
  </ScrollView>
 </View>


 <View style={styles.contenedor}>
 <Text style={styles.titulo}>Romance</Text>
  <ScrollView horizontal>
    <View>
    <Image
    style={styles.peliculas}
    source={{uri:'https://i.pinimg.com/originals/b4/4b/4f/b44b4fa2ea8448ed7769a9510a174075.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/71y41l8swYL._AC_SX342_.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/71yOlq2yb1L._SL1211_.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/816aahAJIuL._SL1500_.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://images-na.ssl-images-amazon.com/images/I/51Cyc+3qSTL._SX327_BO1,204,203,200_.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://images-na.ssl-images-amazon.com/images/I/61Ug3t+ocUL.jpg'} }/>
    </View>
  </ScrollView>
</View>

<View style={styles.contenedor}>
  <Text style={styles.titulo}>Acción</Text>
  <ScrollView horizontal>
    <View>
    <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/51m2ihShWkL._SY445_.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/61GnAONreLL._SL1024_.jpg'} }/>
    </View>
    <View>
     <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/71ZyEZrIgiL._AC_SY450_.jpg'} }/>
    </View>
    <View>
    <Image
    style={styles.peliculas}
    source={{uri:'https://static.wikia.nocookie.net/doblaje/images/7/71/Mision_Imposible_-_Repercusi%C3%B3n.jpg/revision/latest?cb=20180606233113&path-prefix=es'} }/>
    </View>
    <View>
    <Image
    style={styles.peliculas}
    source={{uri:'https://es.web.img3.acsta.net/pictures/21/05/25/13/44/0609737.jpg'} }/>
    </View>
    <View>
    <Image
    style={styles.peliculas}
    source={{uri:'https://m.media-amazon.com/images/I/81AXRX0MnPL._SL1500_.jpg'} }/>
    </View>
  </ScrollView>
 </View>



    </ScrollView>
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
  contenedor:{
  
    backgroundColor: '#121212',
 
 },
 titulo:{
   fontWeight:'bold',
   fontSize:24,
   color: '#f4f4f4',
   marginVertical:10,
   marginStart:10
 },
 peliculas:{
   width:150,
   height:200,
   marginStart:10,
   marginRight:10
 },
  banner:{
    height:250,
    flex:1
   },
});
