import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
// Development
// import {composeWithDevTools} from "redux-devtools-extension";

// Production
export const store = createStore(rootReducer, applyMiddleware(thunk));
// Development
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));