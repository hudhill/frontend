import React, { Component } from 'react';

class DataUsageForParticipant extends Component {
  render() {
    return (
      <div>
        <h1>Data usage</h1>
        <h3>How would you like us to use your data?</h3>

        <div>
          <div className="checkboxField">
            <input
              type="radio"
              id="useDataForScience"
              name="data"
              value="science"
              onChange={this.props.updateState}
              checked={this.props.data === 'science'}
            />
            <label htmlFor="useDataForScience">
              You can use my data for science and/or educational purposes
            </label>
          </div>
        </div>
        <div>
          <div className="checkboxField">
            <input
              type="radio"
              id="educationalUse"
              name="data"
              value="education"
              onChange={this.props.updateState}
              checked={this.props.data === 'education'}
            />
            <label htmlFor="educationalUse">
              I want my data to be saved for educational use only (e.g.,
              lectures and teaching materials)
            </label>
          </div>
        </div>
        <div>
          <div className="checkboxField">
            <input
              type="radio"
              id="justTesting"
              name="data"
              value="testing"
              onChange={this.props.updateState}
              checked={this.props.data === 'testing'}
            />
            <label htmlFor="justTesting">I am just testing</label>
          </div>
        </div>
        <div>
          <div className="checkboxField">
            <input
              type="radio"
              id="doNotRecord"
              name="data"
              value="no"
              onChange={this.props.updateState}
              checked={this.props.data === 'no'}
            />
            <label htmlFor="doNotRecord">
              Don't record my data at all (if you’re a MindHive student: this
              means your data won't be included in class demos!)
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default DataUsageForParticipant;
