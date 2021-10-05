import React from 'react';
import {
 createInstance,
 OptimizelyFeature,
 OptimizelyProvider,
} from '@optimizely/react-sdk'
import { green, styles } from 'ansi-colors';

export default ({ pageContext: { datafile } }) => {
  // Instantiate an Optimizely client
  const optimizely = createInstance({
    datafile,
  });

  console.log(optimizely);

  return (
    <OptimizelyProvider
      optimizely={ optimizely }
      user={ { id: 'bartSimpson' } }>
      <div style={{ width: 960,wordWrap:'break-word', margin: '4rem auto' }}>
        <h1>Hello World!</h1>
        <pre>Revision: { datafile.revision }</pre>
        <pre>Key: { JSON.stringify(datafile.experiments[0].key, null, 2) }</pre>
        <pre>Status: { JSON.stringify(datafile.experiments[0].status, null, 2) }</pre>
  <pre>Datafile: { JSON.stringify(datafile, null, 2) }</pre>
      </div>
      <script>window.datafile=datafile;</script>
    </OptimizelyProvider>
  );
};
