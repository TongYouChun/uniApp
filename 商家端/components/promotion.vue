<template>
	<view class="Promotion flex-column align-items">
			<image class="promotion" src="../../../static/Promotion.png" mode=""></image>
			<view class="promotion-top flex font-30">
				<text>红包飘飘</text>
				<text>生意兴隆</text>
			</view>
			<view class="promotion-bottom flex-column width-690 align-items">
				<view class="te flex">
					<text class="TexT font-36 color-0 font-700">红包设置</text>
					<image class="img" src="../../../static/leftBlack.png" mode=""></image>
					<image class="img" src="../../../static/orange.png" mode=""></image>
					<image class="img" src="../../../static/rightBlack.png" mode=""></image>
				</view>
				<view class="Content width-690 ">
					<view class="Kontent width-690 flex-column align-items background-f">
						<view class="content width-690 flex-column align-items" v-if="xingxi1">
							<view class="content-top flex align-items width-690">
								<image class="payoff" src="../../../static/payoff.png" mode=""></image>
								<input class="input" type="text" value="" name="Name" maxlength="6" placeholder="红包种类1"/>
								<view class="text flex justify-content align-items" @click="shanchu1">
									<text></text>
								</view>
							</view>
							<view class="li flex-column">
								<view class="Text1 flex">
									<text class="text font-30 color-0">红包金额</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="number" name="cash" value="" maxlength="5"/>
									</view>
									<text class="text font-30 color-0">元</text>
								</view>
								<view class="Text2 flex">
									<text class="text font-30 color-0">红包数量</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="Number" name="cash" value="" maxlength="2"/>
									</view>
									<text class="text font-30 color-0">个</text>
								</view>
								<view class="Text3 flex">
									<text class="text font-30 color-0">最低消费</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="number" name="minimum" value="" maxlength="5"/>
									</view>
									<text class="text font-30 color-0">元</text>
								</view>
								<view class="Text4 flex">
									<text class="text font-30 color-0">发放时间</text>
									<view class="TexT flex align-items justify-content">
										<picker mode="time" :value="time1" start="09:01" end="21:01" @change="bindTimeChange1">
											<view class="input font-60">{{time1}}</view>
										</picker>
									</view>
									<text class="text font-30 color-0">每日</text>
								</view>
							</view>
						</view>
						<view class="content width-690 flex-column align-items" v-if="xingxi2">
							<view class="content-top flex align-items width-690">
								<image class="payoff" src="../../../static/payoff.png" mode=""></image>
								<input class="input" type="text" value="" name="Name" maxlength="6" placeholder="红包种类2"/>
								<view class="text flex justify-content align-items" @click="shanchu2">
									<text></text>
								</view>
							</view>
							<view class="li flex-column">
								<view class="Text1 flex">
									<text class="text font-30 color-0">红包金额</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="number" name="cash" value="" maxlength="5"/>
									</view>
									<text class="text font-30 color-0">元</text>
								</view>
								<view class="Text2 flex">
									<text class="text font-30 color-0">红包数量</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="Number" name="cash" value="" maxlength="2"/>
									</view>
									<text class="text font-30 color-0">个</text>
								</view>
								<view class="Text3 flex">
									<text class="text font-30 color-0">最低消费</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="number" name="minimum" value="" maxlength="5"/>
									</view>
									<text class="text font-30 color-0">元</text>
								</view>
								<view class="Text4 flex">
									<text class="text font-30 color-0">发放时间</text>
									<view class="TexT flex align-items justify-content">
										<picker mode="time" :value="time2" start="09:01" end="21:01" @change="bindTimeChange2">
											<view class="input font-60">{{time2}}</view>
										</picker>
									</view>
									<text class="text font-30 color-0">每日</text>
								</view>
							</view>
						</view>
						<view class="content width-690 flex-column align-items" v-if="xingxi3">
							<view class="content-top flex align-items width-690">
								<image class="payoff" src="../../../static/payoff.png" mode=""></image>
								<input class="input" type="text" value="" name="Name" maxlength="6" placeholder="红包种类3"/>
								<view class="text flex justify-content align-items" @click="shanchu3">
									<text></text>
								</view>
							</view>
							<view class="li flex-column">
								<view class="Text1 flex">
									<text class="text font-30 color-0">红包金额</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="number" name="cash" value="" maxlength="5"/>
									</view>
									<text class="text font-30 color-0">元</text>
								</view>
								<view class="Text2 flex">
									<text class="text font-30 color-0">红包数量</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="Number" name="cash" value="" maxlength="2"/>
									</view>
									<text class="text font-30 color-0">个</text>
								</view>
								<view class="Text3 flex">
									<text class="text font-30 color-0">最低消费</text>
									<view class="TexT flex align-items justify-content">
										<input class="input font-60" type="number" name="minimum" value="" maxlength="5"/>
									</view>
									<text class="text font-30 color-0">元</text>
								</view>
								<view class="Text4 flex">
									<text class="text font-30 color-0">发放时间</text>
									<view class="TexT flex align-items justify-content">
										<picker mode="time" :value="time3" start="09:01" end="21:01" @change="bindTimeChange3">
											<view class="input font-60">{{time3}}</view>
										</picker>
									</view>
									<text class="text font-30 color-0">每日</text>
								</view>
							</view>
						</view>
						<view class="Plus flex align-items justify-content">
							<view class="plus" @click="tianjia">
								<view class="text"></view>
								<text></text>
							</view>
						</view>
						<view class="button font-36 color-0 font-600" >保存设置</view>
						<view class="TexT1 flex justify-content font-30">
							<checkbox-group>
							    <label>
									<checkbox class="checkbox " value="cb"/>同意免责声明
							   </label>
							</checkbox-group>
						</view>
						<view class="Tips width-690 flex-column align-items">
							<text class="Text1 font-30">温馨提示</text>
							<view class="Text2 width-690 flex-column font-30 color-0">
								<view class="texT1 flex">
									<text>1、</text>
									<text>红包用于支付时商品减免</text>
								</view>
								<view class="texT2 flex">
									<text> 2、</text>
									<text>每次限1枚</text>
								</view>
								<view class="texT3 flex">
									<text>3、</text>
									<text>每日限量红包，先抢先得</text>
								</view>
							</view>
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
				time1: '12:01',
				time2: '12:01',
				time3: '12:01',
				xingxi1: true,
				xingxi2: false,
				xingxi3: false,
			};
		},
		methods:{
			bindTimeChange1: function(e) {
				this.time1 = e.target.value
			},
			bindTimeChange2: function(e) {
				this.time2 = e.target.value
			},
			 bindTimeChange3: function(e) {
				this.time3 = e.target.value
			},
			shanchu1 () {
				this.xingxi1 = false
			},
			shanchu2 () {
				this.xingxi2 = false
			},
			shanchu3 () {
				this.xingxi3 = false
			},
			tianjia () {
				 if(this.xingxi1 === false){
				 	this.xingxi1 = true
				}else if (this.xingxi1 && this.xingxi2 === true) {
					this.xingxi3 = true
				}else if( this.xingxi1){
					this.xingxi2 = true
				} 
			}
		}
	}
