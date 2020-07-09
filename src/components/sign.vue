<template>
  <div id="sign">
    <span class="sign-header" v-show="handle">
      标识： {{handle}}
    </span>
    <group title="数据清单" label-width="6em" v-show="baseData.length > 0">
      <template v-for="item in baseData">
        <cell
          :key="item.type"
          :title="$t('dict.' + item.type)"
          :value="item.data.value"
        ></cell>
      </template>
    </group>
    <group title="动态属性" v-show="attributesData.length > 0">
      <template v-for="item in attributesData">
        <cell :key="item.$index" :title="item.name">
            {{item.value}}
        </cell>
      </template>
    </group>
    <group title="企业信息" v-show="companyInfoData.length > 0" label-width="8em">
      <template v-for="item in companyInfoData">
        <cell :key="item.type" :title="item.name" :value="item.value">
        </cell>
      </template>
    </group>
    <template v-for="item in corePartData">
      <group :key="item.$index" title="核心部件">
        <template v-for="_item in item">
          <cell :key="_item.$index" :title="_item.name" :value="_item.value"></cell>
        </template>
      </group>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import { Group, Cell, Alert, AlertModule } from 'vux'

export default {
  name: 'sign',
  components: {
    Cell,
    Group,
    Alert
  },
  data () {
    return {
      handle: this.$route.query.handle,
      sign: this.$route.query.sign || 'iot',
      baseData: [],
      companyInfoData: [],
      attributesData: [],
      corePartData: []
    }
  },
  mounted () {
    this.locale = this.$i18n.locale = `zh-${this.sign === 'hanyun' ? 'h' : 'i'}`
    document.title = '汉云标识解析二级节点'
    axios
      .get('/identityv2/data/detail', {
        params: {
          handle: this.handle
        }
      })
      .then(res => {
        if (res.data.status !== 1) {
          AlertModule.show({
            title: '温馨提示',
            content: res.data.message,
            onShow () {
            },
            onHide () {
            }
          })
          return
        }
        const [result, baseData] = [res.data.data.value, []]
        result.forEach(item => {
          const sDict = {
            attributes: 'attributesData',
            companyInfo: 'companyInfoData',
            corePart: 'corePartData'
          }
          const k = sDict[item.type]
          if (k) {
            try {
              let val = Buffer.from(
                item.data.value,
                'base64'
              ).toString()
              val = JSON.parse(unescape(val))
              this[k] = val
            } catch (e) {
              this[k] = []
            }
          } else {
            baseData.push(item)
          }
        })
        this.baseData = baseData
      })
  }
}
</script>
<style scoped>
html {
    background-color: #001629;
    color: #FFF;
}
body {
    background-color: #001629;
    margin: 0 0 8px 0 !important;
}
.weui-cell /deep/ .vux-cell-bd p {
  margin: 0;
}
#sign /deep/ .weui-cells__title{
  font-size: 17px;
  color: #fff;
  padding-right: 12px;
  padding-left: 12px;
  margin-top: 16px;
  margin-bottom: 0;
}
#sign /deep/ .weui-cells{
    background: transparent;
}
#sign /deep/ .weui-cell {
  font-size: 16px;
  color: #fff;
  background: #03213C;
  border: none;
  margin: 12px 12px;
  padding: 12px;
  border-radius: 4px;
}
#sign /deep/ .weui-cell__ft {
  font-size: 14px;
  color: rgba(255, 255, 255, .7);
  word-break: break-all;
}
#sign /deep/ .weui-cells::before,
#sign /deep/ .weui-cell::before,
#sign /deep/ .weui-cells::after {
  border: none;
}
.sign-header{
    width: calc(100% - 24px);
    padding: 7px 12px;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    border-top: 1px solid #00B7FF;
    border-bottom: 1px solid #00B7FF;
    background: rgba(0, 183, 255, .3);
    word-break: break-all;
}
</style>
