<template>
    <div class="table">
        <div class="table-row">
            <div class="table-cell">岗位</div>
            <div class="table-cell">工作地点</div>
            <div class="table-cell">年度薪资</div>
            <div class="table-cell"></div>
        </div>
        <div class="table-cell-row" v-for="(v, index) in data.list" :key="v.id" @click="open(index)">
            <div class="table-content-row">
                <div class="table-cell">
                    <el-image style="width: 20px; height: 20px" v-show="data.show !== index"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB30lEQVR4Xu3ZsU4CQRAG4Bm917A3PgWFlbGw4eIREq0sDGBiYbxrtJGjsQFiYmVhjlMsLez0BWzVV7C1JrIGE41BRJqZ/cMNNWH3//afYwlMBX9xwfOTAVgDCi5gI1DwAthD0EbARqDgAjYCBS+AfQvYCNgIFFxAfARq6WWJKIiI6L4bR9do3qIAe82r9SEPb79DO3okCrY6SfiMAiEKUEvzcya3Mxb2iVwQoiDIApxkx7zARxNOGwZBFqDZW2amlz/qDoEgCjAKXkuzMhP3URHEAdARVACQEdQAUBFUARAR1AHQELwAICF4A0BB8AowC8L7YrB6dhC+Sv128A7wH4JzFHeTSmuuAUbhGmned+TKE4JmnbhSnWuAKeHJ8XCte1i9m1uAaeGZ+KYdR6FU+NHnen0G+A7vFQAhvDcAlPBeAJDCqwOghVcFQAyvBoAaXgUAObw4QD3Nton4YtJFRuOSM8sFSvQiVE97D0RUGt8ISnjxBjRa2aZznP8EQAovDrB/mi8NBq5NjjaI6I0c9zpJtDtLNbXeIzoCXyHqzf4Kyn+Bv8dRixp0HZUGgGb/3JYBIJ+Oxt6sARrKyGtYA5BPR2Nv1gANZeQ1rAHIp6OxN2uAhjLyGtYA5NPR2NsHcBbZQaLMt8gAAAAASUVORK5CYII=" />
                    <el-image style="width: 20px; height: 20px" v-show="data.show == index"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB80lEQVR4Xu2XPU7DQBCFZxyUA3ACKmokrgGlLSUgQU0wokCCpCeuKEgsWqrEKCmgT01LBy0XgIIDhEEOihRFsfPj8exKO67jnfe+ebMTIzj+oOP+QQFoAhwnoCPgeAD0EtQR0BFwnICOgOMB0C2gI6Aj4DgBHQHHA6BbQEdAR8BxAiwj0Gg/7Xr4ewgAB+TBfXxdf+Hmenbb26tU8ITG9ANIo7h1/MpRgwVAGCWPAHQ6FYSAw06zFnAITM84j3o+Ag5mzyOgIG4eDYvWKAzgMkp2xkCf80K4ICwyn9biOr8wgFRM2O5/A8I2N4Qs82kdAmjEzfqD8QRMItrudxAhXCRm007lmQfEt+5Nbb+o+f8kMT0XUTIgIJ8DQq55gHegraDbCj44pLMBSMVwQJA0z5qAaTeKQJA2XwqATZNgwnxpANaFYMp8qQBWhWDSfOkAVoGQtTmA+bbP2hisWyCrSN7FmPEO66rLW5ciAJYlYU6gmHmREZg1t0ISRM2LA1iSBHHzRgBkQDBi3hiAyQdU1PM98Hyi8aha9Z7vrupfHP/t1z1D7BJcV5jU7xWAFGlb62gCbO2MlC5NgBRpW+toAmztjJQuTYAUaVvraAJs7YyULk2AFGlb62gCbO2MlC5NgBRpW+toAmztjJQuTYAUaVvr/AFkfdVBqkrLtgAAAABJRU5ErkJggg==" />
                    {{ v.post }}
                </div>
                <div class="table-cell">{{ v.site }}</div>
                <div class="table-cell">{{ v.salary }}</div>
                <div class="table-cell-operate">
                    <button class="table-cell-operate-btn" @click.stop="join(v.id)">我要加入</button>
                </div>
            </div>
            <div class="table-content-box" v-if="data.show == index">
                <div class="content-text">
                    <template v-for="t in v.texts">
                        <template v-if="t!=''">{{ t }}</template>
                        <template v-else><br></template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
