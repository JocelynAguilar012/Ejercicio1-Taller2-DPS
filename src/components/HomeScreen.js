import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { Card } from "@rneui/themed";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ navigation }) {
  //ARREGLOS QUE CONTENDRAN LOS ALBUMES:
  //ALBUM ROCK
  const rock = [
    { name: "ACDC", src: require("../albumes/rock/acdc.jpg"), genre:"rock", album:'The Razors Edge'},
    { name: "ANDRES CALAMARO", src: require("../albumes/rock/andres.jpg"), genre:"rock", album:'Honestidad Brutal'},
    { name: "ELEFANTE", src: require("../albumes/rock/elefante.jpg"), genre:"rock", album:'ELEFANTE'},
    {
      name: "ENANITOS VERDES",
      src: require("../albumes/rock/enanitosverdes.jpg"),
      genre:"rock",
      album:'Big Bang'
    },
    { name: "GUNS N ROSES", src: require("../albumes/rock/gunsNroses.jpg"), genre:"rock", album:'Use Your lllusion l'},
    {
      name: "HEROES DEL SILENCIO",
      src: require("../albumes/rock/heroessilencio.jpg"), genre:"rock", album:'Senderos De Traicion'
    },
    { name: "KISS", src: require("../albumes/rock/kiss.jpg"), genre:"rock", album:'Dynasty'},
    { name: "LINKIN PARK", src: require("../albumes/rock/linkinpark.jpeg"), genre:"rock", album:'Hybrid Theory'},
    { name: "NIRVANA", src: require("../albumes/rock/nirvana.jpg"), genre:"rock", album:'Nevermind'},
    { name: "SODA STEREO", src: require("../albumes/rock/sodastereo.jpg"), genre:"rock", album:'Obras Cumbres'},
  ];
  //ALBUM LATINO
  const latino = [
    { name: "AVENTURA", src: require("../albumes/latino/aventura.jpg"), genre:"latino", album:'K.O.B. Live'},
    { name: "BAD BUNNY", src: require("../albumes/latino/badbunny01.jpg"), genre:"latino", album:'EL ULTIMO TOUR DEL MUNDO'},
    { name: "BANDA MS", src: require("../albumes/latino/bandams.jpg"), genre:"latino", album:'No Me Pidas Perdon'},
    { name: "CANSERBERO", src: require("../albumes/latino/canserbero.jpg"), genre:"latino", album:'Muerte'},
    {
      name: "DADDY YANKEE",
      src: require("../albumes/latino/daddyyankee.jpg"), genre:"latino",
      album:'Barrio Fino'
    },
    { name: "ELADIO CARRION", src: require("../albumes/latino/eladio.jpg"), genre:"latino", album:'Sauce Boyz'},
    { name: "FERXXO", src: require("../albumes/latino/ferxo.jpg"), genre:"latino", album:"FELIZ CUMPLEAÑOS FERXXO"},
    { name: "KAROL G", src: require("../albumes/latino/karolg.jpg"), genre:"latino", album:'MAÑANA SERA BONITO'},
    { name: "RELS B", src: require("../albumes/latino/relsb.jpg"), genre:"latino", album:'RELS B'},
    { name: "WOS", src: require("../albumes/latino/wos.jpg"), genre:"latino", album:'OSCURO EXTASIS'},
  ];
  //POP
  const pop = [
    { name: "ARIANA GRANDE", src: require("../albumes/pop/ariana.jpg"), genre:"pop", album:'Dangerous Woman'},
    { name: "AVICII", src: require("../albumes/pop/avicii.png"), genre:"pop", album:'True'},
    { name: "BRUNO MARS", src: require("../albumes/pop/bruno.jpg"), genre:"pop", album:'Unorthodox Jukebox'},
    { name: "ED SHEERAN", src: require("../albumes/pop/ed.jpg"), genre:"pop", album:'Divide'},
    {
      name: "IMAGINE DRAGONS",
      src: require("../albumes/pop/imaginedragons.jpg"), genre:"pop", album:'Evolve'
    },
    { name: "JUSTIN BIEBER", src: require("../albumes/pop/justin.jpg"), genre:"pop", album:'Purpose'},
    { name: "MAC MILLER", src: require("../albumes/pop/mac.jpg"), genre:"pop", album:"Swimming"},
    { name: "SELENA GOMEZ", src: require("../albumes/pop/selena.jpg"), genre:"pop", album:'rare'},
    { name: "TAYLOR SWITFT", src: require("../albumes/pop/Taylor.jpg"), genre:"pop", album:'1989'},
    { name: "THE WEEKND", src: require("../albumes/pop/thew.png"), genre:"pop", album:'Starboy'},
  ];
  const handleCardPress = (item) => {
    // Lógica a ejecutar cuando se presiona la tarjeta
    console.log(item, "Veamos el item");
    console.log("La tarjeta fue presionada");
    //EL item contendra el objeto del album seleccionado
    navigation.navigate("Songs", {item});
  };
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.containerTitulo}>
        <Text style={styles.textStyle}>MUSIC UDB</Text>
        <MaterialCommunityIcons name="shopping-music" size={30} color="black" />
      </View>
        <View>
          <View style={styles.containerGenero}>
            <Text style={styles.textGenero}>Rock</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={styles.containerAlbums}>
              {rock.map((u, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleCardPress(u);
                    }}
                  >
                    <Card>
                      <Card.Image
                        style={{ padding: 0, width: 200}}
                        source={u.src}
                      />
                      {/* <Card.Title>{u.album}</Card.Title> */}
                      <Text style={{fontWeight:"bold", textAlign:"center"}}>{u.album}</Text>
                      <Text style={styles.name}>{u.name}</Text>
                    </Card>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.containerGenero}>
            <Text style={styles.textGenero}>Latina</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={styles.containerAlbums}>
              {latino.map((u, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleCardPress(u);
                    }}
                  >
                    <Card>
                      <Card.Image
                        style={{ padding: 0, width: 200}}
                        source={u.src}
                      />
                      <Text style={{fontWeight:"bold", textAlign:"center"}}>{u.album}</Text>
                      <Text style={styles.name}>{u.name}</Text>
                    </Card>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.containerGenero}>
            <Text style={styles.textGenero}>Pop</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={styles.containerAlbums}>
              {pop.map((u, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleCardPress(u);
                    }}
                  >
                    <Card>
                      <Card.Image
                        style={{ padding: 0, width: 200}}
                        source={u.src}
                      />
                      <Text style={{fontWeight:"bold", textAlign:"center"}}>{u.album}</Text>
                      <Text style={styles.name}>{u.name}</Text>
                    </Card>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  containerTitulo: {
    backgroundColor: "#3671F9",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  name: {
    fontSize: 12,
    textAlign: "center",
  },
  containerAlbums: {
    flexDirection: "row",
  },
  containerGenero: {
    marginTop: 5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textGenero: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    width: 250,
    textAlign: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
};
