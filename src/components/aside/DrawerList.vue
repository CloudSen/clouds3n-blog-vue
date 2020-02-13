<template>
  <fragment>
    <v-list subheader>
      <!-- 分组读取菜单 -->
      <GroupMenu :drawerData="this.drawerData"></GroupMenu>
    </v-list>
  </fragment>
</template>

<script>
import GroupMenu from '@/components/aside/DrawerListGroupMenu'

export default {
  name: 'drawer-list',
  props: {
    drawerData: {
      type: Array,
      required: true,
    },
  },
  components: {
    GroupMenu,
  },
}
</script>

<style>
</style>
