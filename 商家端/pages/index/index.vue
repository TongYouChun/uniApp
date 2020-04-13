<template>
	<view class="index-content">
		<image class="imgs" src="../../static/BootPage.png" mode="图片错误"></image>
		<view class="index-top">
			<image class="name" src="../../static/name.png" mode=""></image>
			<view class="text">
				<view class="text1">
				</view>
				<text>商家端</text>
				<view class="text1">
				</view>
			</view>
		</view>
		<view class="index-bottom">
			<view class="Title">
				<image class="img" src="../../static/LeftChart.png" mode="图片错误"></image>
				<text>用户须知</text>
				<image class="img" src="../../static/RightChart.png" mode="图片错误"></image>
			</view>
			<view class="text">
				<text>感谢您使用叮当送水联盟平台:</text>
				<text>本平台旨在为用户打造一款好用的，健康安全的饮用水配送平台。解决市民用户饮水需求。</text>
				<text> 本平台对入住商家，逐一做入驻审核，并提供公正的评价服务，监督每一次的服务质量，奖励服务优质的商家，处罚或除名服务低劣的商家。</text>
			</view>
			<view class="Button" @click="GetInto">
				<text>进入店铺</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			GetInto () {
			 uni.switchTab({
			 	url:"/pages/Order/Order"
			 })
			}
		}
	}
</script>

<style lang="scss">
	.index-content{
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
		z-index: 0;
		background: #2f23b3;
		// 背景图
		.imgs{
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 750upx;
			height: 1430upx;
		}
		// 图+名字
		.index-top{
			display: flex;
			flex-direction: column;
			height: 764upx;
			align-items: center;
			.name{
				margin-top: 64upx;
				width: 598upx;
				height: 100upx;
			}
			.text{
				margin-top: 18upx;
				display: flex;
				height: 40upx;
				width: 217upx;
				justify-content: space-between;
				align-items: center;
				text{
					font: 600 40upx "";
					color: #fff;
				}
				.text1{
					height: 4upx;
					width: 34upx;
					background: #fff;
					
				}
			}
		}
		// 内容
		.index-bottom{
			margin-bottom: 35upx;
			width: 689upx;
			height: 696upx;
			background: #473fe0;
			border-radius: 20upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.Title{
				margin: 67upx 0;
				display: flex;
				height: 44upx;
				align-items: center;
				text{
					font: 400 44upx "";
					color: #fff;
					margin: 0 30upx;
				}
				.img{
					width: 113upx;
					height: 37upx;
				}
			}
			.text{
				margin: 0 50upx;
				display: flex;
				flex-direction: column;
				font: 28upx/48upx "";
				color: #fff;
				text-indent: 2em;
			}
			.Button{
				margin-top: 70upx;
				width: 467upx;
				height: 86upx;
				background: #FF8400;
				border-radius: 43upx;
				font: 32upx"";
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
