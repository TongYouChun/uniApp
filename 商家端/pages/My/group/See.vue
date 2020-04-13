<template>
	<view class="See flex-column height background-F0F4F7 align-items">
		<view class="text1 font-30 width-710 flex-column">
			<text class="color-0 font-700 flex align-items">组名称</text>
			<view class="input flex align-items color-0">
				华瀚福园组
			</view>
		</view>
		<view class="text2 font-30 width-710 flex-column">
			<text class="color-0 font-700 flex align-items">配送范围 关键词</text>
			<view class="input flex color-0">
				华瀚福园、金泽家园、东坝中路
			</view>
		</view>
		<view class="text3 font-30 width-750 flex-column">
			<text class="tet color-0 font-700 flex align-items">配送时间</text>
			<view class="week flex align-items space-between width-750">
				<view class="text color-0">
					<text>周二</text>
					<text>~</text>
					<text>周六</text>
				</view>
			</view>
			<view class="time flex align-items space-between width-750">
				<view class="text color-0">
					<text>09:00</text>
					<text>~</text>
					<text>21:00</text>
				</view>
			</view>
		</view>
		<view class="edit">
			<button class="bu width-710" @click="Modify" >编辑</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		methods:{
			Modify () {
				uni.navigateTo({
					url: "/pages/My/group/modify"
				})
			}
		}
	}
</script>

<style lang="scss">
	.See{
		.text1{
			text{
				margin: 36upx 0 20upx 0;
				padding-left:22upx;
				height: 30upx;
				border-left: 8upx solid #00A1E4;
			}
			.input{
				height: 100upx;
				padding-left: 26upx;
				border-radius: 10upx;
				.textarea{
					
				}
			}
		}
		.text2{
			text{
				margin: 36upx 0 20upx 0;
				padding-left:22upx;
				height: 30upx;
				border-left: 8upx solid #00A1E4;
			}
			.input{
				height: 160upx;
				margin-top: 40upx;
				padding-left: 26upx;
				border-radius: 10upx;
				.textarea{
					width: 649upx;
					height: 110upx;
				}
			}
		}
		.text3{
			.tet{
				margin: 36upx 0 20upx 20upx;
				padding-left:22upx;
				height: 30upx;
				border-left: 8upx solid #00A1E4;
			}
			.week{
				height: 100upx;
				.text{
					text:nth-child(1){
						margin-left: 48upx;
					}
					text:nth-child(2){
						margin: 0 10upx;
					}
				}
				.img{
					margin-right: 28upx;
					width: 15upx;
					height: 26upx;
				}
			}
			.time{
				height: 100upx;
				.text{
					text:nth-child(1){
						margin-left: 48upx;
					}
					text:nth-child(2){
						margin: 0 10upx;
					}
				}
			}
		}
		.edit{
			.bu{
				margin-top: 35upx;
				background: #8DA4B6;
				color: #fff;
			}
		}
	}
</style>
