<template>
  <div id="priceSum">
    <div class="row">
      <div class="col-3 col-s-12">
        <img src="@/assets/images/client/price/price-3.jpg" alt="" @click="addClickScliderImage">
        <h6>PHÒNG 4 NGƯỜI</h6>
        <h3>PHÒNG 4 NGƯỜI</h3>
        <div class="text-align">
          <p>Diện tích: 10m2</p>
          <p>Giá chuẩn: 100.000 VNĐ</p>
          <p>Giá 1 buổi: 300.000 VNĐ</p>
          <p>Giá 2 buổi: 600.000 VNĐ</p>
          <p>Giá cả ngày: 900.000 VNĐ</p>
          <p>Thiết bị: Bảng, Bút lông</p>
        </div>
        <div class="slider-image">
          <div class="icon cancel-btn" @click="removeClickScliderImage">
            <svg-icon icon-class="cancel" width="30%" />
          </div>
          <div class="slider container">
            <carousel @next="next" @prev="prev">
              <carousel-slide v-for="(slide,index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide">
                <img :src="slide" alt="" />
              </carousel-slide>
            </carousel>
          </div>
        </div>
      </div>
      <div class="col-3 col-s-12">
        <img src="@/assets/images/client/price/price-4.jpg" alt="" @click="addClickScliderImage">
        <h6>PHÒNG 12 NGƯỜI</h6>
        <h3>PHÒNG 12 NGƯỜI</h3>
        <div class="text-align">
          <p>Diện tích: 15m2</p>
          <p>Giá chuẩn: 150.000 VNĐ</p>
          <p>Giá 1 buổi: 450.000 VNĐ</p>
          <p>Giá 2 buổi: 900.000 VNĐ</p>
          <p>Giá cả ngày: 1.350.000 VNĐ</p>
          <p>Thiết bị: Bút lông,TV 21 inch</p>
        </div>
      </div>
      <div class="col-3 col-s-12">
        <img src="@/assets/images/client/price/price-5.jpg" alt="" @click="addClickScliderImage">
        <h6>PHÒNG 20 NGƯỜI</h6>
        <h3>PHÒNG 20 NGƯỜI</h3>
        <div class="text-align">
          <p>Diện tích: 25m2</p>
          <p>Giá chuẩn: 250.000 VNĐ</p>
          <p>Giá 1 buổi: 750.000 VNĐ</p>
          <p>Giá 2 buổi: 1.500.000 VNĐ</p>
          <p>Giá cả ngày: 2.250.000 VNĐ</p>
          <p>Thiết bị: Bảng, Bút lông,Máy Chiếu,Loa và Mic</p>
        </div>
      </div>
      <div class="col-3 col-s-12">
        <img src="@/assets/images/client/price/price-6.jpg" alt="" @click="addClickScliderImage">
        <h6>PHÒNG 30 NGƯỜI</h6>
        <h3>PHÒNG 30 NGƯỜI</h3>
        <div class="text-align">
          <p>Diện tích: 35m2</p>
          <p>Giá chuẩn: 350.000 VNĐ</p>
          <p>Giá 1 buổi: 1.100.000 VNĐ</p>
          <p>Giá 2 buổi: 2.200.000 VNĐ</p>
          <p>Giá cả ngày: 3.300.000 VNĐ</p>
          <p>Thiết bị: Bảng, Bút lông,Máy chiếu,Loa và Mic</p>
        </div>
      </div>
      <button @click="addCLickButton">
        Tư vấn ngay
      </button>
      <div class="script-content">
        <div class="icon cancel-btn" @click="removeCLickButton">
          <svg-icon icon-class="cancel" width="30%" />
        </div>
        <div class="row">
          <div class="col-3 col-s-3">
            <svg-icon icon-class="mail" width="30%" />
          </div>
          <div class="col-3 col-s-3">
            <svg-icon icon-class="zalo" widsth="30%" />
          </div>
          <div class="col-3 col-s-3">
            <svg-icon icon-class="phonne-call" width="30%" />
          </div>
          <div class="col-3 col-s-3">
            <svg-icon icon-class="messenger" width="30%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Carousel from '../../components/Client/Carousel'
  import CarouselSlide from '../../components/Client/CarouselSlide'
  export default {
    name: 'PagePriceSum',
    components: {
      Carousel,
      CarouselSlide
    },
    data() {
      return {
        slides: [
          'https://picsum.photos/id/237/600/350',
          'https://picsum.photos/id/236/200/350',
          'https://picsum.photos/id/235/200/350',
          'https://picsum.photos/id/234/200/350',
          'https://picsum.photos/id/233/200/350',
          'https://picsum.photos/id/232/200/350'
        ],
        visibleSlide: 0
      }
    },
    computed: {
      slideLen() {
        return this.slides.length
      }
    },
    created() {},
    methods: {
      addCLickButton() {
        const ScriptContent = document.querySelector('.script-content')
        ScriptContent.classList.add('active')
      },
      removeCLickButton() {
        const ScriptContent = document.querySelector('.script-content')
        ScriptContent.classList.remove('active')
      },
      addClickScliderImage() {
        const SliderImage = document.querySelector('.slider-image')
        SliderImage.classList.add('active')
      },
      removeClickScliderImage() {
        const SliderImage = document.querySelector('.slider-image')
        SliderImage.classList.remove('active')
      },
      next() {
        if (this.visibleSlide >= this.slideLen - 1) {
          this.visibleSlide = 0
        } else {
          this.visibleSlide++
        }
      },
      prev() {
        if (this.visibleSlide <= 0) {
          this.visibleSlide = this.slideLen - 1
        } else {
          this.visibleSlide--
        }
      }
    }
  }

