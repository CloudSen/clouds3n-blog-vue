<template>
  <v-navigation-drawer
    app
    floating
    temporary
    v-model="this.showDrawer"
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

export default {
  name: 'navigation-drawer',
  components: {
    DrawerHeader,
    DrawerList,
  },
  data: () => ({
    showDrawer: true,
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
              const subMenu = parse(list, menu.id)
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
