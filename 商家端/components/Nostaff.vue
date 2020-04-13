<template>
	<view class="Nostaff flex-column align-items height width-750">
		<image class="No" src="../../../static/NoStaff.png" mode=""></image>
		<view class="text flex justify-content align-items width-710 background-f border height-172">
			<image class="img" src="../../../static/Sigh.png" mode=""></image>
			<text class="font-28 color-FF6000">还未添加配送人员</text>
		</view>
		<view class="add font-36 width-710 color-f background-18BA42 flex align-items justify-content" @click="add">
			添加人员
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			add () {
				uni.navigateTo({
					url: "/pages/My/staff/addstaff"
				})
			}
		}
	}
</script>

<style lang="scss">
	.Nostaff{
		position: relative;
		z-index: 0;
		.No{
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 750upx;
			height: 267upx;
		}
		.text{
			margin: 134upx 0 23upx 0;
			.img{
				width: 56upx;
				height: 56upx;
				border-radius: 50%;
			}
			text:nth-child(2){
				margin-left: 40upx;
			}
		}
		.add{
			height: 90upx;
			border-radius: 10upx;
		}
	}
</style>
