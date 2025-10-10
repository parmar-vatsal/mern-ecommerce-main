import axios from "axios";
import {
  DASHBOARD_STATS_REQUEST,
  DASHBOARD_STATS_SUCCESS,
  DASHBOARD_STATS_FAIL,
} from "../constants/DashboardConstants";

export const getDashboardStats = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DASHBOARD_STATS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/dashboard/stats`, config);

    dispatch({
      type: DASHBOARD_STATS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARD_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
