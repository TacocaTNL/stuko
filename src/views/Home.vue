<template>
    <div class="container">
        <h2 class="mt-5">Home</h2>
        <div class="d-flex">
            <input type="text" placeholder="Search..." class="form-control">
        </div>
        <SongsList :songs="songs" />
    </div>
</template>

<script>
import SongsList from '../components/SongsList.vue'

export default {
    name: 'Home',
    components: {
        SongsList
    },
    data() {
        return {
            songs: []
        }
    },
    methods: {
        async fetchSongs() {
            const res = await fetch('api/songs');
            const data = await res.json();

            return data;
        }
    },
    async created() {
        this.songs = await this.fetchSongs()
    }
}
</script>