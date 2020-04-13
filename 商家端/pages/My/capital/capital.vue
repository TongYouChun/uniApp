<template>
	<view class="capital flex-column height background-F0F4F7 align-items">
		<image class="imgs" src="../../../static/blueprint.png" mode=""></image>
		<view class="capital-top font-24 color-f">
			<view class="income flex-column">
				<text class="Text">本月收入</text>
				<view class="text">
					<text>¥</text>
					<text class="font-60 font-700">6230</text>
					<text>元</text>
				</view>
			</view>
			<view class="account flex">
				<view class="Text1">
					<text class="Text">账户余额</text>
					<view class="text">
						<text>¥</text>
						<text class="font-60 font-700">530</text>
						<text>元</text>
					</view>
				</view>
				<view class="Text2">
					<text class="Text">可提现余额</text>
					<view class="text">
						<text>¥</text>
						<text class="font-60 font-700">130</text>
						<text>元</text>
					</view>
				</view>
				<view class="Text3">
					<button class="bu font-24" type="primary">提现</button>
				</view>
			</view>
		</view>
		<view class="option flex background-f font-24 color-6 space-between align-items">
			<view class="Text1 flex-column align-items" @click="History">
				<image class="im" src="../../../static/tu2.png" mode=""></image>
				<text>历史收入</text>
			</view>
			<view class="Text2 flex-column align-items" @click="query">
				<image class="im" src="../../../static/tu4.png" mode=""></image>
				<text>详单查询</text>
			</view>
			<view class="Text3 flex-column align-items" @click="Record">
				<image class="im" src="../../../static/tu1.png" mode=""></image>
				<text>提现记录</text>
			</view>
			<view class="Text4 flex-column align-items" @click="Analysis">
				<image class="im" src="../../../static/tu3.png" mode=""></image>
				<text>收入分析</text>
			</view>
		</view>
		<view class="Content flex-column width-710 align-items">
			<text class="TexT font-24 font-700">今日明细</text>
			<view class="information flex-column">
				<view class="contact-top background-f flex width-710 align-items space-around">
					<view class="Estimate flex-column align-items">
						<text class="text font-24 color-6">预收账款</text>
						<view class="texT flex-column border-right">
							<view class="Text">
								<text class="font-30">¥</text>
								<text class="font-48 font-600">530</text>
								<text class="font-30">元</text>
							</view>
						</view>
					</view>
					<view class="income flex-column align-items">
						<text class="text font-24 color-6">到账收入</text>
						<view class="Text ">
							<text class="font-30">¥</text>
							<text class="font-48 font-600">50</text>
							<text class="font-30">元</text>
						</view>
					</view>
				</view>
				<view class="contact-bottom flex-column flex-overflow background-f">
					<view class="contact flex align-items border_b_A6A6A6" >
						<view class="Text1 flex-column">
							<text class="font-24 color-9">订单号</text>
							<text class="font-30 color-0">BJ20190830FU12</text>
						</view>
						<view class="Text2 font-24 color-9">
							10:41:39
						</view>
						<view class="Text3 color-0">
							<text class="font-30">¥</text>
							<text class="font-48">21</text>
						</view>
					</view>
					<view class="contact flex align-items border_b_A6A6A6" >
						<view class="Text1 flex-column">
							<text class="font-24 color-9">订单号</text>
							<text class="font-30 color-0">BJ20190830FU12</text>
						</view>
						<view class="Text2 font-24 color-9">
							10:41:39
						</view>
						<view class="Text3 color-0">
							<text class="font-30">¥</text>
							<text class="font-48">21</text>
						</view>
					</view>
					<view class="contact flex align-items border_b_A6A6A6" >
						<view class="Text1 flex-column">
							<text class="font-24 color-9">订单号</text>
							<text class="font-30 color-0">BJ20190830FU12</text>
						</view>
						<view class="Text2 font-24 color-9">
							10:41:39
						</view>
						<view class="Text3 color-0">
							<text class="font-30">¥</text>
							<text class="font-48">21</text>
						</view>
					</view>
					
					<view class="contact flex align-items ">
						<view class="Text1 flex-column">
							<text class="font-24 color-9">订单号</text>
							<text class="font-30 color-0">BJ20190830FU12</text>
						</view>
						<view class="Text2 font-24 color-9">
							10:41:39
						</view>
						<view class="Text3 color-0 font-700">
							<text class="font-30">¥</text>
							<text class="font-48">21</text>
						</view>
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
				
			}
		},
		methods: {
			query () {
				uni.navigateTo({
					url: "/pages/My/capital/query"
				})
			},
			Analysis () {
				uni.navigateTo({
					url: "/pages/My/capital/Analysis"
				})
			},
			Record () {
				uni.navigateTo({
					url: "/pages/My/capital/Record"
				})
			},
			History () {
				uni.navigateTo({
					url: "/pages/My/capital/History"
				})
			}
		}
	}
