import { ref } from "vue";

export function useRefreshData() {
  const loading = ref(false);

  async function refreshData() {
    loading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    loading.value = false;
  }

  return {
    loading,
    refreshData,
  };
}
