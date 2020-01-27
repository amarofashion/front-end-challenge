export const Types = {
  QUICK_VIEW: '@quickView/PRODUCT_QUICK_VIEW',
  TOGGLE_QUICK_VIEW: '@quickView/TOGGLE_SHOW',
};

const INITIAL_STATE = {
  data: [],
  toggle: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.QUICK_VIEW:
      return {
        ...state,
        data: action.quickView,
      };

    case Types.TOGGLE_QUICK_VIEW:
      return {
        ...state,
        toggle: action.payload,
      };

    default:
      return state;
  }
}

export const Creators = {
  productQuickView: product => ({
    type: Types.QUICK_VIEW,
    quickView: product,
  }),
  toggleQuickView: boolean => ({
    type: Types.TOGGLE_QUICK_VIEW,
    payload: boolean,
  }),
};
