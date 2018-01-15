
export default {
  namespace: 'feedbackData',
  state: {
    current: 1,
    curPageSize: 2,
  },
  reducers: {
    change(state, { payload: page }) {
      let { current } = state;
      current = page;
      return { ...state, current };
    },
    showSizeChange(state, { payload: { current, size } }) {
      let { curPageSize } = state;
      curPageSize = size;
      return { ...state, current, curPageSize };
    },
  },
  effects: {},
  subscriptions: {},
};
