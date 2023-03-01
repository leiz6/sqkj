<template>
    <div class="header">
        <div class="header-ad">
            <el-image style="width: 100%; height: 100%" src="https://www.deeplightconnect.com/img/b-04.d020ce71.jpg"
                fit="cover" />
        </div>
        <div class="article">
            <div class="article-left">
                <div class="left-text">
                    天使客户体验季
                </div>
                <ul class="left-ul">
                    <li v-for=" i in data.exlist">
                        <span>&#9745</span>
                        {{ i.text }}
                    </li>
                </ul>
                <div class="left-btn">
                    <button>立即试用</button>
                </div>
            </div>
            <div class="article-right">
                <div class="title">
                    <div class="title-zn">
                        重塑可能
                    </div>
                    <div class="title-en">
                        Reshape Possible
                    </div>
                </div>
                <div class="title-image">
                    <el-image style="width: 100%; height: 100%"
                        src="https://www.deeplightconnect.com/img/%E4%BC%97%E5%9B%BE%E7%BD%91www.ztupic.com.4a6e7a21.png"></el-image>
                    <div class="swiper-image">
                        <el-image v-show="data.bannerNum == index" v-for="(item, index) in data.bannerImg"
                            style="width: 100%; height: 100%" :src="item.src" :key="item.id" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { onMounted, onUnmounted, reactive } from 'vue';

let data = reactive({
    exlist: [
        { id: 1, text: "开发更敏捷" },
        { id: 2, text: "流程更可控" },
        { id: 3, text: "产品更好卖" },
        { id: 4, text: "管理更精细" }
    ],
    bannerImg: [
        { id: 1, src: "https://www.deeplightconnect.com/img/one.1e19533d.png" },
        { id: 2, src: "https://www.deeplightconnect.com/img/two.22f866ad.png" },
        { id: 3, src: "https://www.deeplightconnect.com/img/three.99fec236.jpg" },
        { id: 4, src: "https://www.deeplightconnect.com/img/foure.316a1c95.jpg" },
        { id: 5, src: "https://www.deeplightconnect.com/img/five.98fe4fdf.png" }
    ],
    timer: 0,
    bannerNum: 0
})
onMounted(() => {
    data.timer = setInterval(() => {
        if(data.bannerNum==data.bannerImg.length-1){
            data.bannerNum = 0
        }else{
            data.bannerNum++
        }
    }, 5000)
})
onUnmounted(() => {
    clearInterval(data.timer)
})
</script>

<style lang='scss' scoped>
.header {
    height: 674px;
    width: 100%;
    display: flex;
    justify-content: center;

    .header-ad {
        width: 100%;
        height: 674px;
        font-size: 0;
        position: absolute;
        left: 0;
        top: 0;
    }

    .article {
        width: 1100px;
        height: 400px;
        padding-top: 100px;
        z-index: 2;
        display: flex;

        .article-left {
            width: 440px;
            height: 400px;

            .left-text {
                padding: 110px 0 20px 0;
                font-size: 50px;
                font-weight: 700;
                color: #fff;
            }

            .left-ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    width: 200px;
                    height: 40px;
                    font-size: 22px;
                    font-weight: 400;
                    color: #fff;
                    display: flex;
                    align-items: center;

                    span {
                        font-size: 34px;
                        margin-right: 10px;
                    }
                }
            }

            .left-btn {
                width: 440px;
                height: 80px;
                padding-top: 140px;

                button {
                    width: 200px;
                    height:50px;
                    background: #fff;
                    border-radius: 30px;
                    border: none;
                    outline: none;
                    font-size: 26px;
                    color: #395ff5;
                    line-height: 50px;
                }
            }
        }

        .article-right {
            width: 660px;

            .title {
                width: 590px;
                height: 80px;
                padding-left: 70px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .title-zn {
                    font-size: 42px;
                    margin-left: 10px;
                    color: #fff;
                    height: 55px;
                    line-height: 55px;
                }

                .title-en {
                    font-size: 42px;
                    margin-left: 50px;
                    color: #fff;
                    opacity: .3;
                    word-break: keep-all;
                    white-space: nowrap;
                }
            }

            .title-image {
                position: relative;

                .swiper-image {
                    z-index: 2;
                    position: absolute;
                    top: 20px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 510px;
                    height: 320px;
                    margin: 0 auto;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

    }
}
</style>