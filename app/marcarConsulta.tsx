import { useContext, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Platform, ScrollView, } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ConsultaContext } from "../context/ConsultasContext";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { colors } from "../constants/theme";

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
    const [showDatePicker, setShowDatePicker] = useState(false);

    const context = useContext(ConsultaContext);

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
        <View style={styles.screenContainer}>
            <View style={[styles.header, { paddingTop: top + 20 }]}>
                <Text style={styles.headerTitle}>Nova Consulta</Text>
            </View>

            <ScrollView>
                <View style={[styles.formContainer, { paddingBottom: bottom + 16 }]}>

                    <Controller
                        control={control}
                        name="medico"
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Nome do Médico</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder="Nome do Médico"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />

                                {fieldState.error && (
                                    <Text style={styles.error}>Campo obrigatório</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="especialidade"
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Especialidade</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder="Especialidade"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />

                                {fieldState.error && (
                                    <Text style={styles.error}>Campo obrigatório</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="localizacao"
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Localização</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder="Local da clínica"
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />

                                {fieldState.error && (
                                    <Text style={styles.error}>Campo obrigatório</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="data"
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Data da Consulta</Text>

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
                                        display={Platform.OS === "ios" ? "spinner" : "default"}
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

                                <Text style={styles.label}>Horário da Consulta</Text>

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
                                        is24Hour
                                        display={Platform.OS === "ios" ? "spinner" : "default"}
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

                                {fieldState.error && (
                                    <Text style={styles.error}>Campo obrigatório</Text>
                                )}
                            </View>
                        )}
                    />

                    <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Adicionar Consulta</Text>
                    </Pressable>

                </View>
            </ScrollView>
        </View>
    );
};

export default AdicionarConsultaScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },

    header: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: "800",
        color: colors.textPrimary,
        textAlign: "center",
        letterSpacing: 0.5,
    },

    formContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
        gap: 16,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.textSecondary,
    },

    inputContainer: {
        gap: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        padding: 12,
        justifyContent: "center",
        backgroundColor: colors.surface,
    },

    button: {
        backgroundColor: colors.primary,
        width: "100%",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },

    buttonText: {
        color: colors.surface,
        fontWeight: "bold",
    },

    error: {
        color: colors.danger,
    },
});