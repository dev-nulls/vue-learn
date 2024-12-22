import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    let left = ref('0px')
    let top = ref('0px')

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      left.value = `${event.offsetX}px`
      top.value = `${event.offsetY}px`
    }

    return {
      left,
      top,
      handleClick,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="{ left, top }">📍</span>
    </div>
  `,
})
