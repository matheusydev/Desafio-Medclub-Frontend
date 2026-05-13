import { useContext, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Platform, } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ConsultaContext } from "../context/ConsultasContext";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type FormData = {
    id: string;
    medico: string;
    especialidade: string;
    localizacao: string;
    data: Date;
};

const AdicionarConsultaScreen = () => {
    const { top, bottom } = useSafeAreaInsets();
    const [showTimePicker, setShowTimePicker] = useState(false);
    const context = useContext(ConsultaContext);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { control, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            medico: "",
            especialidade: "",
            localizacao: "",
            data: new Date(),
        },
    });

    function onSubmit(data: FormData) {
        context?.adicionarConsulta({
            id: uuidv4(),
            medico: data.medico,
            especialidade: data.especialidade,
            localizacao: data.localizacao,
            data: data.data,
        });

        reset();
        router.back();
    }

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: top + 16,
                    paddingBottom: bottom + 16,
                },
            ]}
        >
            <Controller
                control={control}
                name="medico"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <View style={styles.inputContainer}>
                        <Text>Nome do Médico</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Nome do Médico"
                            value={field.value}
                            onChangeText={field.onChange}
                        />

                        {fieldState.error && (<Text style={styles.error}>Campo obrigatório</Text>)}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="especialidade"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <View style={styles.inputContainer}>
                        <Text>Especialidade</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Nome da especialidade"
                            value={field.value}
                            onChangeText={field.onChange}
                        />

                        {fieldState.error && (<Text style={styles.error}>Campo obrigatório</Text>)}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="localizacao"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <View style={styles.inputContainer}>
                        <Text>Localização</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Local da clínica"
                            value={field.value}
                            onChangeText={field.onChange}
                        />

                        {fieldState.error && (<Text style={styles.error}>Campo obrigatório</Text>)}
                    </View>
                )}
            />

            <Controller
                control={control}
                name="data"
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <View style={styles.inputContainer}>
                        <Text>Data da Consulta</Text>

                        <Pressable
                            style={styles.input}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text>
                                {field.value.toLocaleDateString("pt-BR")}
                            </Text>
                        </Pressable>

                        {showDatePicker && (
                            <DateTimePicker
                                value={field.value}
                                mode="date"
                                display={
                                    Platform.OS === "ios"
                                        ? "spinner"
                                        : "default"
                                }
                                onChange={(event, selectedDate) => {
                                    setShowDatePicker(false);

                                    if (selectedDate) {
                                        const novaData = new Date(field.value);

                                        novaData.setFullYear(selectedDate.getFullYear());
                                        novaData.setMonth(selectedDate.getMonth());
                                        novaData.setDate(selectedDate.getDate());

                                        field.onChange(novaData);
                                    }
                                }}
                            />
                        )}

                        <Text>Horário da Consulta</Text>

                        <Pressable
                            style={styles.input}
                            onPress={() => setShowTimePicker(true)}
                        >
                            <Text>
                                {field.value.toLocaleTimeString("pt-BR", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </Text>
                        </Pressable>

                        {showTimePicker && (
                            <DateTimePicker
                                value={field.value}
                                mode="time"
                                is24Hour={true}
                                display={
                                    Platform.OS === "ios"
                                        ? "spinner"
                                        : "default"
                                }
                                onChange={(event, selectedTime) => {
                                    setShowTimePicker(false);

                                    if (selectedTime) {
                                        const novaData = new Date(field.value);

                                        novaData.setHours(selectedTime.getHours());
                                        novaData.setMinutes(selectedTime.getMinutes());

                                        field.onChange(novaData);
                                    }
                                }}
                            />
                        )}

                        {fieldState.error && (<Text style={styles.error}>Campo obrigatório</Text>)}
                    </View>
                )}
            />

            <Pressable
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.buttonText}>Adicionar Consulta</Text>
            </Pressable>
        </View>

    );
};

export default AdicionarConsultaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        gap: 16,
    },

    inputContainer: {
        gap: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        justifyContent: "center",
    },

    button: {
        backgroundColor: "#2563eb",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },

    error: {
        color: "red",
        
    },
});