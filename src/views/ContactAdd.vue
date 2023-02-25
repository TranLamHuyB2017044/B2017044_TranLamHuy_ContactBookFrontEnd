<template>
    <div class="page">
        <h4>Thêm Mới Liên hệ</h4>
        <ContactForm
            @submit:contact="createContact"
            :contact = "contact"
         />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm,
    },

    data() {
        return {
            contact: {},
            message: '',
        };
    },
    methods: {
        async createContact(data){
            try {
                await ContactService.create(data);
                alert('Thêm liên hệ thành công.');
                this.$router.push({name: 'contactbook'});
            } catch (error) {
                console.log(error);
            }
        },

    },

};
</script>