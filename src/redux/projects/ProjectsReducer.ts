import { createSlice } from "@reduxjs/toolkit";

const ProjectState = {
  loading: false,
  data: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState: ProjectState,
  reducers: {
    fetchProjects: (state) => {
      state.loading = true;
    },
    fetchProjectsSuccess: (state, action) => {
      console.log(action, "dfdf");
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { fetchProjects, fetchProjectsSuccess } = projectSlice.actions;

export default projectSlice.reducer;
