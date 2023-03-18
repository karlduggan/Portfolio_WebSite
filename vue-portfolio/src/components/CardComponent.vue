<template>
<div class="card-container m-auto mt-8 bg-white rounded shadow-md overflow-hidden">
  <img class="w-full h-2/5 object-cover" src="https://cdn.vox-cdn.com/thumbor/ab7GeC585ehvC-Y4zEkqUcwOa9c=/0x0:2067x1377/1200x800/filters:focal(869x524:1199x854)/cdn.vox-cdn.com/uploads/chorus_image/image/54120135/your_name_oped.0.jpg" />
  <div class="flex flex-col items-start justify-center p-4 text-left">
    <h3 class="font-bold text-2xl mb-2">Your Name</h3>
    <span class="text-sm">Two teenagers share a profound, magical connection upon discovering they are swapping bodies. But things become even more complicated when the boy and girl decide to meet in person.</span>
    <button class="text-md font-bold px-3 py-2 mt-3 rounded text-white bg-gradient-to-r from-cyan-400 to-teal-400">Visit Site</button>
  </div>
</div>
</template>

<script>
export default {
    name: "CardComponent",
}
</script>

<style scoped>
.card-container {
  width: 350px;
  height: 380px;
  margin: auto;
  margin-top: 2rem;
  background-color: #FFF;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 60%;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
}

.card-title {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.8rem;
}

.card-action {
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  margin-top: 0.75rem;
  background-color: #38a169;
  border-radius: 0.25rem;
  color: #FFF;
}
</style>