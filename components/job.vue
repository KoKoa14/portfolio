<script setup lang="ts">
const props = defineProps<{
  job: IJob,
}>();
</script>

<template>
  <Card class="w-full md:w-96">
    <template #header>
      <div class="flex justify-center items-center py-2 gap-2" :style="{
            backgroundColor: 'var(--p-primary-color)',
            color: 'var(--p-primary-contrast-color)',
          }">
        <i class="!text-lg md:!text-2xl" :class="job.titleIcon"></i>
        <label class="text-base md:text-xl font-semibold">{{job.title}}</label>
      </div>
    </template>
    <template #content>
      <div v-if="job.image" class="flex justify-center mb-4">
        <img alt="Spinforce" :src="job.image" class="h-44 rounded-md"/>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <i class="pi pi-building !text-lg md:!text-2xl"></i>
          <label>{{job.company}}</label>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-map-marker !text-lg md:!text-2xl"></i>
          <label>{{job.location}}</label>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-calendar !text-lg md:!text-2xl"></i>
          <label>{{job.start}}-{{job.end}}</label>
        </div>
        <ul class="flex flex-col gap-2 list-disc pl-4">
          <li v-for="description in job.descriptions">{{description.head}}
            <ul class="pl-4 text-sm" style="list-style-type: square;">
              <li v-for="detail in description.details">{{detail}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </template>
  </Card>
</template>

<style scoped>

</style>