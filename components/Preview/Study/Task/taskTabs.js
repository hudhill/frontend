import styled from 'styled-components';
import React, { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import TaskCard from './card';

import { COMPONENT_QUERY } from '../../../Development/Study/StudyBuilder/Preview/componentPane';

const StyledTaskList = styled.div`
  display: grid;
  grid-gap: 36px;
  grid-area: tasks;
`;

class TaskTabs extends Component {
  render() {
    const { user, study } = this.props;

    const studyIds = Object.keys(user?.studiesInfo) || [];

    // check whether there is a user and blocks, if yes, assign correct block of tasks to the user
    let components = [];
    if (
      study.components &&
      study.components.blocks &&
      study.components.blocks.length &&
      study.components.blocks[0].tests
    ) {
      if (user) {
        // select the blocks for the specific user
        const userStudyInfo = user.studiesInfo && user.studiesInfo[study.id];
        if (userStudyInfo) {
          const userBlock = userStudyInfo.blockId;
          if (userBlock) {
            const studyBlock = study.components.blocks.filter(
              block => block.blockId === userBlock
            );
            if (studyBlock && studyBlock.length && studyBlock[0].tests) {
              components = studyBlock[0].tests;
            }
          } else {
            // assign a random between-subjects block to the user in case if the user does not have any info saved
            const { blocks } = study.components;
            const randomBlock =
              blocks[Math.floor(Math.random() * blocks.length)];
            components = randomBlock.tests;
          }
        } else {
          components = study.components.blocks[0].tests;
        }
      } else {
        // if there is no user logged in, show always the tests from the first block
        components = study.components.blocks[0].tests;
      }
    } else {
      components = study.components || [];
    }

    const completeResultsInStudyByVersion =
      user?.results
        ?.filter(
          result =>
            result.study &&
            result.study.id === study.id &&
            result.payload === 'full'
        )
        .map(result => result.testVersion) || [];

    return (
      <StyledTaskList>
        {components.map((task, num) => (
          <Query query={COMPONENT_QUERY} variables={{ id: task.id }} key={num}>
            {({ data, loading }) => {
              if (loading) return <p>Loading ... </p>;
              if (!data || !data.task)
                return (
                  <h2>
                    No task found for the task named{' '}
                    <strong>{task.title}</strong>
                  </h2>
                );
              const component = data.task;
              return (
                <TaskCard
                  key={num}
                  task={component}
                  studyId={study.id}
                  studySlug={study.slug}
                  user={user}
                  study={study}
                  completed={completeResultsInStudyByVersion.includes(
                    task.testId
                  )}
                  onStartTheTask={this.props.onStartTheTask}
                  joinedTheStudy={studyIds.includes(study.id)}
                  version={task.testId}
                />
              );
            }}
          </Query>
        ))}
      </StyledTaskList>
    );
  }
}

export default TaskTabs;
