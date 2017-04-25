import React from 'react';
import classnames from 'classnames';

import GraphContainer from "../containers/GraphContainer";

const SessionTreeTab = ({ session, active, onTreeRendered }) => {
  return (
    <div className={classnames('content-container', { hidden: !active})}>
      <GraphContainer
        response={session.response}
        onRendered={onTreeRendered}
        treeView
      />
    </div>
  );
};

export default SessionTreeTab;
