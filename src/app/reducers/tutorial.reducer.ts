import { Action } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

//this is where the state is defined, the original state is the initialState
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

  //here we call whatever we did back to its initial state
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

            case TutorialActions.REMOVE_TUTORIAL:

            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}