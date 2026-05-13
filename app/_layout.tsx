import { Stack } from "expo-router";
import { ConsultaProvider } from "../context/ConsultasContext";


export default function RootLayout() {
    return (
        <ConsultaProvider>
                <Stack screenOptions={{ headerShown: false, fullScreenGestureEnabled:true }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="consultas/[id]" />
                <Stack.Screen name="marcarConsulta" />
            </Stack>
        </ConsultaProvider>

    )
}