<template>
  <button class="q-button" :class="btnClass" @click="$emit('click',$event)">
    <!-- <lwq-icon :icon="icon" class="icon" v-if="icon && !loading"></lwq-icon> -->
    <!-- <lwq-icon icon="jiazai" class="icon" v-if="loading"></lwq-icon> -->
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "lwq-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["primary", "success", "waring", "danger", "info"].includes(type)
        ) {
          console.error(
            "type的类型必须为" +
              ["primary", "success", "waring", "danger", "info"].join("、")
          );
        }
        return true;
      },
      icon: {
        type: String,
      },
      iconPosition: {
        type: String,
        default: "left",
        validator(val) {
          if (val && !["left", "right"].includes(val)) {
            console.error("iconPosition属性必须为" + "left|right");
          }
          return true;
        },
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
  },
  mounted(){
    console.log('11', this.loading)
    console.log('11', this.type)
    console.log('11', this.icon)
  },
  computed: {
    btnClass() {
      let className = [];
      if (this.type) {
        className.push(`q-button-${this.type}`);
      }
      if (this.iconPosition) {
        className.push(`q-button-${this.iconPosition}`);
      }
      return className;
    },
  },
};
</script>
<style lang="scss">
@import "../styles/common.scss";
$height: 42px;
$font-size: 14px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.q-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    outline: none;
  }
  @each $type,
    $color
      in(
        primary: $primary,
        success: $success,
        waring: $waring,
        danger: $danger,
        info: $info
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in(
        primary: $primary-hover,
        success: $success-hover,
        waring: $waring-hover,
        danger: $danger-hover,
        info: $info-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in(
        primary: $primary-active,
        success: $success-active,
        waring: $waring-active,
        danger: $danger-active,
        info: $info-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 4px;
  }
  .icon + span {
    margin-right: 4px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
  }
}
</style>