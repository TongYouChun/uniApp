<template>
	<view class="Welfare flex-column ">
		<view class="welfare">
			<Promotion></Promotion>
		</view>
	</view>
</template>

<script>
	import Promotion from '../../../components/promotion.vue';
	export default {
		data() {
			return {
			};
		},
		components: {
			Promotion
		}
	}
</script>

<style lang="scss">
	.Welfare{
		height: 100%;
		.welfare{
			flex: 1;
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			background: #c00003;
		}
	
	}
	
	
</style>
