import { CLICK } from "../constants/action-types";
import { NBACK } from "../constants/action-types";
import { NBACKCLICK } from "../constants/action-types";
import { TIMER } from "../constants/action-types";
export const clicked = payload => ({ type: CLICK, payload: payload });
export const nBack = payload => ({ type: NBACK, payload: payload });
export const nBackClick = payload => ({ type: NBACKCLICK, payload: payload });
export const timer = payload => ({ type: TIMER, payload: payload });