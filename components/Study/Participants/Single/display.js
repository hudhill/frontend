import React, { Component } from 'react';
import ParticipantResults from './results';
import { StyledCollectSection, StyledParticipantPage } from '../styles';

class ParticipantDisplay extends Component {
  render() {
    const { participant, studyId } = this.props;
    let email = '';
    if (
      participant?.authEmail &&
      participant?.authEmail.length &&
      participant?.authEmail[0]?.email
    ) {
      email = participant?.authEmail[0]?.email;
    }
    const studyInfo =
      (participant?.studiesInfo && participant?.studiesInfo[studyId]) || {};
    // console.log('participant', participant);
    // console.log('studyInfo', studyInfo);
    // console.log(participant.generalInfo);
    return (
      <StyledCollectSection>
        <StyledParticipantPage>
          <h2>{participant.publicReadableId}</h2>
          <p>Email {email || 'is missing'}</p>

          {false && (
            <>
              <h3>General information</h3>
              {Object.keys(participant.generalInfo).map(key => (
                <div className="infoItem" key={key}>
                  <p>{key}</p>
                  <p>{participant.generalInfo[key]}</p>
                </div>
              ))}
            </>
          )}

          <div>
            <h3>Study-related information</h3>
            {Object.keys(studyInfo).map(key => (
              <div className="infoItem" key={key}>
                <p>{key}</p>
                <p>{studyInfo[key]}</p>
              </div>
            ))}
          </div>

          {false && (
            <>
              <h3>Consent-related information</h3>
              <h3>Task-related information</h3>
            </>
          )}

          <ParticipantResults participantId={participant.id} />
        </StyledParticipantPage>
      </StyledCollectSection>
    );
  }
}

export default ParticipantDisplay;
