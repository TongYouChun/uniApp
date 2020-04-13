<template>
	<view class="query-container">
		
		<view class="lookup">
			
			<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
				<view 
					v-for="(item,index) in tabBars" :key="item.id"
					class="nav-item"
					:class="{current: index === tabCurrentIndex}"
					:id="'tab'+index"
					@click="changeTab(index)"
				>{{item.name}}</view>
			</scroll-view>
			
			<text class="text"></text>
			<view class="search">
				<text class="TexT font-24">筛选</text>
				<image class="im" :src="search" mode=""></image>
			</view>
		</view>
		
		<view class="transaction">
			<transaction/>
		</view>
	</view>
</template>

<script>
	import mixAdvert from '@/components/mix-advert/vue/mix-advert';
	import json from '@/json'
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	import transaction from '../../../components/transaction.vue';
	let windowWidth = 0, scrollTimer = false, tabBar;
	export default {
		data() {
			return {
				search: '../../../static/xiabiao2.png',
				tabCurrentIndex: 0, //当前选项卡索引
				scrollLeft: 0, //顶部选项卡左滑距离
				enableScroll: true,
				tabBars: [],
			}
		},
		components:{
			transaction,
			mixPulldownRefresh,
			mixLoadMore,
			mixAdvert
		},
		computed: {
			advertNavUrl(){
				let data = {
					title: '测试跳转新闻详情',
					author: '测试作者',
					time: '2019-04-26 21:21'
				}
				return `/pages/details/details?data=${JSON.stringify(data)}`;
			} 
		},
		async onLoad() {
			// 获取屏幕宽度
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.loadTabbars();
		},
		onReady(){
			
			this.$refs.mixAdvert.initAdvert();
		},
		methods: {
			loadTabbars(){
				let tabList = json.tabList;
				tabList.forEach(item=>{
					item.newsList = [];
					item.loadMoreStatus = 0;  //加载更多 0加载前，1加载中，2没有更多了
					item.refreshing = 0;
				})
				this.tabBars = tabList;
				this.loadNewsList('add');
			},
			//新闻列表
			loadNewsList(type){
				let tabItem = this.tabBars[this.tabCurrentIndex];
				
				//type add 加载更多 refresh下拉刷新
				if(type === 'add'){
					if(tabItem.loadMoreStatus === 2){
						return;
					}
					tabItem.loadMoreStatus = 1;
				}
				// #ifdef APP-PLUS
				else if(type === 'refresh'){
					tabItem.refreshing = true;
				}
				// #endif
				
				//setTimeout模拟异步请求数据
				setTimeout(()=>{
					let list = json.newsList;
					list.sort((a,b)=>{
						return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
					})
					if(type === 'refresh'){
						tabItem.newsList = []; //刷新前清空数组
					}
					list.forEach(item=>{
						item.id = parseInt(Math.random() * 10000);
						tabItem.newsList.push(item);
					})
					//下拉刷新 关闭刷新动画
					if(type === 'refresh'){
						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
						// #ifdef APP-PLUS
						tabItem.refreshing = false;
						// #endif
						tabItem.loadMoreStatus = 0;
					}
					//上滑加载 处理状态
					if(type === 'add'){
						tabItem.loadMoreStatus = tabItem.newsList.length > 40 ? 2: 0;
					}
				}, 600)
			
			},
			
			//tab切换
			async changeTab(e){
				if(scrollTimer){
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if(typeof e === 'object'){
					index = e.detail.current
				}
				if(typeof tabBar !== 'object'){
					tabBar = await this.getElSize("nav-bar")
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0; 
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if(i === index){
						nowWidth = result.width;
					}
				}
				if(typeof e === 'number'){
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index; 
				}
				
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(()=>{
					if (width - nowWidth/2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth/2 - windowWidth / 2;
					}else{
						this.scrollLeft = 0;
					}
					if(typeof e === 'object'){
						this.tabCurrentIndex = index; 
					}
					this.tabCurrentIndex = index; 
					
					
					//第一次切换tab，动画结束后需要加载数据
					let tabItem = this.tabBars[this.tabCurrentIndex];
					if(this.tabCurrentIndex !== 0 && tabItem.loaded !== true){
						this.loadNewsList('add');
						tabItem.loaded = true;
					}
				}, 300)
				
			},
			//获得元素的size
			getElSize(id) { 
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
						size: true,
						scrollOffset: true,
						rect: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
		}
	}
</script>

<style lang="scss">
	.query-container{
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #F0F4F7;
		.lookup{
			width: 100%;
			height: 104upx;
			display: flex;
			background: #f9f9f9;
			align-items: center;
			.nav-bar{
				position: relative;
				z-index: 10;
				height: 104upx;
				width: 600upx;
				white-space: nowrap;
				box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
				.nav-item{
					display: inline-block;
					width: 150upx;
					height: 104upx;
					text-align: center;
					line-height: 104upx;
					font-size: 30upx;
					color: #8f8e93;
					position: relative;
					&:after{
						content: '';
						width: 0;
						height: 0;
						border-bottom: 4upx solid #007aff;
						position: absolute;
						left: 50%;
						bottom: 0;
						transform: translateX(-50%);
						transition: .3s;
					}
				}
				.current{
					color: #303133;
					&:after{
						width: 50%;
					}
				}
			}
			.text{
				width: 1upx;
				height: 56upx;
				background: #C0C0C0;
			}
			.search{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.TexT{
					color: #8f8e93;
				}
				.im{
					margin-top: 10upx;
					width: 30upx;
					height: 15upx;
				}
			}
		}
		.transaction{
			flex: 1;
			width: 100%;
			overflow-y: auto;
		}
	}
</style>
