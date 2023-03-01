<template>
    <section class="features">
        <div class="container">
            <h2 class="section-title">深轻飞燕</h2>
            <ul class="items">
                <li class="with-hover-effect" v-for="item in data.list1" :key="item.id">
                    <div class="box">
                        <div class="brief">
                            <el-image style="width: 191px; height: 161px; margin-bottom: 8px" :src="item.img"></el-image>
                            <div class="title">
                                {{ item.title }}
                            </div>
                            <div class="meta vertical">
                                <div class="meta">
                                    <template v-for="(v, index) in item.meta">
                                        <span v-if="index < 2">{{ v }}</span>
                                    </template>
                                </div>
                                <span v-if="item.meta[2]">{{ item.meta[2] }}</span>
                            </div>
                        </div>
                        <div class="detail" :style="{backgroundImage:`url('${item.bgImg}')`}" >
                            <div class="title">{{ item.title }}</div>
                            <div class="body">{{ item.detail }}</div>
                            <div>
                                <RouterLink :to="`product?tab=${item.id}`" class="action">查看详情</RouterLink>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="tags-groups">
                <li class="with-hover-effect" :class="index == 1 ? 'produces' : ''" v-for="(item, index) in data.list2">
                    <div class="box">
                        <div class="brief">
                            <div class="header" :style="index == 1 ? { height: '38px' } : ''">
                                <el-image :style="
                                    index == 0
                                        ? { width: '41px', height: '34px' }
                                        : { width: '33px', height: '38px' }
                                " :src="item.img"></el-image>
                                <span class="title">{{ item.title }}</span>
                            </div>
                            <ul class="tags">
                                <li v-for="v in item.meta">{{ v }}</li>
                            </ul>
                            <ul class="icons" v-if="item.icons">
                                <li v-for="v in item.icons">
                                    <el-image :src="v" style="width: 44px; height: 45px" />
                                </li>
                            </ul>
                        </div>
                        <div class="detail" :style="{backgroundImage:`url('${item.bgImg}')`}">
                            <div class="title">{{ item.title }}</div>
                            <div class="body">{{ item.detail }}</div>
                            <div>
                                <RouterLink to="product" class="action">查看详情</RouterLink>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
let data = {
    list1: [
        {
            id: 1,
            title: "深轻飞燕",
            img: "https://www.deeplightconnect.com/img/feat-01.f335a7ab.png",
            bgImg:"https://www.deeplightconnect.com/img/feat-02-bg.8e6bd558.png",
            meta: ["计算引擎", "图形界面", "模型库"],
            detail:
                "自主研发、国产首款精算软件平台，是保险行业最便捷、最直观、最高效的预测分析工具。",
        },
        {
            id: 2,
            title: "计算引擎",
            img: "https://www.deeplightconnect.com/img/feat-02.a9420574.png",
            bgImg:"https://www.deeplightconnect.com/img/feat-02-bg.8e6bd558.png",
            meta: ["天下武功 ", "唯快不破"],
            detail:
                "自主研发并拥有完全知识产权的、以C/C++语言为基础的、专门用以支持“长时间序列”复杂预测过程。 ",
        },
        {
            id: 3,
            title: "图形界面",
            img: "https://www.deeplightconnect.com/img/feat-03.51acdd94.png",
            bgImg:"https://www.deeplightconnect.com/img/feat-03-bg.32c874ec.png",
            meta: ["自由灵活", "按需搭配"],
            detail:
                " 通过直观方式，提供从模型逻辑设计、公式编写、编译运行、到可靠性校验和结果分析的完整使用闭环。 ",
        },
        {
            id: 4,
            title: "模型库",
            img: "https://www.deeplightconnect.com/img/feat-04.aca52fbf.png",
            bgImg:"https://www.deeplightconnect.com/img/feat-04-bg.4a48c28d.png",
            meta: ["所有需求", "一网打尽"],
            detail: "针对我国市场上主流产品总结计算逻辑，供用户参考或直接使用。 ",
        },
    ],
    list2: [
        {
            id: 1,
            title: "评估目的",
            img: "https://www.deeplightconnect.com/img/feat-05.3d563f88.png",
            bgImg:"https://www.deeplightconnect.com/img/feat-05-bg.722de803.png",
            meta: [
                "定价",
                "现金价值",
                "会计准备金",
                "偿付能力",
                "分红基础准备金",
                "压力测试",
                "内含价值",
                "经济资本",
                "资产负债管理",
                "业务规划",
                "IFRS17",
            ],
            detail:
                "涵盖从基本的定价、现金价值到复杂的国际会计准则、偿二代和压力测试等所有测算目的。 ",
        },
        {
            id: 2,
            title: "产品图谱",
            img: "https://www.deeplightconnect.com/img/feat-06.9bfb395a.png",
            bgImg:"https://www.deeplightconnect.com/img/feat-06-bg.13fdc003.png",
            meta: [
                "传统寿险",
                "万能保险",
                "投资连结",
                "各类分红",
                "家庭保单",
                "产品组合",
                "养老年金",
                "重大疾病",
            ],
            detail:
                "包含市场主流产品类别和给付形态，全方位分析寿险产品的现金流、利益分配、风险和价值。",
            icons: [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "data:image/png;base64,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",
            ],
        },
    ],
};
</script>

