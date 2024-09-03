import { ref, onMounted, onUnmounted } from "vue";

export function useTogglePagesSelect() {
  const toggleOpen = ref(false);

  function togglepagesselect() {
    toggleOpen.value = !toggleOpen.value;
  }

  function closeDropdown() {
    toggleOpen.value = false;
  }

  function handleClickOutside(event: MouseEvent) {
    const dropdown = document.querySelector(".dropdownmenu");
    const button = document.querySelector("button[data-toggle]");

    if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
      toggleOpen.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return {
    toggleOpen,
    togglepagesselect,
    closeDropdown,
  };
}
