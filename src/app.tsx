import { Switch, Route, BrowserRouter } from "react-router-dom";

import PrivateRoute from "./private-rout/private-rout";
import {CountryQuiz, Quiz, Results, AnswersQuiz, Main, SignUp,} from "./components";

import {COUNTRY_ROUT, FLAG_ROUT, COUNTRY_QUIZ_ROUT, RESULTS, SHOW_RESULT_QUIZ_ROUT, MAIN, SIGN_UP_ROUT,} from "./constants/routs.constants";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app main">
        <div className="main__heading">
          <Switch>
            <Route exact path={MAIN} component={Main} />
            <Route path={COUNTRY_QUIZ_ROUT} component={CountryQuiz} />
            <Route path={SIGN_UP_ROUT} component={SignUp} />
            <PrivateRoute path={FLAG_ROUT} component={Quiz} />
            <PrivateRoute path={COUNTRY_ROUT} component={Quiz} />
            <PrivateRoute path={RESULTS} component={Results} />
            <PrivateRoute path={SHOW_RESULT_QUIZ_ROUT} component={AnswersQuiz}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
