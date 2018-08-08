import { createSelector } from 'reselect'

const getIdentity = (state) => state.identity

export const getJWT = createSelector(
  [ getIdentity ],
  (identity) => identity.token
)