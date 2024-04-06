<template>
	<div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
		  </div>
		  <div class="modal-body">
			<slot></slot>
		  </div>
		  <!-- Tambahkan footer modal jika diperlukan -->
		  <div class="modal-footer">
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
			<button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	props: ['id', 'title'],
	methods: {
	  closeModal() {
		this.$emit('close');
	  },
	  saveChanges() {
		// Metode untuk menyimpan perubahan jika diperlukan
	  }
	}
  }
  </script>