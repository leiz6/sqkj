<template>
    <section class="team">
        <div class="container">
            <h2 class="title">
                创始团队
            </h2>
            <div class="detail">
                深轻科技致力于为保险行业提供最便捷、最直观、最高效的预测工具，助力公司更好的规划自己的前进道路。虽然是一家年轻的公司，但我们的创始团队却是由一群在保险精算和咨询建模领域久经沙场的“老兵”组成；带着多年合作的经验和曾经种种“遥遥领先”，汇聚深轻，再立潮头，责无旁贷，叩开我国在本专业细分领域自主发展的新历史。
            </div>
            <div class="body">
                <div class="members">
                    <div class="member" v-for="item in list" :key="item.id">
                        <div class="top">
                            <div class="photo">
                                <el-image style="width: 170px;height: 220px;"
                                    :src="item.img"></el-image>
                            </div>
                            <div class="name-part">
                                <div class="name">
                                    {{ item.name }}
                                </div>
                                <div class="meta">
                                    <span v-for="v in item.meta">{{ v }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="cont">
                            <div class="brief">
                                {{ item.brief }}
                            </div>
                        </div>
                        <div class="btm">
                            <router-link to="/about" class="more">认识一下</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang='ts' setup>
let list = [
    { id: 1, name: '陈曦', img:"https://www.deeplightconnect.com/img/photo-sm-01.0786f31f.png",meta: ["创始人", "产品架构", "核心引擎"], brief: "复旦大学数学系学士学位，中国精算师（FCAA）、北美精算师（FSA）、特许注册金融分析师、金融风险管理师" },
    { id: 2, name: '曾哲', img:"https://www.deeplightconnect.com/img/photo-sm-04.a840883c.png",meta: ["管理咨询", "精算审阅"], brief: "南开大学风险管理与保险系学士学位，中国精算师（FCAA）、北美精算师（FSA）" },
    { id: 3, name: '钱中琦',img:"https://www.deeplightconnect.com/img/photo-sm-02.e0d78056.png", meta: ["用户界面和体验", "客户开发维护"], brief: "清华大学经济管理学院学士学位，美国密西根大学数学系硕士学位，北美精算师" },
    { id: 4, name: '陈 森',img:"https://www.deeplightconnect.com/img/photo-sm-03.9409ce24.png", meta: ["核心引擎", "产品模型库", "系统落地"], brief: "中国人民大学统计系学士学位、硕士学位，北美精算师" }
]
</script>

<style lang='scss' scoped>
.team {
    background: #f9faff;
    padding: 50px 0 54px 0;

    .container {
        width: 1080px;
        height: 954px;

        margin: 0 auto;

        .title {
            font-size: 30px;
            height: 40px;
            line-height: 40px;
            margin-bottom: 60px;
            text-align: center;
            color: #374567;
            font-weight: 500;
        }

        .detail {
            width: 1018px;
            height: 160px;
            font-size: 20px;
            padding: 30px;
            background: #fff;
            border: 1px solid #eef3fd;
            line-height: 2;
            color: #7c8da7;
        }

        .body {
            .members {
                display: flex;
                justify-content: space-between;
                .member {
                    width: 253px;
                    height: 630px;
                    border: 1px solid #e1e6f0;
                    background: #fff;
                    color: #7c8da7;
                    

                    .top {
                        width: 253px;
                        height: 348px;
                        padding-bottom: 22px;
                        border-bottom: 1px solid #ebf0fd;
                        margin-bottom: 20px;

                        .photo {
                            width: 253px;
                            height: 260px;
                            margin-bottom: 30px;
                            background: url('https://www.deeplightconnect.com/img/index-photo-bg.1711c865.png') no-repeat 50%;
                            background-size: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: flex-end;
                        }

                        .name-part {
                            height: 58px;
                            width: 234px;
                            padding: 0 10px;

                            .name {
                                margin-bottom: 8px;
                                color: #374567;
                                font-weight: 500;
                                font-size: 22px;
                                text-align: center;
                            }

                            .meta {
                                color: #7c8da7;
                                font-size: 16px;
                                display: flex;
                                justify-content: space-around;
                            }
                        }

                    }

                    .cont {
                        height: 170px;
                        padding: 0 28px;
                        margin-bottom: 10px;
                        overflow: hidden;

                        .brief {
                            margin-bottom: 10px;
                            line-height: 2;
                            font-size: 16px;
                            color: #7c8da7;
                        }
                    }

                    .btm {
                        padding: 20px 30px;
                        display: flex;
                        justify-content: end;

                        .more {
                            color: #3860f4;
                            padding-right: 16px;
                            background: url('https://www.deeplightconnect.com/img/more.b00fcddf.svg') no-repeat 100%;
                            background-size: 8px;
                        }
                    }
                }
            }
        }
    }

}
</style>