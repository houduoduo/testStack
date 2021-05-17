<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id"
                       label="ID"
                       width="260">
      </el-table-column>
      <el-table-column prop="name"
                       label="物品名称">
      </el-table-column>
      <el-table-column prop="name"
                       label="物品Icon">
        <template slot-scope="scope">
<img
               :src="scope.row.icon"
               height="30rem"
               class="avatar">
        </template>
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="160">
        <template slot-scope="scope">
          <el-button type="text"
                     size="small"
                     :data="scope"
                     @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text"
                     size="small"
                     :data="scope"
                     @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    async getList() {
      const res = await this.$http.get('rest/items')
      console.log(res)
      this.items = res.data
    },
    async remove(row) {
      this.$confirm(`是否确认删除此分类 "${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete(`rest/items/${row._id}`)
        console.log(res)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.getList()
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>
