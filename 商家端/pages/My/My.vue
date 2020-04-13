<template>
	<view class="My-content">
		<view class="User">
			<image class="Background" src="../../static/My-chart.png" mode=""></image>
			<view class="User-name">
				<image class="business" src="../../static/business.png" mode=""></image>
				<view class="name">
					<text class="font-36">July</text>
					<text class="font-24">管理员</text>
				</view>
			</view>
			<view class="Order">
				<text class="text font-24">本月订单</text>
				<view class="list">
					<text class="font-700">221</text>
					<text class="font-24">笔</text>
				</view>
				<view class="spend font-24">
					本月流水（元）
				</view>
				<view class="money">
					<text class="font-700">1897.62</text>
					<text class="font-24">元</text>
				</view>
			</view>
		</view>
		<view class="Option flex-column flex-overflow">
			<view class="option">
				<view class="Function font-28">
					<view class="li">
						<view class="img img3" @click="staff">
							<image src="../../static/Icon/Icon3.png" mode=""></image>
						</view>
						<text>员工管理</text>
					</view>
					<view class="li">
						<view class="img img2" @click="commodity">
							<image src="../../static/Icon/Icon2.png" mode=""></image>
						</view>
						<text>商品管理</text>
					</view>
					<view class="li">
						<view class="img img1" @click="query">
							<image src="../../static/Icon/Icon1.png" mode=""></image>
						</view>
						<text>订单查询</text>
					</view>
					
					<view class="li" @click="activity">
						<view class="img img6">
							<image src="../../static/Icon/Icon6.png" mode=""></image>
						</view>
						<text>活动促销</text>
					</view>
					<view class="li" @click="capital">
						<view class="img img5">
							<image src="../../static/Icon/Icon5.png" mode=""></image>
						</view>
						<text>资金管理</text>
					</view>
					<view class="li" @click="group">
						<view class="img img4">
							<image src="../../static/Icon/Icon4.png" mode=""></image>
						</view>
						<text>小组管理</text>
					</view>
					
					<view class="li">
						<view class="img img9">
							<image src="../../static/Icon/Icon9.png" mode=""></image>
						</view>
						<text>资质相关</text>
					</view>
					<view class="li">
						<view class="img img8">
							<image src="../../static/Icon/Icon8.png" mode=""></image>
						</view>
						<text>客户管理</text>
					</view>
					<view class="li">
						<view class="img img7">
							<image src="../../static/Icon/Icon7.png" mode=""></image>
						</view>
						<text>销量分析</text>
					</view>
					
					<view class="li">
						<view class="img img12">
							<image src="../../static/Icon/Icon12.png" mode=""></image>
						</view>
						<text>平台帮助</text>
					</view>
					<view class="li">
						<view class="img img11">
							<image src="../../static/Icon/Icon11.png" mode=""></image>
						</view>
						<text>分店管理</text>
					</view>
					<view class="li">
						<view class="img img10">
							<image src="../../static/Icon/Icon10.png" mode=""></image>
						</view>
						<text>店铺设置</text>
					</view>
					
					<view class="li">
						<view class="img img13">
							<image src="../../static/Icon/Icon13.png" mode=""></image>
						</view>
						<text>平台费率</text>
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
				
			};
		},
		methods:{
			activity () {
				uni.navigateTo({
					url: "/pages/My/activity/activity"
				})
			},
			capital () {
				uni.navigateTo({
					url: "/pages/My/capital/capital"
				})
			},
			group () {
				uni.navigateTo({
					url: "/pages/My/group/group"
				})
			},
			staff () {
				uni.navigateTo({
					url: "/pages/My/staff/staff"
				})
			},
			commodity () {
				uni.navigateTo({
					url: "/pages/My/commodity/commodity"
				})
			},
			query () {
				uni.navigateTo({
					url: "/pages/My/query/query"
				})
			}
		}
	}
</script>

<style lang="scss">
	.My-content{
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F0F4F7;
		.User{
			margin: 20upx 0;
			display: flex;
			width: 710upx;
			height: 320upx;
			position: relative;
			z-index: 0;
			.Background{
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				width: 710upx;
				height: 320upx;
				border-radius: 25upx;
			}
			.User-name{
				margin-top: 50upx;
				display: flex;
				width: 380upx;
				height: auto;
				.business{
					margin-left: 60upx;
					width: 138upx;
					height: 138upx;
					border: 4upx solid #fff;
					border-radius: 50%;
				}
				.name{
					margin-left: 25upx;
					display: flex;
					flex-direction: column;
					color: #fff;
				}
			}
			.Order{
				margin-top: 68upx;
				flex: 1;
				display: flex;
				flex-direction: column;
				color: #fff;
				.list{
					text:nth-child(1){
						font-size: 60upx;
						margin-right: 15upx;
					}
				}
				.money{
					text:nth-child(1){
						font-size: 60upx;
						margin-right: 15upx;
					}
				}
			}
		}
		.Option{
			background: #fff;
			border-radius: 10upx;
			.option{
				flex: 1;
				display: flex;
				flex-direction: column;
				.Function{
					width: 710upx;
					display: flex;
					flex-wrap: wrap;
					flex-direction: row-reverse;
					justify-content: space-between;
					.li{
						width: 236upx;
						height: 189upx;
						display: flex;
						flex-direction: column;
						align-items: center;
						.img1{
							background: #FDC695;
						}
						.img2{
							background: #65DBAF;
						}
						.img3{
							background: #A2B6FD;
						}
						.img4{
							background: #A2B6FD;
						}
						.img5{
							background: #FFBF93;
						}
						.img6{
							background: #65DBAF;
						}
						.img7{
							background: #FF8A9D;
						}
						.img8{
							background: #80E6F5;
						}
						.img9{
							background: #FEBE93;
						}
						.img10{
							background: #60DAAF;
						}
						.img11{
							background: #FEBE93;
						}
						.img12{
							background: #80E6F5;
						}
						.img13{
							background: #60DAAF;
						}
						.img{
							margin-top: 40upx;
							width: 83upx;
							height: 83upx;
							border-radius: 30upx;
							display: flex;
							align-items: center;
							justify-content: center;
							image{
								width: 48upx;
								height: 48upx;
							}
						}
						text{
							margin-top: 22upx;
							color: #666;
						}
					}
				}
			}
		}
	}
</style>
