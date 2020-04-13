<template>
	<view class="commodity-container flex-column background-F0F4F7 height">
		<NoCommodity v-if="Yes"></NoCommodity>
		<YesCommodity></YesCommodity>
		
	</view>
</template>

<script>
	import NoCommodity from "../../../components/No.vue";
	import YesCommodity from "../../../components/Yes.vue"
	export default {
		data() {
			return {
				Yes: false
			}
		},
		components:{
			NoCommodity,
			YesCommodity
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

</style>
