import React from 'react';
import{ Header } from './Header';
import { NewsLetter } from './Newsletter';
import { SubscribeForm } from './Subscribe';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
          <div className="pic">
            <div className="overlay">
              <h1>Open Road Media Newsletters</h1>
              <h5>Enjoy captivating stories and extraordinary experiences and great deals on <br /> 
              classic and undiscovered ebooks. It is easy to get started. Select your favorite <br />
              newsletters from our full list below.</h5>
              <h5>You can unsubscribe from any of them at any time.</h5>
            </div>
          </div>
        <NewsLetter />
        <SubscribeForm />
      </div>
    );
  }
}

export default App