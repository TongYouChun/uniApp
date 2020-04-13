<template>
	<view class="income flex-column height background-F0F4F7">
		<view class="Title flex space-between align-items">
			<view class="Title-left font-30">
				<text>2019 08 29</text>
				<text>收入流水</text>
			</view>
			<view class="Title-right">
				<text class="font-28 color-0 font-700">店铺名称</text>
			</view>
		</view>
		<view class="content flex-column background-f width-710">
			<view class="Order border-bottom flex space-between align-items">
				<view class="Order-left flex space-between">
					<view class="order-left flex-column height justify-content">
						<text class="font-24 color-9">订单号</text>
						<text class="font-30 color-0">BJ20190830FU12</text>
					</view>
					<view class="order-right flex align-items">
						<text class="font-24 color-9 height flex align-items">10:41:39</text>
					</view>
				</view>
				<view class="Order-right">
					<text class="font-30 color-0">¥</text>
					<text class="font-48 color-0">21</text>
				</view>
			</view>
			<view class="Order border-bottom flex space-between align-items">
				<view class="Order-left flex space-between">
					<view class="order-left flex-column height justify-content">
						<text class="font-24 color-9">订单号</text>
						<text class="font-30 color-0">BJ20190830FU12</text>
					</view>
					<view class="order-right flex align-items">
						<text class="font-24 color-9 height flex align-items">10:41:39</text>
					</view>
				</view>
				<view class="Order-right">
					<text class="font-30 color-0">¥</text>
					<text class="font-48 color-0">21</text>
				</view>
			</view>
			<view class="Order border-bottom flex space-between align-items">
				<view class="Order-left flex space-between">
					<view class="order-left flex-column height justify-content">
						<text class="font-24 color-9">订单号</text>
						<text class="font-30 color-0">BJ20190830FU12</text>
					</view>
					<view class="order-right flex align-items">
						<text class="font-24 color-9 height flex align-items">10:41:39</text>
					</view>
				</view>
				<view class="Order-right">
					<text class="font-30 color-0">¥</text>
					<text class="font-48 color-0">21</text>
				</view>
			</view>
			<view class="Order border-bottom flex space-between align-items">
				<view class="Order-left flex space-between">
					<view class="order-left flex-column height justify-content">
						<text class="font-24 color-9">订单号</text>
						<text class="font-30 color-0">BJ20190830FU12</text>
					</view>
					<view class="order-right flex align-items">
						<text class="font-24 color-9 height flex align-items">10:41:39</text>
					</view>
				</view>
				<view class="Order-right">
					<text class="font-30 color-0">¥</text>
					<text class="font-48 color-0">21</text>
				</view>
			</view>
			<view class="Order border-bottom flex space-between align-items">
				<view class="Order-left flex space-between">
					<view class="order-left flex-column height justify-content">
						<text class="font-24 color-9">订单号</text>
						<text class="font-30 color-0">BJ20190830FU12</text>
					</view>
					<view class="order-right flex align-items">
						<text class="font-24 color-9 height flex align-items">10:41:39</text>
					</view>
				</view>
				<view class="Order-right">
					<text class="font-30 color-0">¥</text>
					<text class="font-48 color-0">21</text>
				</view>
			</view>
			<view class="Order border-bottom flex space-between align-items">
				<view class="Order-left flex space-between">
					<view class="order-left flex-column height justify-content">
						<text class="font-24 color-9">订单号</text>
						<text class="font-30 color-0">BJ20190830FU12</text>
					</view>
					<view class="order-right flex align-items">
						<text class="font-24 color-9 height flex align-items">10:41:39</text>
					</view>
				</view>
				<view class="Order-right">
					<text class="font-30 color-0">¥</text>
					<text class="font-48 color-0">21</text>
				</view>
			</view>
			<view class="Total flex align-items space-between">
				<text class="Text font-28">合计</text>
				<view class="total">
					<text class="font-30">¥</text>
					<text class="font-48">530</text>
					<text class="font-36">元</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.income{
		.Title{
			margin: 32upx 45upx 0 27upx;
			height: 78upx;
			color: #7C9AD5;
			.Title-left{
				text:nth-child(1){
					margin-right: 16upx;
				}
				
			}
			.Title-right{}
		}
		.content{
			margin: 0 20upx;
			border-radius: 10upx;
			.Order{
				height: 128upx;
				margin: 0 25upx;
				.Order-left{
					height: 100%;
					width: 472upx;
					.order-left{
						
					}
					.order-right{
					}
				}
			}
			.Total{
				height: 152upx;
				.Text{
					width: 496upx;
					text-align: right;
				}
				.total{
					color: #FF4B4B;
					margin-right: 30upx;
					text:nth-child(2){
						margin: 0 10upx;
					}
				}
			}
		}
	}
</style>
