<template>
    <th style="box-shadow: rgb(233, 233, 231) 0px 1px 0px inset, rgb(233, 233, 231) 0px -1px 0px inset; z-index: 3; background: white; padding-left: 5px; padding-right: 15px; height: 32px;">
        <div style="display: flex; align-items: center; height: 100%;">
            <div style="width: 51px;" 
                v-if="props.empty"
            ></div>

            <base-button v-else style="padding: 5px; margin-left: -5px;">
                <div style="font-size: 12px; font-weight: 400; color: rgba(55, 53, 47, 0.65); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    <div style="font-size: 14px;">
                        <slot></slot>
                    </div>
                </div>
            </base-button>
        </div>
    </th>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { defineProps } from "vue";

const props = defineProps({
    empty: {
        type: Boolean,
        default: false
    }
})
</script>