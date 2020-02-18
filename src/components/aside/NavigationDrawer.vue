<template>
  <v-navigation-drawer
    app
    floating
    temporary
    v-model="showDrawer"
    width="250"
  >
    <DrawerHeader></DrawerHeader>
    <DrawerList :drawerData="this.parseMenuSourceToGroupList"></DrawerList>
  </v-navigation-drawer>
</template>

<script>
import drawerItemsData from '@/testData/drawerData'
import DrawerHeader from '@/components/aside/DrawerHeader'
import DrawerList from '@/components/aside/DrawerList'
import UPDATE_DRAWER_SHOW from '@/components/aside/constants/mutationType'

export default {
  name: 'navigation-drawer',
  components: {
    DrawerHeader,
    DrawerList,
  },
  data: () => ({
    drawerData: [],
  }),
  computed: {
    // 解析分组菜单
    parseMenuSourceToGroupList () {
      function parse (list, parentId) {
        const menuGroupList = []
        list.forEach((menu) => {
          if (menu.parentId === parentId) {
            // 非普通菜单需要读取子项
            if (menu.type !== 2) {
              const subMenu = parse(list, menu.uuid)
              if (subMenu && subMenu.length > 0) {
                Object.assign(menu, { children: subMenu, hasChildren: true })
              }
            }
            menuGroupList.push(menu)
          }
        })
        return menuGroupList
      }
      const groupList = parse(this.drawerData, '-1')
      return groupList
    },
    showDrawer: {
      get () {
        return this.$store.state.navDrawer.show
      },
      set (value) {
        this.$store.commit(`navDrawer/${UPDATE_DRAWER_SHOW}`, value)
      },
    },
  },
  methods: {
    init () {
      this.drawerData = drawerItemsData
    },
  },
  created () {
    this.init()
  },
}
</script>

<style>
</style>
