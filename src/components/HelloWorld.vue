<template>

  <div class="hello">
    <Myheader></Myheader>
    <!-- <siderbar></siderbar> -->
    <div class="retrieval result">
            <el-table :data="evaluationDataList" border style="width: 100%" height="500">
               <el-table-column prop="sellerName" label="经销商名称"  show-overflow-tooltip></el-table-column>
               <el-table-column prop="sellerAreaCodeName" label="经销商区域" show-overflow-tooltip> </el-table-column>
               <el-table-column prop="orderNum" label="已评价订单数" show-overflow-tooltip></el-table-column>
               <el-table-column prop="" label="整体满意度"  show-overflow-tooltip>
                 <template slot-scope="scope">
                      <span>{{ scope.row.allSatisfaction.toFixed(0)}}%</span>
                  </template>
               </el-table-column>
               <el-table-column prop="rank" label="满意度排名" show-overflow-tooltip>
               </el-table-column>

               <el-table-column prop="" header-align="center"  label="商品满意度" show-overflow-tooltip>
                  <el-table-column prop="" label="满意比例/单数" show-overflow-tooltip> 
                    <template slot-scope="scope">
                      <span>{{ scope.row.goodsSatisfaction.toFixed(0)||0 }}%</span>
                      <span>( {{ scope.row.goodsSatNum||0 }} )</span>
                    </template> 
                  </el-table-column>
                  <el-table-column prop="" label="不满意比例/单数" show-overflow-tooltip> 
                    <template slot-scope="scope">
                      <span>{{ 100-(scope.row.goodsSatisfaction.toFixed(0)||0) }}%</span>
                      <span>({{ scope.row.goodsUnsatNum||0 }})</span>
                    </template> 
                  </el-table-column>
               </el-table-column>
               <el-table-column prop="" label="服务满意度" header-align="center" show-overflow-tooltip>
                  <el-table-column prop="" label="满意比例/单数" show-overflow-tooltip> 
                    <template slot-scope="scope">
                      <span>{{ scope.row.serviceSatisfaction.toFixed(0)||0 }}%</span>
                      <span>({{ scope.row.serviceSatNum||0 }})</span>
                    </template> 
                  </el-table-column>
                  <el-table-column prop="" label="不满意比例/单数" show-overflow-tooltip> 
                    <template slot-scope="scope">
                      <span>{{ 100-(scope.row.serviceSatisfaction.toFixed(0)||0) }}%</span>
                      <span>({{ scope.row.serviceUnsatNum||0 }})</span>
                    </template> 
                  </el-table-column>
               </el-table-column>
               <el-table-column prop="" label="配送满意度"  header-align="center" show-overflow-tooltip>
                  <el-table-column prop="" label="满意比例/单数"  show-overflow-tooltip> 
                    <template slot-scope="scope">
                      <span>{{ scope.row.distributionSatisfaction.toFixed(0)||0 }}%</span>
                      <span>({{ scope.row.distributionSatNum||0 }})</span>
                    </template> 
                  </el-table-column>
                  <el-table-column prop="" label="不满意比例/单数" show-overflow-tooltip> 
                    <template slot-scope="scope">
                      <span>{{ 100-(scope.row.distributionSatisfaction.toFixed(0)||0) }}%</span>
                      <span>({{ scope.row.distributionUnsatNum||0 }})</span>
                    </template> 
                  </el-table-column>
               </el-table-column>
            </el-table>
          </div> 
    <footer></footer>
  </div>
</template>

<script>
import siderbar from '@/components/common/siderbar'
import Myheader from '@/components/common/Myheader'
import Myfooter from '@/components/common/Myfooter'
export default {
  name: 'HelloWorld',
  components: {siderbar,Myheader,Myfooter},
  data () {
    return {
      msg: 'start a vue project!',
      evaluationDataList:[],
      pageCount:0
    }
  },
  methods:{
    searchList(){
      var reqData ={
        companyAreaProvinceCode : "",
        companyAreaCityCode  : "",
        companyAreaDistrictCode  : "",
        companyName:"",
        minSatisfaction:"",
        maxSatisfaction:"",
        satisfactionType:"all",
        page:1
      }
      this.$http.post('/dladmin/ordercomment/queryCommentDataStatisticsList.html',reqData, {emulateJSON:true}).then( ({data,ok,statusText}) => {
        if(ok){
          if(data.status == 1){
            that.evaluationDataList =[];
            that.pageCount =0;
          }else{
            that.evaluationDataList =data.data.resultList;
            that.pageCount = data.data.totalNum;

          }
                
        }else { 
            that.$message.error('系统错误，请稍后再试');
        }
      })
         
    },

  },
  watch:{

  },
  beforeRouteEnter:function(to,from,next){
    debugger
    console.log(to);
    console.log(from);
    next(vm=>{
      vm.searchList();

    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  margin: 20px 40px;

}
</style>
