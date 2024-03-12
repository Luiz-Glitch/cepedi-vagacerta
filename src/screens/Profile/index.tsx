import { Formik } from "formik";
import { Button } from "../../components/Button";
import { LabelledInput } from "../../components/LabelledInput";
import { Logo } from "../../components/Logo";
import { Content, Header, Splitter, Wrapper } from "./styles";
import useProfile from "./useProfile";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import { useMain } from "../../hooks/useMain";


export default function Profile() {
  const { handleFormSubmit, ProfileSchema, handleGoBack, initialValues } =
    useProfile();
  const { user, setUser } = useMain();

  return (
    <Wrapper>
      <Header>
        <Button
          noSpacing
          title="< voltar"
          variant="secondary"
          onPress={handleGoBack}
        />
        <Logo />
      </Header>

      <Splitter />

      <Formik
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <Content>
            <LabelledInput
              label="Nome"
              placeholder="digite seu nome"
              name="name"
              value={user.name}
              onChangeText={(text) => setUser({ ...user, name: text })}
            />
            <LabelledInput
              label="E-mail"
              placeholder="digite seu e-mail"
              name="email"
              value={user.email}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <LabelledInput
              label="Senha"
              placeholder="digite sua senha"
              name="password"
              value={user.senha}
              onChangeText={(text) => setUser({ ...user, senha: text })}
              secureTextEntry
            />
            <Button title="Salvar informações" onPress={() => handleSubmit()} />
          </Content>
        )}
      </Formik>
    </Wrapper>
  );
}
