<template>
	<view class="Complaint flex-column align-items">
		<view class="h4 width-710 flex-column justify-content">
			<view class="TexT font-30 flex">
				<view class="text flex-column" :class="te1">
					<text @click="Handle">未处理</text>
				</view>
				<view class="text flex-column" :class="te2">
					<text @click="Handle">已处理</text>
				</view>
			</view>
		</view>
		<view class="Complaint-content flex-column" v-if="handle? true :false">
			<view class="Complaint-container flex-column width-710">
				<view class="time font-30 color-6">
					2019 08 21
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT4 flex align-items space-between">
						<view class="Text1 flex-column">
							<view class="text1">
								<text class="font-24 color-6">投诉时间</text>
								<text class="font-24 color-6">17:31:31</text>
							</view>
							<view class="text2">
								<text class="font-24 color-6">处置完成</text>
								<text class="font-24 color-6">20:33:43</text>
								<text class="font-24 color-6">（2019 08 22）</text>
							</view>
						</view>
						<view class="Text2 flex justify-content align-items">
							<text class="font-28">详情</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT4 flex align-items space-between">
						<view class="Text1 flex-column">
							<view class="text1">
								<text class="font-24 color-6">投诉时间</text>
								<text class="font-24 color-6">17:31:31</text>
							</view>
							<view class="text2">
								<text class="font-24 color-6">处置完成</text>
								<text class="font-24 color-6">20:33:43</text>
								<text class="font-24 color-6">（2019 08 22）</text>
							</view>
						</view>
						<view class="Text2 flex justify-content align-items">
							<text class="font-28">详情</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT4 flex align-items space-between">
						<view class="Text1 flex-column">
							<view class="text1">
								<text class="font-24 color-6">投诉时间</text>
								<text class="font-24 color-6">17:31:31</text>
							</view>
							<view class="text2">
								<text class="font-24 color-6">处置完成</text>
								<text class="font-24 color-6">20:33:43</text>
								<text class="font-24 color-6">（2019 08 22）</text>
							</view>
						</view>
						<view class="Text2 flex justify-content align-items">
							<text class="font-28">详情</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT4 flex align-items space-between">
						<view class="Text1 flex-column">
							<view class="text1">
								<text class="font-24 color-6">投诉时间</text>
								<text class="font-24 color-6">17:31:31</text>
							</view>
							<view class="text2">
								<text class="font-24 color-6">处置完成</text>
								<text class="font-24 color-6">20:33:43</text>
								<text class="font-24 color-6">（2019 08 22）</text>
							</view>
						</view>
						<view class="Text2 flex justify-content align-items">
							<text class="font-28">详情</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="Complaint-content flex-column" v-if="handle? false :true">
			<view class="Complaint-container flex-column width-710">
				<view class="time font-30 color-6">
					2019 08 21
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f" @click="ToProcess">去处理</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f" @click="ToProcess">去处理</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f" @click="ToProcess">去处理</text>
						</view>
					</view>
				</view>
			</view>
			<view class="Complaint-container flex-column width-710">
				<view class="time font-30 color-6">
					2019 08 21
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f">去处理</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f">去处理</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f">去处理</text>
						</view>
					</view>
				</view>
			</view>
			<view class="Complaint-container flex-column width-710">
				<view class="time font-30 color-6">
					2019 08 21
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f">去处理</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f">去处理</text>
						</view>
					</view>
				</view>
				<view class="information background-f flex-column">
					<view class="TexT1 flex color-6 align-items">
						<text class=" font-24">TS-190821F01</text>
						<text class=" font-24">订单编号：</text>
					</view>
					<view class="TexT2 flex">
						<view class="Text1 flex-column align-items">
							<image class="itg" src="../../static/business.png" mode=""></image>
							<text class="font-24 color-6">张女士</text>
						</view>
						<view class="Text2 flex-column">
							<text class="font-24 color-6">投诉分类：配送问题</text>
							<text class="font-30 color-0">送水不及时，还得老娘等了一下午没来，你们想咋样</text>
						</view>
					</view>
					<view class="TexT3 flex space-between align-items">
						<view class="Text1">
							<text class="font-24 color-6">投诉时间</text>
							<text class="font-24 color-6">17:31:31</text>
						</view>
						<view class="Text2 flex">
							<text class="font-28">关闭</text>
							<text class="font-28 color-f">去处理</text>
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
				handle: false,
				te1: 'te',
				te2: ''
			};
		},
		methods:{
			ToProcess () {
				uni.navigateTo({
					url: "/pages/Statistics/Complaint/Complaint"
				})
			},
			Handle (e) {
				if(e._relatedInfo.anchorTargetText === '未处理'){
					this.te1 = 'te',
					this.te2 = '',
					this.handle = false
				} else if(e._relatedInfo.anchorTargetText === '已处理') {
					this.te1 = '',
					this.te2 = 'te',
					this.handle = true
				}
			}
		}
	}
