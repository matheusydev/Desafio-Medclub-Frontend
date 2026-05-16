import { Pressable, Text, StyleSheet } from "react-native";
import { Consulta } from "../data/types";
import { Link } from "expo-router";
import { colors } from "../constants/theme";

type ConsultaItemProps = {
    consulta: Consulta;
};

export function ConsultaItem({ consulta }: ConsultaItemProps) {
    return (
        <Link href={`/consultas/${consulta.id}`} asChild>
            <Pressable style={style.card}>
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
            </Pressable>
        </Link>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        borderLeftWidth: 4,
        borderLeftColor: colors.primary,
        padding: 16,
        gap: 6,
    },

    description: {
        color: colors.textPrimary,
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 4,
    },

    infoText: {
        fontSize: 13,
        color: colors.textSecondary,
    },
});