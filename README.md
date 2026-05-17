<div align="center">

<!-- Introdução -->

# 🏥 Desafio Medclub Frontend

### Aplicativo mobile para gerenciamento de consultas médicas

O objetivo da aplicação é permitir que usuários possam **agendar, visualizar, acompanhar e gerenciar consultas médicas** de forma simples, intuitiva e organizada.

<br/>

<!-- STACKS -->

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Expo Router](https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white)
![Expo Go](https://img.shields.io/badge/Expo_Go-000020?style=for-the-badge&logo=expo&logoColor=white)

</div>

---

<!-- FUNCIONALIDADES -->

## 📋 Funcionalidades

- Listagem de consultas com data, horário e médico
- Visualização dos detalhes da consulta
- Exibição de especialidade e localização
- Cadastro de novas consultas
- Exclusão de consultas agendadas
- Interface estilizada e funcional

---

<!-- Tecnologias utilizadas -->

## 🛠️ Tecnologias Utilizadas
 
| Tecnologia | Uso |
|---|---|
| React Native | Framework mobile |
| Expo | Plataforma e ferramentas de build |
| Expo Router | Navegação baseada em arquivos |
| TypeScript | Tipagem estática |
| React Context API | Gerenciamento de estado global |
| React Hook Form | Gerenciamento e validação de formulários |
| @react-native-community/datetimepicker | Seleção de data e hora nativa |
| react-native-safe-area-context | Suporte a notch e safe areas |
| uuid (v4) | Geração de IDs únicos para consultas |


---

<!-- Como executar -->
 
## ⚙️ Como Executar o Projeto
 
### Pré-requisitos
 
- Node.js 18 ou superior
- npm ou yarn
- Expo Go instalado no celular ou emulador Android/iOS configurado

### Instalação
 
```bash
# Clone o repositório
git clone https://github.com/matheusydev/Desafio-Medclub-Frontend.git

# Acesse a pasta do projeto
cd Desafio-Medclub-Frontend

# Instale as dependências
npm install
```

### Execução
 
```bash
# Inicia o servidor de desenvolvimento
npx expo start

# Para rodar diretamente em plataformas específicas
npx expo start --android
npx expo start --ios
```
 
Após iniciar o projeto, escaneie o QR Code com o aplicativo Expo Go no Android ou utilize a câmera do iPhone no iOS.

---

## 📁 Estrutura de Pastas
 
```bash
├── app/                        # Telas do app (Expo Router)
│   ├── _layout.tsx             # Layout raiz — configura Stack e providers
│   ├── index.tsx               # Tela inicial — listagem de consultas
│   ├── marcarConsulta.tsx      # Tela de criação de nova consulta
│   └── consultas/
│       └── [id].tsx            # Tela de detalhes da consulta (rota dinâmica)
│
├── components/
│   └── ConsultaItem.tsx        # Card reutilizável para item da listagem
│
├── constants/
│   └── theme.ts                # Paleta de cores centralizada
│
├── context/
│   └── ConsultasContext.tsx    # Context API — estado global das consultas
│
├── data/
│   ├── consultas.ts            # Array estático com dados iniciais
│   └── types.ts                # Tipos TypeScript do domínio
│
├── assets/                     # Imagens e fontes
├── app.json                    # Configuração do Expo
├── package.json
└── tsconfig.json
```

---

## 📄 Responsabilidade de cada arquivo
 
### `app/_layout.tsx`

Configura o Stack Navigator do Expo Router e envolve toda a aplicação com o `ConsultaProvider`, garantindo que o estado global de consultas esteja disponível em todas as telas.
 
### `app/index.tsx`

Tela principal do app. Exibe a listagem de consultas usando `FlatList` e oferece acesso à tela de criação via botão.
 
### `app/marcarConsulta.tsx`

Formulário de criação de consulta com campos para médico, especialidade, localização, data e horário. Utiliza `react-hook-form` para validação e `DateTimePicker` para seleção nativa de data e hora.
 
### `app/consultas/[id].tsx`

Tela de detalhes de uma consulta específica. Recebe o `id` via parâmetro de rota dinâmica, busca a consulta no contexto e exibe todas as informações. Também permite excluir a consulta com confirmação.
 
### `components/ConsultaItem.tsx`

Componente reutilizável responsável por renderizar cada consulta como um card na listagem. Ao pressionar o card, o usuário é direcionado para a tela de detalhes.
 
### `constants/theme.ts`

Arquivo central responsável pela paleta de cores do aplicativo. Todas as cores utilizadas na interface são definidas aqui para manter consistência visual.
 
### `context/ConsultasContext.tsx`

Gerencia o estado global das consultas utilizando Context API. Expõe o array de consultas e as funções de adicionar e excluir consultas.
 
### `data/consultas.ts`

Arquivo contendo consultas fictícias utilizadas como dados iniciais do aplicativo.
 
### `data/types.ts`

Define os tipos TypeScript utilizados no domínio da aplicação, garantindo consistência dos dados.

---

## 🧠 Decisões Técnicas
 
### Context API para estado global

O estado das consultas é gerenciado utilizando Context API com `useState`. Essa abordagem foi escolhida por ser nativa do React e suficiente para o escopo atual da aplicação.
 
### Dados em memória

Conforme requisito do desafio, os dados não possuem persistência. As consultas são armazenadas apenas em memória durante a execução do app.
 
### Expo Router para navegação

A navegação utiliza Expo Router, baseado em estrutura de arquivos. A rota dinâmica `consultas/[id]` permite acessar os detalhes de cada consulta através do ID.
 
### react-hook-form para formulários

Utilizado para gerenciamento dos campos do formulário e validação dos dados de entrada.
 
### uuid para IDs únicos

Cada nova consulta recebe um identificador único utilizando `uuidv4`, evitando colisões de IDs.
 
### Paleta de cores centralizada

As cores da aplicação estão centralizadas em `constants/theme.ts`, facilitando manutenção e escalabilidade visual.
 
### useSafeAreaInsets

Utilizado para evitar que o conteúdo fique sobreposto por notch, barra de status ou navegação do dispositivo.

### Confirmação antes de excluir

Utilizado o `Alert` nativo do React Native antes de executar a exclusão,
evitando que o usuário remova uma consulta por acidente.

---

## 🗺️ Navegação com Expo Router
 
O projeto utiliza **file-based routing** — cada arquivo dentro da pasta `app/` se torna automaticamente uma rota da aplicação, sem necessidade de configurar um arquivo de rotas separado.
 
### Rotas da aplicação
 
| Arquivo | Rota | Descrição |
|---|---|---|
| `app/index.tsx` | `/` | Tela inicial com listagem de consultas |
| `app/marcarConsulta.tsx` | `/marcarConsulta` | Tela de criação de consulta |
| `app/consultas/[id].tsx` | `/consultas/:id` | Tela de detalhes — `[id]` é dinâmico |
 
### Rota Dinâmica `[id]`
 
Os colchetes no nome do arquivo indicam que aquela parte da rota é variável. Ao navegar para `/consultas/1`, o parâmetro `id` terá o valor `"1"`.
 
```typescript
// app/consultas/[id].tsx
import { useLocalSearchParams } from "expo-router";
 
export default function ConsultaDetalheScreen() {
  const { id } = useLocalSearchParams(); // Captura o id da URL
  const consulta = consultas.find((item) => item.id === id);
}
```
 
### Navegando entre telas
 
```typescript
// Via Link (declarativo — usado no ConsultaItem)
import { Link } from "expo-router";
 
<Link href={`/consultas/${consulta.id}`} asChild>
  <Pressable>{/* card */}</Pressable>
</Link>
 
// Via useRouter (programático — usado ao excluir)
import { useRouter } from "expo-router";
 
const router = useRouter();
router.back(); // volta para a tela anterior
```
 
---
 
## 🧩 Componentes
 
### `ConsultaItem`
 
Renderiza o card visual de cada consulta na listagem. Ao pressionar, navega para a tela de detalhes.
 
**Localização:** `components/ConsultaItem.tsx`
 
| Prop | Tipo | Descrição |
|---|---|---|
| `consulta` | `Consulta` | Objeto completo com os dados da consulta |
 
```typescript
<FlatList
  data={consultas}
  renderItem={({ item }) => <ConsultaItem consulta={item} />}
/>
```
 
---

## 🎓 Aprendizados Adquiridos
 
Ao desenvolver este projeto, os seguintes conhecimentos foram consolidados na prática:
 
- ✅ **File-based routing** com Expo Router e como organizar telas em arquivos
- ✅ **Rotas dinâmicas** usando a convenção `[parametro]` no nome dos arquivos
- ✅ **Context API** para gerenciamento de estado global sem bibliotecas externas
- ✅ **Tipagem com TypeScript** para dados, componentes e props
- ✅ **Criação de componentes reutilizáveis** com props tipadas
- ✅ **FlatList** para renderização performática de listas
- ✅ **React Hook Form** para gerenciamento e validação de formulários
- ✅ **DateTimePicker** para seleção nativa de data e hora por plataforma
- ✅ **Safe Area Context** para compatibilidade com diferentes dispositivos
- ✅ **Paleta de cores centralizada** para consistência visual
- ✅ **Conventional Commits** para padronização do histórico do git
---