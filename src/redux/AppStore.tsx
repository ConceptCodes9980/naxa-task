import { configureStore } from "@reduxjs/toolkit";
import ProjectsReducer from "./projects/ProjectsReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const AppStore = configureStore({
  reducer: {
    projects: ProjectsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default AppStore;
