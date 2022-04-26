import React, { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import moment from 'moment';

import { MY_SCRIPTS } from '../Queries/Script';

class SavedScripts extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="scriptSelector">
        <Query query={MY_SCRIPTS}>
          {({ error, loading, data }) => {
            if (error) return <Error error={error} />;
            if (loading) return <p>Loading</p>;
            if (!data?.myScripts) return <p>No scripts</p>;
            const scripts = data.myScripts;

            return (
              <div className="savedScripts">
                <div
                  onClick={() => this.props.createNewScript()}
                  className="link"
                >
                  Create new script
                </div>

                <h2>Scripts</h2>
                <div className="savedScript">
                  <div>Title</div>
                  <div>Description</div>
                  <div>Created</div>
                  <div>Last updated</div>
                  {user?.permissions?.includes.ADMIN && (
                    <div className="settingInfo">
                      <div>Public</div>
                      <div>Template</div>
                      <div>Featured</div>
                    </div>
                  )}
                </div>
                {scripts.map((script, num) => (
                  <div key={num} className="savedScript">
                    <div
                      onClick={() => this.props.openScript({ script })}
                      className="link"
                    >
                      {script?.title}
                    </div>
                    <div>{script?.description}</div>
                    <div>
                      {moment(script?.createdAt).format('MMMM D, YYYY, h:mma')}
                    </div>
                    <div>
                      {moment(script?.updatedAt).format('MMMM D, YYYY, h:mma')}
                    </div>
                    {user?.permissions?.includes.ADMIN && (
                      <div className="settingInfo">
                        <div>{script?.isPublic ? 'yes' : 'no'}</div>
                        <div>{script?.isTemplate ? 'yes' : 'no'}</div>
                        <div>{script?.isFeatured ? 'yes' : 'no'}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default SavedScripts;
