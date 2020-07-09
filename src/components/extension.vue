<template>
  <div id="extension">
    <div class="extension-header">
      <img src="/static/t-header.png" class="img"/>
      <div class="header-text">
          工程机械全生命周期<br/>
          数字化管理和运维教学
      </div>
    </div>
    <div class="class-header">
        工程机械全生命周期数字化运维网络学习中心
        <div class="class-jdec">
            课程数量: {{videoList.length || 0}}节
            &nbsp;&nbsp;&nbsp;&nbsp;
            课程时间: 98分钟
        </div>
    </div>
    <template v-for="item in videoList">
        <div :key="item.id" class="class-item">
            <div class="class-item-inner">
                <video :src="item.url" class="class-video" controls="controls" :poster="item.poster"/>
                <div class="class-info-box">
                    <div class="class-info-title">{{item.title}}</div>
                    <div class="class-info-name">{{item.name}}</div>
                    <div class="class-info-dec">
                        <div class="label-parent">
                            <div class="label">
                                {{item.dec}}
                            </div>
                        </div>
                    </div>
                    <div class="class-info-operation">
                        <div>
                            <img src="/static/cc_02.png"/>
                            {{item.collection}}
                        </div>
                        <div>
                            <img src="/static/like.svg"/>
                            {{item.likes}}
                        </div>
                        <div>
                            <img src="/static/xx_01.png"/>
                            {{item.likes}}
                        </div>
                    </div>
                </div>
                <div class="class-item-more"></div>
            </div>
        </div>
    </template>
    <div class="extension-footer">
      <img src="/static/t-footer.png" class="img"/>
      <div class="footer-text">
          更多课程学习<br/>
          敬请期待！
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'extension',
  components: {
  },
  data () {
    return {
      videoList: [{
        id: '001',
        title: '实操课程01:',
        name: '602摊铺机维护',
        dec: 'RP602摊铺机介绍、操作介绍、安装使用以及各环节注意事项的教学说明。',
        collection: '3W',
        likes: '5W',
        watch: '2.1W',
        url: 'https://ugcws.video.gtimg.com/uwMROfz2r5zAoaQXGdGnCmdfhzm34jfw00YM73ftLJECfOsG/w31128rtj4e.m701.mp4?sdtfrom=v5010&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=327705F43524D1F021BDBCA5A58A04582E247239A062229DC0CC6083C6983F5AAAA3352717C46CC76EE1572E011280C626BE2EF927719A77F3E8614D08EABF790CDA9B24345E17876CAAFD7CB224024FBBFD439DD5007A6C2ED9C299C0EDE758CAD77C3B447279A4CF306B91CB07E461A91E38A4915DF62DBDEED259585972A2&platform=2',
        poster: 'http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0'
      }, {
        id: '002',
        title: '实操课程02:',
        name: '装载机变速箱拆装',
        dec: '装载机变速箱拆解、安装的全过程逐步视频解读。',
        collection: '3W',
        likes: '5W',
        watch: '2.1W',
        url: 'https://ugcws.video.gtimg.com/uwMROfz2r5zAoaQXGdGnCmdfDmYna7ygaG2OUd6NfjMPlQva/s3112chqeal.mp4?sdtfrom=v1104&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=8C4A39523CA9769448D67A09FBDF6684B3BC3157435BF47A344C4CBD87EADABC6FB41AB9075B76701B544CE8AABB1A347F79A2B447D0BEBE75C085CF0D370FE5EA2FF2CAE6F1C4E7BAD97EBE0B2AA15791D3DB3B0D1170C855973FE12724AAC03D2DC8D8137EEB558984560295CFE98DA2E2C0EF63B8B3C86E22210C54A1B40A#t=60',
        poster: 'http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0'
      }, {
        id: '003',
        title: '理论课程03:',
        name: '挖掘机传动',
        dec: '挖掘机终传动的作用、机械结构、组成单元、安装位置、工作机理的视频教学。',
        collection: '3W',
        likes: '5W',
        watch: '2.1W',
        url: 'https://ugcws.video.gtimg.com/uwMROfz2r5zAoaQXGdGnC2dfJ6nM3DInWQqp2axRinGnB-kO/w31128rtj4e.p701.1.mp4?sdtfrom=v1104&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=1D5740B3F60A851E43DA2752E8E3EED37810D55DBC7D853261CA53CBBFBCEBF7FF75FD2B0260F3FF649DD9B2851A6416D51E9D1D5DB2EFEB5CFEE8E48C4E931564D2637BE5A2C0E4B263380A2AF55954699CF22A3FF4EB26D8AEDEE59736AA82AFCA305CDD1EF8552014A0ABBBF883D87797EBD253CEB96B5F5FDC3659F676C8',
        poster: 'http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0'
      }, {
        id: '004',
        title: '理论课程04:',
        name: '挖掘机主泵教学',
        dec: '通过对液压挖掘机的主要部件的切削模型，结合作业、工况学习主要部件的结构技能的视频教学。',
        collection: '3W',
        likes: '5W',
        watch: '2.1W',
        url: 'https://ugcbsy.qq.com/uwMROfz2r5zAoaQXGdGnC2dfDma7NyshNhpHvcEisM-VRrjn/o3112q6i2kt.mp4?sdtfrom=v1104&guid=cc9e07853cb87afa18ad6a425136efb5&vkey=D5223E7D0CD66400654DB55ED03EBD283FAFBF390F86F1B91CCF383077253ABEE78779917974F7DFC60E4626E2A4EF375ACB289E4DF2C5A03F5FE0CF54AFE63A98EC29ADACF0AB86389ADEE6942A916C51E86EB1350EB08BCDE648EAF3C436F385C19F5EAD8F86F3E2260D1FE0836C327B51DF1D4195C2043524B426DB77764E',
        poster: 'http://shp.qpic.cn/qqvideo_ori/0/w31128rtj4e_496_280/0'
      }]
    }
  },
  mounted () {
    document.title = '工程机械全生命周期'
  }
}
</script>
<style scoped>
#extension {
  background-color: #fff;
  color: rgba(0, 0, 0, .65);
}

