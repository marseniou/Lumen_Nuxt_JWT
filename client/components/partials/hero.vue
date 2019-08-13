<template>
  <section class="hero" :class="type">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <bnav />
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <slot/> 
      </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
  </section>
</template>
<script>
import bnav from '@/components/partials/bnav'

export default {
  components: { bnav },
  props: {
    type: {
      type: String,
      default: 'is-dark'
    },
   
  },
  data() {
    return {

    }
  }
}

</script>
