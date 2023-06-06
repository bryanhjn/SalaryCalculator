<template>
	<view class="content">
		<image class="logo" src="/static/head.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<button @click="getCalendar()">获取日历</button>
			<view v-if="calendarJson.status == 0">{{calendarJson.data[0].almanac}}</view>
			<view>
				<button>获取环境</button>
				环境：{{env}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我的小程序跑起来辣！',
				calendarJson: {},
				env: ''
			}
		},
		onLoad() {
			// import constant from '@/utils/constant.js'
			// console.log('constVar:', constVar)

		},
		methods: {
			getCalendar() {
				var currentDate = new Date();
				var yearAndMonth = currentDate.getFullYear() + "年" + (currentDate.getMonth() + 2) + "月";
				console.log('yearAndMonth:', yearAndMonth)
				uni.request({
					url: "https://opendata.baidu.com/api.php?query=" + yearAndMonth +
						"&resource_id=39043&format=json&tn=wisetpl",
					header: {
						'Access-Control-Allow-Origin': '*'
					},
					success: (result) => {
						console.log('result:', result.data)
						this.calendarJson = result.data
					}
				})
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
		border-radius: 25%;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>