.img {
  width: 100%;
}

.extension-header{
  width: 100%;
  padding: 0;
  display: inline-block;
  font-size: 1.4rem;
  display: flex;
  position: relative;
}

.header-text{
  position: absolute;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 2.8rem;
  right: 10%;
  top: 35%;
}
.extension-footer {
  width: 100%;
  padding: 0;
  position: relative;
  bottom: 0;
  display: flex;
}

.footer-text{
  position: absolute;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 2.8rem;
  right: 20%;
  top: 25%;
}

.class-header {
    padding: 2.4rem 2.4rem 0 2.4rem;
    text-align: center;
    line-height: 3.2rem;
    color: #000;
    font-size: 1.6rem;
}

.class-jdec {
    font-size: 1.2rem;
}

.class-item {
    margin: 1.2rem 2.4rem;
    background: #8FB8EC;
    padding: 1.2rem;
    border-radius: .8rem;
    position: relative;
}
.class-item::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: .8rem;
    background: #8FB8EC;
    z-index: 2;
}
.class-item-inner {
    position: relative;
    border: .1rem solid #F8F9FE;
    padding: 1.2rem;
    display: flex;
}
.class-item-inner::before {
    content: ' ';
    position: absolute;
    top: -.7rem;
    left: -.7rem;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: #F8F9FE;
    z-index: 2;
}
.class-item-more {
    position: absolute;
    top: 0;
    right: 0;
    height: 2.2rem;
    width: 4rem;
}
.class-item-more::before, .class-item-more::after {
    content: ' ';
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #1E72D5;
    position: absolute;
    top: .4rem;
}
.class-item-more::before{
    left: .6rem;
}
.class-item-more::after {
    right: .6rem;
}
.class-item:nth-child(even) {
    background: #F6F6F6;
}
.class-item:nth-child(even)::before {
    background: #F6F6F6;
}
.class-item:nth-child(even) .class-item-inner {
    border: .1rem solid #88DEFE;
}
.class-item:nth-child(even) .class-item-inner::before {
    background: #88DEFE;
}
.class-video {
    width: 45%;
    flex: 0 0 45%;
    object-fit: contain;
    background: linear-gradient(90deg, #0094CA, transparent);
    height: 11rem;
}
.class-item:nth-child(even) .class-video {
    background: linear-gradient(90deg, transparent, #1A80BE);
}
.class-info-box {
    flex: 0 0 calc(55% - 1.2rem);
    padding: 0 0 0 1.2rem;
    position: relative;
}
.class-info-title {
    font-size: 1.6rem;
    margin-bottom: .4rem;
    color: #005094;
    /* font-weight: bold; */
}
.class-info-name {
    font-size: 1.3rem;
    color: #494642;
    /* font-weight: bold; */
}
.class-info-dec {
    /* font-size: 12rem; */
    margin-top: .4rem;
}
.label-parent {
    display:table;
    width: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.label {
    display: table-cell;
    vertical-align: middle;
    font-size: 1.4rem;
    color: #000;
}

.class-info-operation {
    display: flex;
    font-size: 1.2rem;
    color: #000;
    position: absolute;
    width: 100%;
    bottom: .4rem;
}
.class-info-operation > div {
    flex: 1;
}
.class-info-operation > div img {
    width: 1.2rem;
    height: 1.2rem;
}
</style>
