<template>
	<view class="No-commodity flex-column align-items height width-750" >
		<image class="No" src="../../../static/No.png" mode=""></image>
		<view class="content border width-710 height-172 background-f flex align-items justify-content">
			<image class="img" src="../../../static/Sigh.png" mode=""></image>
			<text class="font-28 color-FF6000">还未添加任何商品</text>
		</view>
		<view class="add font-36 width-710 color-f background-18BA42 flex align-items justify-content" @click="addCommodity">
			<text>添加商品</text>
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
			addCommodity () {
				uni.navigateTo({
					url: "/pages/My/commodity/addproduct"
				})
			}
		}
	}
</script>

<style lang="scss">
	.No-commodity{
		position: relative;
		z-index: 0;
		.No{
			z-index: -1;
			position: absolute;
			top: 0;
			left: 0;
			width: 750upx;
			height: 267upx;
		}
		.content{
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
