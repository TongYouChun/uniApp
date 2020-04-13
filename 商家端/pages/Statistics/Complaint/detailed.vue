<template>
	<view class="container flex-column height background-F0F4F7">
		<view class="Complaint flex-column align-items flex-overflow">
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
					<view class="Telephone flex">
						<view class="telephone flex-column align-items">
							<image class="im" src="../../../static/TelepHone1.png" mode=""></image>
							<text class="font-24 color-6">回电处理</text>
						</view>
						<view class="number">
							<view class="text1">
								<text class="font-36 color-6">186 1142 2412</text>
							</view>
							<view class="TeXt flex space-between">
								<view class="text flex align-items">
									<image class="ig" src="../../../static/shoji.png" mode=""></image>
									<text class="font-24 color-0 font-600">去电</text>
								</view>
								<view class="text flex align-items">
									<text class="font-24 color-6">2019 08 13</text>
									<text class="font-24 color-6">17:31:31</text>
								</view>
							</view>
							<view class="TeXt flex space-between">
								<view class="text flex">
									<image class="ig" src="../../../static/shoji.png" mode=""></image>
									<text class="font-24 color-0 font-600">去电</text>
								</view>
								<view class="text flex">
									<text class="font-24 color-6">2019 08 13</text>
									<text class="font-24 color-6">17:31:31</text>
								</view>
							</view>
						</view>
					</view>
					<view class="WeChat flex space-between">
						<view class="weChat1 flex-column align-items">
							<image class="im" src="../../../static/WeChat.png" mode=""></image>
							<text class="font-24 color-6">留言处理</text>
						</view>
						<view class="weChat2 flex-column">
							<view class="Wechat flex-column">
								<view class="text1 flex">
									<text class="tet font-30 color-0">我：商家处理投诉留言</text>
									<view class="text font-24 color-6">
										<text>2019 08 13</text>
										<text>17:31:31</text>
									</view>
								</view>
								<view class="text2 flex-column">
									<text class="tet font-30 color-448BC6">回复：投诉人对商家的回复信息</text>
									<view class="text font-24 color-6">
										<text>2019 08 13</text>
										<text>17:31:31</text>
									</view>
								</view>
							</view>
							<view class="Wechat flex-column">
								<view class="text1 flex">
									<text class="tet font-30 color-0">我：商家处理投诉留言</text>
									<view class="text font-24 color-6">
										<text>2019 08 13</text>
										<text>17:31:31</text>
									</view>
								</view>
								<view class="text2 flex-column">
									<text class="tet font-30 color-448BC6">回复：投诉人对商家的回复信息</text>
									<view class="text font-24 color-6">
										<text>2019 08 13</text>
										<text>17:31:31</text>
									</view>
								</view>
							</view>
							
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
			<view class="complete flex align-items space-between">
				<image class="ing" src="../../../static/shijian.png" mode=""></image>
				<view class="text font-30 color-0">
					<text>2019 08 22</text>
					<text>20:33:43</text>
				</view>
				<text class="tet font-30 color-f">处置完成</text>
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
					border-bottom: 1upx solid #C9D6E0;
					height: 266upx;
					.telephone{
						margin-top: 22upx;
						margin-right: 38upx;
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
						flex: 1;
						.text1{
							margin: 34upx 0;
							height: 30upx;
							line-height: 30upx;
						}
						.TeXt{
							height: 32upx;
							padding-bottom: 36upx;
							.text{
								height: 32upx;
								.ig{
									margin-right: 30upx;
									width: 34upx;
									height: 32upx;
								}
								text{
									height: 32upx;
									line-height: 32upx;
								}
								text:nth-child(1){
									margin-right: 20upx;
								}
								
							}
							.text:nth-child(2){
								margin-right: 14upx;
							}
						}
						
					}
				}
				.WeChat{
					padding-bottom: 50upx;
					.weChat1{
						width: 120upx;
						margin-top: 18upx;
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
						width: 100%;
						margin-left: 20upx;
						.Wechat{
							.text1{
								.tet{
									margin-top: 27upx;
									height: 30upx;
									line-height: 30upx;
								}
								.text{
									margin: 80upx 0 23upx 0;
									height: 20upx;
									line-height: 20upx;
									text:nth-child(2){
										margin-left: 20upx;
									}
								}
							}
							.text2{
								width: 100%;
								background: #F0F4F7;
								border-radius: 5upx;
								.tet{
									margin: 14upx 0 12upx 116upx;
									height: 30upx;
									line-height: 30upx;
									color: #448BC6;
								}
								.text{
									padding: 11upx 0 11upx 30upx;
									height: 20upx;
									line-height: 20upx;
								}
							}
						}
					}
				}
			}
		}
		.Content_bottom{
			border: 1upx solid #D0DAE1;
			margin-top: 20upx;
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
		.complete{
			margin-top: 20upx;
			margin-bottom: 90upx;
			width: 710upx;
			height: 100upx;
			border: 1upx solid #D0DAE1;
			border-radius: 10upx;
			background: #fff;
			.ing{
				margin-left: 52upx;
				height: 44upx;
				width: 44upx;
			}
			.text{
				height: 24upx;
				line-height: 24upx;
				text:nth-child(1){
					margin-right: 20upx;
				}
			}
			.tet{
				margin-right: 25upx;
				width: 188upx;
				height: 70upx;
				background: #555555;
				text-align: center;
				line-height: 70upx;
				border-radius: 10upx;
			}
		}
	}
</style>