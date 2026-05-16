import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { useContext } from "react";
import { ConsultaContext } from "../../context/ConsultasContext";

export default function ConsultasScreen() {
    const { id } = useLocalSearchParams();
    const context = useContext(ConsultaContext);

    const consulta = context?.consultas.find(
        (item) => item.id === id
    );

    const router = useRouter();

    function handleExcluirConsulta() {
        Alert.alert(
            "Excluir consulta",
            "Tem certeza que deseja excluir essa consulta?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: () => {
                        context?.excluirConsulta(id as string);
                        router.back();
                    },
                },
            ]
        );
    }

    if (!consulta) {
        return (
            <View style={style.notFoundContainer}>
                <Text style={style.notFoundTitle}>
                    Consulta não encontrada
                </Text>

                <Text style={style.notFoundText}>
                    Não foi possível localizar essa consulta.
                </Text>
            </View>
        );
    }

    return (
        <View style={style.container}>
            <Text style={style.description}>
                {consulta.medico}
            </Text>

            <Text>
                Data da Consulta:{" "}
                {consulta.data.toLocaleDateString("pt-BR")}
            </Text>

            <Text>
                Horário:{" "}
                {consulta.data.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </Text>

            <Text>
                Especialidade: {consulta.especialidade}
            </Text>

            <Text>
                Localização: {consulta.localizacao}
            </Text>

            <Pressable
                style={style.deleteButton}
                onPress={handleExcluirConsulta}
            >
                <Text style={style.deleteButtonText}>
                    Excluir Consulta
                </Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    description: {
        color: "#000",
        fontSize: 24,
        fontWeight: "600",
        marginTop: 8,
        marginBottom: 16,
    },

    notFoundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#F8F9FA",
    },

    notFoundTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#DC143C",
        marginBottom: 12,
    },

    notFoundText: {
        fontSize: 16,
        color: "#6B7280",
        textAlign: "center",
    },
    deleteButton: {
        marginTop: 24,
        backgroundColor: "#DC143C",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },

    deleteButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "600",
    },
});