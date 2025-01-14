import React from '../lib/react.js';
import Switch from '../components/switch.tsx';


function App(): React.ReactNode {
  return (
    <div lang="en" style
  )

  return h(
    'div',
    {
      lang: 'en',
      style: appStyles,
    },
    h(Switch, { active: true, showOnOffText: true }, 'Wi-Fi'),
    h(Switch, { active: false, showOnOffText: true }, 'Bluetooth'),
    h(Switch, { disabled: true, showOnOffText: true }, 'Reduced Motion')
  );
}

const appStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 12,
  padding: 20,
};

export default App;
