import React, { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import gql from 'graphql-tag';

import ClassPage from '../classpage';

export const GET_ONE_ASSIGNMENT = gql`
  query GET_ONE_ASSIGNMENT($id: ID!) {
    assignment(where: { id: $id }) {
      id
      title
      content
      classes {
        id
      }
    }
  }
`;

class AssignmentPage extends Component {
  render() {
    return (
      <Query
        query={GET_ONE_ASSIGNMENT}
        variables={{ id: this.props.assignmentId }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading ... </p>;
          if (!data || !data.assignment)
            return <p>No assignment found for id {this.props.assignmentId}</p>;
          const { assignment } = data;
          const schoolclass = assignment.classes[0];
          return (
            <ClassPage
              classId={schoolclass?.id}
              goBack={() => this.props.goToClass(schoolclass?.id)}
              featuredAssignmentId={this.props.assignmentId}
              backButtonText={this.props.backButtonText}
            />
          );
        }}
      </Query>
    );
  }
}

export default AssignmentPage;
