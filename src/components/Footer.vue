<template>
    <div class="footer">
        <div class="logo">
            <el-image style="width: 221px;height: 83px;" src="https://www.deeplightconnect.com/img/logo-2.feb312bf.png"></el-image>
        </div>
        <div class="info">
            <div class="contact">联系我们：contact@deeplightconnect.com</div>
            <div class="copyright">©2021 深轻科技 | 沪ICP备2020037756号</div>
        </div>
    </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.footer {
    width: 100%;
    height: 275px;
    background: url('https://www.deeplightconnect.com/img/footer-bg.34fb4448.png') no-repeat 50%;
    
    background-size: cover ;
    .logo{
        padding: 73px 0 40px 0;
        display: flex;
        justify-content:center;
    }
    .info{
        color: #848484;
        background-color: #212121;
        padding: 16px 0;
        text-align: center;
        height: 48px;
        .contact{
            font-size: 16px;
            margin-bottom: 8px;
        }
    }
}
</style>