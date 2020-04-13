<template > 
	<view class="Establish flex-column height background-F0F4F7 align-items">
		<view class="text1 font-30 width-710 flex-column">
			<text class="color-0 font-700 flex align-items">组名称</text>
			<view class="input background-f flex align-items">
				<textarea class="textarea" placeholder-style="color:#00A8FF " auto-height="true" maxlength="10" placeholder="可以输入不超过10个汉字的长度"/>
			</view>
		</view>
		<view class="text2 font-30 width-710 flex-column">
			<text class="color-0 font-700 flex align-items">配送范围 关键词</text>
			<view class="input background-f flex align-items">
				<textarea class="textarea" placeholder-style="color:#00A8FF" maxlength="28" placeholder="可以输入不超过 28 个汉字的长度，关键词之间用 ”、“分割；例如“华瀚福园、金泽家园、东坝中路”"/>
			</view>
		</view>
		<view class="text3 font-30 width-750 flex-column">
			<text class="tet color-0 font-700 flex align-items">配送时间</text>
			<view class="week flex align-items space-between background-f width-750">
				<view class="text color-0 flex">
					<view class="Text">
						<picker @change="bindPickerChange1" :value="index1" :range="array">
						    <view>{{array[index1]}}</view>
						</picker>
					</view>
					<text>~</text>
					<view class="Text">
						<picker @change="bindPickerChange2" :value="index2" :range="array">
						    <view >{{array[index2]}}</view>
						</picker>
					</view>
				</view>
				<image class="img" src="../../../static/you1.png" mode=""></image>
			</view>
			<view class="time flex align-items space-between background-f width-750">
				<view class="text color-0 flex">
					<view class="Text">
						<picker mode="time" :value="time1" start="09:01" end="21:01" @change="bindTimeChange1">
						    <view>{{time1}}</view>
						</picker>
					</view>
					<text>~</text>
					<view class="Text">
						<picker mode="time" :value="time2" start="09:01" end="21:01" @change="bindTimeChange2">
						    <view>{{time2}}</view>
						</picker>
					</view>
				</view>
				<image class="img" src="../../../static/you1.png" mode=""></image>
			</view>
		</view>
		<view class="add font-30 width-710 flex align-items justify-content color-f">
			创建组
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['星期一', '星期二', '星期三', '星期四','星期五','星期六','星期日'],
				index1: 2,
				index2: 6,
				time1: '9:00',
				time2: '21:00'
			}
		},
		methods:{
			bindPickerChange1: function(e) {
				this.index1 = e.target.value
			},
			 bindPickerChange2: function(e) {
				this.index2 = e.target.value
			},
			bindTimeChange1: function(e) {
				this.time1 = e.target.value
			},
			bindTimeChange2: function(e) {
				this.time2 = e.target.value
			}
		}
	}
</script>

<style lang="scss">
	.Establish{
		.text1{
			text{
				margin: 36upx 0 20upx 0;
				padding-left:22upx;
				height: 30upx;
				border-left: 8upx solid #00A1E4;
			}
			.input{
				height: 100upx;
				border: 1upx solid #A4B9C9;
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
				height: 200upx;
				border: 1upx solid #A4B9C9;
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
				border-top: 1upx solid #A4B9C9;
				border-bottom: 1upx solid #A4B9C9;
				height: 100upx;
				.text{
					.Text:nth-child(1){
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
				border-bottom: 1upx solid #A4B9C9;
				height: 100upx;
				.text{
					.Text:nth-child(1){
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
		}
		.add{
			margin-top: 50upx;
			height: 90upx;
			background: #18BA42;
			border-radius: 10upx;
		}
	}
</style>