</script>

<style lang="scss">
	.Complaint{
		.h4{
			height: 98upx;
			.TexT{
				.text{
					margin-right: 20upx;
					width: 200upx;
					height: 66upx;
					text:nth-child(1){
						width: 200upx;
						height: 60upx;
						text-align: center;
						line-height: 60upx;
						background: #CCE0EC;
						border-radius: 5upx;
						color: #575757;
					}
				}
				.te{
					width: 200upx;
					height: 66upx;
					text:nth-child(1){
						width: 200upx;
						height: 66upx;
						background: url(../static/BlueBox.png) no-repeat center;
						background-size: 200upx 66upx;
						color: #fff;
					}
					
				}
			}
		}
		.Complaint-container{
			.time{
				margin-left: 16upx;
				line-height: 24upx;
				margin: 10upx 0 10upx 16upx;
			}
			.information{
				border: 1upx solid #D0DAE1;
				border-radius: 10upx;
				margin-bottom: 18upx;
				.TexT1{
					flex-direction: row-reverse;
					height: 62upx;
					text{
						line-height: 24upx;
					}
					text:nth-child(1){
						margin-right: 26upx;
					}
					text:nth-child(2){
						margin-right: 10upx;
					}
				}
				.TexT2{
					.itg{
						width: 80upx;
						height: 78upx;
						border-radius: 50%;
					}
					.Text1{
						margin: 0 28upx 0 24upx;
						width: 80upx;
						text:nth-child(2){
							line-height: 24upx;
							margin-top: 17upx;
							margin-bottom: 50upx;
						}
					}
					.Text2{
						text:nth-child(1){
							line-height: 24upx;
							margin-bottom: 18upx;
						}
					}
				}
				.TexT3{
					margin: 0 20upx;
					border-top: 1upx solid #C9D6E0;
					height: 108upx;
					.Text1{
						text:nth-child(2){
							margin-left: 28upx;
						}
					}
					.Text2{
						text{
							width: 148upx;
							height: 60upx;
							border-radius: 30upx;
						}
						text:nth-child(1){
							text-align: center;
							line-height: 60upx;
							border: 1upx solid #ccc;
						}
						text:nth-child(2){
							margin-left: 27upx;
							text-align: center;
							line-height: 60upx;
							background: #FF5B5B;
						}
					}
				}
				.TexT4{
					margin: 0 20upx;
					border-top: 1upx solid #C9D6E0;
					height: 108upx;
					.Text1{
						height: 66upx;
						.text1{
							height: 24upx;
							line-height: 24upx;
							text:nth-child(2){
								margin-left: 28upx;
							}
						}
						.text2{
							height: 24upx;
							line-height: 24upx;
							margin-top: 18upx;
							text:nth-child(2){
								margin-left: 28upx;
							}
							text:nth-child(3){
								margin-left: 28upx;
							}
						}
					}
					.Text2{
						width: 148upx;
						height: 60upx;
						border: 1upx solid #CCCCCC;
						border-radius: 30upx;
						text{
							color: #242424;
						}
					}
				}
			}
		}
	}
</style>
