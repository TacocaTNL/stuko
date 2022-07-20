<template>
    <router-link :to="{name: 'Lyrics', params: {songId: song.id}}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">{{song.title}}</div>
            <span :key="index" v-for="(artist, index) in song.artists">
            {{nameWithComma(index)}}
            </span>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'SongItem',
    props: {
        song: Object
    },
    methods: {
        nameWithComma(index){
            if (index !== this.song.artists.length-1) {
                return `${this.song.artists[index]}, `
            } else {
                return this.song.artists[index]
            }
        }
    }
}
</script>