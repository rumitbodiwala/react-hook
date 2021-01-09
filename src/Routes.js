import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './page/home';
import Step1 from './page/step1';
import Step2 from './page/step2';
import Step3 from './page/step3';
import Step4 from './page/step4';
import Step5 from './page/step5';
import Step6 from './page/step6';
import Step7 from './page/step7';
import Step8 from './page/Step8';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/step1" component={Step1} />
            <Route exact path="/step2" component={Step2} />
            <Route exact path="/step3" component={Step3} />
            <Route exact path="/step4" component={Step4} />
            <Route exact path="/step5" component={Step5} />
            <Route exact path="/step6" component={Step6} />
            <Route exact path="/step7" component={Step7} />
            <Route exact path="/step8" component={Step8} />
        </Switch>
    );
}
export default Routes;