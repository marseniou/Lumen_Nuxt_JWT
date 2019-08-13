<template>
	<p>Logging Out...</p>
</template>
<script>
	export default{
		created(){
			this.$auth.logout()
		}, 	
		data(){
			return {

			}
		}
	}
</script>