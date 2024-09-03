import { ref, computed } from "vue";

export function useSearch(dataTable: any[]) {
  const searchQuery = ref("");

  const filteredDataTable = computed(() => {
    if (!searchQuery.value) return dataTable;

    const query = searchQuery.value.toLowerCase();
    return dataTable.filter((item) => {
      return Object.values(item).some((val) => val.toString().toLowerCase().includes(query));
    });
  });

  return {
    searchQuery,
    filteredDataTable,
  };
}
