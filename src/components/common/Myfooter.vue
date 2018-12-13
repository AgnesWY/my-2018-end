<template>
  <div class="footer">
    <footer>
      <p>Copyright©2000-2014 丹露有限公司 All Rights Reserved</p>
      <p>网站备案/许可证号: <a href="http://sccainfo.miitbeian.gov.cn/state/outPortal/loginPortal.action">ICP备09096283号</a></p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'Myfooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  footer {
    background: #fff;
    padding: 15px 0 15px 0;
    p {
      font-size: 12px;
      color: #444;
      text-align: center;
      a {
        color: #444;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

</style>
