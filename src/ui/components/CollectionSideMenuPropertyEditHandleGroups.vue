<template>
    <div style="box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px; padding-top: 6px; padding-bottom: 0px; margin-top: 6px;">
        <template
            v-for="group in property.groups"
            :key="group.id"
        >
            <div
                style="display: flex; font-weight: 500; color: rgba(55, 53, 47, 0.65); fill: rgba(55, 53, 47, 0.45); font-size: 12px; line-height: 120%; margin-top: 6px; margin-bottom: 8px; padding-right: 14px; padding-left: 14px; user-select: none;"
            >
                <div style="align-self: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ group.name }}</div>

                <div style="margin-left: auto;">
                    <base-button 
                        @click.stop="state.createNewOption = (state.createNewOption === group.name) ? '' : group.name"
                        style="height: 20px; width: 20px;"
                    >
                    <svg
                        :style="state.createNewOption === group.name ? 'transform: rotate(45deg);' : ''"
                        role="graphics-symbol" viewBox="0 0 16 16" class="plus" style="transition: transform .1s ease-in-out; width: 14px; height: 14px; display: block; fill: rgba(55, 53, 47, 0.45); flex-shrink: 0;"><path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path></svg>
                    </base-button>
                </div>
            </div>

            <div
                v-if="state.createNewOption === group.name"
                style="margin-top: 2px; margin-bottom: 8px; padding-top: 14px; padding-bottom: 14px; padding-right: 14px; padding-left: 14px; height: 20px; display: flex; align-items: center; border-radius: 6px; width: 100%; font-size: 14px;"
            >
                <div style="display: flex; width: 100%;">
                    <div class="xdoc-focusable-within" style="display: flex; align-items: center; width: 100%; font-size: 14px; line-height: 20px; padding: 3px 6px; position: relative; border-radius: 4px; box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px inset;cursor: text; height: 28px; background: rgba(242, 241, 238, 0.6);">
                        <input 
                            type="text" 
                            placeholder="Type a new option" 
                            style="font-size: inherit; line-height: inherit; border: none; background: none; width: 100%; display: block; resize: none; padding: 0px;"
                            @keydown.stop="handleCreateNewOption"
                            @input.stop=""
                        >
                    </div>
                </div>
            </div>

            <div style="margin: 0;">
                <!-- @click.stop="handleOptionEdit($event, option.id)"
                v-for="option in props.options" -->
                <!-- :key="option.id" -->
                <div 
                    v-for="optionId in group.optionIds"
                    :key="optionId"
                    style="display: flex; flex-direction: column;"
                >
                    <base-button style="margin-left: 4px; margin-right: 4px;">
                        <div style="display: flex; align-items: center; min-height: 28px; font-size: 14px; width: 100%; line-height: 120%;">
                            <div style="margin-right: 6px; margin-left: 12px; min-width: 0px; flex: 1 1 auto;">
                                <div style="display: flex; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                    <page-property-status-value 
                                        :status="getOptionValueById(optionId)"
                                        :group-color="group.color"
                                    />
                                </div>
                            </div>
                        </div>
                    </base-button>
                </div>
            </div>
        </template>
    </div>

</template>

<script setup>
import { defineProps, reactive } from 'vue';
import BaseButton from './BaseButton.vue';
import PagePropertyStatusValue from './PagePropertyStatusValue.vue';
import { useRecordValuesStore } from "@/stores/recordValues";

const props = defineProps({
    collectionId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    spaceId: {
        type: String,
        required: true
    }
})

const state = reactive({
    createNewOption: ""
});

const recordValuesStore = useRecordValuesStore();

const property = recordValuesStore.getRecordValue({
    id: props.collectionId,
    table: "collection",
    spaceId: props.spaceId
}).schema[props.propertyId];

function getOptionValueById(optionId) {
    return property.options.find(({id}) => id === optionId).value;
}
</script>