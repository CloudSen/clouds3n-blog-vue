<template>
  <fragment>
    <v-container fluid>
      <v-row dense>
        <v-col
          cols="12"
          lg="4"
          md="4"
          order="2"
          xl="4"
        ></v-col>
        <v-col
          cols="12"
          lg="8"
          md="8"
          order="3"
          order-md="1"
          xl="8"
        >
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
export default {
  name: 'blog',
}
</script>

<style>
</style>
