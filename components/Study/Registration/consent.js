import React, { Component } from 'react';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Accordion } from 'semantic-ui-react';
import Router from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import {
  StyledStudy,
  OnboardingForm,
  ResponseButtons,
  ResponseButton,
  OnboardingHeader,
} from '../styles';

import { CURRENT_USER_RESULTS_QUERY } from '../../User/index';

import GetStarted from './Steps/1-getStarted';
import PreParentConsent from './Steps/2-preParentConsent';
import ParentConsent from './Steps/3-parentConsent';
import StudyConsentForm from './Steps/4-studyConsent';
import DataUsage from './Steps/5-dataUsage';

const JOIN_STUDY = gql`
  mutation JOIN_STUDY($id: ID!, $info: Json, $user: Json, $study: Json) {
    joinStudy(id: $id, info: $info, user: $user, study: $study) {
      message
    }
  }
`;

class StudyConsent extends Component {
  getIntitialPage = () => {
    let page = 1; // demo questions
    // 2 - parent consent
    // 4 - study consent
    if (this.props.user.generalInfo?.sharePersonalDataWithOtherStudies) {
      if (
        typeof this.props.user.generalInfo?.zipCode !== 'undefined' &&
        typeof this.props.user.generalInfo?.under18 !== 'undefined' &&
        typeof this.props.user.generalInfo?.englishComprehension !== 'undefined'
      ) {
        if (this.props.user.generalInfo?.under18 === 'yes') {
          page = 2;
        } else {
          // check whether the consent is already provided
          const consentId = this.props?.study?.consent?.id;
          const userConsent =
            this.props.user?.consentsInfo &&
            this.props.user.consentsInfo[consentId];
          if (userConsent && userConsent.saveCoveredConsent) {
            page = 5;
          } else {
            page = 4;
          }
        }
      }
    }
    return page;
  };

  state = {
    page: this.getIntitialPage(),
    zipCode: this.props.user && this.props.user.generalInfo?.zipCode,
    age: this.props.user && this.props.user.generalInfo?.age,
    under18: this.props.user && this.props.user.generalInfo?.under18,
    englishComprehension:
      this.props.user && this.props.user.generalInfo?.englishComprehension,
    sharePersonalDataWithOtherStudies:
      this.props.user &&
      this.props.user.generalInfo?.sharePersonalDataWithOtherStudies,
    saveCoveredConsent: true,
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  };

  setButtonState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  updateState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleState = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  };

  saveJoinStudy = async (e, joinStudyMutation, consentGiven) => {
    e.preventDefault();
    const res = await joinStudyMutation({
      variables: {
        id: this.props.study.id,
        user: {
          zipCode: this.state.zipCode,
          age: this.state.age,
          under18: this.state.under18,
          englishComprehension: this.state.englishComprehension,
          sharePersonalDataWithOtherStudies: this.state
            .sharePersonalDataWithOtherStudies,
          saveCoveredConsent: this.state.saveCoveredConsent,
          consentGiven,
        },
        study: this.props.study,
      },
    });
    // console.log('res', res);
    this.props.onClose();

    this.props.onStartTheTask(this.props.firstTaskId);
    // Router.push('/studies/[slug]', `/studies/${this.props.study.slug}`);
    // Router.push({
    //   pathname: '/task/run',
    //   as: `/task/run`,
    //   query: {
    //     id:
    //       this.props.study.tasks &&
    //       this.props.study.tasks.length &&
    //       this.props.study.tasks.map(task => task.id)[0],
    //     policy: this.state.data || 'fallback',
    //     study: this.props.study.id,
    //     s: this.props.study.slug,
    //   },
    // });
  };

  render() {
    const { study } = this.props;
    const { user } = this.props;
    console.log('study', study);
    console.log('user', user);

    // const consentForm = this.props.study.info
    //   .filter(i => i.name.startsWith('faq'))
    //   .map(i => ({
    //     key: `panel-${i.name}`,
    //     title: i.header,
    //     content: ReactHtmlParser(i.text),
    //   }));
    return (
      <Mutation
        mutation={JOIN_STUDY}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_RESULTS_QUERY }]}
      >
        {(joinStudy, { loading, error }) => (
          <OnboardingForm>
            {this.state.page == 1 && (
              <div id="page_1">
                <GetStarted
                  study={study}
                  updateState={this.updateState}
                  toggleState={this.toggleState}
                  englishComprehension={this.state.englishComprehension}
                  under18={this.state.under18}
                  sharePersonalDataWithOtherStudies={
                    this.state.sharePersonalDataWithOtherStudies
                  }
                  onBtnClick={(parameter, state) =>
                    this.setButtonState(parameter, state)
                  }
                  onNext={() => {
                    if (this.state.under18 && this.state.englishComprehension) {
                      if (this.state.under18 === 'yes') {
                        this.setState({ page: this.state.page + 1 });
                      }
                      if (this.state.under18 === 'no') {
                        this.setState({ page: this.state.page + 3 });
                      }
                    }
                  }}
                  onLogin={() => {
                    this.setState({ login: true });
                  }}
                  onClose={() => this.props.onClose()}
                  showLogin={false}
                  info={this.props.info}
                />
              </div>
            )}

            {this.state.page == 2 && (
              <div id="page_2">
                <PreParentConsent
                  onClose={() => this.props.onClose()}
                  onNext={() => this.setState({ page: this.state.page + 1 })}
                />
              </div>
            )}

            {this.state.page == 3 && (
              <div id="page_3">
                <ParentConsent
                  onClose={() => this.props.onClose()}
                  consentFormText={
                    study.info &&
                    study.info.length &&
                    study.info
                      .filter(info => info.name === 'consentFormForParents')
                      .map(info => info.text)
                  }
                  title={this.props.study.title}
                  updateState={this.updateState}
                  onNext={e => {
                    this.saveJoinStudy(e, joinStudy, true);
                  }}
                />
              </div>
            )}

            {this.state.page == 4 && (
              <div id="page_4">
                <StudyConsentForm
                  onClose={() => this.props.onClose()}
                  title={study.title}
                  consentTitle={study.consent?.title || []}
                  coveredStudies={study.consent?.studies || []}
                  coveredTasks={study.consent?.tasks || []}
                  onNext={e => {
                    this.saveJoinStudy(e, joinStudy, true);
                  }}
                  onSkip={e => {
                    this.saveJoinStudy(e, joinStudy, false);
                  }}
                  consentFormText={
                    study.info &&
                    study.info.length &&
                    study.info
                      .filter(info => info.name === 'consentForm')
                      .map(info => info.text)
                  }
                  toggleState={this.toggleState}
                  saveCoveredConsent={this.state.saveCoveredConsent}
                />
              </div>
            )}

            {this.state.page == 5 && (
              <div id="page_5">
                <DataUsage
                  onClose={() => this.props.onClose()}
                  updateState={this.updateState}
                  data={this.state.data}
                  onNext={e => this.saveJoinStudy(e, joinStudy, true)}
                />
              </div>
            )}
          </OnboardingForm>
        )}
      </Mutation>
    );
  }
}

export default StudyConsent;
