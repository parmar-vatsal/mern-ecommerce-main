import {
  DASHBOARD_STATS_REQUEST,
  DASHBOARD_STATS_SUCCESS,
  DASHBOARD_STATS_FAIL,
} from "../constants/DashboardConstants";

const initialState = {
  loading: false,
  stats: {},
  error: null,
};

export const dashboardStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_STATS_REQUEST:
      return { ...state, loading: true };
    case DASHBOARD_STATS_SUCCESS:
      return { loading: false, stats: action.payload, error: null };
    case DASHBOARD_STATS_FAIL:
      return { loading: false, stats: {}, error: action.payload };
    default:
      return state;
  }
};
