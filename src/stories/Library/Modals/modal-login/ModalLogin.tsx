import { useEffect, useState } from "react";

import { ModalCloseButton, ModalFallbackButton } from "../ModalShared";
import { Button } from "../../Buttons/button/Button";
import { Links } from "../../links/Links";

export type ModalLoginProps = {
  title: string;
  showModal: boolean;
};

export const ModalLogin: React.FC<ModalLoginProps> = ({ showModal }) => {
  <div className="modal-backdrop">

  useEffect(() => {
    setShownModal(showModal);
  }, [showModal]);

  const toggleModal = () => {
    setShownModal(!showModal);
  };

  if (!showModal) {
    return <ModalFallbackButton toggleModal={toggleModal} />;
  }

  return (
    <div className="modal__backdrop">
      <div
        className={`modal modal-login modal-right modal-padding ${
          shownModal ? "modal-show" : ""
        }`}
      >
        <div className="modal__screen-reader-description" id="describemodal">
          Denne modal dækker sidens indhold, og er en demo
        </div>
        <ModalCloseButton
          idAriaDescribedBy="describemodal"
          toggleModal={toggleModal}
        />
        <div className="modal-login__container">
          <Button
            buttonType="default"
            size="large"
            variant="filled"
            label="Log ind"
            disabled={false}
            collapsible={false}
          />
          <Links
            href="/"
            linkText="Opret profil"
            classNames="color-secondary-gray modal-login__btn-create-profile"
          />
        </div>
      </div>
    </div>
  );
};
