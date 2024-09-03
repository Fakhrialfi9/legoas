import { ref } from "vue";

export function useSelectData() {
  const selectedData = ref("10");
  const toggleOpen = ref(false);

  function selectData(data: string) {
    selectedData.value = data;
    toggleOpen.value = false;
  }

  return {
    selectedData,
    selectData,
    toggleOpen,
  };
}
