import React, { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import gql from 'graphql-tag';

import styled from 'styled-components';

import StudyTab from './studyTab';

const ALL_FEATURED_STUDIES_QUERY = gql`
  query ALL_FEATURED_STUDIES_QUERY {
    featuredStudies {
      id
      title
      slug
      image
      description
    }
  }
`;

const StyledFeatured = styled.div`
  display: grid;
  grid-gap: 2rem;
  .featuredContainerWrapper {
    display: grid;
    grid-gap: 2rem;
  }
  .featuredContainer {
    display: grid;
    width: 100%;
    min-height: 400px;
  }
  .buttonsWrapper {
    display: grid;
    justify-content: center;
    width: 100%;
  }
  .buttons {
    display: grid;
    justify-content: center;
    margin: 1rem 0rem;
    grid-template-columns: repeat(auto-fit, 20px);
    grid-gap: 1rem;
    width: 300px;
    input[type='radio'] {
      cursor: pointer;
      display: inline-block;
      height: 20px;
      width: 20px;
      position: relative;
      -webkit-appearance: none;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      border-radius: 20px;
      background-color: white;
      border: 1px solid #117c70;
      outline: none;
    }
    input[type='radio']: checked {
      background-color: #117c70;
    }
  }
`;

class FeaturedStudies extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  state = {
    study: this.props.studies[0].id,
  };

  render() {
    return (
      <StyledFeatured>
        <div className="featuredHeader">
          <h1>Discover studies, tasks and surveys</h1>
          <p>
            Browse our collection of studies, tasks and surveys created by high
            school students in the MindHive program and partner scientists.
            Participate in studies or preview tasks and surveys.
          </p>
        </div>

        <div className="featuredContainerWrapper">
          <div className="featuredContainer">
            <StudyTab
              study={this.state.study}
              studies={this.props.studies}
              onSelectStudy={this.props.onSelectStudy}
            />
          </div>

          <div className="buttonsWrapper">
            <div className="buttons">
              {this.props.studies.map(study => (
                <input
                  key={study.id}
                  type="radio"
                  name="featuredStudy"
                  value={study.id}
                  checked={this.state.study === study.id}
                  // onChange={() => {
                  //   this.setState({ study: study.id });
                  // }}
                  onClick={() => {
                    this.setState({ study: study.id });
                  }}
                  autoFocus={this.state.study === study.id}
                />
              ))}
            </div>
          </div>
        </div>
      </StyledFeatured>
    );
  }
}

class Featured extends Component {
  render() {
    return (
      <Query query={ALL_FEATURED_STUDIES_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <></>;
          if (error) return <p>Error: {error.message}</p>;
          const { featuredStudies } = data;

          if (featuredStudies.length) {
            return (
              <FeaturedStudies
                studies={featuredStudies}
                onSelectStudy={this.props.onSelectStudy}
              />
            );
          }
          return <></>;
        }}
      </Query>
    );
  }
}

export default Featured;
