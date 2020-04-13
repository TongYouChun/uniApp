<template>
	<view class="Information-container flex-column align-items">
		<view class="h3 font-36 color-f">
			<text>订单已完成</text>
		</view>
		<view class="Order-information flex-column">
			<view class="h4 font-24 font-600 color-0">
				订单信息
			</view>
			<view class="information flex space-between align-items">
				<view class="Commodity-name flex space-between align-items">
					<view class="commodity flex align-items">
						<image class="img" src="../../../static/commodity.png" mode=""></image>
						<view class="name flex-column">
							<text class="font-30">娃哈哈送水券 （十张）</text>
							<text class="font-24">可兑换10桶19L娃哈哈水</text>
						</view>
					</view>
					<view class="Number font-34">
						x1
					</view>
				</view>
				<text class="money font-36">210</text>
			</view>
			<view class="information flex space-between align-items">
				<view class="Commodity-name flex space-between align-items">
					<view class="commodity flex align-items">
						<image class="img" src="../../../static/commodity.png" mode=""></image>
						<view class="name flex-column">
							<text class="font-30">娃哈哈送水券 （十张）</text>
							<text class="font-24">可兑换10桶19L娃哈哈水</text>
						</view>
					</view>
					<view class="Number font-34">
						x1
					</view>
				</view>
				<text class="money font-36">210</text>
			</view>
			
			<view class="Coupon Li flex space-between align-items">
				<view class="coupon lis flex font-24">
					<text>优惠券</text>
					<text>商家优惠券</text>
				</view>
				<text class="text font-30">-10</text>
			</view>
			<view class="Integral Li flex space-between">
				<view class="integral lis flex font-24">
					<text>积分</text>
					<text>-20分</text>
				</view>
				<text class="text font-30">-2</text>
			</view>
			<view class="Commission Li flex space-between">
				<view class="commission lis flex font-24">
					<text>平台佣金</text>
					<text>适用费率 2%</text>
					<text class="color-f flex justify-content align-items">?</text>
				</view>
				<text class="text font-30">-2</text>
			</view>
			<view class="Price flex align-items space-between">
				<view class="price flex align-items space-between">
					<view class="text1 font-24">
						<text>下单时间:</text>
						<text>2019-07-18 17:31:44</text>
					</view>
					<text class="font-22">实收</text>
				</view>
				<text class="text font-36">￥219</text>
			</view>
		</view>
		
		<view class='Delivery'>
		    <text class='font-24'>配送信息</text>
			<view class='ReceivingGoods'>
				<image class='img' src='../../../static/ReceivingGoods.png'></image>
				<text class='font-28'>收货人</text>
				<view class='contact font-28'>
		        <text>李中华</text>
		        <text>186 1323 1875</text>
			</view>
			</view>
		    <view class='address align-items'>
		      <image class='img' src='../../../static/position.png'></image>
		      <text class='font-28'>地址</text>
		      <text class='font-24'>北京市朝阳区 芍药居甲乙2号院 12号楼 芍药居综合楼 306</text>
		    </view>
		    <view class='time'>
		      <image class='img' src='../../../static/time1.png'></image>
		      <text class='font-28'> 配送时</text>
		      <text class='font-24'>未指定</text>
		    </view>
		</view>
		  
		<view class="Delivery-time flex-column background-f width-670 padding_10_14_0_26">
			<view class="h4 padding_14_0_22_0 font-24 color-0 font-600 border-bottom">
				配送时效
			</view>
			<view class="li font-28 flex color-0">
				<text>配送员</text>
				<text>张涛</text>
			</view>
			<view class="li font-28 flex color-0">
				<text>接单时间</text>
				<text>07-17</text>
				<text>15:41</text>
			</view>
			<view class="li font-28 flex color-0">
				<text>送达时间</text>
				<text>07-17</text>
				<text>18:21</text>
			</view>
			<view class="evaluate flex align-items space-between border-top">
				<view class="text1 flex font-28 color-f">
					<text class="background-00AA20">优秀</text>
					<text class="background-0096FF">良好</text>
					<text class="background-FF9000">超时</text>
				</view>
				<view class="text2 flex space-between space-between">
					<text class="font-22 color-9">用时</text>
					<text class="font-28 color-f00 font-600">2 小时 40 分</text>
				</view>
			</view>
		</view>
		<view class="evaluate flex-column background-f width-670 padding_10_14_0_26">
			<view class="h4 padding_14_0_22_0 font-24 color-0 font-600 border-bottom">
				评价状态
			</view>
			<view class="text flex space-between align-items">
				<text class="font-28 color-8">系统默认好评...</text>
				<text class="font-36 color-f00 ">+1</text>
			</view>
		</view>
		<view class="Complaint flex-column background-f width-670 padding_10_14_0_26">
			<view class="h4 padding_14_0_22_0 font-24 color-0 font-600 border-bottom">
				投诉信息
			</view>
			<view class="text flex align-items justify-content">
				<text class="font-28 color-8">无</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.Information-container{
		flex: 1;
		background: #F0F4F7;
		padding-bottom: 72upx;
		.h3{
			margin: 16upx 0 19upx 0;
			width: 710upx;
			line-height: 90upx;
			text-align: center;
			background: #18BA42;
		}
		.Order-information{
			padding: 10upx 14upx 24upx 26upx;
			width: 670upx;
			background: #fff;
			.h4{
				line-height: 62upx;
				color: #000;
				border-bottom: 1upx solid #E6E6E6;
			}
			.information{
				margin: 26upx 24upx 10upx 0;
				height: 120upx;
				.Commodity-name{
					height: 100%;
					.commodity{
						width: 468upx;
						.img{
							width: 120upx;
							height: 120upx;
							border: 1upx solid #D4D2D2;
							border-radius: 10upx;
						}
						.name{
							margin-left: 20upx;
							text:nth-child(1){
								color: #000000;
							}
							text:nth-child(2){
								color: #888888;
							}
						}
					}
				}
			}
			
			.Li{
				margin: 30upx 0 10upx 0;
				height: 40upx;
				.lis{
					text:nth-child(1){
						width:120upx;
						height: 40upx;
						line-height: 40upx;
						text-align: center;
					}
					text:nth-child(2){
						margin-left: 22upx;
						color: #999999;
					}
				}
				.coupon{
					text:nth-child(1){
						background: #FFCFCF;
						border: 1upx solid #FF7F7F;
						color: #FF0000;
					}
				}
				.integral{
					text:nth-child(1){
						background: #B5EBFF;
						border: 1upx solid #21B1CB;
						color: #1889E5;
					}
				}
				.commission{
					text:nth-child(1){
						background: #E2FFF5;
						border: 1upx solid #188144;
						color: #118827;
					}
					text:nth-child(3){
						margin-left: 34upx;
						height: 32upx;
						line-height: 17upx;
						width: 32upx;
						background: #69B7FF;
						border-radius: 50%;
					}
				}
				.text{
					margin-right: 24upx;
					color: #FF0000;
				}
			}
			.Commission{
				margin-top: 30upx;
				padding: 22upx 0 20upx 0;
				border-top: 1upx solid #E6E6E6;
				border-bottom: 1upx solid #E6E6E6;
			}
			.Price{
				margin-top: 30upx;
				.price{
					width: 530upx;
					height: 30upx;
					color: #888888;
					.text1{
						text:nth-child(2){
							margin-left: 15upx;
						}
					}
				}
				.text{
					margin-right: 24rpx;
				}
			}
		}

		.Delivery{
			margin: 34upx 0 18upx 0;
			padding: 10upx 14upx 24upx 26upx;
			width: 670upx;
			background: #fff;
			display: flex;
			flex-direction: column;
		}
		.Delivery>text{
		  font-weight:bold;
		  color:rgba(0,0,0,1);
		  border-bottom: 1rpx solid #E6E6E6;
		  line-height:70rpx;
		}
		.Delivery .ReceivingGoods ,.Delivery .address ,.Delivery .time{
		  margin-top: 35rpx;
		  display: flex;
		}
		.Delivery .ReceivingGoods .img{
		  width: 35rpx;
		  height: 37rpx;
		}
		.Delivery .address .img{
		  width: 32rpx;
		  height: 42rpx;
		}
		.Delivery .time .img{
		  width: 38rpx;
		  height: 38rpx;
		}
		.Delivery .ReceivingGoods>text:nth-child(2),.Delivery .address>text:nth-child(2) ,.Delivery .time>text:nth-child(2){
		  margin-left:25rpx; 
		  width: 88rpx;
		  font-weight:300;
		  color:rgba(0,0,0,1);
		}
		.Delivery .address>text:nth-child(3) {
			   width: 410rpx;
			font-weight:300;
			color:rgba(0,0,0,1);
		}
		.Delivery .ReceivingGoods .contact,.Delivery .address>text:nth-child(3) ,.Delivery .time>text:nth-child(3){
		  margin-left: 54rpx;
		}
		.Delivery .ReceivingGoods .contact>text{
		  font-weight:300;
		  color:rgba(0,0,0,1);
		}
		.Delivery .ReceivingGoods .contact>text:nth-child(2){
		  margin-left: 40rpx;
		}
		.Delivery .time>text:nth-child(3){
		  font-weight:300;
		  color:rgba(153,153,153,1);
		}
		.Delivery-time{
			.li{
				margin: 30upx 0 15upx 0;
				text:nth-child(1){width: 112upx;}
				text:nth-child(2){margin-left: 75upx;}
				text:nth-child(3){margin-left: 10upx;}
			}
			.evaluate{
				margin-top: 15upx;
				height: 78upx;
				.text1{
					text{
						width: 88upx;
						height:55upx;
						line-height:55upx;
						text-align: center;
						margin: 0 9upx;
					}
				}
				.text2{
					width: 248upx;
					margin-right: 20upx;
				}
			}
		}
		.evaluate{
			margin: 20upx 0;
			.text{
				height: 114upx;
				text:nth-child(1){margin-left: 26upx;}
				text:nth-child(2){margin-right: 40upx;}
			}
		}
		.Complaint{
			.text{
				height: 114upx;
			}
		}
	}
</style>
