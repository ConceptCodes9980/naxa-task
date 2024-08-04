import { call, put, takeLatest } from "redux-saga/effects";

import axios, { AxiosResponse } from "axios";
import { fetchProjects, fetchProjectsSuccess } from "./ProjectsReducer";

function* getProjects() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      "https://admin.naxa.com.np/api/projects"
    );
    yield put(fetchProjectsSuccess(response.data));
  } catch (error) {
    alert("Something went wrong");
  }
}

export function* watchGetProjects() {
  yield takeLatest(fetchProjects.type, getProjects);
}
