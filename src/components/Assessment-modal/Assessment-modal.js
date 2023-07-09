import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const AssessmentModal = ({ showModal, assessment, onCloseModal }) => {
  return (
    <Modal show={showModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{assessment.title}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AssessmentModal;
