import schema from '../schemas/index';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../action-types/index';
const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
});

function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ENTITIES: {
      // action.payload.query
      // let results = [];
      // if (action.payload.query) {
      //   state.data.categories.map((item) => (
      //     item.playlist.filter((item) => (
      //       item.author.toLowerCase().includes(action.payload.query.toLowerCase()) &&
      //       results.push(item)
      //     ))
      //   ));
      // }
      //
      // return {
      //   ...state,
      //   search: results,
      // };
      return state.set('search', action.payload.query);
    }

    default:
      return state;
  }
}

export default data;
