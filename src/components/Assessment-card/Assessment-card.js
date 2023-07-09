import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import commentp from '../../assets/images/comment-p.png'
import AssessmentModal from '../Assessment-modal/Assessment-modal';

import "./Assessments-card.scss";


const tagColors = {
  Health: 'danger',
  Food: 'purple',
  Housing: 'info',
  '': 'primary',
};

const AssessmentCard = ({ assessment, onGetStarted }) => {

  const [showModal, setShowModal] = useState(false);

  const handleGetStartedClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGetStarted = () => {
    onGetStarted(assessment.title);
  };

  const tagColor = tagColors[assessment.tag] || tagColors[''];

  return (
    <React.Fragment>
      <Col xs={12}>
        <Row className='comment-container bg-white'>
          <Col xs={2} md={1} className='pr-0'>
            <div className={`logo-container ${tagColor ? `custom-bg-${tagColor}` : ''}`}>
              <img src={commentp} className="comment-logo" alt="comment logo" />
            </div>
          </Col>
          <Col xs={10} md={6} className="d-flex flex-column pl-0">
            <div className='content-body'>
              <div className='title'>{assessment.title}</div>
              <div>{assessment.author}</div>
            </div>
          </Col>
          <Col xs={12} md={5} className="d-flex justify-content-end">
            <div className="main-btn-div text-center">
              <Button variant="primary" className="w-100 get-started-button" onClick={handleGetStartedClick}>Get Started</Button>
            </div>
          </Col>
        </Row >
      </Col>

      <AssessmentModal showModal={showModal} assessment={assessment} onCloseModal={handleCloseModal} />

    </React.Fragment>
  );
};

export default AssessmentCard;
