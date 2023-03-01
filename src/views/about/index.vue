<template>
    <div class="header">
        <div class="title">
            <el-image style="width: 391px;height: 63px;"
                src="https://www.deeplightconnect.com/img/about-title.2d8e8ee2.png" />
        </div>
    </div>
    <div class="body">
        <div class="company-intro">
            <h2 class="title">
                公司简介
            </h2>
            <div class="brief">
                深轻（上海）科技有限公司（下简称“深轻科技”或“公司”或“我们”）是一家专注于保险科技和咨询服务企业。公司于2020年正式成立，注册资本人民币500万元，总部位于上海浦东自由贸易试验区康桥东路1号16幢。
                <br>
                <br>
                作为一家年轻的公司，我们的创始团队却是由一群在保险精算和咨询建模领域久经沙场的“老兵”组成。在组成深轻之前，他们在各个战场合作，披荆斩棘，长期服务行业和广大寿险公司
            </div>
            <ul class="features">
                <li v-for="v in data.texts" :key="v.id">{{ v.text }}</li>
            </ul>
            <div class="brief" v-for="v in data.briefs" :key="v.id">
                {{ v.text }}
            </div>
        </div>
        <div class="team">
            <h2 class="title">
                <div class="zh">创始团队</div>
                <div class="en">Team Introduction</div>
            </h2>
            <ul class="members">
                <li v-for="v in data.members">
                    <div class="member">
                        <div class="photo">
                            <el-image :src="v.img" />
                        </div>
                        <div class="name-part">
                            <div class="name">{{ v.name }}</div>
                            <div class="meta">{{ v.meta }}</div>
                        </div>
                        <div class="intro">
                            <div class="section">
                                <div class="title">职业经历</div>
                                <div class="cont">{{ v.brief }}</div>
                            </div>

                        </div>
                        <div class="action">
                            <router-link to="/member" class="btn">查看详情</router-link>
                        </div>
                        <div class="titles">{{ v.titles }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';

let data = reactive({
    texts: [
        { id: 1, text: "搭建国内最大的精算预测运算服务器群上的预测模型，运算效率提升数十倍" },
        { id: 2, text: "六成内地上市保险公司的精算模型审阅工作，年报中的“内含价值”披露部分提供第三方签字认证" },
        { id: 3, text: "十余家保险公司资产负债管理的定性咨询和定量测算工具" },
        { id: 4, text: "年度精算审阅、偿付能力审阅、战略规划、资本管理，为国内外公司、组织和论坛、会议提供培训及演讲" },
    ],
    briefs: [
        { id: 1, text: "带着这些璀璨的个人经历和深厚的行业积淀，创始团队汇聚深轻，以让所在专业细分走上更为自主的发展快车道为己任，迈上了新的征程。" },
        { id: 2, text: "作为一家富有创造力的公司，我们开发了国内第一款拥有自主知识产权的精算预测引擎，填补了多项国外内空白，并将相关领域的效率标准提高到了一个新的台阶:依托开创性的专利算法设计以及公司团队对寿险产品的深入理解，我们的引擎产品在单台普通个人电脑上的运算效率足以媲美当前国际主流精算软件在服务器群上的表现在不损失测算时效性的前提下，为客户节省大量的软硬件成本开放的设计结构使其可与众多财务系统、核心业务系统、分析系统无缝对接，使得公司的相关开发维护工作以及跨系统的数据联动安排变得更加轻松" },
        { id: 3, text: "作为一家负责任的公司，我们始终相信，公司的价值必须得到客户更高效的发展的验证。因此，公司自成立伊始便确立了开放共赢的客户合作原则。取之于行业的终将用之于行业。以公司的革命性产品为基础，我们旨在建立一个服务于保险专业人士和精算学生交流的技术社区及促进各方高效获得相关资源的服务生态，确保新的思想和技术可更大程度、更低成本的惠及广大保险公司、市场参与者和消费者。" },
    ],
    members:[
        {id:1,name:"陈曦",meta:"创始人 | 产品架构 | 核心引擎",brief:"从业15年，全球最大精算建模软件和咨询服务服务提供商中国区寿险业务总经理，从算法设计、开发运维，到客户服务、审阅签字的全流程专业经验。",img:"https://www.deeplightconnect.com/img/photo-01.f2c5fc49.png",titles:"复旦大学数学系学士、中国精算师（FCAA）、北美精算师（FSA）、特许注册金融分析师（CFA）、金融风险管理师（FRM）"},
        {id:1,name:"曾哲",meta:"管理咨询 | 精算审阅",brief:"20年的寿险行业经验，其中在咨询行业深耕10年，在保险公司积累10年。深入理解公司经营规律，帮助客户提升管理效率。",img:"https://www.deeplightconnect.com/img/photo-04.9539880b.png",titles:"南开大学风险管理与保险系学士学位，中国精算师（FCAA）、北美精算师（FSA）"},
        {id:1,name:"钱中琦",meta:"用户界面和体验 | 客户开发维护",brief:"近十年行业经验，数十家寿险公司和相关监管部门的长期服务顾问，负责多家大型保险公司精算模型的建立和维护。",img:"https://www.deeplightconnect.com/img/photo-02.de3b89fa.png",titles:"清华大学经济管理学院学士学位，美国密西根大学数学系硕士学位，北美精算师（FSA）"},
        {id:1,name:"陈森",meta:"核心引擎 | 产品模型库 | 系统落地",brief:"负责全球最大保险公司模型重构项目（千万级金额），提升运行效率数十倍，持续提供维护服务至今。",img:"https://www.deeplightconnect.com/img/photo-03.55948ce7.png",titles:"中国人民大学统计系学士学位、硕士学位，北美精算师（FSA）"}
    ]
})
</script>

<style lang='scss' scoped>
.header {
    // width: 100%;
    padding-top: 136px;
    height: 290px;
    background: #3860f4 url('https://www.deeplightconnect.com/img/about-bg.bb1212f7.png') no-repeat bottom;
    background-size: 1450px;

    .title {
        width: 1080px;
        height: 67px;
        margin: 60px auto 0;
    }
}

.body {
    width: 1080px;
    padding: 80px 0 100px;
    margin: 0 auto;

    .company-intro {
        .title {
            text-align: center;
            color: #374567;
            margin-bottom: 20px;
            font-size: 30px;
            line-height: 39px;
        }

        .brief {
            font-size: 14px;
            line-height: 2;
            color: #7c8da7;
            margin-bottom: 50px;
        }

        .features {
            width: 1080px;
            height: 112px;
            margin-bottom: 80px;
            display: flex;
            justify-content: space-between;

            li {
                width: 220px;
                height: 112px;
                margin: 0 15px;
                font-size: 14px;
                color: #7c8da7;
                line-height: 2;
            }
        }

    }

    .team {

        > .title {
            height: 40px;
            margin-bottom: 80px;
            display: flex;

            .zh {
                font-weight: 500;
                font-size: 30px;
                color: #374567;
                margin-right: 20px;
                line-height: 40px;
            }

            .en {
                font-size: 22px;
                color: #7a8ca6;
                line-height: 40px;
            }
        }

        .members {
            width: 1080px;
            li:last-child{
                margin:0;
            }
            li {
                margin-bottom: 80px;
                .member {
                    background: url(https://www.deeplightconnect.com/img/member-bg.6c93b40f.png) no-repeat 0 0;
                    background-size: 1000px 400px;
                    position: relative;

                    .photo {
                        width: 330px;
                        height: 430px;
                        position: absolute;
                        left: 34px;
                    }

                    .name-part {
                        position: absolute;
                        left: 838px;
                        top: 211px;

                        .name {
                            font-size: 24px;
                            font-weight: 500;
                            color: #374567;
                            margin-bottom: 9px;
                        }

                        .meta {
                            color: #7c8da7;
                            font-size: 16px;
                            font-weight: 300;
                        }
                    }

                    .intro {
                        width: 620px;
                        height: 221px;
                        padding: 34px 0 0 460px;

                        .section {
                            width: 420px;
                            height: 130px;
                            margin-bottom: 10px;

                            .title {
                                margin-bottom: 10px;
                                color: #374567;
                                font-size: 18px;
                                line-height: 24px;
                                font-weight: 500;
                            }

                            .cont {
                                color: #7c8da7;
                                line-height: 2;
                                font-size: 16px;
                            }
                        }
                    }

                    .action {
                        width: 620px;
                        height: 65px;
                        padding-left: 460px;
                        display: flex;

                        .btn {
                            width: 64px;
                            height: 21px;
                            padding: 6px 22px;
                            border: 1px solid #0000ee;
                            line-height: 21px;
                            text-align: center;
                            color: #3860f4;
                            font-size: 16px;
                        }

                        .btn:hover {
                            background: rgba(56, 96, 244, .1);
                        }
                    }

                    .titles {
                        display: flex;
                        align-items: center;
                        align-items: center;
                        width: 624px;
                        height: 110px;
                        padding: 0 66px 0 190px;
                        margin-left: 200px;
                        background: #3860f4;
                        color: #fff;
                        line-height: 2;
                        font-size: 16px;
                    }


                }
            }
        }
    }
}</style>