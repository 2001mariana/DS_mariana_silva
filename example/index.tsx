import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ABbutton, Card } from '../.';

import 'react-app-polyfill/ie11';

const App = () => {
  return (
    <div>
      <ABbutton />
      <br /><br /><br />
      <Card>This is Card Component</Card>
      <br /><br /><br />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
