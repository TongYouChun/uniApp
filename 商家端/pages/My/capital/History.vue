<template>
	<view class="History background-F0F4F7 height flex-column align-items">
		<view class="History-top flex space-between width-710">
			<view class="month flex font-24">
				<text class="Text1 color-f flex align-items justify-content">2019</text>
				<text class="Text2 color-f flex align-items justify-content">8月</text>
				<view class="Text3 flex-column">
					<text class="text1 color-9">合计</text>
					<view class="text2">
						<text class="font-24">￥</text>
						<text class="font-36">5312</text>
						<text class="font-24">元</text>
					</view>
				</view>
			</view>
			<view class="whole flex-column">
					<text class="text1 font-24 color-9">店铺</text>
					<view class="text2 flex align-items">
						<text class="font-30 color-0">全部</text>
						<image class="img" src="../../../static/xiabiao.png" mode=""></image>
					</view>
			</view>
		</view>
		<view class="History-bottom width-710 flex-column">
			<view class="content flex space-between background-f" @click="detailed">
				<view class="content-left flex-column align-items">
					<image class="ig" src="../../../static/week.png" mode=""></image>
					<text class="font-30 color-0">29</text>
					<text class="font-14 color-f">星期五</text>
				</view>
				<view class="content-right flex-column">
					<view class="ShopName flex space-between">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
						</view>
					</view>
					<view class="ShopName flex space-between border-top">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="content flex space-between background-f"  @click="detailed">
				<view class="content-left flex-column align-items">
					<image class="ig" src="../../../static/week.png" mode=""></image>
					<text class="font-30 color-0">29</text>
					<text class="font-14 color-f">星期五</text>
				</view>
				<view class="content-right flex-column">
					<view class="ShopName flex space-between">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
						</view>
				</view>
				</view>
			</view>
			
			<view class="content flex space-between background-f"  @click="detailed">
				<view class="content-left flex-column align-items">
					<image class="ig" src="../../../static/week.png" mode=""></image>
					<text class="font-30 color-0">29</text>
					<text class="font-14 color-f">星期五</text>
				</view>
				<view class="content-right flex-column">
					<view class="ShopName flex space-between">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
						</view>
				</view>
				</view>
			</view>
			
			<view class="content flex space-between background-f"  @click="detailed">
				<view class="content-left flex-column align-items">
					<image class="ig" src="../../../static/week.png" mode=""></image>
					<text class="font-30 color-0">29</text>
					<text class="font-14 color-f">星期五</text>
				</view>
				<view class="content-right flex-column">
					<view class="ShopName flex space-between">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
						</view>
				</view>
				</view>
			</view>
			
			<view class="content flex space-between background-f"  @click="detailed">
				<view class="content-left flex-column align-items">
					<image class="ig" src="../../../static/week.png" mode=""></image>
					<text class="font-30 color-0">29</text>
					<text class="font-14 color-f">星期五</text>
				</view>
				<view class="content-right flex-column">
					<view class="ShopName flex space-between">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
						</view>
				</view>
				</view>
			</view>
			
			<view class="content flex space-between background-f"  @click="detailed">
				<view class="content-left flex-column align-items">
					<image class="ig" src="../../../static/week.png" mode=""></image>
					<text class="font-30 color-0">29</text>
					<text class="font-14 color-f">星期五</text>
				</view>
				<view class="content-right flex-column">
					<view class="ShopName flex space-between">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
						</view>
				</view>
				</view>
			</view>
			
			<view class="content flex space-between background-f"  @click="detailed">
				<view class="content-left flex-column align-items">
					<image class="ig" src="../../../static/week.png" mode=""></image>
					<text class="font-30 color-0">29</text>
					<text class="font-14 color-f">星期五</text>
				</view>
				<view class="content-right flex-column">
					<view class="ShopName flex space-between">
						<view class="shopName">
							<text class="font-30 color-0">店铺A</text>
							<text class="font-24 color-9">收入</text>
						</view>
						<view class="money">
							<text class="font-30">¥</text>
							<text class="font-48">530</text>
							<text class="font-36">元</text>
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
			detailed () {
				uni.navigateTo({
					url: "/pages/My/capital/income"
				})
			}
		}
	}
</script>

<style lang="scss">
	.History{
		.History-top{
			.month{
				.Text1{
					margin: 24upx 16upx 13upx 16upx;
					width: 68upx;
					height: 68upx;
					background: #7C9AD5;
					border-radius: 50%;
				}
				.Text2{
					margin: 24upx 0 13upx 0;
					width: 68upx;
					height: 68upx;
					background: #7C9AD5;
					border-radius: 50%;
				}
				.Text3{
					margin: 14upx 0 0 40upx;
					.text1{
						
					}
					.text2{
						color: #FF4B4B;
					}
				}
			}
			.whole{
				width: 100upx;
				margin-right: 27upx;
				margin-top: 12upx;
				.text1{
					margin-left: 48upx;
				}
				.text2{
					height: 30upx;
					margin-top: 20upx;
					text{
						margin-right: 16upx;
					}
					.img{
						width: 22upx;
						height: 12upx;
					}
				}
				
			}
		}
		.History-bottom{
			.content{
				border-radius: 10upx;
				margin-bottom: 20upx;
				.content-left{
					margin: 27upx 0 26upx 26upx;
					position: relative;
					z-index: 0;
					width: 56upx;
					height: 60upx;
					text:nth-child(2){
						margin-top: 5upx;
						height: 28upx;
					}
					text:nth-child(3){
						margin-top: 10upx;
					}
					.ig{
						position: absolute;
						z-index: -1;
						top: 0;
						left: 0;
						width: 56upx;
						height: 60upx;
					}
				}
				.content-right{
					flex: 1;
					.ShopName{
						margin: 0 30upx 0 58upx;
						.shopName{
							margin-top: 20upx;
							height: 80upx;
							text:nth-child(1){
								margin-right: 5upx;
							}
						}
						.money{
							margin-top: 20upx;
							height: 80upx;
							color: #FF4B4B;
							text:nth-child(2){
								margin: 0 10upx;
							}
						}
					}
				}
			}
		}
	}
</style>
