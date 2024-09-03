import { ref } from "vue";

export function usePayment(dataTable: any) {
  function paymentStatus() {
    // Check if at least one item is selected
    const hasSelectedItems = dataTable.value.some((item: any) => item.checkBox);

    if (!hasSelectedItems) {
      alert("Tolong Pilih Data Pembayaran Terlebih Dahulu");
      return;
    }

    // Update status for selected items
    dataTable.value.forEach((item: any) => {
      if (item.checkBox || item.status === "KONFIRMASI PEMBAYARAN") {
        item.status = "LUNAS";
        item.tanggalLunas = new Date().toLocaleDateString();
      }
    });
  }

  return {
    paymentStatus,
  };
}
