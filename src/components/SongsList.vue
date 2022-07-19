<template>
    <ol class="list-group text-start">
        <SongItem :key="song.id" v-for="song in songs" :song="song" />
    </ol>
</template>

<script>
import SongItem from './SongItem.vue'

export default {
    name: 'SongsList',
    props: {
        songs: Array
    },
    components: {
        SongItem,
    }
}
</script>