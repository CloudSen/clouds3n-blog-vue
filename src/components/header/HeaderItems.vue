<template>
  <fragment>
    <template v-for="item in this.items">
      <v-btn
        :key="item.id"
        :to="item.routerPath"
        class="hidden-sm-and-down"
        depressed
        text
      >
        <i
          class="material-icons mr-1"
          left
        >{{item.icon}}</i>
        {{item.name}}
      </v-btn>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'top-header-items',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
