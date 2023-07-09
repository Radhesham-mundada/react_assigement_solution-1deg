import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AssessmentCard from '../Assessment-card/Assessment-card';
import ODAS from '../../api/odas';

const Assessments = ({ onGetStarted }) => {

  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ODAS.get({ public: true });
        setAssessments(data.assessments);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-grey'>
      <Container >
        <Row>
          <div className='available-title'>Available</div>
        </Row>
        <Row>
          {assessments.map((assessment) => (
            <AssessmentCard
              assessment={assessment}
              onGetStarted={onGetStarted}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Assessments;
