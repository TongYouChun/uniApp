<template>
	<view class="Model-container flex-column height background-F0F4F7">
		<view class="Choice flex font-30 color-8 space-around"> 
			<view class="li flex height align-items justify-content" :class="te1" @click="te">
				<text>全部</text>
			</view>
			<view class="li flex height align-items justify-content" :class="te2" @click="te">
				<text>18.9L</text>
			</view>
			<view class="li flex height align-items justify-content" :class="te3" @click="te">
				<text>4.5-5L</text>
			</view>
			<view class="li flex height align-items justify-content" :class="te4" @click="te">
				<text>其他</text>
			</view>
			
		</view>
		<view class="Product flex-column  background-f border-top border-bottom">
			<view class="product flex align-items space-between width-710 padding_10_14_0_26 border-bottom_dashed" @click="imgA">
				<view class="text flex align-items">
					<image class="img width-128 height-128 " src="../../../static/commodity.png" mode=""></image>
					<text class="font-30">18.9L雀巢优活包装饮用水</text>
				</view>
				<image class="imgs" src="../../../static/Choice.png" mode="" v-if="img1"></image>
			</view>
			<view class="product flex align-items space-between width-710 padding_10_14_0_26 border-bottom_dashed" @click="imgB">
				<view class="text flex align-items">
					<image class="img width-128 height-128 " src="../../../static/commodity.png" mode=""></image>
					<text class="font-30">18.9L雀巢优活包装饮用水</text>
				</view>
				<image class="imgs" src="../../../static/Choice.png" mode="" v-if="img2"></image>
			</view>
			<view class="product flex align-items space-between width-710 padding_10_14_0_26 " @click="imgC">
				<view class="text flex align-items">
					<image class="img width-128 height-128 " src="../../../static/commodity.png" mode=""></image>
					<text class="font-30">18.9L雀巢优活包装饮用水</text>
				</view>
				<image class="imgs" src="../../../static/Choice.png" mode="" v-if="img3"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img1:false,
				img2:false,
				img3:false,
				te1: '',
				te2: 'te',
				te3: '',
				te4: ''
			}
		},
		
		methods: {
			imgA () {	
				if(this.img1 === false) {
					this.img1 = true;
					this.img2 = false;
					this.img3 = false;
					uni.navigateTo({
						url: "/pages/My/commodity/addproduct?id=1&name=18.9L雀巢优活包装饮用水"
					})
				} else{
					this.img1 = false;
				}
			},
			imgB () {
				if(this.img2 === false) {
					this.img2 = true;
					this.img1 = false;
					this.img3 = false;
					uni.navigateTo({
						url: "/pages/My/commodity/addproduct?id=1&name=18.9L雀巢优活包装饮用水"
					})
				} else{
					this.img2 = false;
				}
			},
			imgC () {
				if(this.img3 === false) {
					this.img3 = true;
					this.img1 = false;
					this.img2 = false;
					uni.navigateTo({
						url: "/pages/My/commodity/addproduct?id=1&name=18.9L雀巢优活包装饮用水"
					})
				} else{
					this.img3 = false;
				}
			},
			te (e) {
				if (e._relatedInfo.anchorTargetText === '全部') {
					this.te1 = 'te';
					this.te2 = '';
					this.te3 = '';
					this.te4 = '';
				} else if(e._relatedInfo.anchorTargetText === '18.9L') {
					this.te1 = '';
					this.te2 = 'te';
					this.te3 = '';
					this.te4 = '';
				} else if(e._relatedInfo.anchorTargetText === '4.5-5L') {
					this.te1 = '';
					this.te2 = '';
					this.te3 = 'te';
					this.te4 = '';
				} else if(e._relatedInfo.anchorTargetText === '其他') {
					this.te1 = '';
					this.te2 = '';
					this.te3 = '';
					this.te4 = 'te';
				}
			}
		}
	}
</script>

<style lang="scss">
	.Model-container{
		.Choice{
			margin: 0 53upx;
			height: 87upx;
			.li{
				width: 87upx;
				text{
					height: 80upx;
					width: 87upx;
					line-height: 80upx;
					text-align: center;
					border-bottom: 4upx solid #F0F4F7;
				}
			}
			.te{
				text{
					color: #0E7EAB;
					border-bottom: 4upx solid #4591B6;
				}
			}
		}
		.Product{
			.product{
				height: 170upx;
				.imgs{
					width: 40upx;
					height: 40upx;
				}
				.text{
					.img{
						border: 1upx solid #D4D2D2;
						border-radius: 10upx;
					}
					text{
						margin-left: 44upx;
					}
				}
			}
		}
	}
</style>