</script>

<style lang="scss">
	.Promotion{
		position: relative;
		z-index: 0;
		.promotion{
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 750upx;
			height: 1370upx;
		}
		.promotion-top{
			margin-top: 376upx;
			color: #B60A08;
			text:nth-child(2){
				margin-left: 25upx;
			}
		}
		.promotion-bottom{
			margin-top: 144upx;
			position: relative;
			z-index: 0;
			.te{
				width: 552upx;
				height: 74upx;
				position: relative;
				.TexT{
					position: absolute;
					z-index: 0;
					top: 12upx;
					left: 188upx;
				}
				.img:nth-child(2){
					width: 32upx;
					height: 30upx;
				}
				.img:nth-child(3){
					width: 488upx;
					height: 74upx;
				}
				.img:nth-child(4){
					width: 32upx;
					height: 30upx;
				}
			}
			.Content{
				position: absolute;
				z-index: -1;
				top: 30upx;
				left: 0;
				.Kontent{
					border-radius: 20upx;
					margin-bottom: 50upx;
					.content{
						.payoff{
							margin-left: 185upx;
							width: 52upx;
							height: 60upx;
						}
						.content-top{
							height: 60upx;
							margin-top: 76upx;
							.input{
								margin: 0 130upx 0 30upx;
								font-size: 30upx;
								width: 200upx;
								color: #888;
							}
							.text:nth-child(3){
								width: 46upx;
								height: 46upx;
								background: #F95555;
								border-radius: 50%;
								text{
									width: 20upx;
									height: 4upx;
									background: #fff;
								}
							}
						}
						.li{
							width: 690upx;
							.Text1{
								height: 82upx;
								margin: 17upx 0 15upx 0;
								.text:nth-child(1){
									margin: 0 50upx 0 57upx;
									height: 82upx;
									line-height: 82upx;
								}
								.text:nth-child(3){
									margin-left: 20upx;
									height: 82upx;
									line-height: 82upx;
								}
								.TexT{
									color: #CB241B;
									height: 82upx;
									width: 293upx;
									border-bottom: 1upx solid #A6A6A6;
									.input{
										width: 200upx;
									}
								}
							}
							.Text2{
								height: 82upx;
								margin: 17upx 0 15upx 0;
								.text:nth-child(1){
									margin: 0 50upx 0 57upx;
									height: 82upx;
									line-height: 82upx;
								}
								.text:nth-child(3){
									margin-left: 20upx;
									height: 82upx;
									line-height: 82upx;
								}
								.TexT{
									color: #CB241B;
									height: 82upx;
									width: 293upx;
									border-bottom: 1upx solid #A6A6A6;
									.input{
										width: 200upx;
									}
								}
							}
							.Text3{
								height: 82upx;
								margin: 17upx 0 15upx 0;
								.text:nth-child(1){
									margin: 0 50upx 0 57upx;
									height: 82upx;
									line-height: 82upx;
								}
								.text:nth-child(3){
									margin-left: 20upx;
									height: 82upx;
									line-height: 82upx;
								}
								.TexT{
									color: #CB241B;
									height: 82upx;
									width: 293upx;
									border-bottom: 1upx solid #A6A6A6;
									.input{
										width: 200upx;
									}
								}
							}
							.Text4{
								height: 82upx;
								margin: 17upx 0 15upx 0;
								.text:nth-child(1){
									margin: 0 50upx 0 57upx;
									height: 82upx;
									line-height: 82upx;
								}
								.text:nth-child(3){
									margin-left: 20upx;
									height: 82upx;
									line-height: 82upx;
								}
								.TexT{
									color: #CB241B;
									height: 82upx;
									width: 293upx;
									border-bottom: 1upx solid #A6A6A6;
									.input{
										width: 200upx;
									}
								}
							}
												
						}
					}
					.Plus{
						margin-top: 44upx;
						width: 690upx;
						height: 46upx;
						.plus{
							width: 46upx;
							height: 46upx;
							border-radius: 50%;
							background: #4DD7AA;
							position: relative;
							.text{
								position: absolute;
								top:0;
								left: 0;
								bottom: 0;
								right: 0;
								margin: auto;
								width: 20upx;
								height: 4upx;
								background: #fff;
							}
							text{
								position: absolute;
								top:0;
								left: 0;
								bottom: 0;
								right: 0;
								margin: auto;
								width: 4upx;
								height: 20upx;
								background: #fff;
							}
						}
					}
					.button{
						margin: 78upx 0 50upx 0;
						text-align: center;
						line-height: 80upx;
						width: 400upx;
						height: 80upx;
						border-radius: 40upx;
						background:linear-gradient(0deg,rgba(255,154,99,1),rgba(255,187,121,1));
					}
					.TexT1{
						width: 100%;
						margin-bottom: 90upx;
						color: #0058BA;
					}
					.Tips{
						.Text1{
							margin-bottom: 20upx;
							color: #BA0908;
						}
						.Text2{
							margin-bottom: 66upx;
							.texT1{ margin-left: 75upx; }
							.texT2{ margin-left: 75upx; }
							.texT3{ margin-left: 75upx; }
						}
					}
				}
			}
		}
	}
	
</style>
