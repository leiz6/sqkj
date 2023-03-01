<template>
    <div class="top-bar" v-if="!route.meta.topbarwhite" :style="data.bgcShow ? { background: 'rgb(56, 96, 244)' } : ''">
        <div class="layout">
            <h1 class="logo">
                <router-link to="/"><el-image style="width: 140px;height:40px ;"
                        src="https://www.deeplightconnect.com/img/logo.d6328c2a.png" /></router-link>
            </h1>
            <div class="main-nav">
                <ul>
                    <li v-for="item in data.navlist">
                        <RouterLink :to="item.id" :class="item.id" :key="item.id">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="main-login">
                <router-link to="/login">登录</router-link>
            </div>

        </div>
    </div>
    <div class="top-bar-white" v-if="route.meta.topbarwhite">
        <div class="layout">
            <h1 class="logo">
                <router-link to="/"><el-image style="width: 140px;height:40px ;"
                        src="https://www.deeplightconnect.com/img/logo-blue.b50533f0.png" /></router-link>
            </h1>
            <div class="main-nav">
                <ul>
                    <li v-for="item in data.navlist">
                        <RouterLink :to="item.id" :class="item.id" :key="item.id">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="main-login">
                <router-link to="/login">登录</router-link>
            </div>

        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted, onUnmounted } from 'vue';
import { useRoute } from "vue-router"

let route = useRoute()
onMounted(() => {
    window.addEventListener("scroll", windowScroll); //监听页面滚动
})
onUnmounted(() => {
    window.removeEventListener("scroll", windowScroll)
})
function windowScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    data.bgcShow = scrollTop ? true : false
}
let data = reactive({
    navlist: [
        { id: "product", name: "产品介绍" },
        { id: "consultation", name: "深轻咨询" },
        { id: "partner", name: "合作计划" },
        { id: "about", name: "关于深轻" },
        { id: "join", name: "加入我们" },
    ],
    bgcShow: false,

})


</script>

<style lang='scss' scoped>
.top-bar {
    a {
        color: #fff;
    }

    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    // background: rgb(56, 96, 244);
    .layout {
        width: 1100px;
        height: 67px;
        padding: 0 10px;
        margin: 0 auto;
        display: flex;

        .logo {
            margin-right: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                font-size: 0;
            }
        }

        .main-nav {
            flex: 1;

            ul {
                display: flex;

                li {
                    width: 90px;
                    height: 65px;
                    margin-right: 24px;

                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        line-height: 65px;
                        font-size: 16px;

                    }

                    a:hover {
                        border-bottom: 2px #fff solid;
                    }
                }


            }



        }

        .main-login {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            line-height: 14px;
            margin-left: 20px;
            color: #fff;
        }
    }
}

.top-bar-white {
    a {
        color: #3860f4;
    }

    width: 100%;
    border-bottom: 2px solid #dde4f2;
    margin-bottom: 50px;

    .layout {
        width: 1100px;
        height: 67px;
        padding: 0 10px;
        margin: 0 auto;
        display: flex;

        .logo {
            margin-right: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
                font-size: 0;
            }
        }

        .main-nav {
            flex: 1;

            ul {
                display: flex;

                li {
                    width: 90px;
                    height: 65px;
                    margin-right: 24px;

                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        line-height: 65px;
                        font-size: 16px;

                    }
                }


            }



        }

        .main-login {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            line-height: 14px;
            margin-left: 20px;
        }
    }
}</style>