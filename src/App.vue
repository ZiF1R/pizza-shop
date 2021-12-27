<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/vars.scss";

body {
  padding: 0;
  margin: 0;
}

.container {
  padding: 0px 70px 0px 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}

.button {
  font-weight: 700;
  font-size: 1em;

  padding: 11px 25px;

  border-radius: 500px;
  border: 2px solid;

  outline: none;
  cursor: pointer;

  background: #f9f9f9;

  &_primary {
    color: var(#{--primary-color});
    border: 2px solid var(#{--primary-color});
    background: #fff;

    &:hover {
      color: #fff;
      background: var(#{--primary-color});
    }

    &:active {
      background: darken($color: #fe5f1e, $amount: 5%);
    }
  }

  &_secondary {
    border-color: #fff;

    &:hover {
      filter: opacity(0.8);
    }

    &:active {
      filter: grayscale(0.7);
    }

    &_active {
      background: #000;
      color: #fff;
    }
  }

  &_active {
    color: #fff;
    background: var(#{--primary-color});

    &:hover {
      background: lighten($color: #fe5f1e, $amount: 5%);
    }

    &:active {
      background: darken($color: #fe5f1e, $amount: 5%);
    }
  }
}
</style>