<style lang="scss" scoped>
.features {
    padding: 70px 0 80px;
    height: 700px;
    background: #f9faff url('https://www.deeplightconnect.com/img/index-bg-01.ad2a020f.png') no-repeat top;
    background-size: 100%;

    .container {
        a {
            color: #3860f4;
        }

        width: 1080px;
        margin: 0 auto;

        .section-title {
            font-family: Source Han Sans CN;
            font-size: 30px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 50px;
            color: #374567;
            line-height: 40px;
        }

        .items {
            margin-bottom: 26px;
            display: flex;
            justify-content: space-between;

            .with-hover-effect {
                overflow: hidden;
                width: 248px;
                height: 340px;
                border: 1px solid #d4ddee;
                background: #fff;

                .box:hover {
                    transform: translateY(-400px);
                }

                .box {
                    transition: transform 0.3s;

                    .brief {
                        padding-top: 30px;
                        height: 370px;
                        width: 248px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: flex-start;

                        .title {
                            width: 96px;
                            height: 31px;
                            margin-bottom: 16px;
                            color: #374567;
                            font-size: 24px;
                            font-weight: 500;
                        }

                        .meta {
                            width: 160px;
                            height: 31px;
                            display: flex;
                            font-size: 16px;
                            color: #7c8da7;
                            justify-content: space-between;
                        }

                        .vertical {
                            height: 62px;
                            flex-direction: column;
                            align-items: center;
                            justify-content: flex-start;
                        }
                    }

                    .detail {
                        min-height: 230px;
                        padding: 50px 30px;
                        background: url('https://www.deeplightconnect.com/img/feat-02-bg.8e6bd558.png');
                        background-color: #31386c;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        background-size: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .title {
                            font-size: 24px;
                            margin-bottom: 22px;
                            color: #fff;
                            text-align: center;
                        }

                        .body {
                            font-size: 16px;
                            color: #fff;
                            flex: 1;
                            line-height: 2;
                        }

                        .action {
                            margin-top: 20px;
                            width: 120px;
                            height: 32px;
                            padding: 0 16px;
                            background: #fff;
                            color: #3860f4;
                            font-size: 14px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        }

        .tags-groups {
            display: flex;
            justify-content: space-between;

            .with-hover-effect {
                overflow: hidden;
                width: 525px;
                height: 242px;
                border: 1px solid #d4ddee;
                background: #fff;

                .box:hover {
                    transform: translateY(-400px);
                }

                .box {
                    transition: transform 0.3s;

                    .brief {
                        padding: 30px 30px 0 40px;
                        height: 370px;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;

                        .header {
                            height: 34px;
                            display: flex;
                            align-items: center;
                            margin-bottom: 22px;

                            .title {
                                margin-left: 20px;
                                width: 96px;
                                color: #374567;
                                font-size: 20px;
                                font-weight: 500;
                            }
                        }

                        .tags {
                            display: flex;
                            flex-wrap: wrap;

                            li {
                                border-radius: 15px;
                                padding: 0 14px;
                                border: 1px solid #c2caeb;
                                height: 30px;
                                line-height: 30px;
                                color: #7c8da7;
                                margin: 0 10px 10px 0;
                                font-size: 16px;
                            }
                        }

                        .icons {
                            width: 335px;
                            height: 85px;
                            padding: 0 60px;
                            display: flex;

                            li {
                                width: 43px;
                                height: 45px;
                                margin-right: 40px;
                            }
                        }
                    }

                    .detail {
                        padding: 50px 30px;
                        background: url('https://www.deeplightconnect.com/img/feat-05-bg.722de803.png');
                        background-color: #31386c;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        background-size: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .title {
                            font-size: 24px;
                            margin-bottom: 22px;
                            color: #fff;
                            text-align: center;
                        }

                        .body {
                            font-size: 16px;
                            color: #fff;
                            flex: 1;
                            line-height: 2;
                        }

                        .action {
                            margin-top: 20px;
                            width: 120px;
                            height: 32px;
                            padding: 0 16px;
                            background: #fff;
                            color: #3860f4;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>
