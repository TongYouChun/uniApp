<template>
	<view class="Activity flex-column height background-F0F4F7">
		<view class="activity flex-column flex-overflow">
			<view class="activity-top flex-column">
				<text class="Text font-28 flex align-items ">商家活动</text>
				<view class="li background-f flex space-between align-items" @click="Promotion">
					<view class="Hongbao-left height flex align-items">
						<view class="Text1 flex justify-content align-items">
							<image class="img1" src="../../../static/hongbao.png" mode=""></image>
						</view>
						<view class="hongbao flex-column">
							<view class="hongbao-top flex align-items">
								<text class="font-36 color-0 font-600">店铺红包</text>
								<text class="font-28">（开启）</text>
							</view>
							<text class="text font-24 color-9">分享得红包 是一种 推广手段，便于水站扩展有效用户的方式</text>
						</view>
					</view>
					<view class="Hongbao-right">
						<image class="img" src="../../../static/you1.png" mode=""></image>
					</view>
				</view>
				
				<view class="li background-f flex space-between align-items" @click="follow">
					<view class="Hongbao-left height flex align-items">
						<view class="Text2 flex justify-content align-items">
							<image class="img2" src="../../../static/share.png" mode=""></image>
						</view>
						<view class="hongbao flex-column">
							<view class="hongbao-top flex align-items">
								<text class="font-36 color-0 font-600">分享关注</text>
								<text class="font-28">（开启）</text>
							</view>
							<text class="text font-24 color-9">一种拓展新用户的方法，通过传播效应倍增用户数量</text>
						</view>
					</view>
					<view class="Hongbao-right">
						<image class="img" src="../../../static/you1.png" mode=""></image>
					</view>
				</view>
				
				<view class="li te background-f flex space-between align-items" @click="HolidaySale">
					<view class="Hongbao-left height flex align-items">
						<view class="Text3 flex justify-content align-items">
							<image class="img3" src="../../../static/festival.png" mode=""></image>
						</view>
						<view class="hongbao flex-column">
							<view class="hongbao-top flex align-items">
								<text class="font-36 color-0 font-600">节日促销</text>
								<text class="font-28">（开启）</text>
							</view>
							<text class="text font-24 color-9">分享得红包 是一种 推广手段，便于水站扩展有效用户的方式</text>
						</view>
					</view>
					<view class="Hongbao-right">
						<image class="img" src="../../../static/you1.png" mode=""></image>
					</view>
				</view>
				
			</view>
			<view class="activity-bottom flex-column">
				<text class="Text font-28 flex align-items ">平台活动</text>
				<view class="li background-f flex space-between align-items" >
					<view class="Hongbao-left height flex align-items">
						<view class="Text1 flex justify-content align-items">
							<image class="img1" src="../../../static/integral.png" mode=""></image>
						</view>
						<view class="hongbao flex-column">
							<view class="hongbao-top flex align-items">
								<text class="font-36 color-0 font-600">积分促销</text>
								<text class="font-28">（开启）</text>
							</view>
							<text class="text font-24 color-9"></text>
						</view>
					</view>
					<view class="Hongbao-right">
						<image class="img" src="../../../static/you1.png" mode=""></image>
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
			HolidaySale () {
				uni.navigateTo({
					url: "/pages/My/activity/HolidaySale"
				})
			},
			follow () {
				uni.navigateTo({
					url: "/pages/My/activity/follow"
				})
			},
			Promotion () {
				uni.navigateTo({
					url: "/pages/My/activity/Promotion"
				})
			}
		}
	}
</script>

<style lang="scss">
	.activity{
		.activity-top{
			.Text{
				margin-left: 40upx;
				height: 60upx;
				color: #9EACB6;
			}
			.li{
				height: 180upx;
				margin-bottom: 20upx;
				.Hongbao-left{
					.Text1{
						margin-left: 40upx;
						width: 98upx;
						height: 98upx;
						background: #F95555;
						border-radius: 50%;
						.img1{
							width: 44upx;
							height: 51upx;
						}
						
					}
					.Text2{
						margin-left: 40upx;
						width: 98upx;
						height: 98upx;
						background: #59B7FF;
						border-radius: 50%;
						.img2{
							width: 50upx;
							height: 48upx;
						}
					}
					.Text3{
						margin-left: 40upx;
						width: 98upx;
						height: 98upx;
						background: #4DD7AA;
						border-radius: 50%;
						.img3{
							width: 56upx;
							height: 38upx;
						}
					}
					
					.hongbao{
						margin-left: 30upx;
						height: 134upx;
						width: 448upx;
						.hongbao-top{
							height: 35upx;
							text:nth-child(2){
								margin-left: 22upx;
								color: #0B7E29;
							}
						}
						.text{
							margin-top: 20upx;
							line-height: 34upx;
						}
					}
				}
				.Hongbao-right{
					margin-right: 22upx;
					.img{
						width: 19upx;
						height: 34upx;
					}
				}
			}
			.te{
				margin: 0;
			}
		}
		.activity-bottom{
			.Text{
				margin-left: 40upx;
				height: 60upx;
				color: #9EACB6;
			}
			.li{
				height: 180upx;
				margin-bottom: 20upx;
				.Hongbao-left{
					.Text1{
						margin-left: 40upx;
						width: 98upx;
						height: 98upx;
						background: #FFB005;
						border-radius: 50%;
						.img1{
							width: 57upx;
							height: 54upx;
						}
						
					}
					
					.hongbao{
						margin-left: 30upx;
						height: 134upx;
						width: 448upx;
						.hongbao-top{
							height: 35upx;
							text:nth-child(2){
								margin-left: 22upx;
								color: #0B7E29;
							}
						}
						.text{
							margin-top: 20upx;
							line-height: 34upx;
						}
					}
				}
				.Hongbao-right{
					margin-right: 22upx;
					.img{
						width: 19upx;
						height: 34upx;
					}
				}
			}
		}
	}
</style>
