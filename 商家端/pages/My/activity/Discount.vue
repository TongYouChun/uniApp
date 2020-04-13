<template>
	<view class="Discount flex-column">
		<image class="img" src="../../../static/festival1.png" mode=""></image>
		<view class="Discount-content flex-column align-items">
			<view class="te flex ">
				<text class="text font-36 color-0">折扣设置</text>
				<image class="ig" src="../../../static/leftBlack.png" mode=""></image>
				<image class="ig" src="../../../static/orange.png" mode=""></image>
				<image class="ig" src="../../../static/rightBlack.png" mode=""></image>
			</view>
			<view class="content flex-column align-items background-f width-690">
				<view class="Li flex align-items">
					<text class="font-30 color-0">折扣标题</text>
					 <textarea class="text1 font-30" maxlength="10"/>
				</view>
				<view class="Li flex align-items">
					<text class="font-30 color-0">折扣率</text>
					<textarea class="text1 font-30" maxlength="3" placeholder-style="color:#006CFF"  placeholder="请输入5.0-9.9 之间的数"/>
					<text class="font-30 color-FF6000">折</text>
				</view>
				<view class="TexT font-30 color-0">
					节日选择
				</view>
				
				<view class="Ul flex">
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival1"></image>
						<text class="font-30 color-0">春节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival2"></image>
						<text class="font-30 color-0">中秋节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival3"></image>
						<text class="font-30 color-0">端午节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival4"></image>
						<text class="font-30 color-0">儿童节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival5"></image>
						<text class="font-30 color-0">国庆节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival6"></image>
						<text class="font-30 color-0">38妇女节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival7"></image>
						<text class="font-30 color-0">七夕节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival8"></image>
						<text class="font-30 color-0">元旦</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival9"></image>
						<text class="font-30 color-0">重阳节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival10"></image>
						<text class="font-30 color-0">清明节</text>
					</view>
					<view class="li" @click="festival">
						<image class="AddTo" src="../../../static/AddTo.png" mode="" v-if="Festival11"></image>
						<text class="font-30 color-0">劳动节</text>
					</view>
				</view>
				
				<view class="Button">
					<button class="button" >保存设置</button>
				</view>
			
				<view class="group font-30">
					 <checkbox-group>
					     <label>
							<checkbox class="checkbox " value="cb"/>同意免责声明
					    </label>
					 </checkbox-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Festival1: false,
				Festival2: false,
				Festival3: false,
				Festival4: false,
				Festival5: false,
				Festival6: false,
				Festival7: false,
				Festival8: false,
				Festival9: false,
				Festival10: false,
				Festival11: false
				
			};
		},
		methods:{
			festival (e) {
				if(e._relatedInfo.anchorTargetText === "春节"){
					if(this.Festival1){
						this.Festival1 = false
					}else{
						this.Festival1 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "中秋节"){
					if(this.Festival2){
						this.Festival2 = false
					}else{
						this.Festival2 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "端午节"){
					if(this.Festival3){
						this.Festival3 = false
					}else{
						this.Festival3 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "儿童节"){
					if(this.Festival4){
						this.Festival4 = false
					}else{
						this.Festival4 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "国庆节"){
					if(this.Festival5){
						this.Festival5 = false
					}else{
						this.Festival5 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "38妇女节"){
					if(this.Festival6){
						this.Festival6 = false
					}else{
						this.Festival6 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "七夕节"){
					if(this.Festival7){
						this.Festival7 = false
					}else{
						this.Festival7 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "元旦"){
					if(this.Festival8){
						this.Festival8 = false
					}else{
						this.Festival8 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "重阳节"){
					if(this.Festival9){
						this.Festival9 = false
					}else{
						this.Festival9 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "清明节"){
					if(this.Festival10){
						this.Festival10 = false
					}else{
						this.Festival10 = true
					}
				}else if(e._relatedInfo.anchorTargetText === "劳动节"){
					if(this.Festival11){
						this.Festival11 = false
					}else{
						this.Festival11 = true
					}
				}
			 }
		}
	}
</script>

<style lang="scss">
	.Discount{
		position: relative;
		z-index: 0;
		padding-bottom: 40upx;
		background: #5713f9;
		.img{
			position: absolute;
			z-index: -1;
			width: 750upx;
			height: 1460upx;
			background: #5713f9;
		}
		.Discount-content{
			flex: 1;
			.te{
				position: relative;
				bottom: -44upx;
				width: 552upx;
				height: 74upx;
				position: relative;
				.text{
					position: absolute;
					z-index: 0;
					top: 12upx;
					left: 188upx;
				}
				.ig:nth-child(2){
					width: 32upx;
					height: 30upx;
				}
				.ig:nth-child(3){
					width: 488upx;
					height: 74upx;
				}
				.ig:nth-child(4){
					width: 32upx;
					height: 30upx;
				}
			}
			.content{
				padding-top: 87upx;
				border-radius: 20upx;
				.Li{
					width: 640upx;
					padding-left: 50upx;
					height: 80upx;
					margin-bottom: 18upx;
					text:nth-child(1){
						width: 135upx;
					}
					.text1{
						padding-top: 32upx;
						height: 44upx;
						width: 347upx;
						border-bottom: 2upx solid #A6A6A6;
					}
					text:nth-child(3){
						margin-left: 20upx;
					}
				}
				.TexT{
					width: 640upx;
					margin-left: 50upx;
					height: 102upx;
					line-height: 102upx;
				}
				.Ul{
					flex-wrap: wrap;
					width: 630upx;
					margin: 0 30upx;
					margin-bottom: 178upx;
					.li{
						margin: 0 13upx 18upx 13upx;
						height: 85upx;
						width: 180upx;
						border: 2upx solid #F44725;
						border-radius: 5upx;
						display: flex;
						align-items: center;
						justify-content: center;
						position: relative;
						.AddTo{
							position: absolute;
							z-index: 0;
							top: 0;
							left: 0;
							width: 44upx;
							height: 42upx;
						}
					}
				}
				.Button{
					margin-bottom: 45upx;
					.button{
						width: 400upx;
						background:linear-gradient(0deg,rgba(255,154,99,1),rgba(255,187,121,1));
						border-radius: 45upx;
					}
				}
				.group{
					color: #0058BA;
					padding-bottom: 85upx;
				}
			}
		}
	}
</style>
