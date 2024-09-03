// exportTable.ts

import * as XLSX from "xlsx";

export function useExportTable(dataTable: any) {
  function exportTable() {
    if (Array.isArray(dataTable.value)) {
      const worksheet = XLSX.utils.json_to_sheet(dataTable.value);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

      const date = new Date();
      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();

      const fileName = `LegoasReport-${day}-${month}-${year}.xlsx`;

      XLSX.writeFile(workbook, fileName);

      console.log(`Laporan Excel telah digenerate dengan nama file ${fileName}`);
    } else {
      console.error("Data table is not an array. Unable to export.");
    }
  }

  return {
    exportTable,
  };
}
