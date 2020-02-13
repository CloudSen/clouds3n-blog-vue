<template>
  <fragment>
    <Header></Header>
    <Drawer></Drawer>
  </fragment>
</template>

<script>
import Header from '@/components/header/Header'
import Drawer from '@/components/aside/NavigationDrawer'

export default {
  name: 'home',
  components: {
    Header,
    Drawer,
  },
}
</script>

<style>
</style>
