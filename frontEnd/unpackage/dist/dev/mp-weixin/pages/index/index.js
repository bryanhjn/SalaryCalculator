"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "我的小程序跑起来辣！",
      calendarJson: {}
    };
  },
  onLoad() {
  },
  methods: {
    getCalendar() {
      var currentDate = /* @__PURE__ */ new Date();
      var yearAndMonth = currentDate.getFullYear() + "年" + (currentDate.getMonth() + 2) + "月";
      console.log("yearAndMonth:", yearAndMonth);
      common_vendor.index.request({
        url: "https://opendata.baidu.com/api.php?query=" + yearAndMonth + "&resource_id=39043&format=json&tn=wisetpl",
        success: (result) => {
          console.log("result:", result.data);
          this.calendarJson = result.data;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.title),
    b: common_vendor.o(($event) => $options.getCalendar()),
    c: $data.calendarJson.status == 0
  }, $data.calendarJson.status == 0 ? {
    d: common_vendor.t($data.calendarJson.data[0].almanac)
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/miniProgram/Projects/Calculator/frontEnd/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
