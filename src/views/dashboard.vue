<template>
  <div>
    <div class="wel-header">
      <div class="wel-info">
        <img :src="userInfo.avatar" alt="" class="wel-info-img" />
        <div class="wel-info-content">
          <div class="wel-info-title">
            {{ $t("dashboard.info") }}
          </div>
          <div class="wel-info-subtitle">
            {{ $t("dashboard.scaffoldInfo") }}
          </div>
        </div>
      </div>
    </div>
    <basic-container>
      <div>我是首页，一般显示大屏汇总信息</div>
    </basic-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dashboard",
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {},
  methods: {}
};
</script>

<style scoped="scoped" lang="scss">
.wel {
  &-header {
    padding: 25px 40px;
    border-bottom: 1px solid #e8e8e8;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-info {
    display: flex;
    align-items: center;
    &-img {
      border-radius: 72px;
      display: block;
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &-content {
      position: relative;
      margin-left: 24px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
    &-title {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }
    &-subtitle {
      position: relative;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
  }
}
</style>
