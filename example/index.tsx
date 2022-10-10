import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonBlack, ButtonBlue, ButtonBlueLed, ButtonDanger, ButtonGreen, ButtonGreenLed, ButtonLed, ButtonPink, ButtonPinkLed, ButtonRainbow, ButtonYellow, ButtonYellowLed, Card } from '../.';

import 'react-app-polyfill/ie11';

const App = () => {
  const [valueInput, setValueInput] = React.useState<string>('')
  return (
    <div>
      <br /><br />
      <p>ButtonRainbow - small</p>
      <ButtonRainbow label='custom text' size='small' />
      <br /><br />
      <p>ButtonRainbow - medium</p>
      <ButtonRainbow label='custom text' size='medium' />
      <br /><br />
      <p>ButtonRainbow - large</p>
      <ButtonRainbow label='custom text' size='large' />
      <br />

      <br /><br />
      <p>ButtonLed - small</p>
      <ButtonLed label='custom text' size='small' />
      <br /><br />
      <p>ButtonLed - medium</p>
      <ButtonLed label='custom text' size='medium' />
      <br /><br />
      <p>ButtonLed - large</p>
      <ButtonLed label='custom text' size='large' />
      <br /><br />

      <p>ButtonGreenLed - dark - small</p>
      <ButtonGreenLed label='custom text' size='small' intensity='dark' /><br /><br />
      <p>ButtonGreenLed - dark - medium</p>
      <ButtonGreenLed label='custom text' size='medium' intensity='dark' /><br /><br />
      <p>ButtonGreenLed - dark - large</p>
      <ButtonGreenLed label='custom text' size='large' intensity='dark' />
      <br /><br />

      <p>ButtonGreenLed - light - small</p>
      <ButtonGreenLed label='custom text' size='small' intensity='light' /><br /><br />
      <p>ButtonGreenLed - light - medium</p>
      <ButtonGreenLed label='custom text' size='medium' intensity='light' /><br /><br />
      <p>ButtonGreenLed - light - large</p>
      <ButtonGreenLed label='custom text' size='large' intensity='light' />
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

      <p>ButtonBlueLed - dark - small</p>
      <ButtonBlueLed label='custom text' size='small' intensity='dark' /><br /><br />
      <p>ButtonBlueLed - dark - medium</p>
      <ButtonBlueLed label='custom text' size='medium' intensity='dark' /><br /><br />
      <p>ButtonBlueLed - dark - large</p>
      <ButtonBlueLed label='custom text' size='large' intensity='dark' />
      <br /><br />

      <p>ButtonBlueLed - light - small</p>
      <ButtonBlueLed label='custom text' size='small' intensity='light' /><br /><br />
      <p>ButtonBlueLed - light - medium</p>
      <ButtonBlueLed label='custom text' size='medium' intensity='light' /><br /><br />
      <p>ButtonBlueLed - light - large</p>
      <ButtonBlueLed label='custom text' size='large' intensity='light' />
      <br /><br />

      <p>blue - solid - small</p>
      <ButtonBlue label='custom text' size='small' variant='solid' /><br /><br />
      <p>blue - solid - medium</p>
      <ButtonBlue label='custom text' size='medium' variant='solid' /><br /><br />
      <p>blue - solid - large</p>
      <ButtonBlue label='custom text' size='large' variant='solid' />
      <br /><br />

      <p>blue - outlined - small</p>
      <ButtonBlue label='custom text' size='small' variant='outlined' /><br /><br />
      <p>blue - outlined - medium</p>
      <ButtonBlue label='custom text' size='medium' variant='outlined' /><br /><br />
      <p>blue - outlined - large</p>
      <ButtonBlue label='custom text' size='large' variant='outlined' />
      <br /><br />

      <br /><br />
      <p>ButtonPinkLed - dark - small</p>
      <ButtonPinkLed label='custom text' size='small' />
      <br /><br />
      <p>ButtonPinkLed - dark - medium</p>
      <ButtonPinkLed label='custom text' size='medium' />
      <br /><br />
      <p>ButtonPinkLed - dark - large</p>
      <ButtonPinkLed label='custom text' size='large' />
      <br /><br />

      <br /><br />
      <p>ButtonPinkLed - light - small</p>
      <ButtonPinkLed label='custom text' size='small' intensity='light' />
      <br /><br />
      <p>ButtonPinkLed - light - medium</p>
      <ButtonPinkLed label='custom text' size='medium' intensity='light' />
      <br /><br />
      <p>ButtonPinkLed - light - large</p>
      <ButtonPinkLed label='custom text' size='large' intensity='light' />
      <br /><br />

      <p>ButtonPink - solid - small - intensity dark</p>
      <ButtonPink label='custom text' size='small' variant='solid' intensity='dark' /><br /><br />
      <p>ButtonPink - solid - medium - intensity dark</p>
      <ButtonPink label='custom text' size='medium' variant='solid' intensity='dark' /><br /><br />
      <p>ButtonPink - solid - large</p>
      <ButtonPink label='custom text' size='large' variant='solid' intensity='dark' />
      <br /><br />

      <p>ButtonPink - outlined - small - intensity dark</p>
      <ButtonPink label='custom text' size='small' variant='outlined' intensity='dark' /><br /><br />
      <p>ButtonPink - outlined - medium - intensity dark</p>
      <ButtonPink label='custom text' size='medium' variant='outlined' intensity='dark' /><br /><br />
      <p>ButtonPink - outlined - large - intensity dark</p>
      <ButtonPink label='custom text' size='large' variant='outlined' intensity='dark' />
      <br /><br />

      <p>ButtonPink - solid - small - intensity light</p>
      <ButtonPink label='custom text' size='small' variant='solid' intensity='light' /><br /><br />
      <p>ButtonPink - solid - medium - intensity dark</p>
      <ButtonPink label='custom text' size='medium' variant='solid' intensity='light' /><br /><br />
      <p>ButtonPink - solid - large</p>
      <ButtonPink label='custom text' size='large' variant='solid' intensity='light' />
      <br /><br />

      <p>ButtonPink - outlined - small - intensity light</p>
      <ButtonPink label='custom text' size='small' variant='outlined' intensity='light' /><br /><br />
      <p>ButtonPink - outlined - medium - intensity dark</p>
      <ButtonPink label='custom text' size='medium' variant='outlined' intensity='light' /><br /><br />
      <p>ButtonPink - outlined - large - intensity dark</p>
      <ButtonPink label='custom text' size='large' variant='outlined' intensity='light' />
      <br /><br />

      <br /><br />

      <p>ButtonYellowLed - dark - small</p>
      <ButtonYellowLed label='custom text' size='small' intensity='dark' /><br /><br />
      <p>ButtonYellowLed - dark - medium</p>
      <ButtonYellowLed label='custom text' size='medium' intensity='dark' /><br /><br />
      <p>ButtonYellowLed - dark - large</p>
      <ButtonYellowLed label='custom text' size='large' intensity='dark' />
      <br /><br />

      <p>ButtonYellowLed - light - small</p>
      <ButtonYellowLed label='custom text' size='small' intensity='light' /><br /><br />
      <p>ButtonYellowLed - light - medium</p>
      <ButtonYellowLed label='custom text' size='medium' intensity='light' /><br /><br />
      <p>ButtonYellowLed - light - large</p>
      <ButtonYellowLed label='custom text' size='large' intensity='light' />
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
