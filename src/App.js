import React from 'react';
import Header from './components/Header/';
import { renderRoutes } from 'react-router-config';
import { actions } from './components/Header/store/';
import withStyle from './withStyle'
import comCss from './common.css'

const App = (props) => {
    return (
        <div>
            <Header staticContext={props.staticContext}/>
            <div className={comCss.container}>
               {renderRoutes(props.route.routes)}
            </div>
        </div>
    )
}

App.loadData = (store) => {
    return store.dispatch(actions.getHeaderInfo());
}

export default withStyle(App,comCss);
// export default App
