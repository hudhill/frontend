import React from 'react';

import Processor from './Functions/processor';
import Helper from './Functions/helper';
import Displayer from './displayer';

// run things and put together everything for users to interact

const Runner = ({
  dataRaw,
  data,
  transformedData,
  columnsToFilter,
  updateState,
  updateSpec,
  activeTransformationPosition,
  spec,
  onDatasetTypeChange,
  datasetType,
}) => {
  const header = 'Runner';

  // transform the data into the current state
  const currentStateData = Processor.processData(data, columnsToFilter);

  return (
    <Displayer
      dataRaw={dataRaw}
      data={currentStateData} // put the pre-processed data
      transformedData={transformedData}
      updateState={updateState}
      updateSpec={updateSpec}
      helper={Helper}
      activeTransformationPosition={activeTransformationPosition}
      spec={spec}
      onDatasetTypeChange={onDatasetTypeChange}
      datasetType={datasetType}
    />
  );
};

export default Runner;
