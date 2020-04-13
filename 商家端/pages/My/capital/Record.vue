<template>
	<view class="Record flex-column height background-F0F4F7">
		<view class="record flex-column align-items">
			<view class="Text font-28 color-f flex align-items width-710 space-between">
				<text class="text1">8月</text>
				<view class="text2 color-0 font-700">
					<text class="font-24">￥</text>
					<text class="font-36">2000</text>
					<text class="font-24">元</text>
				</view>
			</view>
			<view class="Content width-710 background-f flex space-between align-items">
				<view class="Content-left flex align-items">
					<view class="content-left flex-column align-items">
						<image class="ig" src="../../../static/week.png" mode=""></image>
						<text class="font-30 color-0">29</text>
						<text class="font-14 color-f">星期五</text>
					</view>
					<view class="content-right font-24 color-6">
						提现
					</view>
				</view>
				<view class="Content-right">
					<text class="font-36">-1000</text>
					<text class="font-24">元</text>
				</view>
			</view>
			<view class="Content width-710 background-f flex space-between align-items">
				<view class="Content-left flex align-items">
					<view class="content-left flex-column align-items">
						<image class="ig" src="../../../static/week.png" mode=""></image>
						<text class="font-30 color-0">29</text>
						<text class="font-14 color-f">星期五</text>
					</view>
					<view class="content-right font-24 color-6">
						提现
					</view>
				</view>
				<view class="Content-right">
					<text class="font-36">-1000</text>
					<text class="font-24">元</text>
				</view>
			</view>
		</view>
		
		<view class="record flex-column align-items">
			<view class="Text font-28 color-f flex align-items width-710 space-between">
				<text class="text1">8月</text>
				<view class="text2 color-0 font-700">
					<text class="font-24">￥</text>
					<text class="font-36">2000</text>
					<text class="font-24">元</text>
				</view>
			</view>
			<view class="Content width-710 background-f flex space-between align-items">
				<view class="Content-left flex align-items">
					<view class="content-left flex-column align-items">
						<image class="ig" src="../../../static/week.png" mode=""></image>
						<text class="font-30 color-0">29</text>
						<text class="font-14 color-f">星期五</text>
					</view>
					<view class="content-right font-24 color-6">
						提现
					</view>
				</view>
				<view class="Content-right">
					<text class="font-36">-1000</text>
					<text class="font-24">元</text>
				</view>
			</view>
			<view class="Content width-710 background-f flex space-between align-items">
				<view class="Content-left flex align-items">
					<view class="content-left flex-column align-items">
						<image class="ig" src="../../../static/week.png" mode=""></image>
						<text class="font-30 color-0">29</text>
						<text class="font-14 color-f">星期五</text>
					</view>
					<view class="content-right font-24 color-6">
						提现
					</view>
				</view>
				<view class="Content-right">
					<text class="font-36">-1000</text>
					<text class="font-24">元</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style lang="scss">
	.Record{
		.record{
			
			.Text{
				height: 110upx;
				.text1{
					margin-left: 18upx;
					text-align: center;
					line-height: 68upx;
					height: 68upx;
					width: 68upx;
					border-radius: 50%;
					background: #7C9AD5;
					color: #fff;
				}
				.text2{
					margin-right: 34upx;
					text:nth-child(2){
						margin: 0 5upx;
					}
				}
			}
			.Content{
				margin-bottom: 18upx;
				height: 100upx;
				border-radius: 10upx;
				.Content-left{
					margin-left: 26upx;
					.content-left{
						margin-right: 26upx;
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
						margin-left: 32upx;
					}
				}
				.Content-right{
					margin-right: 34upx;
					color: rgba(37,170,72,1);
					text:nth-child(2){
						margin-left: 8upx;
					}
				}
			}
		}
		
	}
</style>
