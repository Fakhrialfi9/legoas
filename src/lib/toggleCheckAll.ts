import { ref, watch } from "vue";

export function useToggleCheckAll(dataTable: any, checkAll: any) {
  function toggleCheckAll() {
    dataTable.value.forEach((item: any) => {
      item.checkBox = checkAll.value;
    });
  }

  watch(checkAll, () => {
    toggleCheckAll();
  });

  return {
    toggleCheckAll,
  };
}
