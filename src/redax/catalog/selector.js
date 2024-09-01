export const selectTrucks = (state) => state.trucks.items;

export const selectIsLoading = (state) => state.trucks.loading;

export const selectError = (state) => state.trucks.error;

export const selectCurrentPage = (state) => state.trucks.currentPage;

export const selectItemsPerPage = (state) => state.trucks.itemsPerPage;
export const selectHasNextPage = (state) => state.trucks.hasNextPage;
export const selectTruckById = (state, id) =>
  state.trucks.items.find((truck) => truck.id === id);