</script>

<style lang="scss">
	.capital{
		position: relative;
		z-index: 0;
		.imgs{
			position: absolute;
			z-index: -1;
			top: 4upx;
			left: 0;
			width: 750upx;
			height: 336upx;
		}
		.capital-top{
			width: 100%;
			.income{
				padding: 25upx 0 12upx 45upx;
				.text{
					text:nth-child(1){
						margin-left: 10upx;
					}
					text:nth-child(2){
						margin: 0 10upx 0 17upx;
					}
				}
			}
			.account{
				margin-left: 45upx;
				.Text1{
					.text{
						text:nth-child(1){
							margin-left: 10upx;
						}
						text:nth-child(2){
							margin: 0 10upx 0 17upx;
						}
					}
				}
				.Text2{
					margin: 0 48upx 0 150upx;
					.text{
						text:nth-child(1){
							margin-left: 10upx;
						}
						text:nth-child(2){
							margin: 0 10upx 0 17upx;
						}
					}
				}
				.Text3{
					margin-top: 38upx;
					.bu{
						width: 128upx;
						height: 60upx;
						background: #2A406C;
						border: 1upx solid #5E7099;
						border-radius: 10upx;
					}
				}
			}
		}
		.option{
			width: 570upx;
			padding: 0 70upx;
			height: 158upx;
			border-radius: 10upx;
			.Text1{
				.im{
					margin-bottom: 20upx;
					width: 43upx;
					height: 36upx;
				}
			}
			.Text2{
				.im{
					margin-bottom: 20upx;
					width: 37upx;
					height: 36upx;
				}
			}
			.Text3{
				.im{
					margin-bottom: 20upx;
					width: 44upx;
					height: 41upx;
				}
			}
			.Text4{
				.im{
					margin-bottom: 20upx;
					width: 36upx;
					height: 37upx;
				}
			}
		}
		.Content{
			.TexT{
				width: 695upx;
				padding: 28upx 0 15upx 15upx;
			}
			.information{
				.contact-top{
					border-radius: 10upx 10upx 0  0;
					height: 156upx;
					.Estimate{
						height: 100upx;
						width: 334upx;
						.text{
							height: 24upx;
							line-height: 24upx;
						}
						.texT{
							height: 76upx;
							.Text{
								margin-top: 36upx;
								color: #7C9AD5;
								text-align: center;
								width: 334upx;
								height: 40upx;
								text:nth-child(2){
									margin: 0 10upx;
									height: 40upx;
									line-height: 40upx;
								}
							}
						}
					}
					.income{
						height: 100upx;
						width: 334upx;
						.text{
							height: 24upx;
							line-height: 24upx;
						}
						.Text{
							margin-top: 36upx;
							color: #FF5858;
							text-align: center;
							width: 334upx;
							height: 40upx;
							text:nth-child(2){
								margin: 0 10upx;
								height: 40upx;
								line-height: 40upx;
							}
						}
					}
				}
				.contact-bottom{
					margin-top: 8upx;
					border-radius: 0  0 10upx 10upx;
					.contact{
						margin: 0 24upx 0 26upx;
						height: 124upx;
						.Text1{
							width: 360upx;
							height: 64upx;
							text:nth-child(1){
								height: 23upx;
								line-height: 23upx;
							}
							text:nth-child(2){
								margin-top: 14upx;
								height: 24upx;
								line-height: 24upx;
							}
						}
						.Text2{
							width: 210upx;
							line-height: 20upx;
							height: 20upx;
						}
						.Text3{
							flex: 1;
							text:nth-child(2){
								margin-left: 10upx;
							}
						}
					}
				}
			}
		}
	}
</style>