</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
  /* slider */
  .slider-image {
    display: none;
    background: #46739bea;
    left: 0;
    position: fixed;
    width: 100%;
    height: 200vh;
    top: 0%;
    z-index: 99999;
  }

  .slider-image.active {
    display: block;
  }

  .slider-image .icon.cancel-btn {
    width: 100%;
    display: inline-block;
  }

  .slider-image .icon.cancel-btn img {
    width: 4% !important;
    float: right;
    padding-right: 3%;
  }

  /* Position the image container (needed to position the left and right arrows) */
  .slider.container {
    position: relative;
    width: 1140px;
    margin: 0 auto;
  }

  .slider img {
    width: 100%;
    height: 400px;
  }

  /* end slider */

  #priceSum .row .col-3 img {
    width: 100%;
  }

  #priceSum .row .col-3 img {
    width: 100%;
  }

  #priceSum .row .col-3 h6 {
    text-align: center;
  }

  #priceSum .row .col-3 h3 {
    text-align: center;
  }

  .text-align {
    text-align: center;
  }

  #priceSum .row .col-3 h6 {
    text-align: center;
  }

  #priceSum .row .col-3 h3 {
    text-align: center;
  }

  .text-align {
    text-align: center;
  }

  #priceSum {
    width: 100%;
    height: 700px;
  }

  #priceSum .row .col-3 {
    position: relative;
    height: 599px;
    margin-right: 2%;
    margin-top: 2%;
    width: 23%;
    display: inline-block;
    float: left;
    background-color: white;
  }

  .script-content .row .col-3 img {
    width: 50% !important;
    margin-left: 30%;
  }

  .script-content .row .col-3 {
    height: 30px !important;
  }

  .script-content {
    z-index: 100;
    top: 830px;
    left: 40%;
    position: absolute;
    border: 1px solid rgb(218, 183, 183);
    display: none;
    margin-top: -10%;
    width: 20%;
    background: white;
    height: 50px;
    box-sizing: border-box;
  }

  .icon.cancel-btn {
    box-sizing: border-box;
    padding-top: 3%;
    margin-left: 2%;
  }

  #priceSum .row {
    position: relative;
  }

  #priceSum .row button {
    position: absolute;
    top: 650px;
    left: 40%;
    border-radius: 16px;
    width: 20%;
    padding: 2%;
    background: #0066ff;
    color: white;
    border: none;
  }

  #priceSum .col-3 {
    position: relative;
  }

  #priceSum .script-content.active {
    z-index: 100;
    display: flex;
  }

  @media only screen and (max-width: 868px) {
    .slider img {
      width: 100%;
      height: 400px;
    }

    #priceSum {
      width: 100%;
      height: 3400px;
    }

    #priceSum .col-3.col-s-12 {
      width: 100%;
      height: 800px;
      margin-bottom: 2%;
    }

    #priceSum .row {
      position: relative;
    }

    #priceSum .row button {
      top: 3400px;
      left: 40%;
    }

    .script-content {
      z-index: 100;
      top: 3500px;
      left: 40%;
      position: absolute;
      border: 1px solid rgb(218, 183, 183);
      display: none;
      margin-top: -10%;
      width: 20%;
      background: white;
      height: 50px;
      box-sizing: border-box;
    }

    .script-content .col-3.col-s-3 img {
      margin-top: 30% !important;
      width: 60% !important;
    }

    /* //slide */
    .carousel {
      margin: 1%;
      position: relative;
      width: 60%;
      height: 400px;
      overflow: hidden;
    }

    button {
      z-index: 100000;
      position: absolute;
      height: 100px;
      width: 100px;
      top: 30%;
      background-color: rgba(0, 0, 0, 0.8);
      border: none;
      color: white;
    }

    button:focus,
    button:hover {
      outline: none;
      cursor: pointer;
    }

    .next {
      right: 0;
    }

    .prev {
      left: 0;
    }
  }

</style>
