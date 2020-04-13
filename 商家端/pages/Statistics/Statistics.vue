<template>
	<view class="Statistics height flex-column background-F0F4F7">
		<view class="Statistics-top flex space-around align-items border-bottom border-top">
			<view class="li flex-column font-30 color-6 align-items" :class="te1" @click="selector">
				<text>效率</text>
				<text></text>
			</view>
			<view class="li flex-column font-30 color-6 align-items" :class="te4" @click="selector">
				<text>销量</text>
				<text></text>
			</view>
			<view class="li flex-column font-30 color-6 align-items" :class="te3" @click="selector">
				<text>评论</text>
				<text></text>
			</view>
			<view class="li flex-column font-30 color-6 align-items" :class="te2" @click="selector">
				<text>投诉</text>
				<text></text>
			</view>
			
			
			<view class="TexT flex align-items justify-content">
				<picker @change="bindPickerChange" :value="index" :range="array">
				    <view class="font-30 color-6" :class="text">
						{{array[index]}}
					</view>
				</picker>
			</view>
		</view>
		<view class="Statistics-content flex-column flex-overflow">
			<!-- 效率 -->
			<view class="content flex-column align-items" v-if="efficiency">
				<view class="TexT width-710 flex align-items">
					<text class="font-30">配送效率</text>
				</view>
				<view class="Data flex-column">
					<view class="data width-710 flex space-between background-f">
						<view class="TexT1 flex">
							<image class="ig" src="../../static/DeliveryClerk.png" mode=""></image>
							<view class="text flex-column">
								<text class="font-24 color-8">配送员</text>
								<text class="font-36 color-0">田小光</text>
							</view>
						</view>
						<view class="TexT2 flex-column">
							<text class="font-30 color-f00">优秀</text>
							<text class="font-30 color-0">186 1345 8662</text>
						</view>
					</view>
					<view class="Statistics width-710 flex">
						<view class="container">
							<block class="block" v-for="(item, index) in arr" :key="index">
									<uCharts class="Charts" :scroll="item.opts.enableScroll" :show="canvas" :canvasId="item.id" :chartType="item.chartType" :extraType="item.extraType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
							</block>
						</view>
					</view>
				</view>
			
			</view>
			<!-- 销量 -->
			<view class="Sales_volume" v-if="SalesVolume">
				<view class="volume">
					<block class="block" v-for="(item, index) in are" :key="index" >
							<uCharts class="Charts" :scroll="item.opts.enableScroll" :show="canvas" :canvasId="item.id" :chartType="item.chartType" :extraType="item.extraType" :cWidth="uWidth" :cHeight="uHeight" :opts="item.opts" :ref="item.id"/>
					</block>
				</view>
			</view>
			<Complaint v-if="Complaint"></Complaint>
			<evaluate v-if="evaluate"></evaluate>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.vue';
	import crt from '@/components/u-charts/js/chartsUtil.js';
	import Complaint from '../../components/Complaint.vue';
	import evaluate from '../../components/evaluate.vue'
	export default {
		data() {
			return {
				array: ['一月', '二月', '三月', '四月','五月','六月','七月', '八月', '九月', '十月','十一月','十二月'],
				index: 1,
				text: '',
				//统计图
				canvas: true,
				cWidth:'',
				cHeight:'',
				uWidth:'',
				uHeight:'',
				arr: [],
				are: [],
				
				efficiency: true,
				evaluate: false,
				Complaint: false,
				SalesVolume: false,
				te1: 'te',
				te2: '',
				te3: '',
				te4: ''
			}
		},
		components:{
			Complaint,
			evaluate,
			uCharts
		},
		onLoad(e) {
			this.init()
		},
		onReady() {
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.target.value;
				this.text = 'text'
			},
			//统计图
			init(){
				this.cWidth=uni.upx2px(710);
				this.cHeight=uni.upx2px(400);
				this.uWidth=uni.upx2px(750);
				this.uHeight=uni.upx2px(600);
				this.getServerData();
				// this.query()
			},
			// query(){
			// 	// this.findFamilyQYByList()
			// },
			// jump(url, title='',to=3) {
			// 	// this.$api.jump(url,title,to)
			// },
			// change(idx,type,etype){
			// 	this.$refs[this.arr[idx].id][0].changeData(this.arr[idx].id,this.arr[idx].opts,type,etype)
			// },
			// async findFamilyQYByList() {
			// 	var data={
			// 		loading: true,
			// 		url:this.HostURL + this.serviceSRV,
			// 		data:{
			// 			p_service: 'familySjService',
			// 			p_method: 'findFamilyQYByTotalList',
			// 			startTime: this.startTime,
			// 			endTime: this.endTime,
			// 			regcodes: this.divisionCode[0],
			// 			pageNo: 1, // 1-第几页
			// 			pageSize: 10, // 10-每页记录条数
			// 			token: this.token,
			// 		}
			// 	}
			// 	var res=await this.$api.get(data)
			// 	var result=this.$api.ErrTip(res)
			// 	if (result&&result.list) {
			// 		var Column={type:'column',categories:[],series:[{name:'户数',data:[]}]}//柱状图
			// 		result.list.forEach((e)=>{
			// 			if(e.name&&e.cnt){
			// 				Column.categories.push(e.name);
			// 				Column.series[0].data.push(e.cnt);
			// 			}
			// 		})
			// 		this.$refs[this.arr[2].id][0].changeData(this.arr[2].id,Column,'column','group')
			// 	}
			// },
			async getServerData() {
				var sample=crt.getSampleData()
				// var data={loading: true,url:'https://www.ucharts.cn/data.json'}
				// var res=await this.$api.get(data)
				// var result=this.$api.ErrTip(res)
				// if (result&&result.data) {
					var LineA = { enableScroll:false, unit: '单' }
					LineA.categories = sample.LineA.categories//result.data.LineA.categories
					LineA.series = sample.LineA.series//result.data.LineA.series
					var LineB={rotate:false, enableScroll:false, unit: '单' }
					// LineB.extra={line:{width:10}}
					LineB.categories = sample.LineB.categories//result.data.LineB.categories
					LineB.series = sample.LineB.series//result.data.LineB.series
					var Column={ enableScroll:false, unit: '单' }
					Column.categories = sample.ColumnB.categories//result.data.ColumnB.categories
					Column.series = sample.ColumnB.series//result.data.ColumnB.series
					var ColumnMeter = { enableScroll:false, unit: '' }
					ColumnMeter.categories = sample.ColumnMeter.categories//result.data.ColumnMeter.categories
					ColumnMeter.series = sample.ColumnMeter.series//result.data.ColumnMeter.series
					var serData =[{
						group:'',
						title:'',
						btn:[],
						opts: sample.Pie,//result.data.Pie,
						chartType: "ring",
						id: "c5"
					}];
					var serverData = [{
						title:'',
						btn:[],
						opts: Column,
						chartType: "column",
						extraType: "stack",
						id: "c1"
					}];
					this.are = serData;
					this.arr = serverData;
				// 	return
				// }
				// this.$api.tip("网络错误，小程序端请检查合法域名");
			},
			
			selector (e) {
				if(e._relatedInfo.anchorTargetText === '效率') {
					this.te1 = 'te',
					this.te2 = '',
					this.te3 = '',
					this.te4 = '',
					this.text = '',
					this.efficiency = true,
					this.evaluate = false,
					this.Complaint = false,
					this.SalesVolume = false
				} else if(e._relatedInfo.anchorTargetText === '投诉') {
					this.te1 = '',
					this.te2 = 'te',
					this.te3 = '',
					this.te4 = '',
					this.text = '',
					this.efficiency = false,
					this.evaluate = false,
					this.SalesVolume = false,
					this.Complaint = true
				}else if(e._relatedInfo.anchorTargetText === '评论') {
					this.te1 = '',
					this.te2 = '',
					this.te3 = 'te',
					this.te4 = '',
					this.text = '',
					this.efficiency = false,
					this.evaluate = true,
					this.SalesVolume = false,
					this.Complaint = false
				}else if(e._relatedInfo.anchorTargetText === '销量') {
					this.te1 = '',
					this.te2 = '',
					this.te3 = '',
					this.te4 = 'te',
					this.text = '',
					this.efficiency = false,
					this.evaluate = false,
					this.SalesVolume = true,
					this.Complaint = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.Statistics{
		.Statistics-top{
			background: #fff;
			height: 110upx;
			.li{
				width: 64upx;
				height: 110upx;
				text:nth-child(1){
					height: 106upx;
					line-height: 106upx;
				}
				text:nth-child(2){
					height: 4upx;
					width: 52upx;
				}
			}
			.te{
				text:nth-child(1){
					color: #000000;
					font-weight:700;
				}
				text:nth-child(2){
					background: #1790D6;
				}
			}
			.TexT{
				width: 148upx;
				height: 80upx;
				border-radius: 40upx;
				background: #F0F4F7;
				.text{
					color: #1790D6;
				}
			}
		}
		.Statistics-content{
			.content{
				.TexT{
					height: 78upx;
					text{
						margin-left: 26upx;
						color: #4E5763;
					}
				}
				.Data{
					.data{
						height: 150upx;
						border-radius: 10upx 10upx 0 0;
						.TexT1{
							margin: 37upx 0 0 39upx;
							.ig{
								margin-right: 28upx;
								width: 85upx;
								height: 83upx;
								border-radius: 50%;
							}
							.text{
								text:nth-child(2){
									margin-top: 10upx;
								}
							}
						}
						.TexT2{
							margin: 20upx 46upx 0 0;
							text:nth-child(1){
								text-align: right;
							}
							text:nth-child(2){
								margin-top: 30upx;
							}
						}
					}
					.Statistics{
						height: 400upx;
						background: #fff;
						border-top: 1upx solid #B3B9BE;
						.container{
							.block{
							}
						}
					}
				}
			}
			.Sales_volume{
				background: #fff;
				height: 100%;
				.volume{
					margin-top: 100px;
				}
			}
		}
	}
</style>
