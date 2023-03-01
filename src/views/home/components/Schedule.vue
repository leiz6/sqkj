<template>
    <section class="schedule">
        <div class="container">
            <h2 class="title">时间规划</h2>
            <div class="content">
                <div class="content-box" @mousedown="(e)=>{press(e)}" @mouseup="uplift" ref="box">
                    <div class="content-box-one" v-for="item in data.list">
                        <div class="text">{{ item.text[0] }}</div>
                        <div class="text">{{ item.text[1] }}</div>
                        <div class="date">{{ item.date }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang='ts' setup>
import { keys } from "lodash";
import { reactive, ref } from "vue"

const box = ref()
const data = reactive({
    list: [
        { id: 1, text: ["计算引擎", "之基石测试版"], date: "2021.4" },
        { id: 1, text: ["计算引擎", "之基石测试版"], date: "2021.4" },
        { id: 1, text: ["计算引擎", "之基石测试版"], date: "2021.4" },
        { id: 1, text: ["计算引擎", "之基石测试版"], date: "2021.4" },
        { id: 1, text: ["计算引擎", "之基石测试版"], date: "2021.4" },
        { id: 1, text: ["计算引擎", "之基石测试版"], date: "2021.4" },
        { id: 1, text: ["计算引擎", "之基石测试版"], date: "2021.4" },
    ],
    isPress:false
})
const press = (e:any) => {
    console.log(box.value,e.offsetX);
    


}
const uplift = () => {

}

</script>

<style lang='scss' scoped>
.schedule {
    background: url('https://www.deeplightconnect.com/img/schedule-bg.d6bd2b4c.png') no-repeat 50%;
    background-size: cover;
    height: 260px;
    padding-top: 60px;

    .container {
        width: 1080px;
        height: 260px;
        margin: 0 auto;
        .title {
            width: 1080px;
            height: 40px;
            text-align: center;
            color: #374567;
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 50px;
        }

        .content {
            width: 1080px;
            height: 170px;
            position: relative;
            overflow: hidden;
            .content-box {
                width: 1620px;
                height: 170px;
                display: flex;
                position: absolute;

                .content-box-one {
                    width: 240px;
                    height: 130px;
                    position: relative;
                    padding-left: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .text {
                        color: #7c8da7;
                        font-size: 16px;
                    }

                    .date {
                        color: #374567;
                        font-size: 34px;
                        font-weight: 500;
                    }
                }

                .content-box-one::before {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 7px;
                    height: 130px;
                    content: "";
                    display: block;
                    width: 5px;
                    background: linear-gradient(180deg, #99a2d2, #323a6f);
                }
            }
        }
    }

}
</style>