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
                    {consulta.nome_medico}
                </Text>

                <Text style={style.infoText}>
                    Data da Consulta:{" "}
                    {consulta.data.split('-').reverse().join('/')}
                </Text>

                <Text style={style.infoText}>
                    Horário:{" "}
                    {consulta.hora.substring(0, 5)}
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