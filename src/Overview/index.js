import React from 'react';

import Info from './Info';
import Tools from './Tools';
import Website from './Website';
import Local from './Local';

function Overview(props) {
  const [route, setRoute] = React.useState('overview');

  const BackBtn = () => {
    return (
      <button className="btn btn-back" onClick={() => setRoute('overview')}>
        zurück
      </button>
    );
  };

  const render = () => {
    switch (route) {
      case 'overview':
        return (
          <div className="overview">
            <p>Hier findest Du:</p>
            <button
              className="btn btn-home w-100 mb-2"
              onClick={() => setRoute('info')}
            >
              Informationen
            </button>
            <button
              className="btn btn-home w-100 mb-2"
              onClick={() => setRoute('tools')}
            >
              Tools
            </button>
            <button
              className="btn btn-home w-100 mb-2"
              onClick={() => setRoute('website')}
            >
              Webshop erstellen
            </button>
            <button
              className="btn btn-home w-100"
              onClick={() => setRoute('local')}
            >
              Unterstützung vor Ort
            </button>
          </div>
        );
      case 'info':
        return <Info answered={props.answered} />;
      case 'tools':
        return <Tools answered={props.answered} />;
      case 'website':
        return <Website answered={props.answered} />;
      case 'local':
        return <Local answered={props.answered} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="post-frage">
      {route !== 'overview' ? <BackBtn /> : <></>}
      {render()}
      {route === 'overview' ? (
        <div>
          <p>
            Wir haben noch viel mehr, Du findest hier Informationen zu
            Bezahlsystemen, nützlichen Tools, deinem ersten eigenen Webshop und
            wir geben Dir gerne auch persönlich Unterstützung! #youarenotalone
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Overview;