let data = reactive({
    list: [
        {
            id: 1,
            post: "精算分析员",
            site: "北京/上海",
            salary: "15-18万",
            texts: [
                "职位描述：",
                "",
                "",
                "1. 工作内容",
                "",
                "⁃ 协助平台开发市场主要保险产品库",
                "",
                "⁃ 协助客户公司将原有精算模型移植到新平台",
                "",
                "⁃ 协助Excel模型点校验,",
                "",
                "⁃ 其他领导安排工作,",
                "",
                "",
                "2. 职位要求：,",
                "",
                "⁃ 本科及以上学历，精算相关专业,",
                "",
                "⁃ 熟练使用Excel和VBA",
                "",
                "⁃ 通过1-3门精算师考试",
                "",
                "⁃ 良好的沟通和团队协作能力、热爱技术、责任心强、能推动模型的落地使用",
                "",
                "",
                "3. 内容说明",
                "",
                "⁃ 工作地点：北京/上海",
                "",
                "⁃ 经验要求：0-2年工作经验",
                "",
                "⁃ 最低学历：本科",
                "",
                "⁃ 职位关键词：五险一金、双休日、带薪年假、弹性工作地点"
            ],
        },
        {
            id: 2,
            post: "精算分析师",
            site: "北京/上海",
            salary: "25-30万",
            texts: [
                '职位描述：'
                , '', '', 
                , '1. 工作内容'
                , ''
                , '⁃  协助平台开发标准精算模型库供广大用户使用'
                , ''
                , '⁃  协助客户公司将原有精算模型移植到新平台'
                , ''
                , '⁃  协助实现平台的云端部署，并实现模型运行自动化，并无缝融入数据上下游以及定⁃  价、财务和管控流程'
                , ''
                , '⁃  协助相关文档工作及线上、线下培训工作'
                , ''
                , '⁃  其他领导安排工作'
                , '', '',
                , '2. 职位要求：'
                , ''
                , '⁃  本科及以上学历，精算相关专业'
                , ''
                , '⁃  对产品定价、负债评估、内含价值及国际会计准则等中的至少两项有深厚的理解和实践经验'
                , ''
                , '⁃  熟练使用至少一款精算软件，如Prophet、RAFM等'
                , ''
                , '⁃  通过准精算师考试'
                , ''
                , '⁃  熟练使用Excel和VBA'
                , ''
                , '⁃  良好的沟通和团队协作能力、热爱技术、责任心强、能推动模型的落地使用'
                , '', ''
                , '3. 内容说明'
                , ''
                , '⁃  工作地点北京/上海'
                , ''
                , '⁃  经验要求：3-5年工作经验'
                , ''
                , '⁃  最低学历：本科'
                , ''
                , '⁃  职位关键词：五险一金、双休日、带薪年假、弹性工作地点'
            ],
        },
        {
            id: 3,
            post: "精算经理",
            site: "北京/上海",
            salary: "55-70万",
            texts: [
                '职位描述：',
                '', ''
                , '1. 工作内容'
                , ''
                , '⁃  负责平台开发标准精算模型库供广大用户使用'
                , ''
                , '⁃  负责客户公司将原有精算模型移植到新平台'
                , ''
                , '⁃  负责实现平台的云端部署，并实现模型运行自动化，并无缝融入数据上下游以及定价、财务和管控流程'
                , ''
                , '⁃  负责相关文档工作及线上、线下培训工作'
                , ''
                , '⁃  其他领导安排工作'
                , '', ''
                , '2. 职位要求：'
                , ''
                , '⁃  本科及以上学历，精算相关专业'
                , ''
                , '⁃  对产品定价、负债评估、内含价值及国际会计准则等均有深厚的理解和实践经验'
                , ''
                , '⁃  熟练使用至少一款精算软件，如Prophet、RAFM等'
                , ''
                , '⁃  获得精算师正会员资格'
                , ''
                , '⁃  良好的沟通和团队协作能力、热爱技术、责任心强、能推动模型的落地使用'
                , '', ''
                , '3. 内容说明'
                , ''
                , '⁃  工作地点：北京/上海'
                , ''
                , '⁃  经验要求：5-8年工作经验'
                , ''
                , '⁃  最低学历：本科'
                , ''
                , '⁃  职位关键词：五险一金、双休日、带薪年假、弹性工作地点'
            ],
        },
        {
            id: 4,
            post: "实习生",
            site: "北京/上海",
            salary: "按天计算",
            texts: [
                '职位名称：精算实习生'
                , ''
                , '工作地点：北京/上海'
                , ''
                , '经验要求：经验不限、在校/应届'
                , ''
                , '最低学历：本科'
            ],
        },
    ],
    show: 100
});
let open = (i: number) => {
    data.show = i == data.show ? 100 : i
}
let join = (id: any) => {

}
</script>

<style lang="scss" scoped>
.table {
    .table-row {
        padding: 10px;
        display: flex;
        line-height: 2;
        border-bottom: 1px solid #7a8795;

        .table-cell {
            font-size: 16px;
            color: #6d87a6;
            font-weight: 700;
            width: 220px;
            display: flex;
            align-items: center;
            text-align: center;
            flex-shrink: 0;
        }
    }

    .table-cell-row {
        color: #6d87a6;
        border-bottom: 1px solid #7a8795;

        .table-content-row:hover {
            background-color: #2f386b;
            color: #fff;
            cursor: pointer;
        }

        .table-content-row {
            padding: 10px;
            display: flex;
            line-height: 2;

            .table-cell {
                font-size: 16px;
                font-weight: 700;
                width: 220px;
                display: flex;
                align-items: center;
                text-align: center;
                flex-shrink: 0;
            }

            .table-cell-operate {
                width: 200px;
                text-align: center;

                .table-cell-operate-btn {
                    width: 100px;
                    height: 34px;
                    outline: none;
                    cursor: pointer;
                    border-radius: 20px;
                    border: 1px solid #cfd1d5;
                    text-align: center;
                    color: #6d87a6;
                    background-color: #fff;
                    font-size: 16px;
                }
            }
        }

        .table-content-box {
            padding: 0 30px 10px;
            color: #757678;
            line-height: 2;

            .content-text {
                font-size: 16px;
            }
        }
    }
}
</style>
