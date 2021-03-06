/**
 * Selects Cognito ID token from the state
 * @param {object} state state
 * @returns current user session data
 * @hidden
 */
export const selectSessionData = (state: any) => {
  const sessionData = state.dck.account.get("sessionData");
  if (sessionData) {
    return state.dck.account.get("sessionData");
  } else {
    return null;
  }
};
