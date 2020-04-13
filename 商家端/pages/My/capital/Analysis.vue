<template>
	<view class="Analysis flex-column background-F0F4F7 height align-items">
		<view class="Analysis-top flex align-items">
			<image class="im" src="../../../static/Analysis.png" mode=""></image>
			<view class="text font-30 color-f">
				<text>积少成多</text>
				<text>创财富新高度</text>
			</view>
		</view>
		<view class="Analysis-bottom width-710">
			<view class="option font-28 color-6 flex width-710 align-items space-around">
				<text :class="te1" @click="Choice">日收益</text>
				<text :class="te2" @click="Choice">月收益</text>
				<text :class="te3" @click="Choice">年收益</text>
				<text :class="te4" @click="Choice">累计收益</text>
			</view>
			<view class="Analysis-content flex-column">
				<view class="day" v-if="Profit ?true:false ">
					<block v-for="(item, index) in arr" :key="index">
							<uCharts :scroll="item.opts.enableScroll" :show="canvas" :canvasId="item.id" :chartType="item.chartType" :extraType="item.extraType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
					</block>
				</view>
				<view class="Cumulative" v-if="Profit ?false:true ">
					<block v-for="(item, index) in are" :key="index">
							<uCharts :scroll="item.opts.enableScroll" :show="canvas" :canvasId="item.id" :chartType="item.chartType" :extraType="item.extraType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.vue';
	import crt from '@/components/u-charts/js/chartsUtil.js';
	export default {
		data() {
			return {
				canvas: true,
				cWidth:'',
				cHeight:'',
				arr: [],
				are: [],
				
				Profit: true,
				te1: 'te',
				te2: '',
				te3: '',
				te4: ''
			};
		},
		components: { uCharts },
		onLoad(e) {
			this.init()
		},
		onReady() {
		},
		methods:{
			init(){
				this.cWidth=uni.upx2px(710);
				this.cHeight=uni.upx2px(400);
				this.getServerData();
			},
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
					var serData = [{
						title:'',
						btn:[],
						opts: Column,
						chartType: "area",
						extraType: "curve",
						id: "c1"
					}]
					var serverData = [{
						title:'',
						btn:[],
						opts: Column,
						chartType: "column",
						extraType: "stack",
						id: "c4"
					}];
					this.are = serData;
					this.arr = serverData;
				// 	return
				// }
				// this.$api.tip("网络错误，小程序端请检查合法域名");
			},
			Choice (e) {
				if(e._relatedInfo.anchorTargetText === "日收益") {
					this.te1 = 'te',
					this.te2 = '',
					this.te3 = '',
					this.te4 = '',
					this.Profit = true
				} else if(e._relatedInfo.anchorTargetText === "月收益"){
					this.te1 = '',
					this.te2 = 'te',
					this.te3 = '',
					this.te4 = '',
					this.Profit = true
				}else if(e._relatedInfo.anchorTargetText === "年收益"){
					this.te1 = '',
					this.te2 = '',
					this.te3 = 'te',
					this.te4 = '',
					this.Profit = true
				}else if(e._relatedInfo.anchorTargetText === "累计收益"){
					this.te1 = '',
					this.te2 = '',
					this.te3 = '',
					this.te4 = 'te',
					this.Profit = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.Analysis{
		.Analysis-top{
			margin: 28upx 0;
			position: relative;
			z-index: 0;
			width: 710upx;
			height: 150upx;
			.im{
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				width: 710upx;
				height: 150upx;
			}
			.text{
				margin-left: 42upx;
				text:nth-child(2){
					margin: 20upx;
				}
			}
		}
		.Analysis-bottom{
			.option{
				margin-bottom: 20upx;
				height: 62upx;
				text{
					text-align: center;
					height: 62upx;
					line-height: 62upx;
					width: 110upx;
				}
				.te{
					color: #5575B3;
					border-bottom: 5upx solid #5575B3;
				}
			}
			.Analysis-content{
				border-radius: 10upx;
				width: 710upx;
				height: 870upx;
				background: #fff;
				.day{
					margin-top: 400upx;
				}
				.Cumulative{
					margin-top: 400upx;
				}
			}
		}
	}
</style>
