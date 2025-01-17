import {
  GET_CITIES,
  GET_CITY_REVIEWS,
  CREATE_REVIEW,
  CITY_LOADING_TYPE,
  REVIEW_LOADING_TYPE
} from '../types';

const iState = {
  reviews: [],
  reviewsLoading: ''
};

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case REVIEW_LOADING_TYPE:
      return { ...state, reviewsLoading: action.payload };
    case GET_CITY_REVIEWS:
      return { ...state, reviews: action.payload };
    case CREATE_REVIEW:
      return { ...state, reviews: action.payload };
    default:
      return { ...state };
  }
};

export default ReviewReducer;
