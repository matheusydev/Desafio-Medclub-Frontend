import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { ConsultaContext } from "../../context/ConsultasContext";

export default function ConsultasScreen() {
    const { id } = useLocalSearchParams();
    const context = useContext(ConsultaContext);
    const consulta = context?.consultas.find((item) => item.id === id);


    if (!consulta) {
        return<Text>Consulta não encontrada</Text>
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={style.description}>{consulta.medico}</Text>
            <Text>Data da Consulta: {consulta.data.toLocaleDateString('pt-BR')}</Text>
            <Text>Horário: {consulta.data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Text>
            <Text>Especialidade:{consulta.especialidade}</Text>
            <Text>Localização: {consulta.localizacao}</Text>
        </View>
    )
}

const style = StyleSheet.create({
        card: {
        borderWidth: 1,
        borderColor: "#000080",
        paddingHorizontal: 16,
        paddingVertical: 16
    },
        description: {
        color: "#000",
        fontSize: 24,
        fontWeight: '600',
        marginTop: 8,
        },
});