import React, { useState, useEffect } from "react";
import { Card } from "@rneui/themed";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, ScrollView, Text, SafeAreaView, TouchableOpacity, Slider } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Audio } from 'expo-av';

export default function App({ route, navigation }) {
    // Accede a las props pasadas desde la pantalla anterior
    const { itemAlbum } = route.params;
    // console.log(itemAlbum, "item PLAY");
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [positionMillis, setPositionMillis] = useState(0);
    const [durationMillis, setDurationMillis] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);

    // Función para cargar y reproducir el audio
    const playSound = async () => {
        let data="./../music/MIEXTENÍARAZÓN.mp3";
        const { sound } = await Audio.Sound.createAsync(
            require(data)
        );
        // console.log(sound, "Lo que devuelve el sound");
        setSound(sound);
        setIsPlaying(true);
        await sound.playAsync(); // Reproducir el audio
    };

    // Función para detener la reproducción de audio
    const stopSound = async () => {
        if (sound) {
            setIsPlaying(false);
            await sound.stopAsync(); // Detener el audio
        }
    };

    useEffect(() => {
        if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
                if (status) {
                    setPositionMillis(status.positionMillis);
                    setDurationMillis(status.durationMillis);
                }
            });
        }

        return sound
            ? () => {
                sound.unloadAsync(); // Descargar el audio al desmontar el componente
            }
            : undefined;
    }, [sound]);

    return (
        <SafeAreaView>
            <View style={styles.containerTitulo}>
                <SimpleLineIcons name="earphones" size={30} color="black" />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Card>
                    <Card.Image style={{ width: 300, height: 300 }} source={itemAlbum.src} />
                    <Card.Title>{itemAlbum.title}</Card.Title>
                    <Text style={{ textAlign: "center" }}>{itemAlbum.artist}</Text>
                </Card>
            </View>
            <View style={{ alignItems: "center", flexDirection:"row", justifyContent:"center"}}>
            <Text style={{marginRight:5}}>
            {(Number((positionMillis / 1000)/60)).toFixed(2)}</Text>
                <TouchableOpacity
                    onPress={() => setIsSeeking(true)}
                    onLongPress={() => setIsSeeking(false)}
                    onPressOut={() => setIsSeeking(false)}
                    style={{ width: 250, height: 10, backgroundColor: 'lightgray' }}
                >
                    <View
                        style={{
                            width: `${(positionMillis / durationMillis) * 100}%`,
                            height: '100%',
                            backgroundColor: 'black',
                        }}
                    />
                </TouchableOpacity>
            <Text style={{marginLeft:5}}>{(Number((durationMillis / 1000)/60)).toFixed(2)}</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Card containerStyle={{ width: 250, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: 200 }}>
                        <TouchableOpacity>
                            <AntDesign name="banckward" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={isPlaying ? stopSound : playSound}>
                            <AntDesign name={isPlaying ? "pausecircle" : "play"} size={33} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="forward" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
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
        marginRight: 5
    },
};