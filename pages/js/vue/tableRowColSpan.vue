<template>
    <div class="render">
        <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
            <el-table-column prop="id" label="ID" width="180">
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
    </div>
</template>

<script>
export default {
    layout: 'blog',
    data: () => ({
        tableData: [{
            id: '12987122',
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
            id: '12987126',
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
    }),
    mounted() {

    },
    methods: {
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            // 需求:仅对姓名列rowindex(从0开始)是1、2行得进行多行合并
            console.log(row,column, rowIndex, columnIndex)
            if (column.label == '姓名') {
                if (rowIndex == 2) {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                } else if (rowIndex == 1) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    }
                }
            } else {
                return {
                    rowspan: 1,
                    colspan: 1
                };
            }
        }

    },
    beforeDestroy() {
    },
}
</script>
<style scoped></style>