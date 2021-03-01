<template>
  <div class="app-container">
    <!--toolbar-->
    <div class="head-container">
      <div v-if="crud.props.searchToggle">
        <!-- search for -->
        <el-input
          v-model="query.value"
          clearable
          placeholder="Enter search content"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="crud.toQuery"
        />
        <el-select v-model="query.type" clearable placeholder="Types of" class="filter-item" style="width: 130px">
          <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select>
        <el-date-picker
          v-model="query.createTime"
          :default-time="['00:00:00','23:59:59']"
          type="daterange"
          range-separator=":"
          size="small"
          class="date-item"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
        <rrOperation />
      </div>
      <crudOperation :permission="permission" />
      <el-dialog
        :close-on-click-modal="false"
        :before-close="crud.cancelCU"
        :visible.sync="crud.status.cu > 0"
        :title="crud.status.title"
        width="500px"
      >
        <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
          <el-form-item label="id" prop="id">
            <el-input v-model="form.id" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Name" prop="username">
            <el-input v-model="form.username" style="width: 370px;" />
          </el-form-item>
          <el-form-item label="Time">
            <el-input v-model="form.createTime" style="width: 370px;" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="crud.cancelCU">Cancel</el-button>
          <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">Submit</el-button>
        </div>
      </el-dialog>
      <!--loading-->
      <el-table
        ref="table"
        v-loading="crud.loading"
        :data="crud.data"
        size="small"
        style="width: 100%;"
        @selection-change="crud.selectionChangeHandler"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="id" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="username" label="Name" />
        <el-table-column prop="createTime" label="Time">
          <template slot-scope="scope">
            <span>{{ parseTime(scope.row.createTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column v-permission="['admin','test:edit','test:del']" label="Operating" width="150px" align="center">
          <template slot-scope="scope">
            <udOperation :data="scope.row" :permission="permission" />
          </template>
        </el-table-column>
      </el-table>
      <!--pagination-->
      <pagination />
    </div>
  </div>
</template>

<script>
import crudTest from '@/api/test'
import CRUD, { presenter, header, form, crud } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import crudOperation from '@crud/CRUD.operation'
import udOperation from '@crud/UD.operation'
import pagination from '@crud/Pagination'
const defaultCrud = CRUD({
  title: 'test',
  url: 'api/test',
  sort: 'id,desc',
  crudMethod: { ...crudTest }
})
const defaultForm = {
  id:
        null,
  email:
        null,
  username:
        null,
  createTime:
        null
}
export default {
  name: 'Test',
  components: { pagination, crudOperation, rrOperation, udOperation },
  mixins: [presenter(defaultCrud), header(), form(defaultForm), crud()],
  data() {
    return {
      permission: {
        add: ['admin', 'test:add'],
        edit: ['admin', 'test:edit'],
        del: ['admin', 'test:del']
      },
      rules: {
        id:
              [
                { required: true, message: 'id cannot be empty', trigger: 'blur' }
              ],
        email:
              [
                { required: true, message: 'E-mail can not be empty', trigger: 'blur' }
              ],
        username:
              [
                { required: true, message: 'Username can not be empty', trigger: 'blur' }
              ]
      },
      queryTypeOptions: [
        {
          key: 'id',
          display_name: 'id'
        },
        {
          key: 'email',
          display_name: 'Email'
        },
        {
          key: 'username',
          display_name: 'User name'
        }
      ]
    }
  },
  methods: {
    [CRUD.HOOK.beforeRefresh]() {
      const query = this.query
      if (query.type && query.value) {
        this.crud.params[query.type] = query.value
      }
      return true
    }
  }
}
</script>
<style scoped>
</style>
