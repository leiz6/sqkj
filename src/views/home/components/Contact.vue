<template>
    <section class="contact">
        <div class="container">
            <h2 class="title">联系我们</h2>
            <div class="cont">
                <div class="part">
                    <div class="name">
                        深轻科技
                    </div>
                    <ul class="items">
                        <li>
                            邮箱：
                            contact@deepLightConnect.com
                        </li>
                        <li>
                            地址：
                            中国（上海）自由贸易试验区康桥东路1号16幢
                        </li>
                    </ul>
                    <div class="qrcodes">
                        <div class="qrcode">
                            <div class="qrcode-img">
                                <el-image style="width: 140px;height: 140px;"
                                    src="https://www.deeplightconnect.com/img/qrcode_portal.eb211814.png" />
                            </div>
                            <div class="qrcode-label">
                                手机浏览
                            </div>
                        </div>
                        <div class="qrcode">
                            <div class="qrcode-img">
                                <el-image style="width: 140px;height: 140px;"
                                    src="https://www.deeplightconnect.com/img/qrcode_Wechat.c6653f73.jpg" />
                            </div>
                            <div class="qrcode-label">
                                关注我们
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.contact {
    height: 565px;
    padding-bottom: 130px;
    background: #f9faff url('https://www.deeplightconnect.com/img/index-bg-02.9208a491.png') no-repeat center 180px;
    background-size: 1400px 500px;
    .container {
        width: 1080px;
        margin: 0 auto;

        .title {
            font-size: 30px;
            color: #374567;
            font-weight: 500;
            text-align: center;
            padding-bottom: 50px;
        }

        .cont {
            height: 410px;
            padding: 35px 50px;
            border: 1px solid #d4ddee;
            box-shadow: 0 4px 14px 1px rgb(22 44 119 / 9%);
            background: #fff;
            display: flex;
            justify-content: center;

            .part {
                width: 430px;
                height: 315px;
                padding: 35px 0 60px 0;

                .name {
                    color: #374567;
                    font-size: 18px;
                    padding-bottom: 20px;
                }

                .items {
                    height: 50px;
                    margin-bottom: 30px;
                    color: #7c8da7;

                    li {
                        font-size: 16px;
                        margin-bottom: 8px;
                    }
                }

                .qrcodes {
                    display: flex;
                    justify-content: space-around;

                        .qrcode {
                        width: 144px;
                        height: 191px;
                        margin-right: 30px;
                        color: #7c8da7;
                        .qrcode-img {
                            width: 140px;
                            height: 140px;
                            border: 2px solid #728bae;
                        }

                        .qrcode-label {
                            width: 144px;
                            height: 37px;
                            font-size: 29px;
                            padding-top: 5px;
                            text-align: center;
                        }
                    }
                }
            }
        }

    }
}</style>