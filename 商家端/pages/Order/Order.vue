<template>
	<view class="Order-content">
		<image class="imgs" src="../../static/Background-map.png" mode=""></image>
		<view class="Order-user">
			<view class="user-chart">
				<image class="imgs1" src="../../static/HeadPortrait1.png" mode=""></image>
				<text class="text font-24">管理员</text>
			</view>
			<view class="user-Name">
				<text class="text font-36 font-700">July</text>
				<view class="Score">
					<text class="font-28">满意度</text>
					<view class="Stars">
						<view class="Star">
							<image class="img" src="../../static/Star.png" mode=""></image>
							<image class="img" src="../../static/Stars.png" mode=""></image>
						</view>
						<view class="Star">
							<image class="img" src="../../static/Star.png" mode=""></image>
							<image class="img" src="../../static/Stars.png" mode=""></image>
						</view>
						<view class="Star">
							<image class="img" src="../../static/Star.png" mode=""></image>
							<image class="img" src="../../static/Stars.png" mode=""></image>
						</view>
						<view class="Star">
							<image class="img" src="../../static/Star.png" mode=""></image>
							<image class="img" src="../../static/Stars.png" mode=""></image>
						</view>
						<view class="Star">
							<image class="img" src="../../static/Star.png" mode=""></image>
							<image class="img" src="../../static/Star1s.png" mode=""></image>
						</view>
					</view>
					<view class="score font-28">
					<text>92</text>
					<text>分</text>
					</view>
				</view>
				<view class="List font-28">
					<text class="text">订单效率</text>
					<view class="list">
						<text>84</text>
						<text>分/单</text>
					</view>
				</view>
			</view>
		</view>
		<view class="Order-order">
			<view class="order">
				<view class="text">
					<text class="font-26">今日订单</text>
					<text>49</text>
				</view>
				<text class="te"></text>
				<view class="text">
					<text class="font-26">待配送</text>
					<text>6</text>
				</view>
				<text class="te"></text>
				<view class="text">
					<text class="font-26">待分配</text>
					<text>4</text>
				</view>
			</view>
			<view class="order-distribution">
				<view class="order-tab">
					<view class="tab font-28">
						<view class="li" :class="Delivery" @click="option"><text>待配送</text><text></text></view>
						<view class="li" :class="distribution" @click="option"><text>待分配</text><text></text></view>
						<view class="li" :class="whole" @click="option"><text>全部</text><text></text></view>
					</view>
				</view>
				<view class="content">
					<distribution v-if="Distribution"/>
					<Delivery v-if="delivery"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import distribution from '../../components/distribution.vue';
	import Delivery from '../../components/Delivery.vue';
	export default {
		data() {
			return {
				Delivery:'',
				distribution: 'blue',
				whole:'',
				Distribution: true,
				delivery: false
			}
		},
		components:{
			distribution,
			Delivery
		},
		methods: {
			option (e) {
				if(e._relatedInfo.anchorTargetText === '待配送'){
					this.Delivery='blue',
					this.distribution = '',
					this.whole = '',
					this.Distribution = false,
					this.delivery = true
				}else if(e._relatedInfo.anchorTargetText === '待分配'){
					this.Delivery='',
					this.distribution = 'blue',
					this.whole = '',
					this.Distribution = true,
					this.delivery = false
				}else if(e._relatedInfo.anchorTargetText === '全部'){
					this.Delivery='',
					this.distribution = '',
					this.whole = 'blue',
					this.Distribution = true,
					this.delivery = true
				}
				// console.log(e._relatedInfo.anchorTargetText)
			}
		}
	}
</script>

<style lang="scss">
	    .Order-content{
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			background: #F0F4F7;
			z-index: 0;
			.imgs{
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				width: 750upx;
				height: 207upx;
			}
			.Order-user{
				margin: 60upx 0 20upx 0;
				display: flex;
				width: 710upx;
				height: 295upx;
				background: #fff;
				border-radius: 10upx;
				.user-chart{
					width: 190upx;
					height: 295upx;
					display: flex;
					flex-direction: column;
					align-items: center;
					.imgs1{
						margin-top: 42upx;
						width: 134upx;
						height: 134upx;
						border: 1upx solid #D0D0D0;
						border-radius: 50%;
					}	
					.text{
						margin-top: 22upx;
						width:100upx;
						height:38upx;
						line-height:38upx;
						text-align: center;
						color: #fff;
						background: #1C7FEF;
						border-radius: 19upx;
					}
				}
				.user-Name{
					margin-left: 5upx;
					flex: 1;
					margin-top: 70upx;
					display: flex;
					flex-direction: column;
					.text{
						color: #333333;
					}
					.Score{
						height: 28upx;
						display: flex;
						align-items: center;
						text{
							font-weight:400;
							color:rgba(36,36,36,1);
						}
						.Stars{
							margin: 0 14upx 0 24upx;
							height: 28upx;
							display: flex;
							align-items: center;
							.Star{
								height: 28upx;
								display: flex;
								align-items: center;
								.img{
									width: 14upx;
									height: 26upx;
								}
							}
						}
						.score{
							height: 28upx;
							display: flex;
							font-weight:400;
							align-items: center;
							text:nth-child(1){
								color: #E52626;
							}
							text:nth-child(2){
								color: #242424;
							}
						}
					}

					.List{
						display: flex;
						margin-top: 26upx;
						.text{
							font-weight:400;
							color:rgba(36,36,36,1);
						}
						.list{
							margin-left: 14upx;
							display: flex;
							font-weight:400;
							text:nth-child(1){
								color: #E52626;
							}
							text:nth-child(2){
								color: #242424;
							}
						}
					}
				}
			}
			.Order-order{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				.order{
					margin-bottom: 23upx;
					width:710upx;
					height:141upx;
					display: flex;
					background: #fff;
					align-items: center;
					border-radius: 10upx;
					.text{
						flex: 1;
						display: flex;
						flex-direction: column;
						align-items: center;
						text:nth-child(1){
							color: #999999;
						}
						text:nth-child(2){
							margin-top: 10upx;
							font-size: 40upx;
							color: #242424;
						}
					}
					.te{
						width: 1upx;
						height: 78upx;
						background: #EBEBEB;
					}
				}
				.order-distribution{
					flex: 1;
					display: flex;
					flex-direction: column;
					.order-tab{
						display: flex;
						justify-content: center;
						width: 750upx;
						height: 76upx;
						background: #fff;
						.tab{
							display: flex;
							width: 378upx;
							height: 76upx;
							justify-content: space-between;
							.li{
								display: flex;
								flex-direction: column;
								align-items: center;
								height: 76upx;
								color: #666666;
								text:nth-child(1){
									height: 70upx;
									line-height: 70upx;
								}
							}
							.blue{
								color: #000;
								text:nth-child(2){
									width: 52upx;
									height: 6upx;
									background: #3A92E7;
									border-radius: 3upx;
								}
							}
						}
					}
					.content{
						flex: 1;
						overflow-y: auto;
						display: flex;
						flex-direction: column;
					}
				}
			}
		}
</style>
