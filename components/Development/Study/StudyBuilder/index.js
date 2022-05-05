import React, { Component } from 'react';

import EditPane from './editPane';
import PreviewPane from './previewPane';
import SelectorPane from './componentSelector';

import { StyledBuilder, StyledPreviewPane } from '../../styles';

class StudyBuilderSection extends Component {
  render() {
    return (
      <StyledBuilder>
        <div className="leftCompartment">
          {!this.props.isTaskSelectorOpen && (
            <EditPane
              handleStudyChange={this.props.handleStudyChange}
              handleParameterChange={this.props.handleParameterChange}
              handleSettingsChange={this.props.handleSettingsChange}
              handleSetState={this.props.handleSetState}
              study={this.props.study}
              user={this.props.user}
              needToClone={this.props.needToClone}
            />
          )}
          {this.props.isTaskSelectorOpen && (
            <SelectorPane
              onAddComponent={this.props.onAddComponent}
              toggleTaskSelector={this.props.toggleTaskSelector}
              user={this.props.user}
              openTaskEditor={this.props.openTaskEditor}
            />
          )}
        </div>

        <div className="rightCompartment">
          <StyledPreviewPane>
            <PreviewPane
              study={this.props.study}
              handleStudyChange={this.props.handleStudyChange}
              handleSetMultipleValuesInState={
                this.props.handleSetMultipleValuesInState
              }
              uploadImage={this.props.uploadImage}
              handleParameterChange={this.props.handleParameterChange}
              deleteParameter={this.props.deleteParameter}
              toggleTaskSelector={this.props.toggleTaskSelector}
              openTaskEditor={this.props.openTaskEditor}
              needToClone={this.props.needToClone}
              updateComponents={this.props.updateComponents}
              togglePreview={this.props.togglePreview}
            />
          </StyledPreviewPane>
        </div>
      </StyledBuilder>
    );
  }
}

export default StudyBuilderSection;
