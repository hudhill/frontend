import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../../User/index';

export const ContainerOnlyForProfile = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p></p>;
      // console.log('data', data);
      if (!data.me) {
        return false;
      }
      console.log('data', data.me.id);
      return props.children;
    }}
  </Query>
);

export const PageOnlyForProfile = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p></p>;
      // console.log('data', data);
      if (!data.me) {
        return (
          <div>
            <p>Please sign out in order to do that</p>
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);
