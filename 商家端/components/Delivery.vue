<template>
	<view class="Delivery">
		<view class="Distribution-information">
			<view class="distribution">
				<view class="distribution-left">
					<view class="Order1 font-28">
						<text>订单号：</text>
						<text>BJ190717KR0142</text>
					</view>
					<view class="commodity font-28">
						<view class="Information">
							<image class="imgs1" src="../../static/commodity.png" mode=""></image>
							<view class="text">
								<text>雀巢 </text>
								<text>优括19L</text>
							</view>
						</view>
						<view class="Number">
							<text class="font-24">x</text>
							<text class="font-28">1</text>
						</view>
					</view>
				</view>
				<view class="Line">
					<text></text>
				</view>
				<view class="distribution-right">
					<text class="time font-30">00:06:52</text>
					<view class="DeliveryClerk" @click="delivery">
						<image class="img" src="../../static/DeliveryClerk.png" mode=""></image>
					</view>
					<view class="Name font-24">
						<text>配送员:</text>
						<text>王三</text>
					</view>
				</view>
			</view>
			<view class="information" v-if="Delivery">
				<view class="Customer">
					<view class="user">
						<image class="User" src="../../static/user.png" mode=""></image>
						<text class="font-26">王先生</text>
					</view>
					<view class="Telephone">
						<image class="telephone" src="../../static/Telephone.png" mode=""></image>
						<text class="font-26">186 **** 1096</text>
					</view>
				</view>
				<view class="Location font-26">
					<image class="location" src="../../static/Location.png" mode=""></image>
					<text>东坝中路 华翰福源D区</text>
					<text>421-1-1302</text>
				</view>
				<view class="time font-26">
					<image class="Time" src="../../static/time.png" mode=""></image>
					<text>下午</text>
					<text>1:00-3:00</text>
				</view>
				<view class="Button font-30">
					<text>变更</text>
					<text>配送员</text>
				</view>
			</view>
		</view>
		<view class="Distribution-information">
			<view class="distribution">
				<view class="distribution-left">
					<view class="Order1 font-28">
						<text>订单号：</text>
						<text>BJ190717KR0142</text>
					</view>
					<view class="commodity font-28">
						<view class="Information">
							<image class="imgs1" src="../../static/commodity.png" mode=""></image>
							<view class="text">
								<text>雀巢 </text>
								<text>优括19L</text>
							</view>
						</view>
						<view class="Number">
							<text class="font-24">x</text>
							<text class="font-28">1</text>
						</view>
					</view>
					<view class="commodity font-28">
						<view class="Information">
							<image class="imgs1" src="../../static/commodity.png" mode=""></image>
							<view class="text">
								<text>雀巢 </text>
								<text>优括19L</text>
							</view>
						</view>
						<view class="Number">
							<text class="font-24">x</text>
							<text class="font-28">1</text>
						</view>
					</view>
				</view>
				<view class="Line">
					<text></text>
				</view>
				<view class="distribution-right">
					<text class="time font-30">00:06:52</text>
					<view class="DeliveryClerk" @click="deliverys">
						<image class="img" src="../../static/DeliveryClerk.png" mode=""></image>
					</view>
					<view class="Name font-24">
						<text>配送员:</text>
						<text>王三</text>
					</view>
				</view>
			</view>
			<view class="information" v-if="Deliverys">
				<view class="Customer">
					<view class="user">
						<image class="User" src="../../static/user.png" mode=""></image>
						<text class="font-26">王先生</text>
					</view>
					<view class="Telephone">
						<image class="telephone" src="../../static/Telephone.png" mode=""></image>
						<text class="font-26">186 **** 1096</text>
					</view>
				</view>
				<view class="Location font-26">
					<image class="location" src="../../static/Location.png" mode=""></image>
					<text>东坝中路 华翰福源D区</text>
					<text>421-1-1302</text>
				</view>
				<view class="time font-26">
					<image class="Time" src="../../static/time.png" mode=""></image>
					<text>下午</text>
					<text>1:00-3:00</text>
				</view>
				<view class="Button font-30">
					<text>变更</text>
					<text>配送员</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Delivery: false,
				Deliverys:false,
			};
		},
		methods:{
			delivery () {
				if(this.Delivery){
					this.Delivery = false,
					this.Deliverys = false
				} else {
					this.Delivery = true,
					this.Deliverys = false
				}
			},
			deliverys () {
				if(this.Deliverys){
					this.Delivery = false,
					this.Deliverys = false
				} else {
					this.Delivery = false,
					this.Deliverys = true
				}
			}
		}
	}
