<template>
    <ol class="list-group text-start">
        <SongItem :key="song.id" v-for="song in filterByTerm.sort((a, b) => (a.title > b.title) ? 1 : -1)" :song="song" />
    </ol>
</template>

<script>
import SongItem from './SongItem.vue'

export default {
    name: 'SongsList',
    props: {
        songs: Array,
        searchTerm: String
    },
    components: {
        SongItem,
    },
    computed: {
        filterByTerm() {
            return this.songs.filter(song => {
                return song.title.toLowerCase().includes(this.searchTerm);
            });
        }
    }
}
</script>