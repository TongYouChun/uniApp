<template>
	<view class="Follow flex-column">
		<view class="follow flex-column align-items">
			<image class="img" src="../../../static/Follow.png" mode=""></image>
			<view class="Follow-content flex-column align-items">
				<view class="chart flex">
					<image class="ig" src="../../../static/payoff1.png" mode=""></image>
					<view class="Text flex">
						<text class="text font-36 color-0 font-700">红包设置</text>
						<image class="ing" src="../../../static/leftBlack.png" mode=""></image>
						<image class="ing" src="../../../static/orange.png" mode=""></image>
						<image class="ing" src="../../../static/rightBlack.png" mode=""></image>
					</view>
				</view>
				<view class="SetUp width-690 flex-column align-items background-f">
					<form @submit="formSubmit" @reset="formReset"  class="flex-column align-items">
						<view class="text1 flex width-690 align-items">
							<text class="Text1 font-30 color-0">首次关注</text>
							<view class="TexT flex justify-content align-items">
								<input class="Input" name="follow"/>
							</view>
							<text class="font-30 color-0">元</text>
						</view>
						<view class="text2 flex width-690 align-items">
							<text class="Text1 font-30 color-0">分享获得</text>
							<view class="TexT flex justify-content align-items">
								<input class="Input" name="share"/>
							</view>
							<text class="font-30 color-0">元</text>
						</view>
						<view class="button font-36 flex justify-content align-items">
							<button class="Button" form-type="submit">保存设置</button>
						</view>
						<checkbox-group class="Agree font-30 flex justify-content">
							<label>
								<checkbox value="OK" name="Preservation"/>同意免责声明
							</label>
						</checkbox-group>
					</form>
					<view class="Tips flex-column width-690 align-items">
						<text class="Text font-30">温馨提示</text>
						<view class="TexT font-30 color-0 width-690">
							<text>1、</text>
							<text>首次关注店铺的用户可以获得1张红包；</text>
						</view>
						<view class="TexT font-30 color-0 width-690">
							<text>2、</text>
							<text>同时发起分享的用户也可获得1份奖励；</text>
						</view>
						<view class="TexT font-30 color-0 width-690">
							<text>3、</text>
							<text> 每次订单只可以使用 1 枚 红包</text>
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
				
			};
		},
		methods:{
			formSubmit (e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.Follow{
		padding-bottom: 40upx;
		background: #ffcc00;
		.follow{
			position: relative;
			z-index: 0;
			flex: 1;
			overflow-y: auto;
			background: #ffcc00;
			.img{
				position: absolute;
				z-index: -1;
				width: 750upx;
				height: 1446upx;
			}
			
			.Follow-content{
				
				.chart{
					position: relative;
					bottom: -46upx;
					margin-top: 510upx;
					margin-left: 12upx;
					width: 750upx;
					height: 125upx;
					.ig{
						position: relative;
						z-index: 1;
						width: 102upx;
						height: 125upx;
					}
					.Text{
						margin-top: 50upx;
						height: 74upx;
						position: relative;
						left: -15upx;
						z-index: 0;
						.text{
							position: absolute;
							z-index: 0;
							height: 74upx;
							line-height: 74upx;
							margin-left: 190upx;
						}
						.ing:nth-child(2){
							width: 32upx;
							height: 30upx;
						}
						.ing:nth-child(3){
							width: 488upx;
							height: 74upx;
						}
						.ing:nth-child(4){
							width: 32upx;
							height: 30upx;
						}
					}
				}
				.SetUp{
					border-radius: 20upx;
					padding-top: 80upx;
					.text1{
						border-bottom: 22upx;
						height: 90upx;
						.Text1{
							margin: 0 22upx 0 60upx;
						}
						.TexT{
							color: #CB241B;
							height: 88upx;
							border-bottom: 2upx solid #A6A6A6;
							width: 293upx;
							.Input{
								margin-left: 5upx;
								font: 60upx/48upx "";
								width: 105upx;
								
							}
						}
					
					}
					.text2{
						border-bottom: 22upx;
						height: 90upx;
						.Text1{
							margin: 0 22upx 0 60upx;
						}
						.TexT{
							color: #CB241B;
							height: 88upx;
							border-bottom: 2upx solid #A6A6A6;
							width: 293upx;
							.Input{
								margin-left: 5upx;
								font: 60upx/48upx "";
								width: 105upx;
								
							}
						}
					
					}
					.button{
						margin: 70upx 0 45upx 0;
						.Button{
							width:400upx;
							height:80upx;
							background:linear-gradient(0deg,rgba(255,154,99,1),rgba(255,187,121,1));
							border-radius: 40upx;
							line-height: 80upx;
						}
					}
					.Agree{
						color: #0058BA;
						margin-bottom: 65upx;
					}
					.Tips{
						margin-bottom: 50upx;
						.Text{
							color: #BA0908;
							margin-bottom: 24upx;
						}
						.TexT{
							text:nth-child(1){
								margin-left: 56upx;
							}
							text:nth-child(2){
							}
						}
					}
				}
			
			}
		}
		
	}
</style>
