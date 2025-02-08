<script setup lang="ts">
import type {IEducation} from "~/utils";

const props = defineProps<{
  edu: IEducation,
}>();
</script>

<template>
  <Card class="w-full md:w-96">
    <template #header>
      <div class="flex justify-center items-center py-2 gap-2" :style="{
            backgroundColor: 'var(--p-primary-color)',
            color: 'var(--p-primary-contrast-color)',
          }">
        <i class="!text-lg md:!text-2xl" :class="edu.titleIcon"></i>
        <label class="text-base md:text-xl font-semibold">{{edu.title}}</label>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <i class="pi pi-building !text-lg md:!text-2xl"></i>
          <label>{{edu.company}}</label>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-map-marker !text-lg md:!text-2xl"></i>
          <label>{{edu.location}}</label>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-calendar !text-lg md:!text-2xl"></i>
          <label>{{edu.start}}-{{edu.end}}</label>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-verified !text-lg md:!text-2xl"></i>
          <label>{{edu.cert}}</label>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-star !text-lg md:!text-2xl"></i>
          <label>{{edu.result}}</label>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>

</style>