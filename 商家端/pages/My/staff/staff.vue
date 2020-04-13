<template>
	<view class="staff flex-column height align-items background-F0F4F7">
		<Nostaff v-if="NoStaff"></Nostaff>
		<YesStaff></YesStaff>
	</view>
</template>

<script>
	import Nostaff from '../../../components/Nostaff.vue';
	import YesStaff from '../../../components/YesStaff.vue'
	export default {
		data() {
			return {
				NoStaff:false
			}
		},
		components:{
			Nostaff,
			YesStaff
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
