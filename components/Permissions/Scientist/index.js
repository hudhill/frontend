import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../../User/index';

const OnlyForScientists = (props) =>
  <Query query = { CURRENT_USER_QUERY }>
    { ({data, loading}) => {
      if(loading) return <p>Loading ... </p>
      console.log('data', data);
      if(!data.me) {
        return (
          <div>
            <p>Please sign in as a scientist in order to do that</p>
          </div>
        );
      }
      return props.children;
    }}
  </Query>


export default OnlyForScientists;
