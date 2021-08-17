import { CLICK } from "../constants/action-types";
import { NBACK } from "../constants/action-types";
export const clicked = payload => ({ type: CLICK, payload: payload });
export const nBack = payload => ({ type: NBACK, payload: payload });