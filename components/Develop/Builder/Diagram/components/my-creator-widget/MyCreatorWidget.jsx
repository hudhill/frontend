import React from 'react';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

import { DiagramCanvas } from '../DiagramCanvas';
import { MyNodeModel } from '../MyNodeModel';
import { StyledCreatorWidget } from './my-creator-widget';

export const MyCreatorWidget = props => {
  // force update canvas
  const forceUpdate = React.useReducer(bool => !bool)[1];

  const diagramEngine = props.engine;

  const shorten = text => {
    if (text && text.split(' ').length > 12) {
      const short = text
        .split(' ')
        .slice(0, 12)
        .join(' ');
      return `${short} ...`;
    }
    return text;
  };

  const onNodeDrop = event => {
    const dataString = event.dataTransfer.getData('storm-diagram-node');
    const data = JSON.parse(dataString);

    const node = new MyNodeModel({
      color: 'white',
      name: data?.name,
      details: shorten(data?.details),
      componentID: data?.componentID,
    });

    const point = diagramEngine.getRelativeMousePoint(event);
    node.setPosition(point);

    diagramEngine.getModel().addNode(node);
    forceUpdate();
  };

  return (
    <StyledCreatorWidget>
      <div className="creator-body">
        <div className="creator-content">
          <div
            className="creator-layer"
            onDrop={event => onNodeDrop(event)}
            onDragOver={event => {
              event.preventDefault();
            }}
          >
            <DiagramCanvas>
              <CanvasWidget engine={diagramEngine} />
            </DiagramCanvas>
          </div>
        </div>
      </div>
    </StyledCreatorWidget>
  );
};
