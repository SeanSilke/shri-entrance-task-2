import React, { Fragment, PureComponent } from "react";
import { Header } from "../../components/header";
import { InputForm } from "../components/input-form";
import { Button } from "../components/button";
import { Bottom } from "../components/bottom";
import { ModalOnDelete } from "../../components/modal/on-delete";

export class Edit extends PureComponent {
  state = {
    isModal: false
  };

  onCancel = () => this.props.history.push("/");
  showModal = () => this.setState({ isModal: true });
  closeModal = () => this.setState({ isModal: false });

  render() {
    const { onCancel, showModal, closeModal, state: { isModal } } = this;

    const Modal = (
      <ModalOnDelete>
        <Button title="Отмена" onClick={closeModal} />
        <Button title="Удалить" onClick={onCancel} />
      </ModalOnDelete>
    );

    return (
      <Fragment>
        <Header />
        <InputForm onCancel={onCancel} title={"Редактирование встречи"} />

        <Bottom>
          <Button title="Отмена" onClick={onCancel} />
          <Button title="Удалить встречу" onClick={showModal} />
          <Button title="Сохранить" onClick={onCancel} />
        </Bottom>
        {isModal ? Modal : null}
      </Fragment>
    );
  }
}
