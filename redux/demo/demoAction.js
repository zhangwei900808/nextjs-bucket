import { createActions } from "redux-actions";

export const demoTypes = {
  SAY_HI: "SAY_HI",
  SAY_HI_SUCCESS: "SAY_HI_SUCCESS"
};

export default createActions({
  [demoTypes.SAY_HI]: content => ({ content }),
  [demoTypes.SAY_HI_SUCCESS]: content => ({ content })
});
