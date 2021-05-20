export const state = () => ({
  counter: 0,
  // autenticado: false
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
