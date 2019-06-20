import axios from 'axios'

//ACTION TYPES
const GOT_CHILDREN = 'GOT_CHILDREN'
const UPDATE_CHILD_INFO = 'UPDATE_CHILD_INFO'

//INITIAL STATE
const defaultChildren = []

//ACTION CREATORS
const gotChildren = children => ({ type: GOT_CHILDREN, children })
export const updateChildInfo = child => ({ type: UPDATE_CHILD_INFO , child })

//THUNK CREATORS

export const fetchChildren = () =>
  dispatch =>
    axios({
      method: 'get',
      url: 'https://randomuser.me/api/?results=20&nat=us',
      dataType: "json"
    })
      .then(res => {
        const children = res.data.results;
        dispatch(gotChildren(children))
      })
      .catch(err => console.log(err))

// REDUCER
export default function (state = defaultChildren, action) {
  switch (action.type) {
    case GOT_CHILDREN:
      return action.children
    case UPDATE_CHILD_INFO:
      return state.filter(child => child.id !== action.child.id).concat(action.child);
    default:
      return state
  }
}