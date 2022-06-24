import { TestScheduler } from "jest";
import React from "react";
import {
    View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking,
} from "react-native";

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const colorGridVerdeEscuro = '#006E30';
const colorGrridVerdeClaro = '#37D453';

const imgProfileGitHub = 
    'https://avatars.githubusercontent.com/u/80922120?v=4';

const urlToMyGitHub = 'https://github.com/MariliaSB';

const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if (res) {
            console.log('Link Aprovado');
            console.log('Abrindo link');
            await Linking.openURL(urlToMyGitHub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
            <View style={style.content} >
                <Image 
                    accessibilityLabel="Marilia sentada em um sofa" 
                    style={style.avatar} 
                    source={{uri: imgProfileGitHub}}>
                </Image>    
                <Text
                    accessibilityLabel="Nome: Marília Santos Barbosa" 
                    style={[style.defaultText,style.name]}
                    >Marília Santos Barbosa
                </Text>
                <Text
                    accessibilityLabel="Apelido: MariliSB" 
                    style={[style.defaultText,style.nickname]}>
                    MariliaSB
                </Text>
                <Text
                    accessibilityLabel="Descrição: Estudante na área de Programação" 
                    style={[style.defaultText,style.description]}>
                    Estudante na área de Programação
                </Text>
                <View style={style.grid}>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>

                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>

                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>

                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeClaro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>

                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                    <View style={style.cuboVerdeEscuro}></View>
                </View>
                
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText,style.textButton]}>
                            Open in GitHub
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Colunas para colocar em linhas acrescentar flexDirection row
        backgroundColor: colorGitHub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGitHub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGitHub,
    },
    description:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    grid:{
        marginTop: 10,
        marginBottom: 5,
        width: 200,
        height: 110,
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 2.5,
    },
    cuboVerdeEscuro:{
        backgroundColor: colorGridVerdeEscuro,
        borderRadius: 4.3,
        width: 14,
        height: 14,
    },
    cuboVerdeClaro:{
        backgroundColor: colorGrridVerdeClaro,
        borderRadius: 4.3,
        width: 14,
        height: 14,
    },
});