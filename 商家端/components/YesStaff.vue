<template>
	<view class="YesStaff flex-column align-items height width-750">
		<image class="Yes" src="../../../static/YesStaff.png" mode=""></image>
		<view class="Add  width-750 flex space-between">
			<text></text>
			<view class="add flex align-items justify-content background-f" @click="add">
				<image class="im" src="../../../static/add.png" mode=""></image>
				<text class="font-30 color-18BA42 font-600">添加人员</text>
			</view>
		</view>
		<view class="Content flex-column width-750">
			<view class="Content-container flex-column ">
				<view class="group flex space-between background-f align-items padding_0_14_0_26 border_b_A6A6A6">
					<view class="text font-24 color-0 font-700">
						工作组A
					</view>
					<view class="OFF-ON flex font-18 background-F0F4F7 space-around align-items">
						<text :class="tes" @click="off"></text>
						<text class="color-BFC3C6 justify-content align-items" v-if="OFF" @click="on">OFF</text>
						<text class="te color-f flex justify-content align-items" v-if="ON" @click="on">ON</text>
					</view>
				</view>
				<view class="container background-f">
					<view class="content flex">
						<image class="igs" src="../../../static/business.png" mode=""></image>
						<view class="text flex-column">
							<text class="font-36 color-0">包龙星</text>
							<text class="font-28 color-8">186 1341 2341</text>
						</view>
					</view>
					<view class="diary flex-column align-items background-F0F4F7 " v-if="diary">
						<view class="text1 flex font-24 color-0 space-around">
							<text>周一</text>
							<text>周二</text>
							<text>周三</text>
							<text>周四</text>
							<text>周五</text>
							<text class="color-f00">周六</text>
							<text class="color-f00">周日</text>
						</view>
						<view class="text2 flex font-24 color-0 space-around">
							<text>24</text>
							<text>25</text>
							<text>26</text>
							<text>27</text>
							<text>28</text>
							<text>29</text>
							<text>30</text>
						</view>
						<view class="text3 flex font-24 color-0 space-around align-items border-bottom">
							<view class="li flex justify-content align-items" @click="DaKa1">
								<image class="text" src="../../../static/sign.png" mode="" v-if="Daka1 ? false : true"></image>
								<text class="text" v-if="Daka1 ? true: false">休息</text>
							</view>
							<view class="li flex justify-content align-items" @click="DaKa2">
								<image class="text" src="../../../static/sign.png" mode="" v-if="Daka2 ? false : true"></image>
								<text class="text" v-if="Daka2 ? true: false">休息</text>
							</view>
							<view class="li flex justify-content align-items" @click="DaKa3">
								<image class="text" src="../../../static/sign.png" mode="" v-if="Daka3 ? false : true"></image>
								<text class="text" v-if="Daka3 ? true: false">休息</text>
							</view>
							<view class="li flex justify-content align-items" @click="DaKa4">
								<image class="text" src="../../../static/sign.png" mode="" v-if="Daka4 ? false : true"></image>
								<text class="text" v-if="Daka4 ? true: false">休息</text>
							</view>
							<view class="li flex justify-content align-items" @click="DaKa5">
								<image class="text" src="../../../static/sign.png" mode="" v-if="Daka5 ? false : true"></image>
								<text class="text" v-if="Daka5 ? true: false">休息</text>
							</view>
							<view class="li flex justify-content align-items" @click="DaKa6">
								<image class="text" src="../../../static/sign.png" mode="" v-if="Daka6 ? false : true"></image>
								<text class="text" v-if="Daka6 ? true: false">休息</text>
							</view>
							<view class="li flex justify-content align-items" @click="DaKa7">
								<image class="text" src="../../../static/sign.png" mode="" v-if="Daka7 ? false : true"></image>
								<text class="text" v-if="Daka7 ? true: false">休息</text>
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
				tes: 'tes',
				OFF: true,
				ON: false,
				diary: false,
				Daka1: false,
				Daka2: false,
				Daka3: false,
				Daka4: false,
				Daka5: true,
				Daka6: false,
				Daka7: false
			};
		},
		methods:{
			DaKa1 () {
				if (this.Daka1 === true){
					this.Daka1 = false
				} else{
					this.Daka1 = true
				}
			},
			DaKa2 () {
				if (this.Daka2 === true){
					this.Daka2 = false
				} else{
					this.Daka2 = true
				}
			},
			DaKa3 () {
				if (this.Daka3 === true){
					this.Daka3 = false
				} else{
					this.Daka3 = true
				}
			},
			DaKa4 () {
				if (this.Daka4 === true){
					this.Daka4 = false
				} else{
					this.Daka4 = true
				}
			},
			DaKa5 () {
				if (this.Daka5 === true){
					this.Daka5 = false
				} else{
					this.Daka5 = true
				}
			},
			DaKa6 () {
				if (this.Daka6 === true){
					this.Daka6 = false
				} else{
					this.Daka6 = true
				}
			},
			DaKa7 () {
				if (this.Daka7 === true){
					this.Daka7 = false
				} else{
					this.Daka7 = true
				}
			},
			add () {
				uni.navigateTo({
					url: "/pages/My/staff/addstaff"
				})
			},
			off () {
				this.tes = 'tes';
				this.OFF = true;
				this.ON = false;
				this.diary = false;
			},
			on () {
				this.tes = '';
				this.OFF = false;
				this.ON = true;
				this.diary = true;
			}
		}
	}
</script>

<style lang="scss">
	.YesStaff{
		position: relative;
		flex: 1;
		z-index: 0;
		.Yes{
			z-index: -1;
			position: absolute;
			top: 0;
			left: 0;
			width: 750upx;
			height: 267upx;
		}
		.Add{
			height: 70upx;
			margin: 38upx 20upx 25upx 0;
			.add{
				width: 200upx;
				height: 70upx;
				border: 2upx solid #18BA42;
				border-radius: 10upx;
				.im{
					margin-right: 10upx;
					height: 27upx;
					width: 27upx;
				}
			}
		}
		.Content{
			.Content-container{
				margin-bottom: 20upx;
				.group{
					height: 82upx;
					.OFF-ON{
						width: 92upx;
						height: 46upx;
						border-radius: 23upx;
						text{
							height: 40upx;
							width: 40upx;
							border-radius: 50%;
						}
						.tes{
							background: #fff;
						}
						text:nth-child(2){
							line-height: 40upx;
							text-align: center;
						}
						.te{
							background: #18BA42;
						}
					}
				}
				.container{
					.content{
						.igs{
							margin: 30upx 50upx 30upx 42upx;
							width: 98upx;
							height: 98upx;
							border-radius: 50%;
						}
						.text{
							margin-top: 24upx;
							text:nth-child(1){
								margin-bottom: 16upx;
							}
						}
					}
					.diary{
						text{
							width: 100upx;
							text-align: center;
						}
						.text1{
							padding:0 25upx;
							line-height: 50upx;
							height: 50upx;
						}
						.text2{
							padding:0 25upx;
							height: 50upx;
							line-height: 50upx;
							background: #D9F3FF;
						}
						.text3{
							padding:0 25upx;
							height: 50upx;
							background: #fff;
							.li{
								width: 100upx;
								.text{
									color: #8D8D8D;
								}
								image{
									width: 24upx;
									height: 24upx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
