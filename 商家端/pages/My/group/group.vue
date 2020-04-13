<template>
	<view class="Group flex-column height align-items background-F0F4F7">
		<view class="group flex width-710 background-f align-items" @click="Edit">
			<text class="font-28 color-FF6000">默认组</text>
		</view>
		<view class="group flex width-710 background-f align-items space-between" @click="Edit">
			<text class="font-28">组名称</text>
			<image class="im" src="../../../static/you1.png" mode=""></image>
		</view>
		<view class="group flex width-710 background-f align-items space-between" @click="Edit">
			<text class="font-28">组名称2</text>
			<image class="im" src="../../../static/you1.png" mode=""></image>
		</view>
		<view class="Bu">
			<button class="Establish width-710" type="primary" @click="Bu">创建组</button>
		</view>
		<view class="Explain flex-column align-items width-710 font-30 color-6">
			<text class="Text font-700 color-3">用户说明</text>
			<view class="text flex-column flex-column">
				<text>1、个性化的人员管理</text>
				<text>2、组具有 个性化的配送区域管理，便于提高效率</text>
				<text>3、组可以 个性化工作时间的管理，便于企业管理</text>
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
			Edit (e) {
				uni.navigateTo({
					url: "/pages/My/group/See"
				})
			},
			Bu () {
				uni.navigateTo({
					url: "/pages/My/group/Establish"
				})
			}
		}
	}
</script>

<style lang="scss">
	.Group{
		padding-top: 20upx;
		.group{
			margin-bottom: 26upx;
			height: 100upx;
			border: 1upx solid #A4B9C9;
			.im{
				margin-right: 30upx;
				width: 16upx;
				height: 26upx;
			}
			text{
				margin-left: 36upx;
			}
		}
		.Establish{
			color: #fff;
			height: 90upx;
			background: #18BA42;
			border-radius: 10upx;
		}
		.Explain{
			margin-top: 25upx;
			.Text{margin-bottom: 10upx;}
		}
	}
</style>
