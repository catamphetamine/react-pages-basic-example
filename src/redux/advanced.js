// https://github.com/catamphetamine/react-pages#redux-module
import { ReduxModule } from 'react-pages'

const redux = new ReduxModule()

export const set = redux.action(
  (value) => async () => value,
  'value'
)

export default redux.reducer({ value: 0 })