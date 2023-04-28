import React, { useState } from 'react';
import English from './../lang/en-US.json';
import Spanish from './../lang/es-MX.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    let localDefault;
    let messageDefault;
    const lang = localStorage.getItem('lang');

    if(lang) {

        localDefault = lang

        if(lang === 'es-MX') {
            messageDefault = Spanish;
        } else if(lang === 'en-US') {
                messageDefault = English;             
        } else {
            localDefault = 'en-US';
            messageDefault = English;
        }
    }
    const [message, initiMessage] = useState(messageDefault);
    const [local, initLocal] = useState(localDefault);

    const initLenguaje = (lenguaje) => {
        switch (lenguaje) {
            case 'es-MX':
                initiMessage(Spanish);
                initLocal('es-MX');
                localStorage.setItem('lang', 'es-MX');
                break;
            case 'en-US':
                initiMessage(English);
                initLocal('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                initiMessage(English);
                initLocal('en-US');
                localStorage.setItem('lang', 'en-US');                
        }
}

return (
    <langContext.Provider value={{ initLenguaje: initLenguaje}}>
        <IntlProvider locale={local} messages={message}>
            {children}
        </IntlProvider>
    </langContext.Provider>
);

}

export { LangProvider, langContext}
