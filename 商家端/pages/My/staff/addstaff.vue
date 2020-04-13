<template>
	<view class="addstaff flex-column height background-F0F4F7 ">
		<form @submit="formSubmit" @reset="formReset" class="flex-column">
			<view class="information flex-column font-30 background-f align-items">
				<view class="text1 flex space-between space-between width-710 align-items margin_0_14_0_26 border-bottom">
					<view class="teut flex align-items">
						<image class="igs" src="../../../static/red.png" mode=""></image>
						<text class="color-6 te">所在组</text>
						<text class="color-0">花黄富园、金泽家园、</text>
					</view>
					<image class="imgs" src="../../../static/you1.png" mode=""></image>
				</view>
				<view class="text2 flex width-710 align-items margin_0_14_0_26 border-bottom">
					<image class="igs" src="../../../static/red.png" mode=""></image>
					<text class="color-6 te">人员姓名</text>
					<input class="input font-30" type="text" value="" placeholder="输入姓名"/>
				</view>
				<view class="text2 flex width-710 align-items margin_0_14_0_26 border-bottom">
					<image class="igs" src="../../../static/red.png" mode=""></image>
					<text class="color-6 te">联系电话</text>
					<input class="input font-30" type="text" maxlength="11" value="" placeholder="11位手机号"/>
				</view>
				<view class="text2 flex width-710 align-items margin_0_14_0_26 ">
					<image class="igs" src="../../../static/red.png" mode=""></image>
					<text class="color-6 te">性别</text>
					<view class="radio">
						<radio-group name="radio" class=" flex space-around">
						    <label>
						        <radio value="radio1"  checked="true" /><text>男</text>
						    </label>
						    <label>
						        <radio value="radio2" /><text>女</text>
						    </label>
						</radio-group>
					</view>
				</view>
			</view>
			<view class="WeChat flex space-between align-items background-f font-30 color-6">
				<view class="text flex">
					<text>关联微信</text>
				</view>
				<view class="scanning flex align-items" @click="tel()">
					<text>扫码 添加</text>
					<image class="ims" src="../../../static/scanning.png" mode=""></image>
				</view>
			</view>
			<view class="button">
				<button class="add height-90 width-710 flex justify-content align-items color-f" :class="Te" form-type="submit">添加人员</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Te: '',
				complete1: false,
				complete2: false,
				complete3: false,
				complete4: false
			}
		},
		onLoad () {
			this.Te = 'Te'
		},
		methods:{
			formSubmit (e) {
				console.log(JSON.stringify(e.detail.value))
			},
			tel () {
				uni.scanCode({
					success:function(res){
				     	console.log(res.result)
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.addstaff{
		.information{
			width: 100%;
			.igs{
				margin-right: 10upx;
				width: 13upx;
				height: 12upx;
			}
			.imgs{
				margin-right: 10upx;
				width: 16upx;
				height: 26upx;
			}
			.text1{
				height: 96upx;
				.teut{
					.te{
						margin-right: 46upx;
						width: 130upx;
					}
				}
			}
			.text2{
				height: 100upx;
				.te{
					margin-right: 46upx;
					width: 130upx;
				}
				.radio{
					width: 250upx;
					
				}
				.input{
					width: 250upx;
					height: 100upx;
				}
			}
		}
		.WeChat{
			margin: 20upx 0 50upx 0;
			padding: 0 40upx;
			height: 100upx;
			.text{
				
			}
			.scanning{
				.ims{
					margin-left: 30upx;
					width: 70upx;
					height: 64upx;
				}
			}
		}
		.add{
			margin-left: 20upx;
			background: #BFE3C9;
			border-radius: 10upx;
		}
		.Te{
			background: #18BA42;
		}
	}
</style>
