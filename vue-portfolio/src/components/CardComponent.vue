<template>
  <div class="card-container m-auto mt-8 bg-white rounded shadow-md overflow-hidden relative">
    <img class="w-full h-2/5 object-cover" src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" />
    <div class="flex flex-col items-start justify-center p-4 text-left">
      <h3 class="font-bold text-xl mb-2">Your Name</h3>
      <span class="text-xl">Two bodies. But things become even more complicated when the boy and girl decide to meet in person.</span>
    </div>
    <div class="flex items-center absolute bottom-0 left-0 m-4">
      <button class="text-md font-bold px-3 py-2 rounded text-white bg-black">Visit Site</button>
      <a href="https://www.github.com/karlduggan" class="ml-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-black" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
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
  width: 330px;
  height: 530px;
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