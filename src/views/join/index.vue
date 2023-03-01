<template>
    <div class="header">
    </div>
    <div class="body">
        <h2 class="title">
            同创造，共见证
        </h2>
        <div class="brief">
            深轻（上海）科技有限公司是一家专注于保险科技和咨询服务企业。公司于2020年正式成立，创始团队由保险咨询和建模领域有丰富经验的精算师组成，长期在保险服务行业为寿险公司提供保险咨询、精算评估及建模的解决方案。作为一家富有创造力的公司，深轻开发了国内第一款拥有自主知识产权的精算预测引擎，填补了多项国外内空白，并将相关领域的效率标准提高到了一个新的台阶。
        </div>
        <div class="brief">
            依托开创性的专利算法设计以及公司团队对寿险产品的深入理解，我们的产品和计算引擎在单台普通个人电脑上的运算效率足以媲美当前国际主流精算软件在服务器群上的表现
        </div>
        <ul class="briefs">
            <li>
                在不损失测算时效性的前提下，为客户节省大量的软硬件成本
            </li>
            <li>
                开放设计结构使其可与众多财务系统、核心业务系统、分析系统无缝对接，使得公司相关开发维护工作以及跨系统的数据联动安排变得更加轻松
            </li>
        </ul>
        <div class="brief">
            我们致力营造开放的工作环境，挖掘团队的每一名成员的潜能，使其在团队中发挥独一无二的能量。我们诚邀跟我们一样希望重塑可能的您加入深轻科技，共负使命，用产品和智慧服务全球客户。
        </div>
        <div class="main">
            <div class="main-table">
                <div class="main-title-border"></div>
                <div class="main-table">
                    <Table></Table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import Table from './components/Table.vue';
</script>

<style lang='scss' scoped>
.header {
    // width: 100%;
    padding-top: 136px;
    height: 290px;
    background: #3860f4 url('https://www.deeplightconnect.com/img/joinUs.3825bd7f.png') no-repeat 50%;
}

.body {
    width: 1080px;
    padding: 80px 0 370px;
    margin: 0 auto;

    >.title {
        text-align: center;
        margin-bottom: 10px;
        font-size: 30px;
        color: #374567;
        font-weight: 700;
        line-height: 60px;
    }

    .brief,
    .briefs {
        font-size: 16px;
        font-size: 16px;
        line-height: 2;
        color: #7c8da7;
    }

    .briefs {
        padding-left: 16px;
        list-style-position: inside;

        li {
            list-style-type: disc;
            font-size: 16px;
            padding-left: 20px;
        }
    }

    .main {
        width: 980px;
        margin: 0 auto;
        padding-top: 50px;

        .main-table {
            .main-title-border {
                background-color: #3a3a4f;
                width: 50px;
                height: 1px;
                margin: 0 auto 20px;
                
            }
            .main-table{
                margin-bottom: 60px;
            }
        }
    }
}
</style>