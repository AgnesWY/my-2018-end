<template>
  <div class="header">
    <header>
        <el-row>
            <el-col :span="4" >
                <router-link to="/">
                  <el-tag type="primary">{{logo}}</el-tag>
                </router-link>
            </el-col>
            <el-col :span="12">
              <el-dropdown>
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </el-col>
        </el-row>

    </header>

  </div>
</template>

<script>
export default {
  name: 'Myheader',
  data(){
    return{
        logo:"我的logo" 
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
