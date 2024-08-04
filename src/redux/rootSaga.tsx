import { all } from "redux-saga/effects";
import { watchGetProjects } from "./projects/ProjectsSaga";

export function* rootSaga() {
  yield all([watchGetProjects()]);
}
