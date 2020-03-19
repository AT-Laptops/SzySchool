import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { showAddEventPopup } from './../../actions/popups';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";

export default () => {
  const isOpen = useSelector(state => state.popups.addEventPopup);
  const dispatch = useDispatch();
  return (
    <Modal
      onClose={() => dispatch(showAddEventPopup(false))}
      closeable
      isOpen={isOpen}
      animate
      size={SIZE.auto}
      role={ROLE.dialog}
    >
      <ModalHeader>Dodawanie wydarzenia</ModalHeader>
      <ModalBody>
        
      </ModalBody>
      <ModalFooter>
        <ModalButton>Anuluj</ModalButton>
        <ModalButton>Dodaj</ModalButton>
      </ModalFooter>
    </Modal>
  );
}