<template>
  <v-navigation-drawer
    app
    floating
    temporary
    v-model="showDrawer"
    width="250"
  >
    <DrawerHeader></DrawerHeader>
    <template v-if="!loadingData.active">
      <DrawerList :drawerData="this.parseMenuSourceToGroupList"></DrawerList>
    </template>
    <template v-else>
      <CenterLinearLoading :loadingData="this.loadingData"></CenterLinearLoading>
    </template>
  </v-navigation-drawer>
</template>

<script>
import DrawerHeader from '@/components/aside/DrawerHeader'
import DrawerList from '@/components/aside/DrawerList'
import CenterLinearLoading from '@/components/common/loading/CenterLinearLoading'
import UPDATE_DRAWER_SHOW from '@/components/aside/constants/mutationType'
import asideUrl from '@/api/asideUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'navigation-drawer',
  components: {
    DrawerHeader,
    DrawerList,
    CenterLinearLoading,
  },
  data: () => ({
    drawerData: [],
    loadingData: {
      text: '正在加载菜单列表...',
      active: true,
    },
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
      this.fetchDrawerMenu()
    },
    fetchDrawerMenu () {
      axios.get(asideUrl.menu.getAll)
        .then((response) => {
          const { data } = response
          this.drawerData = data
          this.loadingData.active = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  created () {
    this.init()
  },
}
</script>

<style>
</style>
