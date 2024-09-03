import { ref, watch } from "vue";
import { dataTable as initialDataTable } from "../data/views/tableData.js";

export function useTableLogic() {
  const dataTable = ref(initialDataTable);
  const toggleOpen = ref(false);
  const selectedData = ref("10");
  const loading = ref(false);
  const checkAll = ref(false);

  function togglepagesselect() {
    toggleOpen.value = !toggleOpen.value;
  }

  function selectData(data: string) {
    selectedData.value = data;
    toggleOpen.value = false;
  }

  async function refreshData() {
    loading.value = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    loading.value = false;
  }

  function markAsPaid() {
    dataTable.value.forEach((item: any) => {
      if (item.checkBox) {
        item.status = "LUNAS";
        item.tanggalLunas = new Date().toLocaleDateString();
      } else if (item.status === "KONFIRMASI PEMBAYARAN") {
        item.status = "LUNAS";
        item.tanggalLunas = new Date().toLocaleDateString();
      }
    });
  }

  function toggleCheckAll() {
    dataTable.value.forEach((item: any) => {
      item.checkBox = checkAll.value;
    });
  }

  watch(checkAll, () => {
    toggleCheckAll();
  });

  return {
    dataTable,
    toggleOpen,
    selectedData,
    loading,
    checkAll,
    togglepagesselect,
    selectData,
    refreshData,
    markAsPaid,
  };
}
