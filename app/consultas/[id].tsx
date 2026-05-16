import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ConsultaContext } from "../../context/ConsultasContext";
import { colors } from "../../constants/theme";

export default function ConsultasScreen() {
    const { id } = useLocalSearchParams();
    const context = useContext(ConsultaContext);
    const router = useRouter();
    const { top } = useSafeAreaInsets();

    const consulta = context?.consultas.find(
        (item) => item.id === id
    );

    function handleExcluirConsulta() {
        Alert.alert(
            "Excluir consulta",
            "Tem certeza que deseja excluir essa consulta?",
            [
                { text: "Cancelar", style: "cancel" },
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
        <View style={[style.container, { paddingTop: top }]}>
            <View style={style.card}>
                <Text style={style.description}>
                    {consulta.medico}
                </Text>

                <Text style={style.infoText}>
                    Data da Consulta:{" "}
                    {consulta.data.toLocaleDateString("pt-BR")}
                </Text>

                <Text style={style.infoText}>
                    Horário:{" "}
                    {consulta.data.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </Text>

                <Text style={style.infoText}>
                    Especialidade: {consulta.especialidade}
                </Text>

                <Text style={style.infoText}>
                    Localização: {consulta.localizacao}
                </Text>
            </View>

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
        backgroundColor: colors.background,
        padding: 24,
    },

    card: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        padding: 16,
        gap: 12,
        borderWidth: 1,
        borderColor: colors.border,
    },

    description: {
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 8,
    },

    infoText: {
        fontSize: 15,
        color: colors.textSecondary,
    },

    deleteButton: {
        marginTop: 24,
        backgroundColor: colors.danger,
        paddingVertical: 12,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
    },

    deleteButtonText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: "600",
    },

    notFoundContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: colors.background,
    },

    notFoundTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.danger,
        marginBottom: 12,
    },

    notFoundText: {
        fontSize: 16,
        color: colors.textSecondary,
        textAlign: "center",
    },
});