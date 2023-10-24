<template>
    <div class="render">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-table :data="ruleForm.tableData" border style="width: 100%; margin-top: 20px">
                <el-table-column prop="id" label="IDD">
                    <template slot-scope="scope">
                        <el-form-item :prop="'tableData.' + scope.$index + '.id'" :rules="rules.id" label="ID" width="180">
                            <el-input size="mini" v-model="scope.row.id"  class="product-code-input"> </el-input>
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="amount1" label="数值 1（元）">
                </el-table-column>
                <el-table-column prop="amount2" label="数值 2（元）">
                </el-table-column>
                <el-table-column prop="amount3" label="数值 3（元）">
                </el-table-column>
            </el-table>
        </el-form>

        <el-button type="primary" @click="submitForm('ruleForm')">立即校验</el-button>
    </div>
</template>

<script>
export default {
    layout: 'blog',
    data: () => ({
        rules: {
            id: [{ required: true, message: "id不能为空", trigger: "blur" }]
        },
        ruleForm: {
            tableData: [{
                id: '',
                name: '王小虎1',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '王小虎2',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '王小虎3',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '王小虎4',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '',
                name: '王小虎5',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
            },
            {
                id: '129871266',
                name: '王小虎6',
                amount1: '539',
                amount2: '6.1',
                amount3: 16
            }]
        }

    }),
    mounted() {

    },
    methods: {
        submitForm(ruleForm) {
            this.$refs.ruleForm.validate(async (valid) => {
                // 校验通过
                if (valid) {

                }

            })
        }

    },
    beforeDestroy() {
    },
}
</script>
<style scoped></style>