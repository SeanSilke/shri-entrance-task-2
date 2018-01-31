import React, { Fragment } from "react";
import { Header } from "../../components/header";
import { InputForm } from "../components/input-form";
import { Button } from "../components/button";
import { Bottom } from "../components/bottom";

export const New = props => {
  const onCancel = () => props.history.push("/");
  const onSuccess = () =>
    props.history.push({
      pathname: `/`,
      state: { modal: true }
    });

  return (
    <Fragment>
      <Header />
      <InputForm onCancel={onCancel} title={"Новая встреча"} />

      <Bottom>
        <Button title="Отмена" onClick={onCancel} />
        <Button title="Создать встречу" onClick={onSuccess} />
      </Bottom>
    </Fragment>
  );
};
