<template>
    <div id="contact" class="paragraph-left">
        <h1>Địa Điểm</h1>
        <p>89 Trần Văn Dư,P.13,Q.Tân Bình,TP.HCM</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0781057524996!2d106.64215351428717!3d10.805329861615396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752945af1e4587%3A0xe6607a649f8ee737!2zODkgVHLhuqduIFbEg24gRMawLCBQaMaw4budbmcgMTMsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1614053182377!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <p>Để đặt lịch hẹn xem phòng học hoặc đặt thuê phòng học, bạn đừng ngần ngại liên hệ theo thông tin bên dưới.</p>
        <form action="">
            <div class="name"><label for="">Họ Tên:</label></div>
            <input type="text" name="name" id="name">
            <div class="email"><label for="">Email:</label></div>
            <input type="email" name="email" id="email" placeholder="Vui lòng ghi địa chỉ email chính xác để chúng tôi có thể liên lạc với bạn và gửi lịch thuê phòng chi tiết.">
            <div class="sdt"><label for="">Điện Thoại</label></div>
            <input type="number" name="number" id="number">
            <div class="hour"><label for="">Thời gian muốn đặt lịch:</label></div>
            <input type="text" name="hour" id="hour" placeholder="Vui lòng ghi rõ thứ, ngày,tháng,khung giờ,số người tham dự,máy chiếu,TV,micro...">
            <div class="order"><button class="orderbtn">Đặt lịch</button></div>
        </form>
        
        
    </div>
</template>
<script>
export default {
    name: "PageContact",
    components: {

    },
    data() {
        return {
            
        }
    },
    created() {

    },
    methods : {

    },
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
input#name,input#email,input#number,input#hour {
    width: 100%;
    height: 33px;
}

form label {
    display: inline-block;
    margin-bottom: 1%;
    margin-top: 1%;
}
button.orderbtn {
    padding: 5px;
    margin-top: 2%;
}

</style>