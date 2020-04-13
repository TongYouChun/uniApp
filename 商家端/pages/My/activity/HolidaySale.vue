<template>
	<view class="HolidaySale flex-column">
		<view class="holidaySale flex-column">
			<image class="img" src="../../../static/festival1.png" mode=""></image>
			<view class="holidaySale-content flex-column align-items">
				<view class="te flex ">
					<text class="text font-36 color-0">折扣设置</text>
					<image class="ig" src="../../../static/leftBlack.png" mode=""></image>
					<image class="ig" src="../../../static/orange.png" mode=""></image>
					<image class="ig" src="../../../static/rightBlack.png" mode=""></image>
				</view>
				<view class="SetUp flex-column background-f align-items">
					<view class="flex-column background-f align-items" v-if="remove1">
						<view class="TexT flex justify-content align-items">
							<text class="Text color-0 font-30">折扣方案 1</text>
							<view class="texT " @click="shanchu1">
								<text class="tex"></text>
							</view>
						</view>
						<view class="ul flex">
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">春节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">中秋节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">端午节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">国庆节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0">春节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							
						</view>
						<view class="Discount flex space-between">
							<view class="Discount-left font-48 color-f flex align-items">
								8.8折
							</view>
							<view class="Discount-right flex-column font-24 color-f justify-content">
								<text>限时折扣</text>
								<text>09:00 - 21:00</text>
							</view>
						</view>
						
					</view>
					
					<view class="flex-column background-f align-items" v-if="remove2">
						<view class="TexT flex justify-content align-items">
							<text class="Text color-0 font-30">折扣方案 1</text>
							<view class="texT " @click="shanchu2">
								<text class="tex"></text>
							</view>
						</view>
						<view class="ul flex">
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">春节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">中秋节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">端午节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0 font-700">国庆节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							<view class="li flex-column align-items justify-content">
								<text class="font-30 color-0">春节</text>
								<text class="font-24 color-0">2月14日</text>
							</view>
							
						</view>
						<view class="Discount flex space-between">
							<view class="Discount-left font-48 color-f flex align-items">
								8.8折
							</view>
							<view class="Discount-right flex-column font-24 color-f justify-content">
								<text>限时折扣</text>
								<text>09:00 - 21:00</text>
							</view>
						</view>
						
					</view>
					
					<view class="Button">
						<button class="button" type="primary" @click="Discount">创建节日折扣</button>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remove1: true,
				remove2: true
			};
		},
		methods:{
			shanchu1 () {
				this.remove1 = false
			},
			shanchu2 () {
				this.remove2 = false
			},
			Discount () {
				uni.navigateTo({
					url: "/pages/My/activity/Discount"
				})
			}
		}
	}
</script>

<style lang="scss">
	.HolidaySale{
		padding-bottom: 40upx;
		background: #5f13f9;
		.holidaySale{
			flex: 1;
			overflow-y: auto;
			position: relative;
			z-index: 0;
			background: #5f13f9;
			.img{
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				width: 750upx;
				height: 1460upx;
			}
			.holidaySale-content{
				margin-top: 566upx;
				flex: 1;
				.te{
					position: relative;
					bottom: -44upx;
					width: 552upx;
					height: 74upx;
					position: relative;
					.text{
						position: absolute;
						z-index: 0;
						top: 12upx;
						left: 188upx;
					}
					.ig:nth-child(2){
						width: 32upx;
						height: 30upx;
					}
					.ig:nth-child(3){
						width: 488upx;
						height: 74upx;
					}
					.ig:nth-child(4){
						width: 32upx;
						height: 30upx;
					}
				}
				.SetUp{
					padding-top: 44upx;
					width: 690upx;
					border-radius: 20upx;
					.TexT{
						height: 90upx;
						width: 690upx;
						position: relative;
						z-index: 0;
						.texT{
							position: absolute;
							z-index: 0;
							top: 20upx;
							right: 50upx;
							width: 46upx;
							height: 46upx;
							background: #F95555;
							border-radius: 50%;
							.tex{
								position: absolute;
								z-index: 0;
								left: 0;
								right: 0;
								bottom: 0;
								top: 0;
								margin: auto;
								width: 20upx;
								height: 4upx;
								background: #fff;
							}
						}
					}
					.ul{
						flex-wrap: wrap;
						width: 630upx;
						padding: 0 30upx;
						.li{
							margin: 0 14upx;
							margin-bottom: 20upx;
							width: 180upx;
							height: 85upx;
							border-radius: 5upx;
							border: 2upx solid #AB8233;
							background: #FCD487;
							position: relative;
							.shan{
								position: absolute;
								z-index: 0;
								top:-16upx;
								right: -16upx;
								width: 32upx;
								height: 32upx;
							}
							
						}
					}
					.Discount{
						border-radius: 5upx;
						margin-top: 16upx;
						margin-bottom: 38upx;
						height: 86upx;
						width: 608upx;
						background: #F44725;
						.Discount-left{
							height: 86upx;
							
							margin-left: 62upx;
						}
						.Discount-right{
							height: 86upx;
							margin-right: 20upx;
						}
					}
				}
			}
			.Button{
				margin-top: 200upx;
				border-top: 2upx solid #A6A6A6;
				width: 612upx;
				.button{
					margin: 16upx 0;
					background: #36C658;
				}
			}
		}
	}
</style>
