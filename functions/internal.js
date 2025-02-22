import { SUBMIT_RESULTS_FROM_API_MUTATION } from '../pages/api/save';
import { endpoint, prodEndpoint } from '../config';

const axios = require('axios');
const LZUTF8 = require('lzutf8');

exports.handler = async (event, context) => {
  const serverUrl =
    process.env.NODE_ENV === 'production' ? prodEndpoint : endpoint;
  const {
    user,
    template,
    task,
    study,
    policy,
    type,
    version,
    guest,
  } = event.queryStringParameters;
  const { metadata, url, data } = JSON.parse(event.body);
  const dataRawString = JSON.stringify(data);
  const dataString = LZUTF8.compress(dataRawString, {
    outputEncoding: 'StorageBinaryString',
  });

  const response = await axios({
    method: 'post',
    url: serverUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      query: SUBMIT_RESULTS_FROM_API_MUTATION,
      operationName: 'submitResultFromAPI',
      variables: {
        userId: user === 'null' ? null : user,
        templateId: template,
        taskId: task === 'undefined' ? null : task,
        studyId: study === 'undefined' ? null : study,
        dataString,
        metadata: {
          id: metadata.id,
          payload: metadata.payload,
        },
        dataPolicy: policy,
        resultType: type === 'undefined' ? null : type,
        version: version === 'undefined' ? null : version,
        guestId: guest === 'undefined' ? null : guest,
      },
    }),
  });

  return {
    statusCode: response.status,
    body: response.statusText,
  };
};
