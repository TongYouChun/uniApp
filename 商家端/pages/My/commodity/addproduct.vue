<template>
	<view class="Addroduct flex-column background-F0F4F7 height">
		<view class="text flex-column background-f padding_0_14_0_26">
			<view class="text1 flex border-bottom height-102 font-30 space-between align-items">
				<text class="color-6 margin-left_24">商品品牌 </text>
				<text class="color-0" @click="brand">{{Brand}}</text>
				<image class="you margin-right_10" src="../../../static/you1.png" mode=""></image>
			</view>
			<view class="text2 flex border-bottom height-102 font-30 space-between align-items">
				<text class="color-6 margin-left_24">商品型号</text>
				<text class="color-0" @click="Model">{{ime}}</text>
				<image class="you margin-right_10" src="../../../static/you1.png" mode=""></image>
			</view>
			<view class="text3 border-bottom  flex">
				<text class="text color-6 font-30">商品主图</text>
				<view class="Chart flex align-items justify-content">
					<view class="Img flex justify-content align-items" v-if="Img ? false : true" @click="Chart">
						<image class="ing" src="../../../static/tu.png" mode=""></image>
					</view>
					<image class="Ing" :src="image" mode="" v-if="Img ? true : false"></image>
				</view>
			</view>
			<view class="text4 flex align-items">
				<text class="color-6 font-30 width-120 margin-left_24">备注</text>
				<input class="input4 font-30 " type="text" value="" placeholder="可输入不超过11个汉字的长度" maxlength="11"/>
			</view>
			
		</view>
		
		<view class="text5 flex background-f space-between align-items padding_0_14_0_26">
			<text class="color-6 font-30 margin-left_24 width-120">零售价</text>
			<input class="input5 font-30 " type="text" value="" placeholder="输入零售价" maxlength="8"/>
			<view class="GuanFang flex-column margin-right_10 align-items">
				<text class="font-24 color-c1">官方指导价</text>
				<text class="font-30 color-0">￥30</text>
			</view>
		</view>
		<view class="text6 flex background-f space-between align-items padding_0_14_0_26">
			<text  class="color-6 font-30 margin-left_24 width-120">验证码</text>
			<input class="input6 font-30 " type="text" value="" placeholder="输入验证码" maxlength="4"/>
			<view class="YzanZheng flex align-items">
				<view class="canvas" :style="TheStyle">{{text}}</view>
				<image class="Load" src="../../../static/Load.png" mode="" @click="shuaxin"></image>
			</view>
		</view>
		<view class="text7 flex align-items justify-content" :class="Te">
			<text class="font-36 color-f">确定</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Te: '',
				text: '',
				TheStyle:{
					background: '',
					color: '',
					font: ''
				},
				Img: false,
				image: '',
				ime: '请选择',
				Brand: '农夫山泉'
			}
		},
		onLoad (options) {
			this.Te = "Te";
			this.ime = options.name;
			this.Brand = options.nane;
			this.drawPic();
		},
		methods: {
			shuaxin () {
				uni.redirectTo ({
					url:'/pages/My/commodity/addproduct'
				})
			},
			// 随机数
			randomNum(min, max) {
			  return Math.floor(Math.random() * (max - min) + min);
			},
			// 随机颜色
			randomColor(min, max) {
			  var r = this.randomNum(min, max);
			  var g = this.randomNum(min, max);
			  var b = this.randomNum(min, max);
			  return "rgba(" + r + "," + g + "," + b + ")";
			},
			/**绘制验证码图片**/
			drawPic () {
				this.TheStyle.background = this.randomColor(180, 240);
				var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
				for (var i = 0; i < 4; i++) {
					var txt = str[this.randomNum(0, str.length)];
					this.TheStyle.color = this.randomColor(50, 160); //随机生成字体颜色
					this.TheStyle.font = this.randomNum(20, 26) + 'px SimHei'; //随机生成字体大小
					var x = 5 + i * 20;
					var y = this.randomNum(20, 25);
					var deg =this.randomNum(-20, 20);
					this.text += txt;
				}
			},
			Chart () {
				var thts = this;
				uni.chooseImage({
					// count:  允许上传的照片数量
					count: 1,
					// sizeType:  original 原图，compressed 压缩图，默认二者都有
					sizeType: "original",
					success(res){
						thts.image = res.tempFilePaths,
						thts.Img = true
						
					} 
				});
			},
			brand () {
				uni.navigateTo({
					url: "/pages/My/commodity/brand"
				})
			},
			Model () {
				uni.navigateTo({
					url: "/pages/My/commodity/Model"
				})
			}
		}
	}
</script>

<style lang="scss">
	.Addroduct{
		.text{
			margin: 18upx 0 20upx 0;
			.text1{
				text:nth-child(2){
					width: 430upx;
				}
				.you{
					width: 15upx;
					height: 25upx;
				}
			}
			.text2{
				text:nth-child(2){
					width: 430upx;
				}
				.you{
					width: 15upx;
					height: 25upx;
				}
			}
			.text3{
				height: 400upx;
				.text:nth-child(1){
					margin: 36upx 0 0 24upx;
				}
				.Chart{
					flex: 1;
					.Img{
						width: 128upx;
						height: 110upx;
						border: 2upx dashed #CCC;
						border-radius: 10upx;
						.ing{
							width: 64upx;
							height: 55upx;
						}
					}
					.Ing{
						width: 333upx;
						height: 333upx;
					}
				}
			}
			.text4{
				height: 95upx;
				.input4{
					margin-left: 52upx;
					width: 450upx;
				}
			}
		}
		.text5{
			.input5{
				padding-right: 150upx;
				width: 180upx;
			}
		}
		.text6{
			margin: 18upx 0 35upx 0;
			height: 100upx;
			text:nth-child(1){
			}
			.input6{
				padding-right: 150upx;
				width: 150upx;
			}
			.YzanZheng{
				height: 50upx;
				 .canvas {
				    width: 90px;
				    height: 28px;
				    border-radius: 4px;
				 	text-align: center;
				 }
				.Load{
					margin: 0 20upx;
					height: 45upx;
					width: 45upx;
				}
			}
		}
		.text7{
			width: 710upx;
			height: 90upx;
			background: #BFE3C9;
			border-radius: 10upx;
			margin-left: 20upx;
		}
		.Te{
			background: #18BA42;
		}
	}
</style>
