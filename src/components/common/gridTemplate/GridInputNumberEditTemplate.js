import InputNumber from "../InputNumber";
import Vue from "vue";

export default function gridInputNumberTemplate(
  field,
  options = {
    allowDot: false,
    allowMinus: true,
    align: 'right',
    max: 9999999999999,
    min: -9999999999999,
    useCommonStyles: true
  }
) {
  return {
    template: Vue.component("gridInputNumberTemplate", {
      components: { InputNumber },
      template: `<input-number
        v-model="data[field]"
        style='background: transparent; width: 100%'
        :id="field"
        :allow-dot="allowDot"
        :allow-minus="allowMinus"
        :name="field"
        :prop-max-length="options.maxLength"
        :prop-max-under-dot-length="options.maxUnderDotLength"
        :min="options.min ?? -9999999999999"
        :max="options.max ?? 9999999999999"
        :align="options.align"
      />`,
      data() {
        return {
          field: field,
          options: options,
          allowDot: options.allowDot || false,
          allowMinus: options.allowMinus || true,
          data: {
            data: {}
          }
        };
      }
    })
  };
}
