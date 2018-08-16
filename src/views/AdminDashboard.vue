<template>
    <div>
        <navbar />
        Hello World
    </div>
</template>
<script>
const navbar = () => import('@/components/Navbar.vue');

export default {
    name: 'AdminDashboard',
    components: {
        navbar
    }
}
</script>

