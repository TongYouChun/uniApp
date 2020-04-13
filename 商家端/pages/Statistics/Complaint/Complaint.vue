<template>
	<view class="Complaint flex-column height align-items background-F0F4F7">
		<view class="h4 width-710 font-24 color-6 font-600 flex align-items">
			<text>订单编号：</text>
			<text>TS-190821F01</text>
		</view>
		<view class="Content_top width-710 background-f flex-column align-items">
			<view class="User flex-column">
				<view class="h5 flex justify-content align-items font-24 color-6">
					投诉信息
				</view>
				<view class="Information flex">
					<view class="TexT1 flex-column align-items">
						<image class="ig" src="../../../static/business.png" mode=""></image>
						<text class="font-24 color-6">张女士</text>
					</view>
					<view class="TexT2">
						<view class="Text1 flex space-between">
							<view class="text1 font-24 color-6">
								<text>投诉分类：</text>
								<text>配送问题</text>
							</view>
							<view class="text2 font-24 color-6">
								<text>2019 08 13</text>
								<text>17:31:31</text>
							</view>
						</view>
						<view class="Text2 color-0 font-30 font-600">
							送水不及时，还得老娘等了一下午没来，你们想咋样
						</view>
					</view>
				</view>
				<view class="Telephone flex align-items">
					<view class="telephone flex-column align-items">
						<image class="im" src="../../../static/TelepHone1.png" mode=""></image>
						<text class="font-24 color-6">回电处理</text>
					</view>
					<view class="number">
						<text class="font-24 color-6">TEL</text>
						<text class="font-36 color-6">186 1142 2412</text>
					</view>
				</view>
				<view class="WeChat flex space-between">
					<view class="weChat1 flex-column align-items">
						<image class="im" src="../../../static/WeChat.png" mode=""></image>
						<text class="font-24 color-6">留言处理</text>
					</view>
					<view class="weChat2 flex-column">
						<textarea class="area color-0 font-28" placeholder="这里是输入 留言的地方。"></textarea>
						<text class="Button font-28">发送</text>
					</view>
				</view>
			</view>
		</view>
		<view class="Content_bottom width-710 background-f flex-column">
			<view class="h5 flex justify-content align-items font-24 color-6">
				<text>投诉对象</text>
			</view>
			<view class="User flex">
				<view class="Text1 flex-column align-items">
					<image class="ing" src="../../../static/DeliveryClerk.png" mode=""></image>
					<text class="font-24 color-8">配送员</text>
				</view>
				<view class="Text2 flex-column">
					<view class="text1 font-30">
						<text>姓名：</text>
						<text>张三</text>
					</view>
					<view class="text2 font-30">
						<text>电话：</text>
						<text>185 1341 2133</text>
					</view>
				</view>
			</view>
		</view>
		<view class="Handle flex">
			<view class="text1">
				
			</view>
			<view class="text2 flex justify-content align-items" @click="Handle">
				<image class="ig" src="../../../static/envelope.png" mode=""></image>
				<text class="font-30">处理完成</text>
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
			Handle () {
				uni.navigateTo({
					url: "/pages/Statistics/Complaint/detailed"
				})
			}
		}
	}
</script>

<style lang="scss">
	.Complaint{
		.h4{
			height: 67upx;
			text:nth-child(1){
				margin-left: 12upx;
			}
		}
		.Content_top{
			border: 1upx solid #D0DAE1;
			border-radius: 10upx;
			.User{
				width: 670upx;
				.h5{
					height: 68upx;
				}
				.Information{
					border-bottom: 1upx solid #C9D6E0;
					height: 170upx;
					padding-left: 12upx;
					.TexT1{
						width: 80upx;
						.ig{
							width: 80upx;
							height: 80upx;
							border-radius: 50%;
						}
						text{
							margin-top: 16upx;
							height: 24upx;
							line-height: 24upx;
						}
					}
					.TexT2{
						margin-left: 28upx;
						.Text1{
							.text1{
								text:nth-child(2){
									margin-left: 10upx;
								}
							}
							.text2{
								text:nth-child(2){
									margin-left: 20upx;
								}
							}
						}
					}
				}
				.Telephone{
					height: 156upx;
					border-bottom: 1upx solid #C9D6E0;
					.telephone{
						width: 100upx;
						.im{
							height: 64upx;
							width: 64upx;
						}
						text{
							margin-top: 16upx;
							height: 24upx;
							line-height: 24upx;
						}
					}
					.number{
						width: 406upx;
						height: 78upx;
						background: #E1EAF0;
						line-height: 78upx;
						text-align: center;
						border-radius: 39upx;
						margin-left: 30upx;
					}
				}
				.WeChat{
					height: 440upx;
					.weChat1{
						margin-top: 18upx;
						width: 100upx;
						.im{
							width: 64upx;
							height: 64upx;
						}
						text{
							margin-top: 12upx;
							line-height: 24upx;
							height: 24upx;
						}
					}
					.weChat2{
						height: 396upx;
						margin-top: 24upx;
						position: relative;
						.area{
							padding: 5upx 18upx;
							line-height: 40upx;
							width: 514upx;
							height: 300upx;
							border: 1upx solid #C2CCD3;
							border-radius: 5upx;
						}
						.Button{
							position: absolute;
							z-index: 0;
							right: 0;
							bottom: 0;
							height: 60upx;
							width: 148upx;
							border-radius: 30upx;
							color: #fff;
							line-height: 60upx;
							background: #21A2ED;
							text-align: center;
						}
					}
				}
			}
		}
		.Content_bottom{
			border: 1upx solid #D0DAE1;
			margin-top: 20upx;
			margin-bottom: 100upx;
			height: 222upx;
			border-radius: 10upx;
			.h5{
				height: 68upx;
			}
			.User{
				.Text1{
					margin-left: 33upx;
					width: 82;
					.ing{
						width: 82upx;
						height: 82upx;
						border-radius: 50%;
					}
					text{
						height: 24upx;
						line-height: 24upx;
						margin-top: 14upx;
					}
				}
				.Text2{
					margin-left: 55upx;
					.text1{
						height: 66upx;
						line-height: 66upx;
						color: #555;
						text:nth-child(2){
							margin-left: 10upx;
						}
					}
					.text2{
						height: 66upx;
						line-height: 66upx;
						color: #555;
						text:nth-child(2){
							margin-left: 10upx;
						}
					}
				}
			}
		}
		.Handle{
			position: fixed;
			bottom: 0;
			left: 0;
			height: 98upx;
			width: 750upx;
			.text1{
				width: 284upx;
				height: 750upx;
				background: #fff;
			}
			.text2{
				flex: 1;
				background: #FF5B5B;
				.ig{
					margin-right: 60upx;
					width: 55upx;
					height: 51upx;
				}
				text{
					color: #fff;
				}
			}
		}
	}
</style>
