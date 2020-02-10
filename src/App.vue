<template>
  <v-app dark>
    <router-view/>
  </v-app>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 14px/1.5;
  font-family: "\5b8b\4f53", Arial, "WenQuanYi Micro Hei", "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", sans-serif;
}

/* 滚动条样式 start */
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

body::-webkit-scrollbar {
  width: 5px;
  background-color: #000;
}

body::-webkit-scrollbar-thumb {
  background-color: #20c20e;
  border: 2px solid #20c20e;
}

pre::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

pre::-webkit-scrollbar {
  height: 3px;
  background-color: #000;
}

pre::-webkit-scrollbar-thumb {
  background-color: #20c20e;
  border: 1px solid #20c20e;
}
/* 滚动条样式 end */
</style>
