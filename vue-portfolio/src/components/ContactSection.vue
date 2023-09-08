<template>
    <div class="w-[100%] flex justify-center">
    <div
  class=" w-[520px] rounded-lg bg-white p-6  shadow-lg ">
    <form>
        <div class="relative mb-6" data-te-input-wrapper-init>
        <input
            type="text"
            class="bg-slate-100 block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none "
            id="exampleInput7"
            placeholder="Name" />
     
        </div>
        <div class="relative mb-6" data-te-input-wrapper-init>
        <input
            type="email"
            class="bg-slate-100 block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none"
            id="exampleInput8"
            placeholder="Email address" />
       
        </div>
        <div class="relative mb-6" data-te-input-wrapper-init>
        <textarea
            class="bg-slate-100 block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Message"></textarea>
      
        </div>
        <div
        class="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
        <input
            class="relative float-left mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300  outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary  checked:bg-primary  checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
            type="checkbox"
            value=""
            id="exampleCheck10" />
        <label
            class="inline-block pl-[0.15rem] hover:cursor-pointer"
            for="exampleCheck10">
            Send me a copy of this message
        </label>
        </div>
        <button
        type="submit"
        class="w-full rounded bg-black px-6 py-2.5 text-sm font-bold uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out  focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        Send
        </button>
    </form>
    </div>
    </div>
</template>

<script>
export default {
    name: "contactComponent"
}
</script>