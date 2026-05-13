import { Pressable, Text, StyleSheet} from "react-native"
import { Consulta } from "../data/types"
import { Link } from "expo-router"


type ConsultaItemProps = {
    consulta: Consulta
}
export function ConsultaItem({ consulta }: ConsultaItemProps){
    return(
        <Link href={`/consultas/${consulta.id}`} asChild>
            <Pressable style={style.card}>
                <Text style={style.description}>{consulta.medico}</Text>
                <Text>Data da Consulta: {consulta.data.toLocaleDateString('pt-BR')}</Text>
                <Text>Horário: {consulta.data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Text>
            </Pressable>
        </Link>
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