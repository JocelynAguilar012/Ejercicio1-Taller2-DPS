import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Card } from "@rneui/themed";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GETTRACKSDATA } from "../Tracks/tracks-all-genre-data";
// import SoundPlayer from 'react-native-sound-player';

export default function SongScreen({ route, navigation}) {
  // Accede a las props pasadas desde la pantalla anterior
  const { item } = route.params;
  const [songsData, setSongsData] = useState([]);
  console.log(item, "item desde el otro modal");

  useEffect(() => {
    if (item) {
      const ejecutando = GETTRACKSDATA(item.genre, item.name);
      setSongsData(ejecutando);
    }
  }, []);

  const playSong = (itemAlbum) => {
    itemAlbum.src=item.src;
    // Lógica a ejecutar cuando se presiona la tarjeta
    console.log(itemAlbum, "Veamos el itemAlbum");
    console.log("La tarjeta fue presionada");
    //EL itemAlbum contendra el objeto del album seleccionado
    navigation.navigate("Play Music", {itemAlbum});
  };

  return (
    <SafeAreaView>
      {songsData.length >0 ?<ScrollView>
      <View style={styles.containerTitulo}>
        <Text style={styles.textStyle}>{item.name}</Text>
        {/* <SimpleLineIcons name="earphones" size={20} color="black" /> */}
        <MaterialCommunityIcons name="playlist-music" size={30} color="black" />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Card>
          <Card.Image style={{ width: 250, height: 250}} source={item.src} />
        </Card>
      </View>
        <View style={{ marginTop: 15, alignItems: "center" }}>
          {songsData.map((u, i) => {
            return (
              <View style={{
                borderBottomWidth: 3, height: 50, justifyContent: "space-between", width: 350, borderBottomColor: "#c9c9c9", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, flexDirection: "row",
                alignItems: "center"
              }}>
                <Text style={{fontSize:15, fontWeight:"bold"}}>{u.title}</Text>
                {/* <Text>{u.artist}</Text> */}
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                  <TouchableOpacity onPress={() => {
                      playSong(u);
                    }}>
                    <AntDesign name="caretright" size={30} color="#1770E6" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="do-not-disturb"
                      size={30}
                      color="#666f88"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="favorite"
                      size={30}
                      color="#E64040"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>: <Text>Cargando...</Text>}
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
    marginRight:5
  },
};
