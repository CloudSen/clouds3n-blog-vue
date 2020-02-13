<template>
  <fragment>
    <template v-for="menu in this.menuList">
      <v-list-item
        :key="menu.id"
        :to="menu.routerPath"
        active-class="indigo--text text-darken-4"
        exact
        v-if="menu.type === 2"
      >
        <v-list-item-icon>
          <i class="material-icons">{{ menu.icon }}</i>
        </v-list-item-icon>

        <v-list-item-title>{{ menu.name }}</v-list-item-title>
      </v-list-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'drawer-list-normal-menu',
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>
