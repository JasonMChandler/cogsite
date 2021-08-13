import { CLICK } from "../constants/action-types";

export const clicked = payload => ({ type: CLICK, payload: payload });