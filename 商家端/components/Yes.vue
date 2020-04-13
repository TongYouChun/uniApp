<template>
	<view class="Yes-commodity flex-column align-items height width-750">
		<image class="Yes" src="../../../static/Yes.png" mode=""></image>
		<view class="Add  width-750 flex space-between">
			<text></text>
			<view class="add flex align-items justify-content background-f" @click="addCommodity">
				<image class="im" src="../../../static/add.png" mode=""></image>
				<text class="font-30 color-18BA42 font-600">添加商品</text>
			</view>
		</view>
		<view class="content flex-column flex-overflow">
			<view class="WaterTicket flex-column width-750  background-f border-top border-bottom">
				<view class="h4 margin_10_14_0_26 font-24 color-0 font-600 border-bottom">
					水票
				</view>
				<view class="Commodity flex align-items space-between">
					<view class="commodity flex">
						<image class="img width-128 height-128" src="../../../static/commodity.png" mode="" @touchmove="touchT1"></image>
						<view class="text flex-column space-between" @touchmove="touchM1">
							<view class="tex1 flex font-30">
								<text class="color-0">娃哈哈 水券</text>
								<text class="color-9">（10张）</text>
							</view>
							<text class="font-24 color-8">可兑换10桶19L娃哈哈水</text>
						</view>
					</view>
					<view class="Price flex height">
						<view class="text flex-column height justify-content align-items">
							<text class="font-30 color-0">999</text>
							<text class="font-24 color-9">库存</text>
						</view>
						<view class="qian" v-if="qian1 ? false : true">
							<text class="font-24 color-0">￥</text>
							<text class="font-40 color-0">210</text>
						</view>
						<view class="delete font-30 color-f" v-if="qian1 ? true : false">
							删除
						</view>
					</view>
				</view>
			</view>
			
			<view class="WaterTicket flex-column width-750  background-f border-top border-bottom">
				<view class="h4 margin_10_14_0_26 font-24 color-0 font-600 border-bottom">
					雀巢
				</view>
				<view class="Commodity flex align-items space-between border-bottom_dashed" >
					<view class="commodity flex">
						<image class="img width-128 height-128" src="../../../static/commodity.png" mode="" @touchmove="touchT2"></image>
						<view class="text flex-column space-between" @touchmove="touchM2">
							<view class="tex1 flex font-30">
								<text class="color-0">娃哈哈 水券</text>
								<text class="color-9">（10张）</text>
							</view>
							<text class="font-24 color-8">可兑换10桶19L娃哈哈水</text>
						</view>
					</view>
					<view class="Price flex height">
						<view class="text flex-column height justify-content align-items">
							<text class="font-30 color-0">999</text>
							<text class="font-24 color-9">库存</text>
						</view>
						<view class="qian" v-if="qian2 ? false : true">
							<text class="font-24 color-0">￥</text>
							<text class="font-40 color-0">210</text>
						</view>
						<view class="delete font-30 color-f" v-if="qian2 ? true : false">
							删除
						</view>
					</view>
				</view>
				<view class="Commodity flex align-items space-between align-items">
					<view class="commodity flex">
						<image class="img width-128 height-128" src="../../../static/commodity.png" mode="" @touchmove="touchT3"></image>
						<view class="text flex-column space-between" @touchmove="touchM3">
							<view class="tex1 flex font-30">
								<text class="color-0">18.9L雀巢优活蒸馏水</text>
								<text class="color-9"></text>
							</view>
							<text class="font-24 color-8">蒸馏水</text>
						</view>
					</view>
					<view class="Price flex height">
						<view class="text flex-column height justify-content align-items">
							<text class="font-30 color-0">999</text>
							<text class="font-24 color-9">库存</text>
						</view>
						<view class="qian" v-if="qian3 ? false : true">
							<text class="font-24 color-0">￥</text>
							<text class="font-40 color-0">210</text>
						</view>
						<view class="delete font-30 color-f" v-if="qian3 ? true : false">
							删除
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
				qian1: false,
				qian2: false,
				qian3: false
			};
		},
		methods:{
			touchT1 () {
				this.qian1 = false;
			},
			touchM1 () {
				this.qian1 = true;
			},
			touchT2 () {
				this.qian2 = false;
			},
			touchM2 () {
				this.qian2 = true;
			},
			touchT3 () {
				this.qian3 = false;
			},
			touchM3 () {
				this.qian3 = true;
			},
			addCommodity () {
				uni.navigateTo({
					url: "/pages/My/commodity/addproduct"
				})
			}
		}
	}
</script>

<style lang="scss">
	.Yes-commodity{
		position: relative;
		flex: 1;
		z-index: 0;
		.Yes{
			z-index: -1;
			position: absolute;
			top: 0;
			left: 0;
			width: 750upx;
			height: 267upx;
		}
		.Add{
			height: 70upx;
			margin: 38upx 20upx 25upx 0;
			.add{
				width: 200upx;
				height: 70upx;
				border: 2upx solid #18BA42;
				border-radius: 10upx;
				.im{
					margin-right: 10upx;
					height: 27upx;
					width: 27upx;
				}
			}
		}
		.content{
			.WaterTicket{
				margin-bottom: 20upx;
				.Commodity{
					height: 170upx;
					.commodity{
						.img{
							margin: 0 21upx;
							border: 2upx solid #D4D2D2;
							border-radius: 10upx;
						}
						.text{
							margin: 10upx 0;
							width: 370upx;
						}
					}
					.Price{
						flex: 1;
						.text{
							margin-right: 37upx;
						}
						.qian{
							padding-top: 70upx;
						}
						.delete {
							width: 100%;
							height: 170upx;
							text-align: center;
							line-height: 170upx;
							background: #E16B6B;
						}
					}
				}
			}
		}
	}
</style>
