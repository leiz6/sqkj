<template>
    <div class="messages">
        <div class="messages-box" v-show="data.showBox">
            点击按钮，欢迎您的留言～
        </div>
        <div class="messages-button" @mouseover="mouseover" @mouseout="mouseout" @click="changeDialog">
            <div class="icon"><svg t="1677587968575" class="icon" style="width: 20px;height: 20px;" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2608" id="mx_n_1677587968575" width="32"
                    height="32">
                    <path
                        d="M257.706667 752a40.490667 40.490667 0 0 0 5.973333-0.512l168.234667-29.482667a9.813333 9.813333 0 0 0 5.290666-2.816l423.893334-423.893333a9.941333 9.941333 0 0 0 0-14.08l-166.186667-166.314667a9.898667 9.898667 0 0 0-7.125333-2.901333 9.898667 9.898667 0 0 0-7.082667 2.901333l-423.893333 423.893334a10.154667 10.154667 0 0 0-2.816 5.290666l-29.482667 168.234667a33.877333 33.877333 0 0 0 33.194667 39.68z m67.413333-174.421333l362.666667-362.581334 73.301333 73.301334-362.666667 362.581333-88.917333 15.701333 15.616-88.96z m554.88 258.432H144a32 32 0 0 0-32 32v35.968c0 4.437333 3.584 8.021333 8.021333 8.021333h784a8.021333 8.021333 0 0 0 7.978667-8.021333v-35.968a32 32 0 0 0-32-32z"
                        fill="#395ff5" p-id="2609"></path>
                </svg></div>
            <div class="text">留言</div>
        </div>
    </div>
    <div class="messages-pop" v-show="data.dialogShow">
        <div class="input-box">
            <div class="title">
                留言
            </div>
            <div class="boxicon">
                <svg t="1677591090844" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="2283" width="20" height="20">
                    <path
                        d="M851.416 217.84l-45.256-45.248L512 466.744l-294.152-294.16-45.256 45.256L466.744 512l-294.152 294.16 45.248 45.256L512 557.256l294.16 294.16 45.256-45.256L557.256 512z"
                        fill="#777777" p-id="2284"></path>
                </svg>
            </div>
            <el-input v-model="data.textarea" resize="none" input-style="width: 430px;height: 180px;"
                style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin:80px auto;" type="textarea"
                placeholder="感谢关注深轻，您希望工作中哪些方面提质增效，请告诉我们！" />
            <div class="boxbtn">
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="sure"
                    style="background-color: #395ff5;border: #395ff5 1px soild;">确定</el-button>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive } from "vue"
import { ElMessage } from 'element-plus'
const data = reactive({
    showBox: false,
    textarea: '',
    dialogShow: false
})
const changeDialog = () => {
    data.dialogShow = !data.dialogShow
}
const cancel = () => {
    data.dialogShow = false
    data.textarea = ''
}
const sure = () => {
    if (data.textarea) {
        data.dialogShow = false
        data.textarea = ''
    } else {
        ElMessage('您还没留言,请留言')
    }
}
const mouseover = () => {
    data.showBox = true
}
const mouseout = () => {
    data.showBox = false
}
</script>

<style lang='scss' scoped>
.messages {
    width: 330px;
    height: 85px;
    position: fixed;
    right: 4px;
    bottom: 70px;
    z-index: 100;

    .messages-button {
        width: 60px;
        height: 60px;
        float: right;
    }

    .messages-box {
        width: 232px;
        height: 60px;
        float: left;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: #395ff5;
        font-size: 16px;
        position: relative;
        line-height: 60px;
    }

    .messages-box:after {
        left: 100%;
        top: 50%;
        margin-top: -7px;
        margin-left: -10px;
        background-color: #fff;
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        transform: rotate(45deg)
    }

    .messages-button {
        color: #395ff5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        cursor: pointer;
    }

    .messages-box,
    .messages-button {
        box-shadow: 0 0 8px 0 rgb(57 95 245 / 16%);
        background-color: #fff;
        border-radius: 5px;
        margin-top: 12px;
        margin-bottom: 13px;
    }
}

.messages-pop {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .4);

    .input-box {
        width: 550px;
        height: 350px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;

        .title {
            height: 50px;
            border-bottom: 1px solid #ddd;
            font-size: 21px;
            line-height: 50px;
            text-align: center;
        }

        .boxicon {
            width: 20px;
            height: 20px;
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
        }

        .boxbtn {
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
    }
}
</style>