import React from 'react';
import './App.css';
function hii(){
  alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed')
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],

function App() {
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
