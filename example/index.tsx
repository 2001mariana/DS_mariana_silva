import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ABbutton, Card } from '../.';

const App = () => {
  return (
    <div>
      <ABbutton />
      <br /><br /><br />
      <Card>This is Card Component</Card>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
