<template>
    <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        
        

    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';


export default {
    name: "ProjectSection",
    components: {
        CardComponent
    },
    data(){
        return {

        }
    }
}
</script>