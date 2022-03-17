<template>
  <div id="app">
    <CardForm />
  </div>
</template>

<script>
import CardForm from "./components/CardForm";

export default {
  name: "app",
  components: {
    CardForm
  }
};
</script>

<style lang="scss">
#app {
  @import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  text-align: center;
  color: #2c3e50;

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
}
</style>