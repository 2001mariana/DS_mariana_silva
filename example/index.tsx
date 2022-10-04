import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonBlack, ButtonBlue, ButtonDanger, ButtonGreen, ButtonLed, ButtonYellow, Card } from '../.';

import 'react-app-polyfill/ie11';

const App = () => {
  const [valueInput, setValueInput] = React.useState<string>('')
  return (
    <div>
      <br /><br />
      <ButtonLed label='custom text' size='small' />
      <br /><br />
      <ButtonLed label='custom text' size='medium' />
      <br /><br />
      <ButtonLed label='custom text' size='large' />
      <br /><br />

      <p>blue - solid - small</p>
      <ButtonBlue label='custom text' size='small' variant='solid' /><br /><br />
      <p>blue - solid - medium</p>
      <ButtonBlue label='custom text' size='small' variant='solid' /><br /><br />
      <p>blue - solid - large</p>
      <ButtonBlue label='custom text' size='small' variant='solid' />
      <br /><br />

      <p>blue - outlined - small</p>
      <ButtonBlue label='custom text' size='small' variant='outlined' /><br /><br />
      <p>blue - outlined - medium</p>
      <ButtonBlue label='custom text' size='small' variant='outlined' /><br /><br />
      <p>blue - outlined - large</p>
      <ButtonBlue label='custom text' size='small' variant='outlined' />
      <br /><br />
      
      <p>yellow - solid - small</p>
      <ButtonYellow label='custom text' size='small' variant='solid' /><br /><br />
      <p>yellow - solid - medium</p>
      <ButtonYellow label='custom text' size='small' variant='solid' /><br /><br />
      <p>yellow - solid - large</p>
      <ButtonYellow label='custom text' size='small' variant='solid' />
      <br /><br />

      <p>yellow - outlined - small</p>
      <ButtonYellow label='custom text' size='small' variant='outlined' /><br /><br />
      <p>yellow - outlined - medium</p>
      <ButtonYellow label='custom text' size='small' variant='outlined' /><br /><br />
      <p>yellow - outlined - large</p>
      <ButtonYellow label='custom text' size='small' variant='outlined' />
      <br /><br />

      <br /><br />
      <p>green - solid - small</p>
      <ButtonGreen label='custom text' size='small' variant='solid' />
      <br /><br />
      <p>green - solid - medium</p>
      <ButtonGreen label='custom text' size='medium' variant='solid' />
      <br /><br />
      <p>green - solid - large</p>
      <ButtonGreen label='custom text' size='large' variant='solid' />
      <br /><br />
      
      <br /><br />
      <p>green - outlined - small</p>
      <ButtonGreen label='custom text' size='small' variant='outlined' />
      <br /><br />
      <p>green - outlined - medium</p>
      <ButtonGreen label='custom text' size='medium' variant='outlined' />
      <br /><br />
      <p>green - outlined - large</p>
      <ButtonGreen label='custom text' size='large' variant='outlined' />
      <br /><br />

      
      <br /><br />
      <p>danger - solid - small</p>
      <ButtonDanger label='custom text' size='small' variant='solid' />
      <br /><br />
      <p>danger - solid - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='solid' />
      <br /><br />
      <p>danger - solid - large</p>
      <ButtonDanger label='custom text' size='large' variant='solid' />
      <br /><br />

      
      <br /><br />
      <p>danger - outlined - small</p>
      <ButtonDanger label='custom text' size='small' variant='outlined' />
      <br /><br />
      <p>danger - outlined - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='outlined' />
      <br /><br />
      <p>danger - outlined - large</p>
      <ButtonDanger label='custom text' size='large' variant='outlined' />
      <br /><br />

      
      <p>black - outlined - small</p>
      <ButtonBlack label='custom text' size='small' />
      <br /><br />
      <p>black - outlined - medium</p>
      <ButtonBlack label='custom text' size='medium' />
      <br /><br />
      <p>black - outlined - large</p>
      <ButtonBlack label='custom text' size='large' />
      <br /><br />

      <p>black - solid - small</p>
      <ButtonBlack label='custom text' size='small' variant='solid' />
      <br /><br />
      <p>black - solid - medium</p>
      <ButtonBlack label='custom text' size='medium' variant='solid' />
      <br /><br />
      <p>black - solid - large</p>
      <ButtonBlack label='custom text' size='large' variant='solid' />
      
      <br />
      <p>ABbutton primary small</p>
        <ABbutton color='Primary' text='custom text' size='small' />
        <br /><br />
        <p>ABbutton secundário small</p>
        <ABbutton color='Secondary' text='custom text' size='small' />
        <br /><br />
        <p>ABbutton secundário large</p>
        <ABbutton color='Secondary' text='custom text' size='large' />
        <br /><br />
        <p>ABbutton primary large</p>
        <ABbutton color='Primary' text='custom text' size='large' />
        <br /><br /><br />
      <Card>This is Card Component</Card>
      <br /><br />
        <ABTag texto='TagAção' /><br /><br />
        <ABTag texto='TagRomance' /><br /><br />
        <ABTag texto='TagFicção' />
      <br /><br />
      <AbInputQuant onChange={() => {}} />
      <br /><br/><br />
      <ABInput value={valueInput} label="Uma label interessante" onChange={(value) => {setValueInput(value)}}/>
      <br /><br />

      <ABOptionGroup
        options={[
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 1,
            title: 'custom title'
          },
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 2,
            title: ' Imcustom title'
          },
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 3,
            title: 'E-book + Imcustom title'
          }
        ]}
        valueDefault={{
          body: 'custom body',
          footer: 'custom description/footer',
          id: 1,
          title: 'custom title'
        }}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
