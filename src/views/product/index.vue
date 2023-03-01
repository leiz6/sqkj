<template>
    <div class="header">
    </div>
    <div class="product_info">
        <el-tabs tab-position="left" v-model="index">
            <el-tab-pane label="产品概述" name="1">
                <h3 class="title">产品概述</h3>
                <div class="article-abstract">
                    “深轻•飞燕”是一款用于搭建基于“长时间序列”进行复杂预测的数学模型的高效建模平台软件。寿险精算评估、定价及资产负债管理等领域的模拟天然是本软件最直接的应用领域。
                    <br />
                    <br />
                    “深轻•飞燕”是国内该领域第一款产品。深轻科技拥有完全自主知识产权。通过专利算法和开放设计，“深轻•飞燕”协助客户在模型运行、运维和使用等诸多方面大幅提高效率，节省综合成本，推动保险公司精算工作的数字现代化进程。
                </div>
                <div class="article-detail">
                    <p>“深轻•飞燕”套装由三个独立但相互联动的部分组成：</p>
                    <p style="margin-left: 20px; float: right; clear: both;"><el-image style="width: 185px;height: 165px;"
                            src="https://www.deeplightconnect.com/img/product-descrip-1.dcaff257.png" /></p>
                    <p><span
                            class="subTitle">1.计算引擎：</span>是一个用以支持“长时间序列”复杂预测过程的高效算法库。它根据用户设置的输入数据库及编写的预测逻辑，完成大规模逐记录计算或特定汇总层面计算，并将结果输出至用户指定位置。
                        运行数据表明：</p>
                    <ul>
                        <li>单个寿险企业一般只需配置一到两台安装了本引擎的普通个人电脑，便足以在现有评估时间表内，得到包括会计准备金、偿付能力、内含价值等在内的所有评估结果。</li>
                        <li>若运行于一个包含数十台计算设备的小型计算机网络，对于大部分公司的大部分计算目标而言，该引擎可将测算时间缩短至分钟级。</li>
                        <li>基于一个千核级别的并行计算网络，该引擎可以每天完成数次针对全行业的会计准备金和偿付能力等结果的全口径计算工作。</li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="计算引擎" name="2">
                <h3 class="title">计算引擎</h3>
            </el-tab-pane>
            <el-tab-pane label="图形页面" name="3">
                <h3 class="title">图形页面</h3>
            </el-tab-pane>
            <el-tab-pane label="模型库" name="4">
                <h3 class="title">模型库</h3>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import { useRoute, type LocationQueryValue } from "vue-router"
let index = ref<LocationQueryValue[] | string>()
let route = useRoute()
onMounted(() => {
    index.value = route.query.tab ? route.query.tab : "1";
})
</script>

<style lang='scss' scoped>
.header {
    // width: 100%;
    padding-top: 136px;
    height: 290px;
    background: #3860f4 url('https://www.deeplightconnect.com/img/product-bg.fc3c358f.png') no-repeat 50%;
}

.product_info {
    width: 1100px;
    margin: 65px auto 0;
    min-height: 800px;

    .title {
        margin-bottom: 10px;
        font-size: 22px;
        color: #374567;
        font-weight: 500;
        line-height: 29px;
    }

    .article-abstract {
        margin-bottom: 30px;
        padding-left: 20px;
        font-size: 16px;
        color: #7c8da7;

    }

    .article-detail {
        width: 953px;
        padding: 0 20px 20px;
        border-left: 2px solid #3860f4;
        background: #fff;
        font-size: 16px;
        line-height: 30px;
        color: #7c8da7;

        >p {
            .subTitle {
                font-size: 16px;
                font-weight: 700;
            }
        }

        ul {
            padding-left: 16px;
            list-style-position: inside;

            li {
                list-style-type: disc;
                font-size: 16px;
                padding-left: 20px;
            }
        }
    }

}</style>