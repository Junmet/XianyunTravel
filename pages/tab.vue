<template>
  <div>
      <div>
          <span v-for='(i,index) in ["NBA","Recreation","News"]' :key='index'>{{i}}</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="less" scoped>
span{
    margin-right: 10px
}

</style>