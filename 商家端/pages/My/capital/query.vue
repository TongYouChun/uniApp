<template>
	<view class="query flex-column height align-items background-F0F4F7">
		<view class="container background-f width-750 font-30">
			<view class="information flex border-bottom align-items">
				<text class="Text">订单号</text>
				<input class="input" type="text" value="" placeholder="请输入订单号查询"/>
			</view>
			<view class="Verification flex align-items space-between">
				<view class="Verification-Left height flex align-items">
					<text class="Text1 flex">验证码</text>
					<input class="input" type="text" value="" placeholder="输入验证"/>
				</view>
				
				<view class="Verification-right height flex align-items">
					<text class="Text2">5674</text>
					<image class="img" src="../../../static/Load.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="Query width-710">
			<button class="but" type="primary" @click="button">查询</button>
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
			button () {
				uni.navigateTo({
					url: "/pages/My/query/Information"
				})
			}
		}
	}
</script>

<style lang="scss">
	.query{
		.container{
			margin: 35upx 0 46upx 0;
			.information{
				margin: 0 24upx 0 16upx;
				height: 100upx;
				.Text{
					margin-left: 64upx;
					height: 36upx;
				}
				.input{
					margin-left: 46upx;
					width: 400upx;
					height: 36upx;
				}
			}
			.Verification{
				margin: 0 24upx 0 16upx;
				height: 100upx;
				.Text1{
					margin-left: 64upx;
					height: 36upx;
				}
				.Text2{
					height: 36upx;
					background: #000000;
					color: #fff;
				}
				.input{
					margin-left: 46upx;
					width: 150upx;
					height: 36upx;
				}
				.img{
					margin-left: 10upx;
					width: 36upx;
					height: 36upx;
				}
			}
		}
		.Query{
			.but{
				background: #5575B3;
			}
		}
	}
</style>