</script>

<style lang="scss">
	.Delivery{
		display: flex;
		flex-direction: column;
		.Distribution-information{
			display: flex;
			flex-direction: column;
			margin-bottom: 18upx;
			.distribution{
				padding-bottom: 10upx;
				border-top: 1upx solid #D0DAE1;
				border-bottom: 1upx solid #D0DAE1;
				display: flex;
				width: 750upx;
				background: #fff;
				.distribution-left{
					display: flex;
					margin-left: 28upx;
					flex-direction: column;
					width: 500upx;
					.Order1{
						margin: 20upx 0 32upx 0;
						display: flex;
						align-items: center;
						height: 28upx;
						font-weight:300;
						color: #000;
						text:nth-child(1){
							font-weight:600;
						}
						text:nth-child(2){
							margin-left: 23upx;
						}
					}
					.commodity{
						height: 95upx;
						margin-bottom: 18upx;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.Information{
							display: flex;
							align-items: center;
							.imgs1{
								width: 95upx;
								height: 95upx;
								border: 1upx solid #CBD2DC;
								border-radius: 10upx;
							}
							.text{
								width: 300upx;
								margin-left: 34upx;
								display: flex;
								align-items: center;
								height: 37upx;
								font-weight:300;
								color: #000000;
								text:nth-child(1){
									height: 37upx;
									padding: 0 12upx;
									line-height: 37upx;
									background: #E8E8E8;
								}
								text:nth-child(2){
									margin-left: 10upx;
								}
							}
						}
						.Number{
							margin-right: 24upx;
							display: flex;
							height: 28upx;
							font-weight:300;
							align-items: center;
						}
					}
				}
				.Line{
					display: flex;
					width: 1upx;
					height: auto;
					text{
						flex: 1;
						margin: 27upx 0;
						background: #CBD2DC;
					}
				}
				.distribution-right{
					margin-top: 10upx;
					align-items: center;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.time:nth-child(1){
						color: #FF0000;
					}
					.DeliveryClerk{
						width: 82upx;
						height: 82upx;
						display: flex;
						.img{
							width: 82upx;
							height: 82upx;
							border-radius: 50%;
						}
					}
					.Name{
						display: flex;
						color: #333;
						text:nth-child(2){
							margin-left: 10upx;
						}
					}
				}
			}
			.information{
				flex: 1;
				display: flex;
				flex-direction: column;
				background: #E6EEF5;
				padding: 0 21upx 0 29upx;
				.Customer{
					margin-top: 20upx;
					display: flex;
					justify-content: space-between;
					.user{
						display: flex;
						height: 60upx;
						align-items: center;
						.User{
							width: 35upx;
							height: 37upx;
						}
						text{
							margin-left: 20upx;
							font-weight:300;
						}
					}
					.Telephone{
						display: flex;
						height: 60upx;
						width: 272upx;
						background: #fff;
						justify-content: center;
						align-items: center;
						border-radius: 30upx;
						.telephone{
							width: 28upx;
							height: 29upx;
							color: #242424;
						}
						text{
							margin-left: 10upx;
							font-weight:300;
							color: #242424;
						}
					}
				}
				.Location{
					margin: 14upx 0 20upx 0;
					display: flex;
					height: 42upx;
					align-items: center;
					.location{
						width: 32upx;
						height: 42upx;
					}
					text:nth-child(2){
						margin-left: 24upx;
						font-weight:300;
						color: #242424;
					}
					text:nth-child(3){
						margin-left: 15upx;
						font-weight:300;
						color: #242424;
					}
				}
				.time{
					display: flex;
					font-weight:300;
					color: #242424;
					.Time{
						width: 36upx;
						height: 36upx;
					}
					text:nth-child(2){
						margin: 0 20upx;
					}
				}
				.Button{
					margin: 33upx 0 42upx 150upx;
					display: flex;
					width:450upx;
					height:80upx;
					border-radius: 40upx;
					background: #0063F8;
					align-items: center;
					justify-content: center;
					color: #fff;
					text:nth-child(2){
						margin: 0 18upx;
					}
				}
			}
		}
	}
</style>
