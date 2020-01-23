<template lang="pug">
  .container
    .columns
      .column.is-6.is-offset-3
        .notification.is-danger
          slot(name="body") Algo anduvo mal
</template>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
