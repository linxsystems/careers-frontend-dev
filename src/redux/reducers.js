import {types} from "./actions";
import createReducer from '../lib/createReducer';
import {combineReducers} from "redux";

export const Status = {
    Incomplete: 0,
    Complete: 1
}

const STARTER_ITEMS = [
    {
        id: 1,
        title: "Change list title from 'Todo' --> 'Linx Systems Todo'",
        status: Status.Incomplete
    },
    {
        id: 2,
        title: "Complete the redux logic to toggle item status",
        status: Status.Incomplete
    },
    {
        id: 3,
        title: "Dim out status.Complete items and put a strikethrough them",
        status: Status.Incomplete
    },
    {
        id: 4,
        title: "Add a default title 'New Todo' if one is not supplied",
        status: Status.Incomplete
    },
    {
        id: 5,
        title: "Clear input form and reset value state after adding item",
        status: Status.Incomplete
    }
]

const todos = createReducer(
    {
        list: STARTER_ITEMS
    }, {

        [types.ADD_ITEM](state, action) {
            let newState = Object.assign({}, state);
            newState.list = [{id: new Date().getTime(), title: action.title, status: Status.Incomplete}].concat(state.list);
            return newState;
        },

        [types.TOGGLE_STATUS](state, action) {
            let newState = Object.assign({}, state);

            // TODO fill in missing logic here

            return newState;
        },
    }
);

const reducers = combineReducers({todos: todos});
export default reducers;
