<template>
	<view class="evaluate flex-column">
		<view class="h4 flex align-items">
			<view class="li font-30 color-0 flex align-items" :class="Te1" @click="evaluate">
				<text>全部</text>
				<text>（192）</text>
			</view>
			<view class="li font-30 color-0 flex align-items" :class="Te2" @click="evaluate">
				<text>好评</text>
				<text>（135）</text>
			</view>
			<view class="li font-30 color-0 flex align-items" :class="Te3" @click="evaluate">
				<text>中评</text>
				<text>（57）</text>
			</view>
			<view class="li font-30 color-0 flex align-items" :class="Te4" @click="evaluate">
				<text>差评</text>
				<text>（12）</text>
			</view>
		</view>
		<view class="Content flex-column align-items">
			<view class="content flex-column">
				<view class="time flex width-710 align-items">
					<text class="font-30 color-6">2019 08 21</text>
				</view>
				<view class="Information width-750 background-f flex-column align-items">
					<view class="information Li flex width-710">
						<image class="img" src="../../static/business.png" mode=""></image>
						<view class="evaluate flex-column">
							<view class="text1 flex align-items">
								<text class="font-28">张女士</text>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car2.png" mode=""></image>
							</view>
							<view  class="text2 font-30 color-0 flex-column">
								<text>买家写的评论。。。好评</text>
								<view class="Img flex">
									<image class="ing" src="../../static/bikaqu%20(1).gif" mode=""></image>
									<image class="ing" src="../../static/bikaqu%20(1).jpg" mode=""></image>
									<image class="ing" src="../../static/bikaqu%20(2).gif" mode=""></image>
								</view>
							</view>
							<view class="text3 font-28 flex align-items">
								<text>感谢支持。</text>
								<text>回复：</text>
							</view>
						</view>
					</view>
					<view class="information1 Li flex width-710">
						<image class="img" src="../../static/business.png" mode=""></image>
						<view class="evaluate flex-column">
							<view class="text1 flex align-items">
								<text class="font-28">张女士</text>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car2.png" mode=""></image>
							</view>
							<view  class="text2 font-30 color-0 flex-column">
								<text>买家写的评论。。。好评</text>
								<view class="Img flex">
									<image class="ing" src="../../static/bikaqu%20(1).gif" mode=""></image>
									<image class="ing" src="../../static/bikaqu%20(1).jpg" mode=""></image>
									<image class="ing" src="../../static/bikaqu%20(2).gif" mode=""></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="content flex-column">
				<view class="time width-710 flex">
					<text class="font-30 color-6">2019 08 21</text>
				</view>
				<view class="Information width-750 background-f flex-column align-items">
					<view class="information Li flex width-710">
						<image class="img" src="../../static/business.png" mode=""></image>
						<view class="evaluate flex-column">
							<view class="text1 flex align-items">
								<text class="font-28">张女士</text>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car1.png" mode=""></image>
								<image class="img1" src="../../static/car2.png" mode=""></image>
							</view>
							<view  class="text2 font-30 color-0 flex-column">
								<text>买家写的评论。。。好评</text>
								<view class="Img flex">
									<image class="ing" src="../../static/bikaqu%20(1).gif" mode=""></image>
									<image class="ing" src="../../static/bikaqu%20(1).jpg" mode=""></image>
									<image class="ing" src="../../static/bikaqu%20(2).gif" mode=""></image>
								</view>
							</view>
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
				Te1:'te',
				Te2:'',
				Te3:'',
				Te4:''
			};
		},
		methods:{
			evaluate (e) {
				if(e._relatedInfo.anchorTargetText === "全部"){
					this.Te1 = 'te';
					this.Te2 = '';
					this.Te3 = '';
					this.Te4 = '';
				} else if(e._relatedInfo.anchorTargetText === "好评"){
					this.Te1 = '';
					this.Te2 = 'te';
					this.Te3 = '';
					this.Te4 = '';
				} else if(e._relatedInfo.anchorTargetText === "中评"){
					this.Te1 = '';
					this.Te2 = '';
					this.Te3 = 'te';
					this.Te4 = '';
				} else if(e._relatedInfo.anchorTargetText === "差评"){
					this.Te1 = '';
					this.Te2 = '';
					this.Te3 = '';
					this.Te4 = 'te';
				}
			}
		}
	}
</script>

<style lang="scss">
	.evaluate{
		.h4{
			margin-top: 20upx;
			margin-left: 20upx;
			flex-wrap: wrap;
			.li{
				width: auto;
				border-radius: 8upx;
				padding: 10upx 20upx;
				margin: 10upx;
				height: 40upx;
				background: #fcd;
				line-height: 50upx;
				text:nth-child(1){
				}
				text:nth-child(2){
					
				}
			}
			.te{
				background: #f00;
				color: #fff;
			}
		}
		.Content{
			.content{
				.time{
					padding-left: 22upx;
					height: 74upx;
					text{
						margin-top: 30upx;
						height: 24upx;
						line-height: 24upx;
					}
				}
				.Information{
					border-top: 1upx solid #D0DAE1;
					border-bottom: 1upx solid #D0DAE1;
					.Li{
						.img{
							margin: 38upx 28upx 46upx 6upx;
							width: 80upx;
							height: 80upx;
							border-radius: 50%;
						}
						.evaluate{
							.text1{
								margin-top: 32upx;
								text{
									margin-right: 20upx;
									color: #666;
								}
								.img1{
									
									width: 28upx;
									height: 28upx;
								}
							}
							.text2{
								margin: 10upx 0 20upx 0;
								.Img{
									.ing{
										margin: 10upx 10upx 10upx 0;
										width: 180upx;
										height: 180upx;
										border: 1upx solid #fdfdfd;
										border-radius: 5upx;
									}
								}
							}
							.text3{
								margin-bottom: 32upx;
								width: 100%;
								height: 80upx;
								background: #F6F8F9;
								color: #7A7A7A;
								flex-direction: row-reverse;
								text:nth-child(1){
									margin-left: 10upx;
								}
							}
						}
									
					}
					.information1{
						border-top: 1upx solid #E2E2E2;
					}
				}
						
			}
		}
	}
</style>
