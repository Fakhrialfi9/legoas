<script setup lang="ts">
  import { ChevronRight, RotateCcw, FolderUp, CreditCard, ChevronLeft } from "lucide-vue-next";
  import { ref } from "vue";
  import { useTogglePagesSelect } from "../../lib/togglepagesselect.ts";
  import { useSelectData } from "../../lib/selectData.ts";
  import { useRefreshData } from "../../lib/refreshData.ts";
  import { usePayment } from "../../lib/payment.ts";
  import { useToggleCheckAll } from "../../lib/toggleCheckAll.ts";
  import { useExportTable } from "../../lib/exportTable.ts";
  import { useSearch } from "../../lib/searchData.ts";
  import { dataTable as initialDataTable } from "../../data/views/tableData.js";

  const dataTable = ref(initialDataTable);
  const checkAll = ref(false);

  const { toggleOpen, togglepagesselect } = useTogglePagesSelect();
  const { selectedData, selectData } = useSelectData();
  const { loading, refreshData } = useRefreshData();
  const { paymentStatus } = usePayment(dataTable);
  const { toggleCheckAll } = useToggleCheckAll(dataTable, checkAll);
  const { exportTable } = useExportTable(dataTable);
  const { searchQuery, filteredDataTable } = useSearch(dataTable.value);
</script>

<template>
  <main class="main">
    <div class="Container">
      <div class="content">
        <div class="header">
          <div class="breadcrumbs">
            <a>Home</a>
            <ChevronRight :size="15" />
            <a>Daftar Piutang Unit</a>
          </div>
          <div class="headline">
            <h5>Piutang Unit</h5>
          </div>
        </div>

        <div class="buttonaction">
          <button @click="refreshData"><RotateCcw :size="15" /> Refresh</button>
          <button @click="exportTable"><FolderUp :size="15" /> Export</button>
          <button @click="paymentStatus"><CreditCard :size="15" /> Bayar</button>
        </div>

        <div class="checkboxandsearchaction">
          <form>
            <input type="checkbox" v-model="checkAll" />
            <label>Check All</label>
          </form>
          <form>
            <input autocomplete="off" type="search" name="search" placeholder="Search" v-model="searchQuery" />
          </form>
        </div>

        <!-- Tabel -->
        <section class="maintable">
          <div v-if="loading" class="loadingtable">
            <div class="spinner"></div>
            <h5>Loading Table Data</h5>
          </div>
          <table v-else>
            <thead>
              <tr>
                <th>Check Box</th>
                <th>No. Kewajiban</th>
                <th>No. Polisi</th>
                <th>Pemilik</th>
                <th>Peserta</th>
                <th>Nomor VA</th>
                <th>Harga Terbentuk (Rp)</th>
                <th>Biaya Admin ex PPN (Rp)</th>
                <th>PPN (Rp)</th>
                <th>Total (Rp)</th>
                <th>Tanggal Lelang</th>
                <th>Tanggal Jatuh Tempo</th>
                <th>Tanggal Lunas</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filteredDataTable" :key="index">
                <td><input type="checkbox" v-model="item.checkBox" /></td>
                <td>{{ item.noKewajiban }}</td>
                <td>{{ item.noPolisi }}</td>
                <td>{{ item.pemilik }}</td>
                <td>{{ item.peserta }}</td>
                <td>{{ item.nomorVA }}</td>
                <td>{{ item.hargaTerbentuk }}</td>
                <td>{{ item.biayaAdmin }}</td>
                <td>{{ item.ppn }}</td>
                <td>{{ item.total }}</td>
                <td>{{ item.tanggalLelang }}</td>
                <td>{{ item.tanggalJatuhTempo }}</td>
                <td>{{ item.tanggalLunas }}</td>
                <td
                  :class="{
                    'status-confirmation': item.status === 'KONFIRMASI PEMBAYARAN',
                    'status-paid': item.status === 'LUNAS',
                    'status-processing': item.status === 'PROSES PEMBAYARAN',
                  }">
                  {{ item.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <!-- Tabel -->

        <!-- Navigation -->
        <div class="showtabledata">
          <div class="countdatapages">
            <h6>Tampilkan</h6>
            <button @click="togglepagesselect" data-toggle>{{ selectedData }} Data</button>
            <ul v-if="toggleOpen" class="dropdownmenu">
              <li @click="selectData('10')">10</li>
              <li @click="selectData('20')">20</li>
              <li @click="selectData('30')">30</li>
              <li @click="selectData('50')">50</li>
              <li @click="selectData('100')">100</li>
            </ul>
            <h6>Per Halaman</h6>
          </div>
          <div class="diververtical"></div>
          <div class="pagination">
            <ul>
              <a>
                <li>
                  <ChevronLeft :size="15" />
                </li>
              </a>
              <a>
                <li>1</li>
              </a>
              <a>
                <li>2</li>
              </a>
              <a>
                <li>3</li>
              </a>
              <a>
                <li>
                  <ChevronRight :size="15" />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <!-- Navigation -->
      </div>
    </div>
  </main>
</template>

<style src="../../assets/style/views/pages.css" scoped></style>
